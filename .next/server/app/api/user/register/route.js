"use strict";
(() => {
var exports = {};
exports.id = 4355;
exports.ids = [4355];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 67096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 19100:
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

// NAMESPACE OBJECT: ./app/api/user/register/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
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
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(67096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(56447);
var jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken);
;// CONCATENATED MODULE: ./app/api/user/register/route.js




const prisma = new client_.PrismaClient();
async function POST(req, res) {
    try {
        const body = await req.json();
        const { email, password, isAdmin } = body;
        console.log("\uD83D\uDE80 \uD83D\uDE80 \uD83D\uDE80  _ file: route.js:12 _ POST _ body:", body);
        const userExists = await prisma.user.findFirst({
            where: {
                email
            }
        });
        if (userExists) {
            return new next_response/* default */.Z("Пользователь уже зарегистрирован в системе", {
                status: 401
            });
        }
        if (isAdmin) {
            const adminExists = await prisma.user.findFirst({
                where: {
                    isAdmin: true
                }
            });
            if (adminExists) {
                return new next_response/* default */.Z("Администратор уже существует", {
                    status: 401
                });
            }
        }
        const hashedPassword = await external_bcrypt_default().hash(password.toString(), 10);
        const userDB = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                isAdmin
            }
        });
        const token = jsonwebtoken_default().sign({
            email: userDB.email,
            id: userDB.id,
            isAdmin: userDB.isAdmin
        }, process.env.SECRET_KEY, {
            expiresIn: "30 days"
        });
        return next_response/* default */.Z.json({
            token
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Ошибка регистрации:", error);
        return new next_response/* default */.Z("Ошибка регистрации!", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fuser%2Fregister%2Froute&name=app%2Fapi%2Fuser%2Fregister%2Froute&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fregister%2Froute.js&appDir=%2FUsers%2Fviktor%2FPrograming%2FWORK%2FMasha_Next_production%2Fapp&appPaths=%2Fapi%2Fuser%2Fregister%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/user/register/route","pathname":"/api/user/register","filename":"route","bundlePath":"app/api/user/register/route"},"resolvedPagePath":"/Users/viktor/Programing/WORK/Masha_Next_production/app/api/user/register/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/user/register/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1697,8451,2023,5888,6447], () => (__webpack_exec__(19100)));
module.exports = __webpack_exports__;

})();