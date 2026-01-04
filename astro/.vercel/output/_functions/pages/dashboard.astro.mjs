import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B_emekef.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D55dl-iF.mjs';
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Dashboard", "pageSubtitle": "Your AI Ads Overview" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="dashboardContent"></div>  ` })}`;
}, "/Users/hemender/ads_saas/astro/src/pages/dashboard.astro", void 0);

const $$file = "/Users/hemender/ads_saas/astro/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
