import { c as create_ssr_component, a as subscribe, e as escape, b as createEventDispatcher, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
/* empty css                          */import { d as derived, r as readable } from "../../chunks/index.js";
/* empty css                                               *//* empty css                   */const time = readable(/* @__PURE__ */ new Date(), function start(set) {
  const interval = setInterval(() => {
    set(/* @__PURE__ */ new Date());
  }, 1e3);
  return function stop() {
    clearInterval(interval);
  };
});
const start2 = /* @__PURE__ */ new Date();
derived(time, ($time) => Math.round(($time - start2) / 1e3));
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "header.svelte-1o47m3r{background-color:var(--color-bg-3);color:var(--color-text);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0;margin:0;border-bottom:1.5px solid #d0d0d0}p.svelte-1o47m3r{color:#fbf6f6;font-size:14px;padding-top:5.5px;height:18px }@media(min-width: 480px){header.svelte-1o47m3r{padding:0 ;margin:0;background-color:var(--color-bg-1)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $time, $$unsubscribe_time;
  $$unsubscribe_time = subscribe(time, (value) => $time = value);
  const formatter = new Intl.DateTimeFormat(
    "en",
    {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit"
    }
  );
  $$result.css.add(css$3);
  $$unsubscribe_time();
  return `<header class="header svelte-1o47m3r"><p class="svelte-1o47m3r">Fecha: ${escape(formatter.format($time))}</p> </header>`;
});
const ApiWeather_svelte_svelte_type_style_lang = "";
const Login_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "form.svelte-gohy46{position:absolute ;top:200px;left:630px;background-color:var(--color-bg-3)}.form-control.svelte-gohy46{height:28px;width:250px;border-radius:4px;margin:7px 7px 0px 7px}p.svelte-gohy46{color:white}#bo.svelte-gohy46{height:28px;width:110px;background-color:var(--color-bg-1);border:none;border-radius:4px;color:#fff;margin:8px}.card-header.svelte-gohy46{background-color:var(--color-bg-1);color:var(--color-bg-0);height:25px;padding-top:0}",
  map: null
};
const Login_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { username = "" } = $$props;
  let { password = "" } = $$props;
  createEventDispatcher();
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.password === void 0 && $$bindings.password && password !== void 0)
    $$bindings.password(password);
  $$result.css.add(css$2);
  return `<div><form class="card border-dark text-center svelte-gohy46"><div class="card-header svelte-gohy46" data-svelte-h="svelte-15c1pjt"><p class="text-center svelte-gohy46">Inicio</p></div> <label><input type="text" class="form-control svelte-gohy46" placeholder="Ingresar usuario" required${add_attribute("value", username, 0)}></label> <label><input type="password" class="form-control svelte-gohy46" placeholder="Ingresar contraseña" required${add_attribute("value", password, 0)}></label> <button id="bo" type="button" class="svelte-gohy46" data-svelte-h="svelte-6qpfnk">Iniciar Sesion</button></form> </div>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-13v5vdx{background-color:var(--color-bg-3);display:flex;justify-content:space-between;font-family:var(--font-body);padding:0px;margin:0 0 0 -10px;height:95vh;width:190px ;border-right:1.5px solid #d0d0d0;font-weight:600}a.svelte-13v5vdx{color:#eceff4;text-decoration:none;font-size:16px;width:150px}a.svelte-13v5vdx:hover{color:#009acd }li.svelte-13v5vdx:hover{background-color:var(--color-bg-0);border-right:1.5px solid #d0d0d0}hr.svelte-13v5vdx{color:#edf1f7;margin:0;width:190px}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${`${validate_component(Login_1, "Login").$$render($$result, {}, {}, {})}`}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-w2h4en{background-color:var(--color-bg-0);display:flex;flex-direction:column;min-height:92vh}main.svelte-w2h4en{flex:1;display:flex;flex-direction:column;padding:0;width:100%;max-width:63rem;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-w2h4en">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="row align-items-center m-0"><div class="col-2 m-0">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div> <main class="col-10 svelte-w2h4en">${slots.default ? slots.default({}) : ``}</main></div> </div>`;
});
export {
  Layout as default
};
