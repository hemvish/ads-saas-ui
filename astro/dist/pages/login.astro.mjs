import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DFmPVlct.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DhBdVFlT.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Login", "pageSubtitle": "Access your AI Ads dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<form id="loginForm" class="max-w-md space-y-4"> <input id="email" type="email" placeholder="Email" required class="w-full bg-[#020617] border border-gray-700 p-3 rounded"> <button type="submit" class="w-full bg-green-600 hover:bg-green-700 p-3 rounded">
Login
</button> <p id="error" class="text-red-500 text-sm"></p> </form>  ` })}`;
}, "/Users/hemender/ads_saas/astro/src/pages/login.astro", void 0);

const $$file = "/Users/hemender/ads_saas/astro/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
