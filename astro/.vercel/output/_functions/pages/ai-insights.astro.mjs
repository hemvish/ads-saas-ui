import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B_emekef.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D55dl-iF.mjs';
export { renderers } from '../renderers.mjs';

const $$AiInsights = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "AI Insights", "pageSubtitle": "AI-powered insights into your marketing performance" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> <div class="bg-[#1A1F35] border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all"> <div class="text-3xl mb-3">📊</div> <h3 class="font-semibold text-white mb-2">UX / CRO Analysis</h3> <div class="text-2xl font-bold text-indigo-400 mb-2">85</div> <p class="text-sm text-gray-400">Score out of 100</p> </div> <div class="bg-[#1A1F35] border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all"> <div class="text-3xl mb-3">🔄</div> <h3 class="font-semibold text-white mb-2">Funnel Gaps</h3> <p class="text-sm text-gray-400">Missing exit intent triggers</p> </div> <div class="bg-[#1A1F35] border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all"> <div class="text-3xl mb-3">📢</div> <h3 class="font-semibold text-white mb-2">Ads Opportunities</h3> <p class="text-sm text-gray-400">Target pain points effectively</p> </div> <div class="bg-[#1A1F35] border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all"> <div class="text-3xl mb-3">🎯</div> <h3 class="font-semibold text-white mb-2">Optimization Suggestions</h3> <p class="text-sm text-gray-400">Improve CTAs and forms</p> </div> </div> ` })}`;
}, "/Users/hemender/ads_saas/astro/src/pages/ai-insights.astro", void 0);

const $$file = "/Users/hemender/ads_saas/astro/src/pages/ai-insights.astro";
const $$url = "/ai-insights";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiInsights,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
