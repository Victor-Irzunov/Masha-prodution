"use strict";
exports.id = 8237;
exports.ids = [8237];
exports.modules = {

/***/ 48237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C$: () => (/* binding */ getOneArticle),
/* harmony export */   N: () => (/* binding */ userLikeArticle),
/* harmony export */   _: () => (/* binding */ deleteOneArticle),
/* harmony export */   ne: () => (/* binding */ getAllArticle),
/* harmony export */   tL: () => (/* binding */ changeOneArticle),
/* harmony export */   tu: () => (/* binding */ createArticle),
/* harmony export */   vV: () => (/* binding */ userViewArticle)
/* harmony export */ });
/* unused harmony export getAllGroupArticle */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(911);

const createArticle = async (obj)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$authHost */ .G.post("api/article/admin", obj);
    return data;
};
const getOneArticle = async ({ id })=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.get("/api/article/" + id);
    return data;
};
const getAllGroupArticle = async (group)=>{
    console.log("\uD83D\uDE80 \uD83D\uDE80 \uD83D\uDE80  _ file: articleAPI.js:13 _ getAllGroupArticle _ group:", group);
    const { data } = await $host.get("/api/article/group/" + group);
    console.log("\uD83D\uDE80 \uD83D\uDE80 \uD83D\uDE80  _ file: articleAPI.js:14 _ getAllGroupArticle _ data:", data);
    return data;
};
const getAllArticle = async ()=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.get("api/article/all");
    return data;
};
const changeOneArticle = async (obj)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$authHost */ .G.put("api/article/admin", obj);
    return data;
};
const deleteOneArticle = async (id)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.delete("api/article/" + id);
    return data;
};
const userViewArticle = async (id)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.put("/api/article/view-article/" + id);
    return data;
};
const userLikeArticle = async ({ id })=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.put("/api/article/like/" + id);
    return data;
};


/***/ })

};
;