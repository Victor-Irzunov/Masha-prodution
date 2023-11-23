"use strict";
(() => {
var exports = {};
exports.id = 5441;
exports.ids = [5441];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 62250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/otzyvy/all/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(36519);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(53488);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(12023);
;// CONCATENATED MODULE: ./app/api/otzyvy/all/route.js


const prisma = new client_.PrismaClient();
async function GET(req, res) {
    try {
        const data = await prisma.otzyvy.findMany();
        if (!data || data.length === 0) {
            return new next_response/* default */.Z("Нет отзывов", {
                status: 400
            });
        }
        return next_response/* default */.Z.json(data);
    } catch (error) {
        return new next_response/* default */.Z("Серверная ошибка Отзывы GET ALL", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fotzyvy%2Fall%2Froute&name=app%2Fapi%2Fotzyvy%2Fall%2Froute&pagePath=private-next-app-dir%2Fapi%2Fotzyvy%2Fall%2Froute.js&appDir=%2FUsers%2Fviktor%2FPrograming%2FWORK%2FMasha_Next_production%2Fapp&appPaths=%2Fapi%2Fotzyvy%2Fall%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/otzyvy/all/route","pathname":"/api/otzyvy/all","filename":"route","bundlePath":"app/api/otzyvy/all/route"},"resolvedPagePath":"/Users/viktor/Programing/WORK/Masha_Next_production/app/api/otzyvy/all/route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/otzyvy/all/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1697,8451,2023], () => (__webpack_exec__(62250)));
module.exports = __webpack_exports__;

})();