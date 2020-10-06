/* generated by Svelte v3.23.2 */
import {
	SvelteComponent,
	claim_component,
	create_component,
	destroy_component,
	init,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out
} from '/spa/web_modules/svelte/internal/index.js';

import Navaid from '/spa/web_modules/navaid/dist/navaid.js';
import contentSource from "./content.js";
import Html from '/spa/ejected/../global/html.js';

function create_fragment(ctx) {
	let html;
	let current;

	html = new Html({
			props: {
				route: /*route*/ ctx[0],
				content: /*content*/ ctx[1],
				allContent: /*allContent*/ ctx[2]
			}
		});

	return {
		c() {
			create_component(html.$$.fragment);
		},
		l(nodes) {
			claim_component(html.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(html, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const html_changes = {};
			if (dirty & /*route*/ 1) html_changes.route = /*route*/ ctx[0];
			if (dirty & /*content*/ 2) html_changes.content = /*content*/ ctx[1];
			if (dirty & /*allContent*/ 4) html_changes.allContent = /*allContent*/ ctx[2];
			html.$set(html_changes);
		},
		i(local) {
			if (current) return;
			transition_in(html.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(html.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(html, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let route, content, allContent;

	const getContent = (uri, trailingSlash = "") => {
		return contentSource.find(content => content.path + trailingSlash == uri);
	};

	let uri = location.pathname;
	content = getContent(uri);

	if (content === undefined) {
		content = getContent(uri, "/");
	}

	allContent = contentSource;

	function draw(m) {
		$$invalidate(1, content = getContent(uri));

		if (content === undefined) {
			// Check if there is a 404 data source.
			$$invalidate(1, content = getContent("/404"));

			if (content === undefined) {
				// If no 404.json data source exists, pass placeholder values.
				$$invalidate(1, content = {
					"path": "/404",
					"type": "404",
					"filename": "404.json",
					"fields": {}
				});
			}
		}

		$$invalidate(0, route = m.default);
		window.scrollTo(0, 0);
	}

	function track(obj) {
		uri = obj.state || obj.uri;
	}

	addEventListener("replacestate", track);
	addEventListener("pushstate", track);
	addEventListener("popstate", track);

	const handle404 = () => {
		import("../content/404.js").then(draw).catch(err => {
			console.log("Add a '/layout/content/404.svelte' file to handle Page Not Found errors.");
			console.log("If you want to pass data to your 404 component, you can also add a '/content/404.json' file.");
			console.log(err);
		});
	};

	const router = Navaid("/", handle404);

	allContent.forEach(content => {
		router.on(content.path, () => {
			// Check if the url visited ends in a trailing slash (besides the homepage).
			if (uri.length > 1 && uri.slice(-1) == "/") {
				// Redirect to the same path without the trailing slash.
				router.route(content.path, false);
			} else {
				import("../content/" + content.type + ".js").then(draw).catch(handle404);
			}
		});
	});

	router.listen();
	return [route, content, allContent];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;