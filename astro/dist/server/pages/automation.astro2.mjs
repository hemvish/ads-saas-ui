import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B_emekef.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D55dl-iF.mjs';
export { renderers } from '../renderers.mjs';

const $$Automation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Automation Rules", "pageSubtitle": "Create intelligent automation rules" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-2xl bg-[#020617] border border-gray-800 rounded-xl p-6 space-y-4"> <form id="ruleForm" class="space-y-4"> <input id="metric" placeholder="Metric (CPA, ROAS, CTR)" class="w-full bg-[#020617] border border-gray-700 p-2 rounded" required> <input id="condition" placeholder="Condition (< 300, > 2)" class="w-full bg-[#020617] border border-gray-700 p-2 rounded" required> <input id="action" placeholder="Action (Increase Budget, Pause Ads)" class="w-full bg-[#020617] border border-gray-700 p-2 rounded" required> <button class="w-full bg-green-600 hover:bg-green-700 p-2 rounded">
Save Rule
</button> </form> <pre id="result" class="hidden text-sm text-gray-300 bg-black p-4 rounded"></pre> </div>  ` })}`;
}, "/Users/hemender/ads_saas/astro/src/pages/automation.astro", void 0);

const $$file = "/Users/hemender/ads_saas/astro/src/pages/automation.astro";
const $$url = "/automation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Automation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
