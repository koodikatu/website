import * as TE from 'fp-ts/TaskEither';

export const txLog = <T>(fn: (item: T) => string) => {
	return TE.map<T, T>((item) => {
		console.debug(fn(item));
		return item;
	});
};
