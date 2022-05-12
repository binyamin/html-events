export function handle(
	event: keyof HTMLElementEventMap,
	selector: keyof HTMLElementTagNameMap,
	listener: EventListenerOrEventListenerObject
): void;

export const on: Record<
	| 'click'
	| 'change'
	| 'input'
	| 'blur'
	| 'submit'
	| 'keyup'
	| 'focus'
,
	(
		selector: keyof HTMLElementTagNameMap,
		listener: EventListenerOrEventListenerObject
	) => void
>;
