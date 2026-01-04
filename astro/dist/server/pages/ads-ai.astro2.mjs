import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B_emekef.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D55dl-iF.mjs';
export { renderers } from '../renderers.mjs';

const $$AdsAi = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "AI Decision", "pageSubtitle": "Get intelligent recommendations for your ads" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-2xl bg-[#020617] border border-gray-700 rounded-xl p-6 space-y-4"> <!-- FORM --> <form id="aiForm" class="space-y-4"> <input id="platform" placeholder="Platform (Facebook / Google)" class="w-full bg-[#020617] border border-gray-700 p-2 rounded" required> <input id="budget" type="number" placeholder="Daily Budget" class="w-full bg-[#020617] border border-gray-700 p-2 rounded" required> <input id="objective" placeholder="Objective (Leads / Sales / Traffic)" class="w-full bg-[#020617] border border-gray-700 p-2 rounded" required> <button type="submit" class="w-full bg-green-600 hover:bg-green-700 p-2 rounded">
Get AI Decision
</button> <p id="error" class="text-red-500 text-sm"></p> </form> <!-- RESULT --> <pre id="result" class="hidden text-sm text-gray-300 bg-[#020617] border border-gray-700 p-4 rounded"></pre> </div>
---
  import Layout from "../layouts/Layout.astro";
  ---
${renderComponent($$result2, "Layout", $$Layout, { "pageTitle": "AI Decision", "pageSubtitle": "Get intelligent recommendations for your ads" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-2xl bg-[#020617] border border-gray-700 rounded-xl p-6 space-y-4"> <!-- FORM --> <form id="aiForm" class="space-y-4"> <input id="platform" placeholder="Platform (Facebook / Google)" class="w-full bg-[#020617] border border-gray-700 p-2 rounded" required> <input id="budget" type="number" placeholder="Daily Budget" class="w-full bg-[#020617] border border-gray-700 p-2 rounded" required> <input id="objective" placeholder="Objective (Leads / Sales / Traffic)" class="w-full bg-[#020617] border border-gray-700 p-2 rounded" required> <button type="submit" class="w-full bg-green-600 hover:bg-green-700 p-2 rounded">
Get AI Decision
</button> <p id="error" class="text-red-500 text-sm"></p> </form> <!-- RESULT --> <pre id="result" class="hidden text-sm text-gray-300 bg-[#020617] border border-gray-700 p-4 rounded"></pre> </div>  ` })}` })}`;
}, "/Users/hemender/ads_saas/astro/src/pages/ads-ai.astro", void 0);

const $$file = "/Users/hemender/ads_saas/astro/src/pages/ads-ai.astro";
const $$url = "/ads-ai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AdsAi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
