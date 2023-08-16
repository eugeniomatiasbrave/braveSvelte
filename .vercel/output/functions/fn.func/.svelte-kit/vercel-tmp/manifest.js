export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.410fd62d.js","app":"_app/immutable/entry/app.5239af3a.js","imports":["_app/immutable/entry/start.410fd62d.js","_app/immutable/chunks/scheduler.c24869ec.js","_app/immutable/chunks/singletons.a7fb00ae.js","_app/immutable/chunks/index.9c1433c7.js","_app/immutable/entry/app.5239af3a.js","_app/immutable/chunks/scheduler.c24869ec.js","_app/immutable/chunks/index.6593e8b9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
