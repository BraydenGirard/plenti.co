/* generated by Svelte v3.23.2 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from '/spa/web_modules/svelte/internal/index.js';

function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");

			div.innerHTML = `<h1>Oops... 404 not found</h1> 
    <a href="/">Go home?</a>`;

			attr(div, "class", "container");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;