"use strict";
exports.id = 7447;
exports.ids = [7447];
exports.modules = {

/***/ 87447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ts: () => (/* binding */ getAllGroupArticle),
  C$: () => (/* binding */ getOneArticle)
});

// UNUSED EXPORTS: changeOneArticle, createArticle, deleteOneArticle, getAllArticle, userLikeArticle, userViewArticle

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(81636);
;// CONCATENATED MODULE: ./http/index.js

//_без авторизации
const http_$host = axios/* default */.Z.create({
    baseURL: "http://localhost:3000/"
});
const http_$authHost = axios/* default */.Z.create({
    baseURL: "http://localhost:3000/"
});
//.вставляю токен
const authInterceptor = (config)=>{
    config.headers.authorization = `Bearer ${localStorage.getItem("token_psy")}`;
    return config;
};
//_будет отробат перед каждым запросом и подстовлять токен 
http_$authHost.interceptors.request.use(authInterceptor);


;// CONCATENATED MODULE: ./http/articleAPI.js

const createArticle = async (obj)=>{
    const { data } = await $authHost.post("api/article/admin", obj);
    return data;
};
const getOneArticle = async ({ id })=>{
    const { data } = await http_$host.get("/api/article/" + id);
    return data;
};
const getAllGroupArticle = async (group)=>{
    console.log("\uD83D\uDE80 \uD83D\uDE80 \uD83D\uDE80  _ file: articleAPI.js:13 _ getAllGroupArticle _ group:", group);
    const { data } = await http_$host.get("/api/article/group/" + group);
    console.log("\uD83D\uDE80 \uD83D\uDE80 \uD83D\uDE80  _ file: articleAPI.js:14 _ getAllGroupArticle _ data:", data);
    return data;
};
const getAllArticle = async ()=>{
    const { data } = await $host.get("api/article/all");
    return data;
};
const changeOneArticle = async (obj)=>{
    const { data } = await $authHost.put("api/article/admin", obj);
    return data;
};
const deleteOneArticle = async (id)=>{
    const { data } = await $host.delete("api/article/" + id);
    return data;
};
const userViewArticle = async (id)=>{
    const { data } = await $host.put("/api/article/view-article/" + id);
    return data;
};
const userLikeArticle = async ({ id })=>{
    const { data } = await $host.put("/api/article/like/" + id);
    return data;
};


/***/ })

};
;