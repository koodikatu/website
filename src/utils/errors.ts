import { HttpStatusCode } from '$types/api';
import type * as t from 'io-ts';

export enum ErrorType {
	InternalError,
	TelegramError,
	DecodingError
}

export type PipelineError<T extends ErrorType> = {
	type: T;
	message: string;
	tag?: string;
	httpStatusCode?: number;
	reason: T extends ErrorType.DecodingError ? Record<string, string> : string;
};

type DecodingErrorMessage = {
	key: string;
	expected: string;
	received?: unknown;
};

const errorType =
	<T extends ErrorType>(type: T, status: number) =>
	(message: string) =>
	(reason?: unknown) => ({
		type,
		message,
		reason: String(reason),
		httpStatusCode: status
	});

export type PipelineErrors = InternalError | TelegramError | DecodingError;
export type InternalError = PipelineError<ErrorType.InternalError>;
export const InternalError = errorType(ErrorType.InternalError, HttpStatusCode.INTERNAL_ERROR);
export type TelegramError = PipelineError<ErrorType.TelegramError>;
export const telegramError = errorType(ErrorType.TelegramError, HttpStatusCode.INTERNAL_ERROR);
export type DecodingError = PipelineError<ErrorType.DecodingError>;
export const decodingError =
	(message: string) =>
	(reasons: t.Errors): DecodingError => ({
		type: ErrorType.DecodingError,
		message,
		reason: reasons.reduce((acc, reason) => {
			const errors: DecodingErrorMessage[] = reason.context
				.filter((c) => c.key.length > 0)
				.reduce((acc2: DecodingErrorMessage[], err) => {
					acc2.push({ key: err.key, expected: err.type.name, received: err.actual });
					return acc2;
				}, []);

			errors.forEach(({ key, ...rest }) => (acc[key] = rest));
			return acc;
		}, {}),
		httpStatusCode: HttpStatusCode.BAD_REQUEST
	});
