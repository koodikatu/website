import type { EndpointOutput } from '@sveltejs/kit';
import { type PipelineErrors, ErrorType } from './errors';
import type * as TE from 'fp-ts/TaskEither';
import * as E from 'fp-ts/Either';
import { HttpStatusCode } from '$types/api';

export const handleRequest = <T>(
	asyncTask: () => TE.TaskEither<PipelineErrors, T>
): Promise<EndpointOutput> => {
	const promise = asyncTask()();
	return promise.then(
		E.fold(
			(e) => {
				console.error(`(${ErrorType[e.type]}) ${e.message} ${e.reason}`);
				return {
					status: e.httpStatusCode ?? HttpStatusCode.INTERNAL_ERROR,
					body: JSON.stringify(e)
				};
			},
			(data) => ({
				status: HttpStatusCode.SUCCESS,
				body: JSON.stringify(data)
			})
		)
	);
};
