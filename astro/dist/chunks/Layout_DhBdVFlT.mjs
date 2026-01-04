import { c as createComponent, b as createAstro, d as renderHead, e as renderSlot, r as renderTemplate } from './astro/server_DFmPVlct.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle, pageSubtitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><title>${pageTitle} • Victory AI</title>${renderHead()}</head> <body class="bg-[#020617] text-white min-h-screen flex"> <!-- Sidebar --> <aside class="w-64 bg-[#020617] border-r border-gray-800 p-6"> <h1 class="text-green-400 text-xl font-bold mb-6">Victory AI</h1> <nav class="space-y-3"> <a href="/dashboard" class="block hover:text-green-400">Dashboard</a> <a href="/automation" class="block hover:text-green-400">Automation</a> <a href="/ads-ai" class="block hover:text-green-400">AI Decision</a> <button onclick="localStorage.removeItem('token'); window.location.href='/login';" class="bg-red-600 px-3 py-1 rounded mt-6">
Logout
</button> </nav> </aside> <!-- Main Content --> <main class="flex-1 p-10"> <h2 class="text-2xl font-bold mb-1">${pageTitle}</h2> <p class="text-gray-400 mb-6">${pageSubtitle}</p> <!-- ✅ PAGE CONTENT HERE --> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/hemender/ads_saas/astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
