import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B_emekef.mjs';
import 'kleur/colors';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold mb-6">⚙ Automation Rules</h1> <div class="bg-white p-6 rounded-xl shadow w-1/2"> <select class="input"> <option>IF Spend > ₹5000</option> </select> <select class="input mt-3"> <option>THEN Pause Campaign</option> </select> <button class="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
Save Rule
</button> </div> ` })}`;
}, "/Users/hemender/ads_saas/astro/src/pages/automation/index.astro", void 0);

const $$file = "/Users/hemender/ads_saas/astro/src/pages/automation/index.astro";
const $$url = "/automation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
