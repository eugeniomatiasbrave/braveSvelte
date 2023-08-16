

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a6183794.js","_app/immutable/chunks/scheduler.c24869ec.js","_app/immutable/chunks/index.6593e8b9.js","_app/immutable/chunks/singletons.a7fb00ae.js","_app/immutable/chunks/index.9c1433c7.js"];
export const stylesheets = [];
export const fonts = [];
