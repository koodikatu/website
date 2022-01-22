import type { EndpointOutput, RequestHandler } from '@sveltejs/kit';
import { pipe } from 'fp-ts/lib/function';
import * as TE from 'fp-ts/TaskEither';
import * as t from 'io-ts';
import { decodingError, telegramError } from '$utils/errors';
import dotenv from 'dotenv';
import { handleRequest } from '$utils/api';
import { txLog } from '$utils/logging';

dotenv.config();

const MessageBody = t.type({
	name: t.string,
	email: t.union([t.string, t.undefined]),
	message: t.string
});

type Message = t.TypeOf<typeof MessageBody>;

const escapedCharacaters = {
	_: null,
	'*': null,
	'[': null,
	']': null,
	'(': null,
	')': null,
	'~': null,
	'`': null,
	'>': null,
	'#': null,
	'+': null,
	'-': null,
	'=': null,
	'|': null,
	'{': null,
	'}': null,
	'.': null,
	'!': null
};

const escape = (str: string) =>
	Object.keys(escapedCharacaters).reduce((acc, key) => acc.replaceAll(key, `\\${key}`), str);

export const post: RequestHandler = async (req): Promise<EndpointOutput> => {
	const telegramToken = process.env['PREVIEW']
		? process.env['PREVIEW_TELEGRAM_TOKEN']
		: process.env['TELEGRAM_TOKEN'];

	const chatId = process.env['PREVIEW']
		? process.env['PREVIEW_TELEGRAM_CHAT_ID']
		: process.env['TELEGRAM_CHAT_ID'];

	const sendMessage = ({ name, email, message }: Message) =>
		TE.tryCatch(async () => {
			const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: chatId,
					parse_mode: 'MarkdownV2',
					text: `*${escape(name)}* has tried to reach you\\. \nMessage: ${escape(message)} \n\n${
						email ? 'You can contact them back at ' + escape(email) : ''
					}`
				})
			});

			if (!response.ok) {
				throw new Error(
					`Status code: ${response.status}. Reason: ${JSON.stringify(
						(await response.json()).description
					)}`
				);
			}

			return { success: response.ok };
		}, telegramError('Something went wrong while sending the message'));

	const task = () =>
		pipe(
			MessageBody.decode(req.body),
			TE.fromEither,
			TE.mapLeft(decodingError('Invalid message provided')),
			txLog(() => `Sending message to Koodikatu`),
			TE.chainW(sendMessage)
		);

	return handleRequest(task);
};
