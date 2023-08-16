import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.bfa4e28f.js","_app/immutable/chunks/scheduler.c24869ec.js","_app/immutable/chunks/index.6593e8b9.js","_app/immutable/chunks/index.9c1433c7.js","_app/immutable/chunks/Logo.801007d1.js"];
export const stylesheets = ["_app/immutable/assets/0.ed1f9d28.css","_app/immutable/assets/bootstrap.5075dcec.css","_app/immutable/assets/styles.6ad28fba.css","_app/immutable/assets/Logo.7c947307.css"];
export const fonts = [];
