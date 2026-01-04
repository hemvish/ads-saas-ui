import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CbpxQuFp.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_B_emekef.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/hemender/ads_saas/astro/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ads-ai","isIndex":true,"type":"page","pattern":"^\\/ads-ai\\/?$","segments":[[{"content":"ads-ai","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ads-ai/index.astro","pathname":"/ads-ai","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-YgCUMR.js"}],"styles":[],"routeData":{"route":"/ads-ai","isIndex":false,"type":"page","pattern":"^\\/ads-ai\\/?$","segments":[[{"content":"ads-ai","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ads-ai.astro","pathname":"/ads-ai","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CxO_JRN6.js"}],"styles":[],"routeData":{"route":"/ai-insights","isIndex":false,"type":"page","pattern":"^\\/ai-insights\\/?$","segments":[[{"content":"ai-insights","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ai-insights.astro","pathname":"/ai-insights","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/analytics","isIndex":false,"type":"page","pattern":"^\\/analytics\\/?$","segments":[[{"content":"analytics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/analytics.astro","pathname":"/analytics","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/automation","isIndex":true,"type":"page","pattern":"^\\/automation\\/?$","segments":[[{"content":"automation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/automation/index.astro","pathname":"/automation","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BD85Al4Z.js"}],"styles":[],"routeData":{"route":"/automation","isIndex":false,"type":"page","pattern":"^\\/automation\\/?$","segments":[[{"content":"automation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/automation.astro","pathname":"/automation","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ5TQvV_.js"}],"styles":[],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DWqdXFkQ.js"}],"styles":[],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C9K8t6Wa.js"}],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/hemender/ads_saas/astro/src/pages/analytics.astro",{"propagation":"none","containsHead":true}],["/Users/hemender/ads_saas/astro/src/pages/ads-ai.astro",{"propagation":"none","containsHead":true}],["/Users/hemender/ads_saas/astro/src/pages/ai-insights.astro",{"propagation":"none","containsHead":true}],["/Users/hemender/ads_saas/astro/src/pages/automation.astro",{"propagation":"none","containsHead":true}],["/Users/hemender/ads_saas/astro/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/Users/hemender/ads_saas/astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/hemender/ads_saas/astro/src/pages/login.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/ads-ai/index@_@astro":"pages/ads-ai.astro.mjs","\u0000@astro-page:src/pages/ads-ai@_@astro":"pages/ads-ai.astro2.mjs","\u0000@astro-page:src/pages/ai-insights@_@astro":"pages/ai-insights.astro.mjs","\u0000@astro-page:src/pages/automation/index@_@astro":"pages/automation.astro.mjs","\u0000@astro-page:src/pages/automation@_@astro":"pages/automation.astro2.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/analytics@_@astro":"pages/analytics.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-manifest":"manifest_bduIy6C8.mjs","/astro/hoisted.js?q=5":"_astro/hoisted.CxO_JRN6.js","/astro/hoisted.js?q=0":"_astro/hoisted.C-YgCUMR.js","/astro/hoisted.js?q=1":"_astro/hoisted.DJ5TQvV_.js","/astro/hoisted.js?q=2":"_astro/hoisted.BD85Al4Z.js","/astro/hoisted.js?q=3":"_astro/hoisted.DWqdXFkQ.js","/astro/hoisted.js?q=4":"_astro/hoisted.C9K8t6Wa.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/hoisted.BD85Al4Z.js","/_astro/hoisted.C-YgCUMR.js","/_astro/hoisted.C9K8t6Wa.js","/_astro/hoisted.CxO_JRN6.js","/_astro/hoisted.DJ5TQvV_.js","/_astro/hoisted.DWqdXFkQ.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"USlVdprfr6OhL7qtur14F85YH7oI95pcdp9mMM7Gd4M=","experimentalEnvGetSecretEnabled":false});

export { manifest };
