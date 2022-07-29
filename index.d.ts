export function handle(
	event: keyof HTMLElementEventMap,
	selector: keyof HTMLElementTagNameMap,
	listener: EventListenerOrEventListenerObject,
): void;
export function handle(
	event: keyof HTMLElementEventMap,
	selector: string,
	listener: EventListenerOrEventListenerObject,
): void;

interface OnHandler {
	(
		selector: keyof HTMLElementTagNameMap,
		listener: EventListenerOrEventListenerObject,
	): void;
	(selector: string, listener: EventListenerOrEventListenerObject): void;
}

export const on: Record<
	| 'click'
	| 'change'
	| 'input'
	| 'blur'
	| 'submit'
	| 'keyup'
	| 'focus',
	OnHandler
>;
