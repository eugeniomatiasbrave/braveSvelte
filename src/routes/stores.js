import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const start = new Date();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));
