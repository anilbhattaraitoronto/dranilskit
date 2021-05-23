const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/termsandconditions.svelte"),
	() => import("../../../src/routes/accounts/passwordresetlink/[token].svelte"),
	() => import("../../../src/routes/accounts/forgotpassword.svelte"),
	() => import("../../../src/routes/accounts/resetpassword.svelte"),
	() => import("../../../src/routes/accounts/addcategory.svelte"),
	() => import("../../../src/routes/accounts/activate/[token].svelte"),
	() => import("../../../src/routes/accounts/addpost.svelte"),
	() => import("../../../src/routes/accounts/signup.svelte"),
	() => import("../../../src/routes/accounts/login.svelte"),
	() => import("../../../src/routes/privacy.svelte"),
	() => import("../../../src/routes/blogs/category/[category_id]_[category_slug].svelte"),
	() => import("../../../src/routes/blogs/[id]_[slug].svelte"),
	() => import("../../../src/routes/cv/__layout.svelte"),
	() => import("../../../src/routes/cv/index.svelte"),
	() => import("../../../src/routes/cv/education.svelte"),
	() => import("../../../src/routes/cv/skills.svelte"),
	() => import("../../../src/routes/cv/work.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.json.js
	[/^\/index\.json$/],

	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/termsandconditions.svelte
	[/^\/termsandconditions\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/addcategory.json.js
	[/^\/addcategory\.json$/],

	// src/routes/categories.json.js
	[/^\/categories\.json$/],

	// src/routes/addpost.json.js
	[/^\/addpost\.json$/],

	// src/routes/accounts/passwordresetlink/[token].svelte
	[/^\/accounts\/passwordresetlink\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ token: d(m[1])})],

	// src/routes/accounts/forgotpassword.svelte
	[/^\/accounts\/forgotpassword\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/accounts/resetpassword.svelte
	[/^\/accounts\/resetpassword\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/accounts/addcategory.svelte
	[/^\/accounts\/addcategory\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/accounts/activate/[token].svelte
	[/^\/accounts\/activate\/([^/]+?)\/?$/, [c[0], c[8]], [c[1]], (m) => ({ token: d(m[1])})],

	// src/routes/accounts/addpost.svelte
	[/^\/accounts\/addpost\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/accounts/signup.svelte
	[/^\/accounts\/signup\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/accounts/login.svelte
	[/^\/accounts\/login\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/privacy.svelte
	[/^\/privacy\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/blogs/category/[category_id].json.js
	[/^\/blogs\/category\/([^/]+?)\.json$/],

	// src/routes/blogs/category/[category_id]_[category_slug].svelte
	[/^\/blogs\/category\/([^/]+?)_([^/]+?)\/?$/, [c[0], c[13]], [c[1]], (m) => ({ category_id: d(m[1]), category_slug: d(m[2])})],

	// src/routes/blogs/delete/[id].json.js
	[/^\/blogs\/delete\/([^/]+?)\.json$/],

	// src/routes/blogs/update/updateblog.json.js
	[/^\/blogs\/update\/updateblog\.json$/],

	// src/routes/blogs/[id]_[slug].json.js
	[/^\/blogs\/([^/]+?)_([^/]+?)\.json$/],

	// src/routes/blogs/[id]_[slug].svelte
	[/^\/blogs\/([^/]+?)_([^/]+?)\/?$/, [c[0], c[14]], [c[1]], (m) => ({ id: d(m[1]), slug: d(m[2])})],

	// src/routes/auth/logout.json.js
	[/^\/auth\/logout\.json$/],

	// src/routes/auth/signup.json.js
	[/^\/auth\/signup\.json$/],

	// src/routes/auth/login.json.js
	[/^\/auth\/login\.json$/],

	// src/routes/auth/activate/[token].json.js
	[/^\/auth\/activate\/([^/]+?)\.json$/],

	// src/routes/cv/index.svelte
	[/^\/cv\/?$/, [c[0], c[15], c[16]], [c[1]]],

	// src/routes/cv/education.svelte
	[/^\/cv\/education\/?$/, [c[0], c[15], c[17]], [c[1]]],

	// src/routes/cv/skills.svelte
	[/^\/cv\/skills\/?$/, [c[0], c[15], c[18]], [c[1]]],

	// src/routes/cv/work.svelte
	[/^\/cv\/work\/?$/, [c[0], c[15], c[19]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];