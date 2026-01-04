import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DFmPVlct.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DhBdVFlT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.request.headers.get("cookie")?.includes("token") ? null : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Dashboard", "pageSubtitle": "Overview of your marketing performance" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="dashboard"></div>  ` })}`;
}, "/Users/hemender/ads_saas/astro/src/pages/index.astro", void 0);

const $$file = "/Users/hemender/ads_saas/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
