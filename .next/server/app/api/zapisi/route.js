"use strict";
(() => {
var exports = {};
exports.id = 5579;
exports.ids = [5579];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 46097:
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

// NAMESPACE OBJECT: ./app/api/zapisi/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  POST: () => (POST),
  PUT: () => (PUT)
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
;// CONCATENATED MODULE: ./app/api/zapisi/route.js


const prisma = new client_.PrismaClient();
async function GET(req, res) {
    try {
        const data = await prisma.zapisi.findMany();
        // console.log("🚀 🚀 🚀 zapisi: GET data:", data);
        if (data.length) {
            return next_response/* default */.Z.json(data);
        }
        return new next_response/* default */.Z("Записей нет", {
            status: 400
        });
    } catch (error) {
        return new next_response/* default */.Z("Серверр ошибка", {
            status: 500
        });
    }
}
async function POST(req, res) {
    try {
        const body = await req.json();
        const { start, end, title, tel, type, zapros } = body;
        const allDay = Boolean(body.allDay);
        const result = await prisma.zapisi.create({
            data: {
                start,
                end,
                title,
                allDay,
                tel,
                type,
                zapros
            }
        });
        console.log("\uD83D\uDE80 \uD83D\uDE80 \uD83D\uDE80 zapisi: POST data:", result);
        return next_response/* default */.Z.json(result);
    } catch (error) {
        console.log("\uD83D\uDE80 \uD83D\uDE80zapisi: POST error:", error);
        return new next_response/* default */.Z("Ошибка на серверре", {
            status: 500
        });
    }
}
async function DELETE(req, res) {
    try {
        const { id } = req.params;
        await prisma.zapisi.delete({
            where: {
                id: parseInt(id)
            }
        });
        return next_response/* default */.Z.json({
            message: `Запись удалена`
        });
    } catch (error) {
        console.log("\uD83D\uDE80 \uD83D\uDE80zapisi: DELETE error:", error);
        return new next_response/* default */.Z("Ошибка на сервере", {
            status: 500
        });
    }
}
async function PUT(req, res) {
    try {
        const body = await req.json();
        const { id, start, end, title, allDay, tel, type, zapros } = body;
        const data = await prisma.zapisi.update({
            where: {
                id
            },
            data: {
                start,
                end,
                title,
                allDay,
                tel,
                type,
                zapros
            }
        });
        return next_response/* default */.Z.json(data);
    } catch (error) {
        console.log("\uD83D\uDE80 \uD83D\uDE80zapisi: PUT error:", error);
        return new next_response/* default */.Z("Ошибка на сервере", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fzapisi%2Froute&name=app%2Fapi%2Fzapisi%2Froute&pagePath=private-next-app-dir%2Fapi%2Fzapisi%2Froute.js&appDir=%2FUsers%2Fviktor%2FPrograming%2FWORK%2FMasha_Next_production%2Fapp&appPaths=%2Fapi%2Fzapisi%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/zapisi/route","pathname":"/api/zapisi","filename":"route","bundlePath":"app/api/zapisi/route"},"resolvedPagePath":"/Users/viktor/Programing/WORK/Masha_Next_production/app/api/zapisi/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/zapisi/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1697,8451,2023], () => (__webpack_exec__(46097)));
module.exports = __webpack_exports__;

})();