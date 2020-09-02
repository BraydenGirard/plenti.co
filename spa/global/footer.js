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

import { makeTitle } from '/spa/global/../scripts/make_title.js';

function create_fragment(ctx) {
	let footer;

	return {
		c() {
			footer = element("footer");

			footer.innerHTML = `<div class="container svelte-1v9u363"><section id="plentico" class="svelte-1v9u363"><strong class="svelte-1v9u363">Plentico</strong> 
      <div><a href="/about" class="svelte-1v9u363">About</a></div> 
      <div><a href="/contact" class="svelte-1v9u363">Contact</a></div></section> 
    <section id="products" class="svelte-1v9u363"><strong class="svelte-1v9u363">Products</strong> 
      <div><a href="https://github.com/plentico/plenti" class="svelte-1v9u363">Plenti</a></div> 
      <div><a href="https://plentiform.com" class="svelte-1v9u363">Plentiform</a></div></section> 
    <section id="resources" class="svelte-1v9u363"><strong class="svelte-1v9u363">Resources</strong> 
      <div><a href="/docs" class="svelte-1v9u363">Documentation</a></div> 
      <div><a href="/themes" class="svelte-1v9u363">Themes</a></div> 
      <div><a href="/download" class="svelte-1v9u363">Download</a></div></section> 
    <section id="copyright" class="svelte-1v9u363"><div id="social" class="svelte-1v9u363"><a href="https://twitter.com/jantcutech" class="svelte-1v9u363"><img src="/assets/social/twitter.svg"></a><a href="https://youtube.com/jantcu" class="svelte-1v9u363"><img src="/assets/social/youtube.svg"></a><a href="https://github.com/plentico/plenti" class="svelte-1v9u363"><img src="/assets/social/github.svg"></a></div> 
      <div id="copyright">© Plentico 2020</div> 
      <a href="https://jantcu.com" class="svelte-1v9u363">By Jantcu LLC</a></section></div>`;

			attr(footer, "class", "svelte-1v9u363");
		},
		m(target, anchor) {
			insert(target, footer, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(footer);
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