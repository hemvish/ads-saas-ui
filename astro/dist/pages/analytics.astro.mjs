import { c as createComponent, b as createAstro, d as renderHead, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DFmPVlct.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title = "Victory AI", children } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>${title}</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/tailwind.css">${renderHead()}</head> <body class="bg-gray-100"> <div class="flex min-h-screen"> <!-- SIDEBAR --> <aside class="w-64 bg-white border-r border-gray-200 p-6"> <h2 class="text-2xl font-bold mb-8">🚀 Victory AI</h2> <nav class="space-y-3"> <a href="/" class="block text-gray-700 hover:text-black">📊 Dashboard</a> <a href="/ads-ai" class="block text-gray-700 hover:text-black">🤖 Ads AI</a> <a href="/automation" class="block text-gray-700 hover:text-black">⚙️ Automation</a> <a href="/analytics" class="block text-gray-700 hover:text-black">📈 Analytics</a> </nav> </aside> <!-- MAIN --> <main class="flex-1 p-8"> ${children} </main> </div> </body></html>`;
}, "/Users/hemender/ads_saas/astro/src/layouts/DashboardLayout.astro", void 0);

const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Analytics" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold mb-6">📈 Analytics</h1> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="bg-white p-6 rounded-xl border shadow-sm"> <h3 class="font-bold mb-2">Spend</h3> <p class="text-2xl">₹2,45,000</p> </div> <div class="bg-white p-6 rounded-xl border shadow-sm"> <h3 class="font-bold mb-2">CTR</h3> <p class="text-2xl">3.42%</p> </div> <div class="bg-white p-6 rounded-xl border shadow-sm"> <h3 class="font-bold mb-2">ROAS</h3> <p class="text-2xl">4.1x</p> </div> </div> ` })}`;
}, "/Users/hemender/ads_saas/astro/src/pages/analytics.astro", void 0);

const $$file = "/Users/hemender/ads_saas/astro/src/pages/analytics.astro";
const $$url = "/analytics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Analytics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
