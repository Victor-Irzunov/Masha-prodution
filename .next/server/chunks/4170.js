exports.id = 4170;
exports.ids = [4170];
exports.modules = {

/***/ 78091:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46291));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56738));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 28262))

/***/ }),

/***/ 16440:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 47734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 88709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 62698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 29150, 23))

/***/ }),

/***/ 46291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComp: () => (/* binding */ FooterComp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67387);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_float_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55612);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21454);
/* harmony import */ var _constans_constScreens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7214);
/* harmony import */ var _constans_animation_AnimationConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74516);
/* __next_internal_client_entry_do_not_use__ FooterComp auto */ 





const FooterComp = ()=>{
    const screens = (0,_constans_constScreens__WEBPACK_IMPORTED_MODULE_2__/* .useScreens */ .OP)();
    const titleAnimation = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.7
            }
        }
    };
    const titleAnimation3 = {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.7
            }
        }
    };
    const adressAnimation = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.7
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "sd:px-10 xy:px-5 pt-10 bg-white h-[80vh] flex overflow-hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_float_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.BackTop, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-1/5 xy:hidden sd:block"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sd:ml-20 xy:ml-0 flex flex-col justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                initial: "hidden",
                                whileInView: "visible",
                                className: "flex mb-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.h2, {
                                        variants: titleAnimation,
                                        className: "sd:text-8xl xy:text-4xl font-extrabold uppercase sd:mr-8 xy:mr-3",
                                        children: "мария"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.h2, {
                                        variants: titleAnimation3,
                                        className: "sd:text-8xl xy:text-4xl font-extrabold uppercase",
                                        children: "ирзунова"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                initial: "hidden",
                                whileInView: "visible",
                                className: "mt-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.h3, {
                                    variants: titleAnimation,
                                    className: "sd:text-4xl xy:text-xl font-extrabold uppercase",
                                    children: "психолог Минск"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                        initial: "hidden",
                        whileInView: "visible",
                        className: "",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                            variants: adressAnimation,
                            className: "flex justify-between sd:items-center xy:items-start xy:flex-col sd:flex-row h-full",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-xl font-extralight",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "г.Минск, Франциска Скорины, 15"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "mishel1406@mail.ru"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "tel:80298884002",
                                            children: "+375 29 888-40-02"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    type: "primary",
                                    shape: "round",
                                    size: screens.md ? "large" : "middle",
                                    className: screens.md ? "mt-0" : "mt-7",
                                    children: "кейсы в instagram"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-between items-start xy:flex-col sd:flex-row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: " font-poppins font-normal text-center sm:text-[14px] xy:text-[10px] leading-[27px] text-gray-400 mt-0 ",
                            children: [
                                "Copyright Ⓒ 2015-2023. Разработка и продвижение",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "https://vi-tech.by",
                                    className: "text-gradient text-cyan-400",
                                    target: "_blank",
                                    children: [
                                        " ",
                                        "VI:TECH"
                                    ]
                                }),
                                " \xa0"
                            ]
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 30987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ modal_ModalComp)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/antd/lib/modal/index.js
var modal = __webpack_require__(73500);
// EXTERNAL MODULE: ./node_modules/antd/lib/result/index.js
var result = __webpack_require__(52536);
// EXTERNAL MODULE: ./node_modules/antd/lib/form/index.js
var lib_form = __webpack_require__(81063);
// EXTERNAL MODULE: ./node_modules/antd/lib/message/index.js
var message = __webpack_require__(35435);
// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(67387);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);
// EXTERNAL MODULE: ./node_modules/antd/lib/auto-complete/index.js
var auto_complete = __webpack_require__(69028);
// EXTERNAL MODULE: ./node_modules/antd/lib/notification/index.js
var notification = __webpack_require__(83603);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./http/userAPI.js
var userAPI = __webpack_require__(48532);
;// CONCATENATED MODULE: ./components/form/formPassword/FormResetPassword.js








const FormResetPassword = ({ handleCancel })=>{
    const [form] = lib_form/* default */.Z.useForm();
    const [autoCompleteResult, setAutoCompleteResult] = (0,react_.useState)([]);
    const [api, contextHolder] = notification/* default */.ZP.useNotification();
    const openNotificationWithIcon = (type, login)=>{
        api[type]({
            message: `Вам на почту ${login} отправлено письмо`,
            description: "Для сброса пароля необходимо подтвердить почту, Вам необходимо в письме перейти по ссылки в письме."
        });
    };
    const onWebsiteChange = (value)=>{
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult([
                "@gmail.com",
                "@tut.by",
                "@yandex.by",
                "@mail.ru"
            ].map((domain)=>`${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website)=>({
            label: website,
            value: website
        }));
    const onFinish = (values)=>{
        (0,userAPI/* resetPassword */.c0)(values.login).then((data)=>{
            if (data) {
                openNotificationWithIcon("success", values.login);
                localStorage.setItem("_gJfhss", values.login);
                handleCancel();
                form.resetFields();
            }
        }).catch((error)=>{
            if (error.response) message/* default */.ZP.error(error.response.data.message);
        });
    };
    const onFinishFailed = (errorInfo)=>message/* default */.ZP.error("Ошибка");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            contextHolder,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib_form/* default */.Z, {
                layout: "vertical",
                name: "reset-password",
                form: form,
                onFinish: onFinish,
                onFinishFailed: onFinishFailed,
                style: {
                    overflowX: "hidden"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        label: "Введите Вашу почту",
                        name: "login",
                        tooltip: "Ваша почта регистрации на нашем сайте",
                        hasFeedback: true,
                        rules: [
                            {
                                required: true,
                                message: "Пожалуйста введите почту!"
                            },
                            {
                                type: "email",
                                message: "Введите корректный email!"
                            }
                        ],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(auto_complete/* default */.Z, {
                            options: websiteOptions,
                            onChange: onWebsiteChange,
                            placeholder: "exemple@gmail.com"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                            type: "primary",
                            htmlType: "submit",
                            onClick: onFinish,
                            children: "Сбросить пароль"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const formPassword_FormResetPassword = (FormResetPassword);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(17370);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/antd/lib/input/index.js
var input = __webpack_require__(72135);
// EXTERNAL MODULE: ./node_modules/react-input-mask/index.js
var react_input_mask = __webpack_require__(40667);
var react_input_mask_default = /*#__PURE__*/__webpack_require__.n(react_input_mask);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(53071);
;// CONCATENATED MODULE: ./http/telegramAPI.js

const token = "5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko";
const chat_id = "-1001794221917";
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`;
const sendOrderTelegram = async (obj)=>{
    const { data } = await axios/* default */.Z.post(uri_api, {
        chat_id,
        parse_mode: "html",
        text: obj
    });
    return data;
};

;// CONCATENATED MODULE: ./components/form/formQuestins/FormQuestion.js
/* __next_internal_client_entry_do_not_use__ FormQuestion auto */ 







const { TextArea } = input["default"];
const FormQuestion = ({ handleCancel })=>{
    const [tel, setTel] = (0,react_.useState)("");
    const onFinish = (values)=>{
        let messageForm = `<b>Вопрос с сайта психолога </b>\n`;
        messageForm += `<b> </b>\n`;
        messageForm += `<b>Клиент по имени ${values.name} задал вопрос </b>\n`;
        messageForm += `<b>Вопрос: ${values.message} </b>\n`;
        messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`;
        messageForm += `<b>Телефон:</b> ${values.tel}\n`;
        sendOrderTelegram(messageForm).then((data)=>{
            if (data.ok) {
                message/* default */.ZP.success("Ваш вопрос принят");
                handleCancel();
            }
        });
    };
    const onFinishFailed = (errorInfo)=>{
        console.log("Failed:", errorInfo);
    };
    const beforeMaskedValueChange = (newState, oldState, userInput)=>{
        var { value } = newState;
        var selection = newState.selection;
        var cursorPosition = selection ? selection.start : null;
        if (value.endsWith("-") && userInput !== "-" && !tel.endsWith("-")) {
            if (cursorPosition === value.length) {
                cursorPosition--;
                selection = {
                    start: cursorPosition,
                    end: cursorPosition
                };
            }
            value = value.slice(0, -1);
        }
        return {
            value,
            selection
        };
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib_form/* default */.Z, {
                name: "question",
                labelCol: {
                    span: 24
                },
                wrapperCol: {
                    span: 24
                },
                onFinish: onFinish,
                onFinishFailed: onFinishFailed,
                autoComplete: "off",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        label: "Имя",
                        name: "name",
                        tooltip: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"], {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        label: "Телефон",
                        name: "tel",
                        tooltip: "код оператора и номер",
                        rules: [
                            {
                                required: true,
                                message: "Пожалуйста введите номер!"
                            }
                        ],
                        children: /*#__PURE__*/ jsx_runtime_.jsx((react_input_mask_default()), {
                            placeholder: "29 123-45-67",
                            mask: "+3\\7\\5 99 999 99 99",
                            maskChar: "-",
                            className: "border py-1 px-3 rounded-md w-full",
                            beforeMaskedValueChange: beforeMaskedValueChange,
                            value: tel,
                            onChange: (e)=>setTel(e.target.value)
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        label: "Ваш вопрос",
                        name: "message",
                        tooltip: "",
                        rules: [
                            {
                                required: true,
                                message: "Пожалуйста напишите вопрос!"
                            }
                        ],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TextArea, {
                            placeholder: "Сообщение",
                            autoSize: {
                                minRows: 3
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        wrapperCol: {
                            offset: 8,
                            span: 16
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                            type: "primary",
                            htmlType: "submit",
                            children: "Отправить"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xs text-gray-500",
                children: "В ближайшее время я Вам перезвоним с ответом."
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/modal/ModalComp.js






// import { useNavigate } from 'react-router-dom'
const ModalComp = ({ isModalOpen, setIsModalOpen, title, formReset, data, setOpen, setValue, formQuestins, resul })=>{
    // const navigate = useNavigate()
    const handleCancel = ()=>{
        setIsModalOpen(false);
        if (resul) {
            setOpen(false);
            setValue("");
        // navigate('/blog')
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(modal/* default */.Z, {
        title: title,
        open: isModalOpen,
        onCancel: handleCancel,
        footer: null,
        children: [
            formReset && /*#__PURE__*/ jsx_runtime_.jsx(formPassword_FormResetPassword, {
                handleCancel: handleCancel
            }),
            resul && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx(result/* default */.ZP, {
                    status: "success",
                    title: `${data.name} Вы записаны`,
                    subTitle: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-sm font-light",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Дата консультации: ",
                                    moment_default()(data.start).format("DD-MM-YYYY HH:mm")
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Будет проходить ",
                                    data.type
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xs text-gray-400 mt-5",
                                children: "Если у Вас не получится присутствовать на консультации, пожалуйста сообщите заранее сообщением в WhatsApp, Telegram или по телефону. Спасибо."
                            })
                        ]
                    })
                })
            }),
            formQuestins && /*#__PURE__*/ jsx_runtime_.jsx(FormQuestion, {})
        ]
    });
};
/* harmony default export */ const modal_ModalComp = (ModalComp);


/***/ }),

/***/ 56738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NavBarMenu: () => (/* binding */ NavBarMenu)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./public/images/logo2.webp
var logo2 = __webpack_require__(59303);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 149 modules
var motion = __webpack_require__(21454);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./constans/Constans.js + 6 modules
var Constans = __webpack_require__(24092);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/ImportOutlined.js
var ImportOutlined = __webpack_require__(99800);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/ExportOutlined.js
var ExportOutlined = __webpack_require__(88875);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/MenuOutlined.js
var MenuOutlined = __webpack_require__(48208);
// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(67387);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);
// EXTERNAL MODULE: ./node_modules/antd/lib/modal/index.js
var modal = __webpack_require__(73500);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/antd/lib/form/index.js
var lib_form = __webpack_require__(81063);
// EXTERNAL MODULE: ./node_modules/antd/lib/input/index.js
var input = __webpack_require__(72135);
// EXTERNAL MODULE: ./node_modules/antd/lib/checkbox/index.js
var lib_checkbox = __webpack_require__(75467);
// EXTERNAL MODULE: ./node_modules/antd/lib/message/index.js
var message = __webpack_require__(35435);
// EXTERNAL MODULE: ./node_modules/antd/lib/auto-complete/index.js
var auto_complete = __webpack_require__(69028);
// EXTERNAL MODULE: ./http/userAPI.js
var userAPI = __webpack_require__(48532);
// EXTERNAL MODULE: ./contexts/MyContextProvider.js + 2 modules
var MyContextProvider = __webpack_require__(28262);
// EXTERNAL MODULE: ./components/modal/ModalComp.js + 3 modules
var ModalComp = __webpack_require__(30987);
;// CONCATENATED MODULE: ./components/form/formLogin/FormLogin.js
/* __next_internal_client_entry_do_not_use__ default auto */ 











const FormLogin = ({ handleCancel, fromPage })=>{
    const { user } = (0,react_.useContext)(MyContextProvider.MyContext);
    const [form] = lib_form/* default */.Z.useForm();
    const [isCheck, setIsCheck] = (0,react_.useState)(false);
    const router = (0,navigation.useRouter)();
    const [isModalOpen, setIsModalOpen] = (0,react_.useState)(false);
    const [autoCompleteResult, setAutoCompleteResult] = (0,react_.useState)([]);
    const onWebsiteChange = (value)=>{
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult([
                "@gmail.com",
                "@tut.by",
                "@yandex.by",
                "@mail.ru"
            ].map((domain)=>`${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website)=>({
            label: website,
            value: website
        }));
    let count = 0;
    const onFinish = (values)=>{
        if (count > 0) {
            (0,userAPI/* login */.x4)(values.email, values.password).then((res)=>{
                message/* default */.ZP.success("Личность подтверждена!");
                router.push(fromPage || "/");
                user.setIsAuth(true);
                user.setUser(user);
                user.setUserData(res);
                setTimeout(()=>{
                    handleCancel();
                }, 1000);
            }).catch((error)=>{
                if (error.response) message/* default */.ZP.error(error.response.data.message);
            });
        }
        count++;
    };
    const showModal = ()=>{
        setIsModalOpen(true);
    };
    const onFinishFailed = (errorInfo)=>message/* default */.ZP.error("Ошибка");
    const onChange = (e)=>{
        setIsCheck(e.target.checked);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib_form/* default */.Z, {
                layout: "vertical",
                name: "logIn",
                form: form,
                onFinish: onFinish,
                onFinishFailed: onFinishFailed,
                style: {
                    overflowX: "hidden"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        label: "Логин",
                        name: "email",
                        tooltip: "Обязательное поле",
                        hasFeedback: true,
                        rules: [
                            {
                                required: true,
                                message: "Пожалуйста введите почту!"
                            },
                            {
                                type: "email",
                                message: "Введите корректный email!"
                            }
                        ],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(auto_complete/* default */.Z, {
                            options: websiteOptions,
                            onChange: onWebsiteChange,
                            placeholder: "exemple@gmail.com"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        label: "Пароль",
                        name: "password",
                        tooltip: "Обязательное поле",
                        hasFeedback: true,
                        size: "large",
                        rules: [
                            {
                                required: true,
                                message: "Пожалуйста введите пароль!"
                            }
                        ],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"].Password, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        name: "soglasen",
                        valuePropName: "checked",
                        rules: [
                            {
                                validator: (_, value)=>value ? Promise.resolve() : Promise.reject(new Error("Нажмите если согласны!"))
                            }
                        ],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lib_checkbox/* default */.Z, {
                            onChange: onChange,
                            children: "Входя в аккаунт или создавая новый, вы соглашаетесь на обработку персональных данных в соответствии с политикой и условиями оферты."
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                                    type: "primary",
                                    htmlType: "submit",
                                    onClick: onFinish,
                                    size: "large",
                                    children: "Войти"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                                type: "text",
                                className: "text-xs font-light text-gray-700",
                                onClick: ()=>{
                                    showModal();
                                    handleCancel();
                                },
                                style: {
                                    backgroundColor: "transparent"
                                },
                                children: "Забыли пароль?"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ModalComp/* default */.Z, {
                setIsModalOpen: setIsModalOpen,
                isModalOpen: isModalOpen,
                title: "Сброс пароля",
                formReset: true
            })
        ]
    });
};
/* harmony default export */ const formLogin_FormLogin = (FormLogin);

// EXTERNAL MODULE: ./node_modules/jwt-decode/build/jwt-decode.cjs.js
var jwt_decode_cjs = __webpack_require__(33802);
var jwt_decode_cjs_default = /*#__PURE__*/__webpack_require__.n(jwt_decode_cjs);
;// CONCATENATED MODULE: ./components/form/formRegistration/FormRegister.js
/* __next_internal_client_entry_do_not_use__ FormRegister auto */ 











const FormRegister = ({ handleCancel })=>{
    const { updateState } = (0,react_.useContext)(MyContextProvider.MyContext);
    const [form] = lib_form/* default */.Z.useForm();
    const router = (0,navigation.useRouter)();
    const [autoCompleteResult, setAutoCompleteResult] = (0,react_.useState)([]);
    const onFinish = async (values)=>{
        console.log("values:", values);
        (0,userAPI/* registration */.l9)(values.email, values.password, values.isAdmin).then((response)=>{
            console.log("response::: ", response);
            if (response.status === 200) {
                message/* default */.ZP.success("Вы зарегистрированы!");
                localStorage.setItem("token", response.data.token);
                updateState(jwt_decode_cjs_default()(response.data.token));
                form.resetFields();
                router.push("/");
                handleCancel();
            }
        }).catch((error)=>{
            console.log("error::: ", error);
            if (error.response.status === 401) {
                console.log(error.response.data.message);
                message/* default */.ZP.success(error.response.data.message);
            } else {
                console.log("Ошибка при регистрации:", error.message);
            }
        });
    };
    const onFinishFailed = (errorInfo)=>{
        console.log("Failed:", errorInfo);
    };
    const onWebsiteChange = (value)=>{
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult([
                "@gmail.com",
                "@tut.by",
                "@yandex.by",
                "@mail.ru"
            ].map((domain)=>`${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website)=>({
            label: website,
            value: website
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib_form/* default */.Z, {
            name: "create",
            labelCol: {
                span: 24
            },
            wrapperCol: {
                span: 24
            },
            onFinish: onFinish,
            onFinishFailed: onFinishFailed,
            autoComplete: "off",
            form: form,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Логин",
                    name: "email",
                    tooltip: "Ваша почта",
                    hasFeedback: true,
                    rules: [
                        {
                            required: true,
                            message: "Пожалуйста введите почту!"
                        },
                        {
                            type: "email",
                            message: "Введите корректный email!"
                        }
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(auto_complete/* default */.Z, {
                        options: websiteOptions,
                        onChange: onWebsiteChange,
                        placeholder: "exemple@gmail.com"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "Пароль",
                    name: "password",
                    tooltip: "минимум 4 символа",
                    hasFeedback: true,
                    rules: [
                        {
                            required: true,
                            message: "Пожалуйста введите пароль!"
                        }
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"].Password, {
                        placeholder: "мин. 4 символа"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    name: "password2",
                    label: "Повторите пароль",
                    dependencies: [
                        "password"
                    ],
                    rules: [
                        {
                            required: true,
                            message: "Пожалуйста повторите пароль!"
                        },
                        ({ getFieldValue })=>({
                                validator (_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("Пароли не совпадают!"));
                                }
                            })
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input["default"].Password, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    label: "",
                    name: "isAdmin",
                    valuePropName: "checked",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib_checkbox/* default */.Z, {
                        children: "Админстратор"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                    wrapperCol: {
                        offset: 8,
                        span: 16
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                        type: "primary",
                        htmlType: "submit",
                        children: "Регистрация"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/modalLoginRegistrat/ModalComponent.js






const ModalComponent = ({ open, setOpen, fromPage })=>{
    const [isAccount, setIsAccount] = (0,react_.useState)(false);
    const handleCancel = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(modal/* default */.Z, {
        open: open,
        title: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: "text-2xl font-bold",
            children: isAccount ? "Регистрация" : "Вход"
        }),
        centered: true,
        footer: null,
        // onOk={handleOk}
        onCancel: handleCancel,
        children: [
            !isAccount && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-extralight mb-3",
                        children: "Для доступа в Ваш личный кабинет введите e-mail."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(formLogin_FormLogin, {
                        handleCancel: handleCancel,
                        fromPage: fromPage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Нет аккаунта?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                        type: "link",
                        onClick: ()=>{
                            setIsAccount(true);
                            handleCancel();
                            setTimeout(()=>{
                                setOpen(true);
                            }, 0.5);
                        },
                        style: {
                            backgroundColor: "transparent"
                        },
                        children: "Зарегистрироваться"
                    })
                ]
            }),
            isAccount && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-extralight mb-3",
                        children: "Для доступа в Ваш личный кабинет введите e-mail."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FormRegister, {
                        handleCancel: handleCancel
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Есть аккаунт?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                        type: "link",
                        onClick: ()=>{
                            setIsAccount(false);
                            handleCancel();
                            setTimeout(()=>{
                                setOpen(true);
                            }, 0.7);
                        },
                        style: {
                            backgroundColor: "transparent"
                        },
                        children: "Вход"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const modalLoginRegistrat_ModalComponent = (ModalComponent);

// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/index.js
var dist = __webpack_require__(6121);
// EXTERNAL MODULE: ./node_modules/antd/lib/drawer/index.js
var drawer = __webpack_require__(14981);
// EXTERNAL MODULE: ./constans/animation/AnimationConst.js
var AnimationConst = __webpack_require__(74516);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./transliterate/transliterate.js
var transliterate = __webpack_require__(4407);
;// CONCATENATED MODULE: ./components/navBarMenu/drawerMenu/DrawerMenu.js
// "use client"






// import { Avatar } from 'antd'

// import CyrillicToTranslit from 'cyrillic-to-translit-js'








const DrawerMenu = (0,dist.observer)(({ setOpenMenu, openMenu, exit, showModal, imgAnimation, open, setOpen })=>{
    const { user } = (0,react_.useContext)(MyContextProvider.MyContext);
    const [childrenDrawer, setChildrenDrawer] = (0,react_.useState)(false);
    // const cyrillicToTranslit = new CyrillicToTranslit()
    const [isUpdate, setIsUpdate] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setIsUpdate((i)=>!i);
    }, [
        user.isAuth,
        user.userData,
        user
    ]);
    const onClose = ()=>{
        setOpenMenu(false);
    };
    const showChildrenDrawer = ()=>{
        setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = ()=>{
        setChildrenDrawer(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(drawer/* default */.Z, {
                title: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "uppercase mb-0 text-lg tracking-wider",
                    children: "Меню"
                }),
                onClose: onClose,
                open: openMenu,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "h-full px-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                            initial: "hidden",
                            whileInView: "visible",
                            className: "flex flex-col justify-between h-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "tracking-wider text-[#191c1d] uppercase text-sm",
                                        children: [
                                            Constans/* navBar */.ny.map((el)=>{
                                                if (el.key === 1) {
                                                    if (user?.userData?.isAdmin) {
                                                        return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.li, {
                                                            variants: AnimationConst/* yCustomAnimation2 */.Zo,
                                                            custom: el.key,
                                                            className: "mb-4",
                                                            onClick: onClose,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: `${(0,transliterate/* transliterate */.R)(el.link)}`,
                                                                className: "           relative           before:border-b           before:border-black           before:transition-all           before:duration-300            before:ease-in-out           before:absolute            before:-bottom-1            before:h-0           hover:before:h-full           before:w-0           hover:before:w-full           ",
                                                                children: el.label
                                                            })
                                                        }, el.key);
                                                    }
                                                } else {
                                                    return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.li, {
                                                        variants: AnimationConst/* yCustomAnimation2 */.Zo,
                                                        custom: el.key,
                                                        className: "mb-4",
                                                        onClick: onClose,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                            href: `${(0,transliterate/* transliterate */.R)(el.link)}`,
                                                            className: "           relative           before:border-b           before:border-black           before:transition-all           before:duration-300            before:ease-in-out           before:absolute            before:-bottom-1            before:h-0           hover:before:h-full           before:w-0           hover:before:w-full           ",
                                                            children: [
                                                                el.label,
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "lowercase text-xs block",
                                                                    children: el.span && el.span
                                                                })
                                                            ]
                                                        })
                                                    }, el.key);
                                                }
                                            }),
                                            user.isAuth ? /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.li, {
                                                variants: AnimationConst/* yCustomAnimation2 */.Zo,
                                                custom: 18,
                                                onClick: onClose,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(ExportOutlined/* default */.Z, {
                                                    onClick: exit
                                                })
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.li, {
                                                variants: AnimationConst/* yCustomAnimation2 */.Zo,
                                                custom: 18,
                                                onClick: showModal,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(ImportOutlined/* default */.Z, {
                                                    onClick: onClose
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                                    variants: imgAnimation,
                                    custom: 16,
                                    className: "text-center w-full",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: logo2/* default */.Z,
                                                className: "border-lime-600 shadow-2xl rounded-full w-20 mx-auto",
                                                alt: "Аватар психолога Ирзуновой Марии"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "uppercase font-extrabold text-xl text-[#191c1d] mb-2",
                                                children: "мария ирзунова"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "uppercase font-light text-xs text-[#191c1d] mb-2",
                                                children: "психолог"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(drawer/* default */.Z, {
                        title: "Two-level Drawer",
                        width: 320,
                        onClose: onChildrenDrawerClose,
                        open: childrenDrawer,
                        children: "This is two-level drawer"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modalLoginRegistrat_ModalComponent, {
                open: open,
                setOpen: setOpen
            })
        ]
    });
});
/* harmony default export */ const drawerMenu_DrawerMenu = (DrawerMenu);

// EXTERNAL MODULE: ./constans/constScreens.js
var constScreens = __webpack_require__(7214);
;// CONCATENATED MODULE: ./components/navBarMenu/NavBarMenu.js
/* __next_internal_client_entry_do_not_use__ NavBarMenu auto */ 





// import CyrillicToTranslit from 'cyrillic-to-translit-js'










const linkAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: (custom)=>({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1
            }
        })
};
const imgAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: (custom)=>({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1,
                duration: 1
            }
        })
};
const NavBarMenu = (0,dist.observer)(()=>{
    // const cyrillicToTranslit = new CyrillicToTranslit()
    const [open, setOpen] = (0,react_.useState)(false);
    const { user } = (0,react_.useContext)(MyContextProvider.MyContext);
    const [isUpdate, setIsUpdate] = (0,react_.useState)(false);
    const screens = (0,constScreens/* useScreens */.OP)();
    const [openMenu, setOpenMenu] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setIsUpdate((i)=>!i);
    }, [
        user.isAuth,
        user.userData,
        user
    ]);
    const showDrawer = ()=>{
        setOpenMenu(true);
    };
    const showModal = ()=>{
        setOpen(true);
    };
    const exit = ()=>{
        localStorage.removeItem("token_psy");
        user.setIsAuth(false);
        user.setUser(false);
        user.setUserData({});
    };
    // console.log('screens:', screens)
    return screens.lg ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-1/5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "bg-[#cdcecf]    h-screen fixed top-0   left-0 pl-10 pr-10 pt-20 pb-2   border-r border-[#bcbdbe]   ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    className: "flex flex-col justify-between h-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "tracking-wider text-[#191c1d] uppercase text-sm",
                                children: [
                                    Constans/* navBar */.ny.map((el)=>{
                                        if (el.key === 1) {
                                            if (user?.userData?.isAdmin) {
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    variants: linkAnimation,
                                                    custom: el.key,
                                                    className: "mb-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `${(0,transliterate/* transliterate */.R)(el.link)}`,
                                                        className: "           relative           before:border-b           before:border-black           before:transition-all           before:duration-300            before:ease-in-out           before:absolute            before:-bottom-1            before:h-0           hover:before:h-full           before:w-0           hover:before:w-full           ",
                                                        children: el.label
                                                    })
                                                }, el.key);
                                            }
                                        } else {
                                            return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.li, {
                                                variants: linkAnimation,
                                                custom: el.key,
                                                className: "mb-3",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: `${(0,transliterate/* transliterate */.R)(el.link)}`,
                                                    className: "           relative           before:border-b           before:border-black           before:transition-all           before:duration-300            before:ease-in-out           before:absolute            before:-bottom-1            before:h-0           hover:before:h-full           before:w-0           hover:before:w-full           ",
                                                    children: [
                                                        el.label,
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "lowercase text-xs block",
                                                            children: el.span && el.span
                                                        })
                                                    ]
                                                })
                                            }, el.key);
                                        }
                                    }),
                                    user.isAuth ? /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.li, {
                                        variants: linkAnimation,
                                        custom: 20,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ExportOutlined/* default */.Z, {
                                            onClick: exit
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.li, {
                                        variants: linkAnimation,
                                        custom: 20,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ImportOutlined/* default */.Z, {
                                            onClick: showModal
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                            variants: imgAnimation,
                            custom: 16,
                            className: "text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: logo2/* default */.Z,
                                        className: "border-lime-600 shadow-2xl rounded-full w-20 mx-auto",
                                        alt: "Аватар психолога Ирзуновой Марии"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "uppercase font-extrabold text-xl text-[#191c1d] mb-2",
                                        children: "мария ирзунова"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "uppercase font-light text-xs text-[#191c1d] mb-2",
                                        children: "психолог"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modalLoginRegistrat_ModalComponent, {
                open: open,
                setOpen: setOpen
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed top-3 right-4 p-2 border z-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx(MenuOutlined/* default */.Z, {
                    className: "text-3xl",
                    onClick: showDrawer
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(drawerMenu_DrawerMenu, {
                setOpenMenu: setOpenMenu,
                openMenu: openMenu,
                exit: exit,
                showModal: showModal,
                imgAnimation: imgAnimation,
                open: open,
                setOpen: setOpen
            })
        ]
    });
});


/***/ }),

/***/ 24092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _H: () => (/* binding */ itemsSection),
  ny: () => (/* binding */ navBar),
  rw: () => (/* binding */ textCollapse)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./public/images/imgSection/infertility.jpg
/* harmony default export */ const infertility = ({"src":"/_next/static/media/infertility.23158c09.jpg","height":667,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAABBAMAAAAAAAAAAAAAAAAAAQIREgMhUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqNnNyXlZjugASP/Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/imgSection/family.jpg
/* harmony default export */ const family = ({"src":"/_next/static/media/family.fbbed38f.jpg","height":667,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBQQRBhUhMf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AJVlxZ5/HuyjsMiCVk5xmAODmtAAdvWvd/PUREWHX//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/imgSection/child.jpg
/* harmony default export */ const child = ({"src":"/_next/static/media/child.a2557717.jpg","height":666,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABAwMFAAAAAAAAAAAAAAABAAIRAwUSBBMhYYH/xAAVAQEBAAAAAAAAAAAAAAAAAAABBP/EABwRAAEEAwEAAAAAAAAAAAAAAAEAAgMSESJBwf/aAAwDAQACEQMRAD8AtWe+ZPotpaUUmtD8xlO4ZAk8dT6iIo59HYamAl9rcPgK/9k=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/imgSection/woman.jpg
/* harmony default export */ const woman = ({"src":"/_next/static/media/woman.9c4828e3.jpg","height":667,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIDEQQSBQZB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAwDAQACEQMRAD8Ahw/Zc84OPpIWPk1ZOBRZK3SgKqxVeFERErj/2Q==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/imgSection/clinik.jpg
/* harmony default export */ const clinik = ({"src":"/_next/static/media/clinik.f9fcb265.jpg","height":667,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABBAEFAAAAAAAAAAAAAAABAAIDBCESEyJBYf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIRIv/aAAwDAQACEQMRAD8Arq2nCGrbAG9PMHyvOdbhxB8wekREa30KiU5Wn//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/imgSection/depression.jpg
/* harmony default export */ const depression = ({"src":"/_next/static/media/depression.c93ee599.jpg","height":665,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAgMBAQAAAAAAAAAAAAABAwACERMhBRL/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAwDAQACEQMRAD8An0sVXyVAIrt+rnaenGByIiGqTH//2Q==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/HomeOutlined.js
var HomeOutlined = __webpack_require__(33516);
;// CONCATENATED MODULE: ./constans/Constans.js





// import psychologistTherapy from '../../public/images/imgSection/psychologistTherapy.jpg'



const itemsSection = [
    {
        id: 1,
        img: infertility,
        nav: "#бесплодие",
        title: "Не могу забеременеть",
        content: "У тебя нет больше сил и нужна помощь?",
        link: "/uslugi/besplodie",
        navId: "besplodie"
    },
    {
        id: 2,
        img: family,
        nav: "#семейные проблемы",
        title: "Проблемы в семейных отношениях",
        content: "У тебя нет больше сил и нужна помощь?",
        link: "/uslugi/semeinii-psikholog",
        navId: "semeiya"
    },
    {
        id: 3,
        img: child,
        nav: "#проблемы у подростка",
        title: "Проблемы у ребенка",
        content: "Не знаешь что дальше делать и тебе нужна помощь?",
        link: "/uslugi/psikholog-dlya-podrostka",
        navId: "podrostok"
    },
    {
        id: 4,
        img: woman,
        nav: "#женский психолог",
        title: "Проблемы у женщины",
        content: "Ты уcтала и нет больше сил?",
        link: "/uslugi/zhenskii-psikholog",
        navId: "zhenskij"
    },
    {
        id: 5,
        img: clinik,
        nav: "#клинический психолог",
        title: "Клинический психолог",
        content: "Трудно понять проблема со здоровьем или с психологический состоянием.",
        link: "/uslugi/klinicheskij-psikholog",
        navId: "klinicheskij"
    },
    {
        id: 6,
        img: depression,
        nav: "#депрессия",
        title: "Депрессия",
        content: "У Вас угнетённое, подавленное, тоскливое, тревожное, боязливое или безразличное — настроение и снижение или утрата способности получать удовольствие?",
        link: "/uslugi/lechenie-depressii",
        navId: "depressiya"
    }
];
const textCollapse = [
    {
        key: 1,
        label: "Кто такой психолог?",
        children: `Психолог - это специалист, который изучает человеческую психику и поведение. Основная задача психолога - помочь людям решить их психологические проблемы и улучшить качество жизни.

		Психолог может работать в разных областях:
		
		Клинический психолог помогает людям, у которых есть психические расстройства, например, депрессия, тревожные состояния. Он проводит психотерапию.
		Детский психолог работает с проблемами в развитии, обучении и поведении детей.
		Психолог-консультант консультирует людей по разным вопросам - семейным отношениям, кризисам, стрессам. Помогает найти решения и ведет к позитивным изменениям.
		Организационный психолог анализирует поведение сотрудников в компаниях, создает благоприятный психологический климат.
		Все психологи имеют специальное образование. Они умеют слушать, анализировать и находить оптимальные решения для каждого человека. Их работа направлена на то, чтобы помочь людям жить счастливее.`
    },
    {
        key: 2,
        label: "Кто такой клинический психолог?",
        children: `Клинический психолог – это специалист, который помогает людям, у которых есть эмоциональные или психологические проблемы. Он работает как детектив, исследуя, почему люди чувствуют себя так, как чувствуют, и почему ведут себя так, как ведут. Клинический психолог слушает людей, чтобы понять, что их беспокоит, и затем помогает им найти способы справляться с этими проблемами. Он может давать советы, учить методам расслабления и давать инструменты для улучшения психического состояния. В общем, клинический психолог помогает людям стать более счастливыми и находить путь к психическому благополучию.`
    },
    {
        key: 3,
        label: "В чем разница между психологом и клиническим психологом?",
        children: `Психолог – это как детектив, который изучает, как работает наш мозг и почему мы ведем себя так, как ведем. Он интересуется, как мы чувствуем себя, думаем и общаемся.

		Клинический психолог – это специальный вид психолога, который помогает людям, которые испытывают трудности в своих эмоциях и поведении. Он работает как доктор для психического здоровья, помогая тем, кто чувствует себя грустно, тревожно или неуравновешенно. Клинический психолог помогает таким людям найти способы улучшить свое психическое состояние и научиться лучше справляться с жизненными трудностями.`
    },
    {
        key: 4,
        label: "Чем занимается психолог?",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Вот короткое и понятное объяснение того, чем занимается психолог:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Изучает особенности человеческой психики и поведения"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Проводит тесты и опросы, чтобы выявить проблемы"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Анализирует мысли, эмоции, поступки людей"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Консультирует по личным, семейным и рабочим вопросам"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Помогает преодолеть стресс, тревогу, депрессию"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Лечит психологическими методами (психотерапия)"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Развивает навыки и способности"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Улучшает отношения в семье и коллективе"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Создаёт условия для гармоничного развития личности"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Проводит тренинги личностного роста"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Предотвращает и преодолевает психологические проблемы"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Помогает адаптироваться к трудным жизненным ситуациям"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "В целом психолог помогает людям решать проблемы и жить счастливее."
                })
            ]
        })
    },
    {
        key: 5,
        label: "С чем можно обратиться к психологу?",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Вы можете обратиться к психологу по разным вопросам:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Эмоциональное состояние: Если вы чувствуете грусть, тревогу, страх или другие неприятные эмоции, психолог поможет вам разобраться и справиться с ними."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Отношения: Если у вас есть трудности в отношениях с другими людьми – в семье, с друзьями или коллегами, психолог может помочь вам разрешить конфликты и улучшить общение."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Стресс и адаптация: Психолог поможет вам справиться со стрессом, связанным с изменениями в жизни, например, переездом, потерей работы или другими событиями."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Самооценка: Если у вас низкая самооценка или проблемы с уверенностью в себе, психолог может помочь вам почувствовать себя более уверенно."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Психосоматические проблемы: Это физические проблемы, вызванные стрессом и эмоциональными состояниями. Психолог может помочь разобраться в их причинах."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Личное развитие: Если вы хотите лучше понять себя, свои цели и желания, психолог может помочь вам на этом пути."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Психологическая поддержка: Временами все нуждаются в комфортной обстановке, чтобы выговориться и получить поддержку. Психолог может стать таким собеседником."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Важно помнить, что обращение к психологу – это нормально, и это может помочь вам справиться с разными жизненными ситуациями и чувствами."
                        })
                    ]
                })
            ]
        })
    },
    {
        key: 6,
        label: "В чем разница между психологом и психиатром?",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Вот основные отличия между психологом и психиатром:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Психолог имеет психологическое образование, психиатр - медицинское."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Психолог занимается изучением психики и поведения человека. Психиатр - диагностикой и лечением психических заболеваний."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Психолог проводит психодиагностику, консультирование, психотерапию. Психиатр назначает медикаментозное лечение, госпитализацию."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "К психологу обращаются за помощью при проблемах личностного характера. К психиатру направляют пациентов с явными признаками психического расстройства."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Психолог работает с психически здоровыми людьми, у которых могут быть временные проблемы. Психиатр лечит тех, у кого есть хронические психические заболевания."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Цель психолога - гармонизация личности, повышение устойчивости к стрессам. Психиатр направлен на биологическое лечение расстройств."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Психолог не имеет права выписывать лекарства и ставить психиатрические диагнозы. Психиатр может это делать."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Таким образом, психолог и психиатр работают в тесной взаимосвязи, но их роли, компетенции и методы отличаются. Они дополняют друг друга."
                })
            ]
        })
    },
    {
        key: 7,
        label: "Кто такой перинатальный психолог?",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mb-3",
                    children: "Перинатальный психолог помогает женщинам и семьям справляться с разнообразными эмоциональными и психологическими аспектами, связанными с материнством и родительством. Он может:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Помогать будущим родителям справляться с эмоциональными изменениями во время беременности, связанными с ожиданием и подготовкой к родам."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Оказывать поддержку женщинам, проходящим через сложности в беременности, например, в случае осложнений или потери ребенка."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Помогать решать эмоциональные и психологические вопросы, связанные с процессом родов, такие как тревога, страхи, неуверенность."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Поддерживать женщин и их партнеров в адаптации к новой роли родителей после рождения ребенка."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Работать с женщинами, сталкивающимися с постпартумной депрессией, тревожностью или другими эмоциональными проблемами после родов."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mt-6",
                    children: "Перинатальный психолог помогает создать психологически благоприятную среду для будущих и новых родителей, что способствует более гармоничному переживанию этого важного периода в жизни."
                })
            ]
        })
    }
];
const navBar = [
    {
        link: "/",
        label: /*#__PURE__*/ jsx_runtime_.jsx(HomeOutlined/* default */.Z, {
            className: "text-xl"
        }),
        key: 0
    },
    {
        link: "/админ",
        label: "Админка",
        key: 1
    },
    // {
    // 	link: '/бесплодие',
    // 	label: 'бесплодие',
    // 	key: 1
    // },
    // {
    // 	link: '/семейный-психолог',
    // 	label: 'семейный психолог',
    // 	key: 2
    // },
    // {
    // 	link: '/психолог-для-подростка',
    // 	label: 'подростковый психолог',
    // 	key: 3
    // },
    {
        link: "/услуги",
        label: "мои услуги",
        key: 2
    },
    {
        link: "/цена-психолога",
        label: "стоимость",
        key: 3
    },
    {
        link: "/запись-к-психологу",
        label: "записаться",
        key: 4
    },
    {
        link: "/блог",
        label: "мои статьи",
        key: 5
    },
    // {
    // 	link: '/группы',
    // 	label: 'группы',
    // 	key: 6
    // },
    {
        link: "/сми",
        label: "я в СМИ",
        key: 7
    },
    {
        link: "/мария-ирзунова",
        label: "обо мне",
        key: 8
    },
    {
        link: "/отзывы",
        label: "отзывы",
        key: 9
    },
    {
        link: "/контакты",
        label: "контакты",
        key: 10
    }
];


/***/ }),

/***/ 74516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zo: () => (/* binding */ yCustomAnimation2),
/* harmony export */   _u: () => (/* binding */ yCustomAnimation),
/* harmony export */   bj: () => (/* binding */ imageAnimation),
/* harmony export */   gq: () => (/* binding */ titleAnimation2),
/* harmony export */   k3: () => (/* binding */ yAnimation),
/* harmony export */   uN: () => (/* binding */ titleAnimation)
/* harmony export */ });
/* unused harmony exports xCustomAnimation, xCustomAnimation2, yAnimation2 */
const titleAnimation = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.4,
            duration: 0.6
        }
    }
};
const imageAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.9
        }
    }
};
const titleAnimation2 = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.4,
            duration: 0.6
        }
    }
};
const yAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5
        }
    }
};
const yCustomAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: (custom)=>({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 1
            }
        })
};
const yCustomAnimation2 = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: (custom)=>({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1,
                duration: 0.3
            }
        })
};
const xCustomAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom)=>({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 1
            }
        })
};
const xCustomAnimation2 = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: (custom)=>({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 1
            }
        })
};
const yAnimation2 = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 2
        }
    }
};


/***/ }),

/***/ 7214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OP: () => (/* binding */ useScreens)
/* harmony export */ });
/* unused harmony exports token, chat_id, uri_api */
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11228);

const token = "5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko";
const chat_id = "-1001794221917";
const uri_api = (/* unused pure expression or super */ null && (`https://api.telegram.org/bot${token}/sendMessage`));
const { useBreakpoint } = antd_lib_grid__WEBPACK_IMPORTED_MODULE_0__["default"];
const useScreens = ()=>{
    return useBreakpoint();
};


/***/ }),

/***/ 28262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MyContext: () => (/* binding */ MyContext),
  MyContextProvider: () => (/* binding */ MyContextProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.cjs.production.min.js
var mobx_cjs_production_min = __webpack_require__(66171);
;// CONCATENATED MODULE: ./store/UserStore.js

class UserStore {
    constructor(){
        this._data = {};
        this._isAuth = false;
        this._user = {};
        this._userData = {};
        (0,mobx_cjs_production_min.makeAutoObservable)(this);
    }
    setData(data) {
        this._data = data;
    }
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setUser(user) {
        this._user = user;
    }
    setUserData(data) {
        this._userData = data;
    }
    get data() {
        return this._data;
    }
    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
    get userData() {
        return this._userData;
    }
}

;// CONCATENATED MODULE: ./store/DataStore.js

class DataStore {
    constructor(){
        this._dataZapisi = [];
        this._resDataZapisi = [];
        this._newOtzyvy = [];
        (0,mobx_cjs_production_min.makeAutoObservable)(this);
    }
    setResDataZapisi(data) {
        this._resDataZapisi = data;
    }
    setNewOtzyvy(data) {
        this._newOtzyvy = data;
    }
    setDataZapisi(data) {
        this._dataZapisi = data;
    }
    get dataZapisi() {
        return this._dataZapisi;
    }
    get dataNewOtzyvy() {
        return this._newOtzyvy;
    }
    get resDataZapisi() {
        return this._resDataZapisi;
    }
} // {
 // 	id: 1,
 // 	title: 'Fox',
 // 	start: new Date('2023-02-11T13:00'),
 // 	end: new Date('2023-02-11T17:00'),
 // 	allDay: false,
 // 	tel: '+375333511597',
 // 	zapros: 'индивидуальная',
 // 	type:'online'
 // },
 // {
 // 	id: 2,
 // 	title: 'Fox2',
 // 	start: new Date('2023-02-12T13:00'),
 // 	end: new Date('2023-02-12T17:00'),
 // 	allDay: false,
 // 	tel: '+375333511597',
 // 	zapros: 'индивидуальная',
 // 	type:'offline'
 // },

// EXTERNAL MODULE: ./http/userAPI.js
var userAPI = __webpack_require__(48532);
// EXTERNAL MODULE: ./http/dataAPI.js
var dataAPI = __webpack_require__(92003);
// EXTERNAL MODULE: ./http/otzyvyAPI.js
var otzyvyAPI = __webpack_require__(31707);
;// CONCATENATED MODULE: ./contexts/MyContextProvider.js
/* __next_internal_client_entry_do_not_use__ MyContext,MyContextProvider auto */ 






// import { message } from 'antd';
const MyContext = /*#__PURE__*/ (0,react_.createContext)();
const MyContextProvider = ({ children })=>{
    const [state, setState] = (0,react_.useState)({});
    const [user] = (0,react_.useState)(new UserStore());
    const [dataApp] = (0,react_.useState)(new DataStore());
    const [newOtzyvy, setNewOtzyvy] = (0,react_.useState)(false);
    const updateState = (newState)=>{
        setState(newState);
    };
    (0,react_.useEffect)(()=>{
        (0,userAPI/* dataUser */.lZ)().then((data)=>{
            user.setUserData(data);
            if (data) {
                user.setIsAuth(true);
                user.setUser(true);
            }
        }).catch((data)=>{
            console.log('"\uD83D\uDE80 \uD83D\uDE80 \uD83D\uDE80dataUser err:', data);
        });
    }, [
        user
    ]);
    (0,react_.useEffect)(()=>{
        (0,dataAPI/* getAllZapisi */.gA)().then((data)=>{
            if (data.length) {
                dataApp.setDataZapisi(data);
            } else {
                console.log("Записей нет");
            }
        });
    }, [
        dataApp.resDataZapisi
    ]);
    (0,react_.useEffect)(()=>{
        (0,otzyvyAPI/* getNewOtzyvy */.Dz)().then((data)=>{
            dataApp.setNewOtzyvy(data);
            if (data.length) {
                setNewOtzyvy(true);
            }
        });
    }, [
        user.userData
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(MyContext.Provider, {
        value: {
            state,
            updateState,
            user,
            dataApp,
            newOtzyvy
        },
        children: children
    });
};



/***/ }),

/***/ 92003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BT: () => (/* binding */ createDataZapisi),
/* harmony export */   SL: () => (/* binding */ getDataZapisi),
/* harmony export */   am: () => (/* binding */ deleteOneZapisi),
/* harmony export */   gA: () => (/* binding */ getAllZapisi),
/* harmony export */   tN: () => (/* binding */ editDataZapisi)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(911);

const getDataZapisi = async ({ start })=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$authHost */ .G.get("api/zapisi/getAllZapisi", {
        params: {
            start
        }
    });
    return data;
};
const createDataZapisi = async (obj)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$authHost */ .G.post("/api/zapisi", obj);
    return data;
};
const editDataZapisi = async (obj)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$authHost */ .G.put("api/zapisi", obj);
    return data;
};
const deleteOneZapisi = async (id)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$authHost */ .G.delete("api/zapisi/" + id);
    return data;
};
const getAllZapisi = async ()=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.get("/api/zapisi");
    return data;
};


/***/ }),

/***/ 911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ $authHost),
/* harmony export */   y: () => (/* binding */ $host)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53071);

//_без авторизации
const $host = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: "https://vi-tech.site/"
});
const $authHost = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: "https://vi-tech.site/"
});
//.вставляю токен
const authInterceptor = (config)=>{
    config.headers.authorization = `Bearer ${localStorage.getItem("token_psy")}`;
    return config;
};
//_будет отробат перед каждым запросом и подстовлять токен 
$authHost.interceptors.request.use(authInterceptor);



/***/ }),

/***/ 31707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dz: () => (/* binding */ getNewOtzyvy),
/* harmony export */   RQ: () => (/* binding */ changeOtzyvy),
/* harmony export */   WW: () => (/* binding */ getAllOtzyvy),
/* harmony export */   YJ: () => (/* binding */ createOtzyvy)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(911);

const createOtzyvy = async (obj)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.post("/api/otzyvy", obj);
    return data;
};
const getAllOtzyvy = async ()=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.get("/api/otzyvy/all");
    return data;
};
const getNewOtzyvy = async ()=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$authHost */ .G.get("/api/otzyvy");
    console.log("\uD83D\uDE80 \uD83D\uDE80 \uD83D\uDE80  _ file: otzyvyAPI.js:13 _ getNewOtzyvy _ data:", data);
    return data;
};
const changeOtzyvy = async (obj)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$authHost */ .G.put("/api/otzyvy", obj);
    return data;
};


/***/ }),

/***/ 48532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c0: () => (/* binding */ resetPassword),
/* harmony export */   l9: () => (/* binding */ registration),
/* harmony export */   lZ: () => (/* binding */ dataUser),
/* harmony export */   x4: () => (/* binding */ login)
/* harmony export */ });
/* unused harmony exports check, getMyAccount, newPassword */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(911);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33802);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);


const registration = async (email, password, isAdmin)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.post("/api/user/register", {
        email,
        password,
        isAdmin
    }) //., role: 'ADMIN'
    ;
    localStorage.setItem("token_psy", data.token);
    return jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(data.token);
};
const login = async (email, password)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.post("/api/user/login", {
        email,
        password
    });
    localStorage.setItem("token_psy", data.token);
    return jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(data.token);
};
const check = async ()=>{
    const { data } = await $authHost.get("api/user/auth");
    localStorage.setItem("token_psy", data.token);
    return jwt_decode(data.token);
};
const dataUser = async ()=>{
    const token = localStorage.getItem("token_psy");
    if (token) {
        const dataToken = await jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
        const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.get("/api/user", {
            params: {
                id: dataToken.id
            }
        });
        return data;
    } else {
        return null;
    }
};
const getMyAccount = async ()=>{
    const { data } = await $authHost.get("api/user/account");
    return data;
};
const resetPassword = async (login)=>{
    const { data } = await _index__WEBPACK_IMPORTED_MODULE_0__/* .$host */ .y.get("api/user/reset", {
        params: {
            login
        }
    });
    return data;
};
const newPassword = async (obj)=>{
    const { data } = await $host.put("api/user/new/password", obj);
    localStorage.setItem("token_psy", data.token);
    return jwt_decode(data.token);
};


/***/ }),

/***/ 4407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ transliterate)
/* harmony export */ });
/* harmony import */ var cyrillic_to_translit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98738);
/* harmony import */ var cyrillic_to_translit_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cyrillic_to_translit_js__WEBPACK_IMPORTED_MODULE_0__);
// transliteration.js

const cyrillicToTranslit = new (cyrillic_to_translit_js__WEBPACK_IMPORTED_MODULE_0___default())();
function transliterate(text) {
    return cyrillicToTranslit.transform(text);
}


/***/ }),

/***/ 27499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21913);
;// CONCATENATED MODULE: ./components/footer/FooterComp.js

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/viktor/Programing/WORK/Masha_Next_production/components/footer/FooterComp.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["FooterComp"];

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(92817);
;// CONCATENATED MODULE: ./components/navBarMenu/NavBarMenu.js

const NavBarMenu_proxy = (0,module_proxy.createProxy)(String.raw`/Users/viktor/Programing/WORK/Masha_Next_production/components/navBarMenu/NavBarMenu.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: NavBarMenu_esModule, $$typeof: NavBarMenu_$$typeof } = NavBarMenu_proxy;
const NavBarMenu_default_ = NavBarMenu_proxy.default;

const NavBarMenu_e0 = NavBarMenu_proxy["NavBarMenu"];

;// CONCATENATED MODULE: ./contexts/MyContextProvider.js

const MyContextProvider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/viktor/Programing/WORK/Masha_Next_production/contexts/MyContextProvider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: MyContextProvider_esModule, $$typeof: MyContextProvider_$$typeof } = MyContextProvider_proxy;
const MyContextProvider_default_ = MyContextProvider_proxy.default;

const MyContextProvider_e0 = MyContextProvider_proxy["MyContext"];

const e1 = MyContextProvider_proxy["MyContextProvider"];

;// CONCATENATED MODULE: ./app/layout.js



// import { Inter } from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })
const metadata = {
    title: "Психолог в Минске | Ирзунова Мария",
    description: "Услуги психолога в Минске"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "ru",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e1, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NavBarMenu_e0, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                className: "sd:w-4/5 w-full pt-6",
                                children: children
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(e0, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 59303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo2.a7b6209e.webp","height":1000,"width":1000,"blurDataURL":"data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAQCdASoIAAgAAkA4JbACdADzd8JYAP3wONQcbCwetpXtsVluG+NwNZkJ4XceBkteUCHKpH/HV17BxJ+r1gYrz63dDqLsr6Rs0V+ygAA=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 92817:
/***/ (() => {



/***/ })

};
;