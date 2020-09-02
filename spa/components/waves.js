/* generated by Svelte v3.23.2 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	svg_element,
	xlink_attr
} from '/spa/web_modules/svelte/internal/index.js';

function create_fragment(ctx) {
	let svg;
	let defs;
	let path;
	let g;
	let use0;
	let use1;
	let use2;
	let use3;

	return {
		c() {
			svg = svg_element("svg");
			defs = svg_element("defs");
			path = svg_element("path");
			g = svg_element("g");
			use0 = svg_element("use");
			use1 = svg_element("use");
			use2 = svg_element("use");
			use3 = svg_element("use");
			attr(path, "id", "gentle-wave");
			attr(path, "d", "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z");
			xlink_attr(use0, "xlink:href", "#gentle-wave");
			attr(use0, "x", "48");
			attr(use0, "y", "0");
			attr(use0, "fill", "rgba(34,166,237,0.7");
			attr(use0, "class", "svelte-abkzi");
			xlink_attr(use1, "xlink:href", "#gentle-wave");
			attr(use1, "x", "48");
			attr(use1, "y", "3");
			attr(use1, "fill", "rgba(34,166,237,0.5)");
			attr(use1, "class", "svelte-abkzi");
			xlink_attr(use2, "xlink:href", "#gentle-wave");
			attr(use2, "x", "48");
			attr(use2, "y", "5");
			attr(use2, "fill", "rgba(34,166,237,0.3)");
			attr(use2, "class", "svelte-abkzi");
			xlink_attr(use3, "xlink:href", "#gentle-wave");
			attr(use3, "x", "48");
			attr(use3, "y", "7");
			attr(use3, "fill", "rgba(34,166,237,0)");
			attr(use3, "class", "svelte-abkzi");
			attr(g, "class", "parallax svelte-abkzi");
			attr(svg, "class", "waves svelte-abkzi");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
			attr(svg, "viewBox", "0 24 150 28");
			attr(svg, "preserveAspectRatio", "none");
			attr(svg, "shape-rendering", "auto");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, defs);
			append(defs, path);
			append(svg, g);
			append(g, use0);
			append(g, use1);
			append(g, use2);
			append(g, use3);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
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