import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Db072wnl.mjs';
import { manifest } from './manifest_b9WWRnJc.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/ads-ai.astro.mjs');
const _page2 = () => import('./pages/ads-ai.astro2.mjs');
const _page3 = () => import('./pages/ai-insights.astro.mjs');
const _page4 = () => import('./pages/analytics.astro.mjs');
const _page5 = () => import('./pages/automation.astro.mjs');
const _page6 = () => import('./pages/automation.astro2.mjs');
const _page7 = () => import('./pages/dashboard.astro.mjs');
const _page8 = () => import('./pages/login.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/ads-ai/index.astro", _page1],
    ["src/pages/ads-ai.astro", _page2],
    ["src/pages/ai-insights.astro", _page3],
    ["src/pages/analytics.astro", _page4],
    ["src/pages/automation/index.astro", _page5],
    ["src/pages/automation.astro", _page6],
    ["src/pages/dashboard.astro", _page7],
    ["src/pages/login.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
