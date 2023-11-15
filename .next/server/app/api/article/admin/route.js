"use strict";
(() => {
var exports = {};
exports.id = 3262;
exports.ids = [3262];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 32263:
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

// NAMESPACE OBJECT: ./app/api/article/admin/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
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
// EXTERNAL MODULE: ./node_modules/multer/index.js
var multer = __webpack_require__(98018);
var multer_default = /*#__PURE__*/__webpack_require__.n(multer);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(57147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-node/v4.js + 3 modules
var v4 = __webpack_require__(78535);
;// CONCATENATED MODULE: ./app/api/article/admin/route.js






const prisma = new client_.PrismaClient();
const storage = multer_default().diskStorage({
    destination: (req, file, cb)=>{
        cb(null, external_path_default().resolve(process.cwd(), "public/uploads"));
    },
    filename: (req, file, cb)=>{
        cb(null, (0,v4/* default */.Z)() + ".webp");
    }
});
const upload = multer_default()({
    storage
});
async function POST(req) {
    try {
        const error = await new Promise((resolve, reject)=>{
            upload.any()(req, {}, (err)=>{
                if (err) {
                    console.error("Ошибка при загрузке файла:", err);
                    reject(err);
                }
                resolve();
            });
        });
        if (error) {
            return new next_response/* default */.Z("Ошибка при загрузке файла", {
                status: 500
            });
        }
        try {
            const formData = await req.formData();
            const view = parseInt(formData.get("view"), 10);
            const like = parseInt(formData.get("like"), 10);
            const article = formData.get("article");
            const publication = formData.get("publication") === "true";
            const dateTime = formData.get("dateTime");
            const link = formData.get("link");
            const group = formData.get("group");
            const description = formData.get("description");
            const imgFiles = formData.getAll("img");
            const fileName = [];
            for (const imgFile of imgFiles){
                const name = (0,v4/* default */.Z)() + ".webp";
                fileName.push({
                    image: name
                });
                const filePath = external_path_default().resolve(process.cwd(), "public/uploads", name);
                const data = await imgFile.arrayBuffer();
                await external_fs_default().promises.writeFile(filePath, Buffer.from(data));
            }
            const data = await prisma.articles.create({
                data: {
                    view,
                    link,
                    article,
                    like,
                    group,
                    description,
                    publication,
                    dateTime,
                    img: JSON.stringify(fileName)
                }
            });
            if (data) {
                return next_response/* default */.Z.json({
                    message: "Статья добавлена"
                });
            }
        } catch (error) {
            console.error("\uD83D\uDE80 POST Ошибка:", error);
            return new next_response/* default */.Z("Ошибка при создании статьи", {
                status: 500
            });
        }
    } catch (error) {
        console.error("Error saving data:", error);
        return new next_response/* default */.Z("Ошибка на сервере", {
            status: 500
        });
    }
}
async function PUT(req) {
    try {
        const error = await new Promise((resolve, reject)=>{
            upload.any()(req, {}, (err)=>{
                if (err) {
                    console.error("Ошибка при загрузке файла:", err);
                    reject(err);
                }
                resolve();
            });
        });
        if (error) {
            return new next_response/* default */.Z("Ошибка при загрузке файла", {
                status: 500
            });
        }
        try {
            const formData = await req.formData();
            const view = parseInt(formData.get("view"), 10);
            const like = parseInt(formData.get("like"), 10);
            const article = formData.get("article");
            const publication = formData.get("publication") === "true";
            const dateTime = formData.get("dateTime");
            const link = formData.get("link");
            const group = formData.get("group");
            const id = formData.get("id");
            const description = formData.get("description");
            const imgFiles = formData.getAll("img");
            const fileName = [];
            let data;
            if (imgFiles) {
                for (const imgFile of imgFiles){
                    const name = (0,v4/* default */.Z)() + ".webp";
                    fileName.push({
                        image: name
                    });
                    const filePath = external_path_default().resolve(process.cwd(), "public/uploads", name);
                    const data = await imgFile.arrayBuffer();
                    await external_fs_default().promises.writeFile(filePath, Buffer.from(data));
                }
                data = await prisma.articles.update({
                    where: {
                        id: +id
                    },
                    data: {
                        view,
                        link,
                        article,
                        like,
                        group,
                        description,
                        publication,
                        dateTime,
                        img: JSON.stringify(fileName)
                    }
                });
            } else {
                data = await prisma.articles.update({
                    where: {
                        id: +id
                    },
                    data: {
                        view,
                        link,
                        article,
                        like,
                        group,
                        description,
                        publication,
                        dateTime
                    }
                });
            }
            if (data) {
                return next_response/* default */.Z.json({
                    message: "Статья изменена"
                });
            }
        } catch (error) {
            console.error("\uD83D\uDE80 POST Ошибка:", error);
            return new next_response/* default */.Z("Ошибка при изменении статьи", {
                status: 500
            });
        }
    } catch (error) {
        console.error("Error saving data:", error);
        return new next_response/* default */.Z("Ошибка на сервере", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Farticle%2Fadmin%2Froute&name=app%2Fapi%2Farticle%2Fadmin%2Froute&pagePath=private-next-app-dir%2Fapi%2Farticle%2Fadmin%2Froute.js&appDir=%2FUsers%2Fviktor%2FPrograming%2FWORK%2FMasha_Next_production%2Fapp&appPaths=%2Fapi%2Farticle%2Fadmin%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/article/admin/route","pathname":"/api/article/admin","filename":"route","bundlePath":"app/api/article/admin/route"},"resolvedPagePath":"/Users/viktor/Programing/WORK/Masha_Next_production/app/api/article/admin/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/article/admin/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1697,8451,2023,8156,2669], () => (__webpack_exec__(32263)));
module.exports = __webpack_exports__;

})();