/**
 * @type {import("./index.d.ts").handle}
 */
export function handle(event, selector, listener) {
	const nodes = document.querySelectorAll(selector);
	for (const node of Object.values(nodes)) {
		node.addEventListener(event, listener);
	}
}

/**
 * @type {keyof HTMLElementEventMap}
 */
const eventSubset = [
	'click',
	'change',
	'input',
	'blur',
	'submit',
	'keyup',
	'focus',
];

const on = {};
for (const event of eventSubset) {
	on[event] = (selector, listener) => {
		handle(event, selector, listener);
	};
}

export { on };
