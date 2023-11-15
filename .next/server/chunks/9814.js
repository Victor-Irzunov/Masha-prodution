"use strict";
exports.id = 9814;
exports.ids = [9814];
exports.modules = {

/***/ 1994:
/***/ ((__unused_webpack_module, exports) => {


// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var FormOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z" } }, { "tag": "path", "attrs": { "d": "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z" } }] }, "name": "form", "theme": "outlined" };
exports["default"] = FormOutlined;


/***/ }),

/***/ 11537:
/***/ ((__unused_webpack_module, exports) => {


// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var RightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
exports["default"] = RightOutlined;


/***/ }),

/***/ 83405:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

const _RightOutlined = _interopRequireDefault(__webpack_require__(53541));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

const _default = _RightOutlined;
exports["default"] = _default;
module.exports = _default;

/***/ }),

/***/ 2578:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
var _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(18038));
var _FormOutlined = /*#__PURE__*/ _interop_require_default(__webpack_require__(1994));
var _AntdIcon = /*#__PURE__*/ _interop_require_default(__webpack_require__(52526));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var FormOutlined = function(props, ref) {
    return /*#__PURE__*/ _react.createElement(_AntdIcon.default, _object_spread_props(_object_spread({}, props), {
        ref: ref,
        icon: _FormOutlined.default
    }));
};
if (false) {}
var _default = /*#__PURE__*/ _react.forwardRef(FormOutlined);


/***/ }),

/***/ 53541:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
var _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(18038));
var _RightOutlined = /*#__PURE__*/ _interop_require_default(__webpack_require__(11537));
var _AntdIcon = /*#__PURE__*/ _interop_require_default(__webpack_require__(52526));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var RightOutlined = function(props, ref) {
    return /*#__PURE__*/ _react.createElement(_AntdIcon.default, _object_spread_props(_object_spread({}, props), {
        ref: ref,
        icon: _RightOutlined.default
    }));
};
if (false) {}
var _default = /*#__PURE__*/ _react.forwardRef(RightOutlined);


/***/ }),

/***/ 47459:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


"use client";

var _interopRequireDefault = (__webpack_require__(27574)["default"]);
var _interopRequireWildcard = (__webpack_require__(94600)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _RightOutlined = _interopRequireDefault(__webpack_require__(83405));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _rcCollapse = _interopRequireDefault(__webpack_require__(85876));
var _toArray = _interopRequireDefault(__webpack_require__(91401));
var _omit = _interopRequireDefault(__webpack_require__(56282));
var _motion = _interopRequireDefault(__webpack_require__(93898));
var _reactNode = __webpack_require__(89752);
var _warning = __webpack_require__(29077);
var _configProvider = __webpack_require__(24056);
var _useSize = _interopRequireDefault(__webpack_require__(66038));
var _CollapsePanel = _interopRequireDefault(__webpack_require__(91673));
var _style = _interopRequireDefault(__webpack_require__(46198));
const Collapse = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction,
    collapse
  } = React.useContext(_configProvider.ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    bordered = true,
    ghost,
    size: customizeSize,
    expandIconPosition = 'start',
    children,
    expandIcon
  } = props;
  const mergedSize = (0, _useSize.default)(ctx => {
    var _a;
    return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : ctx) !== null && _a !== void 0 ? _a : 'middle';
  });
  const prefixCls = getPrefixCls('collapse', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
  if (false) {}
  // Align with logic position
  const mergedExpandIconPosition = React.useMemo(() => {
    if (expandIconPosition === 'left') {
      return 'start';
    }
    return expandIconPosition === 'right' ? 'end' : expandIconPosition;
  }, [expandIconPosition]);
  const renderExpandIcon = function () {
    let panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const icon = expandIcon ? expandIcon(panelProps) : /*#__PURE__*/React.createElement(_RightOutlined.default, {
      rotate: panelProps.isActive ? 90 : undefined
    });
    return (0, _reactNode.cloneElement)(icon, () => ({
      className: (0, _classnames.default)(icon.props.className, `${prefixCls}-arrow`)
    }));
  };
  const collapseClassName = (0, _classnames.default)(`${prefixCls}-icon-position-${mergedExpandIconPosition}`, {
    [`${prefixCls}-borderless`]: !bordered,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-ghost`]: !!ghost,
    [`${prefixCls}-${mergedSize}`]: mergedSize !== 'middle'
  }, collapse === null || collapse === void 0 ? void 0 : collapse.className, className, rootClassName, hashId);
  const openMotion = Object.assign(Object.assign({}, (0, _motion.default)(rootPrefixCls)), {
    motionAppear: false,
    leavedClassName: `${prefixCls}-content-hidden`
  });
  const items = React.useMemo(() => children ? (0, _toArray.default)(children).map((child, index) => {
    var _a, _b;
    if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.disabled) {
      const key = (_b = child.key) !== null && _b !== void 0 ? _b : String(index);
      const {
        disabled,
        collapsible
      } = child.props;
      const childProps = Object.assign(Object.assign({}, (0, _omit.default)(child.props, ['disabled'])), {
        key,
        collapsible: collapsible !== null && collapsible !== void 0 ? collapsible : disabled ? 'disabled' : undefined
      });
      return (0, _reactNode.cloneElement)(child, childProps);
    }
    return child;
  }) : null, [children]);
  return wrapSSR( /*#__PURE__*/React.createElement(_rcCollapse.default, Object.assign({
    ref: ref,
    openMotion: openMotion
  }, (0, _omit.default)(props, ['rootClassName']), {
    expandIcon: renderExpandIcon,
    prefixCls: prefixCls,
    className: collapseClassName,
    style: Object.assign(Object.assign({}, collapse === null || collapse === void 0 ? void 0 : collapse.style), style)
  }), items));
});
if (false) {}
var _default = exports["default"] = Object.assign(Collapse, {
  Panel: _CollapsePanel.default
});

/***/ }),

/***/ 91673:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


"use client";

var _interopRequireDefault = (__webpack_require__(27574)["default"]);
var _interopRequireWildcard = (__webpack_require__(94600)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _rcCollapse = _interopRequireDefault(__webpack_require__(85876));
var _warning = __webpack_require__(29077);
var _configProvider = __webpack_require__(24056);
const CollapsePanel = /*#__PURE__*/React.forwardRef((props, ref) => {
  if (false) {}
  const {
    getPrefixCls
  } = React.useContext(_configProvider.ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    showArrow = true
  } = props;
  const prefixCls = getPrefixCls('collapse', customizePrefixCls);
  const collapsePanelClassName = (0, _classnames.default)({
    [`${prefixCls}-no-arrow`]: !showArrow
  }, className);
  return /*#__PURE__*/React.createElement(_rcCollapse.default.Panel, Object.assign({
    ref: ref
  }, props, {
    prefixCls: prefixCls,
    className: collapsePanelClassName
  }));
});
var _default = exports["default"] = CollapsePanel;

/***/ }),

/***/ 64579:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = (__webpack_require__(27574)["default"]);
__webpack_unused_export__ = ({
  value: true
});
exports["default"] = void 0;
var _Collapse = _interopRequireDefault(__webpack_require__(47459));
var _default = exports["default"] = _Collapse.default;

/***/ }),

/***/ 46198:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.genBaseStyle = exports["default"] = void 0;
var _style = __webpack_require__(59121);
var _motion = __webpack_require__(2843);
var _internal = __webpack_require__(66788);
const genBaseStyle = token => {
  const {
    componentCls,
    contentBg,
    padding,
    headerBg,
    headerPadding,
    collapseHeaderPaddingSM,
    collapseHeaderPaddingLG,
    collapsePanelBorderRadius,
    lineWidth,
    lineType,
    colorBorder,
    colorText,
    colorTextHeading,
    colorTextDisabled,
    fontSize,
    fontSizeLG,
    lineHeight,
    marginSM,
    paddingSM,
    paddingLG,
    paddingXS,
    motionDurationSlow,
    fontSizeIcon,
    contentPadding
  } = token;
  const borderBase = `${lineWidth}px ${lineType} ${colorBorder}`;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
      backgroundColor: headerBg,
      border: borderBase,
      borderBottom: 0,
      borderRadius: `${collapsePanelBorderRadius}px`,
      [`&-rtl`]: {
        direction: 'rtl'
      },
      [`& > ${componentCls}-item`]: {
        borderBottom: borderBase,
        [`&:last-child`]: {
          [`
            &,
            & > ${componentCls}-header`]: {
            borderRadius: `0 0 ${collapsePanelBorderRadius}px ${collapsePanelBorderRadius}px`
          }
        },
        [`> ${componentCls}-header`]: {
          position: 'relative',
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          padding: headerPadding,
          color: colorTextHeading,
          lineHeight,
          cursor: 'pointer',
          transition: `all ${motionDurationSlow}, visibility 0s`,
          [`> ${componentCls}-header-text`]: {
            flex: 'auto'
          },
          '&:focus': {
            outline: 'none'
          },
          // >>>>> Arrow
          [`${componentCls}-expand-icon`]: {
            height: fontSize * lineHeight,
            display: 'flex',
            alignItems: 'center',
            paddingInlineEnd: marginSM
          },
          [`${componentCls}-arrow`]: Object.assign(Object.assign({}, (0, _style.resetIcon)()), {
            fontSize: fontSizeIcon,
            svg: {
              transition: `transform ${motionDurationSlow}`
            }
          }),
          // >>>>> Text
          [`${componentCls}-header-text`]: {
            marginInlineEnd: 'auto'
          }
        },
        [`${componentCls}-header-collapsible-only`]: {
          cursor: 'default',
          [`${componentCls}-header-text`]: {
            flex: 'none',
            cursor: 'pointer'
          }
        },
        [`${componentCls}-icon-collapsible-only`]: {
          cursor: 'default',
          [`${componentCls}-expand-icon`]: {
            cursor: 'pointer'
          }
        }
      },
      [`${componentCls}-content`]: {
        color: colorText,
        backgroundColor: contentBg,
        borderTop: borderBase,
        [`& > ${componentCls}-content-box`]: {
          padding: contentPadding
        },
        [`&-hidden`]: {
          display: 'none'
        }
      },
      [`&-small`]: {
        [`> ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            padding: collapseHeaderPaddingSM,
            paddingInlineStart: paddingXS,
            [`> ${componentCls}-expand-icon`]: {
              // Arrow offset
              marginInlineStart: paddingSM - paddingXS
            }
          },
          [`> ${componentCls}-content > ${componentCls}-content-box`]: {
            padding: paddingSM
          }
        }
      },
      [`&-large`]: {
        [`> ${componentCls}-item`]: {
          fontSize: fontSizeLG,
          [`> ${componentCls}-header`]: {
            padding: collapseHeaderPaddingLG,
            paddingInlineStart: padding,
            [`> ${componentCls}-expand-icon`]: {
              height: fontSizeLG * lineHeight,
              // Arrow offset
              marginInlineStart: paddingLG - padding
            }
          },
          [`> ${componentCls}-content > ${componentCls}-content-box`]: {
            padding: paddingLG
          }
        }
      },
      [`${componentCls}-item:last-child`]: {
        [`> ${componentCls}-content`]: {
          borderRadius: `0 0 ${collapsePanelBorderRadius}px ${collapsePanelBorderRadius}px`
        }
      },
      [`& ${componentCls}-item-disabled > ${componentCls}-header`]: {
        [`
          &,
          & > .arrow
        `]: {
          color: colorTextDisabled,
          cursor: 'not-allowed'
        }
      },
      // ========================== Icon Position ==========================
      [`&${componentCls}-icon-position-end`]: {
        [`& > ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            [`${componentCls}-expand-icon`]: {
              order: 1,
              paddingInlineEnd: 0,
              paddingInlineStart: marginSM
            }
          }
        }
      }
    })
  };
};
exports.genBaseStyle = genBaseStyle;
const genArrowStyle = token => {
  const {
    componentCls
  } = token;
  const fixedSelector = `> ${componentCls}-item > ${componentCls}-header ${componentCls}-arrow svg`;
  return {
    [`${componentCls}-rtl`]: {
      [fixedSelector]: {
        transform: `rotate(180deg)`
      }
    }
  };
};
const genBorderlessStyle = token => {
  const {
    componentCls,
    headerBg,
    paddingXXS,
    colorBorder
  } = token;
  return {
    [`${componentCls}-borderless`]: {
      backgroundColor: headerBg,
      border: 0,
      [`> ${componentCls}-item`]: {
        borderBottom: `1px solid ${colorBorder}`
      },
      [`
        > ${componentCls}-item:last-child,
        > ${componentCls}-item:last-child ${componentCls}-header
      `]: {
        borderRadius: 0
      },
      [`> ${componentCls}-item:last-child`]: {
        borderBottom: 0
      },
      [`> ${componentCls}-item > ${componentCls}-content`]: {
        backgroundColor: 'transparent',
        borderTop: 0
      },
      [`> ${componentCls}-item > ${componentCls}-content > ${componentCls}-content-box`]: {
        paddingTop: paddingXXS
      }
    }
  };
};
const genGhostStyle = token => {
  const {
    componentCls,
    paddingSM
  } = token;
  return {
    [`${componentCls}-ghost`]: {
      backgroundColor: 'transparent',
      border: 0,
      [`> ${componentCls}-item`]: {
        borderBottom: 0,
        [`> ${componentCls}-content`]: {
          backgroundColor: 'transparent',
          border: 0,
          [`> ${componentCls}-content-box`]: {
            paddingBlock: paddingSM
          }
        }
      }
    }
  };
};
var _default = exports["default"] = (0, _internal.genComponentStyleHook)('Collapse', token => {
  const collapseToken = (0, _internal.mergeToken)(token, {
    collapseHeaderPaddingSM: `${token.paddingXS}px ${token.paddingSM}px`,
    collapseHeaderPaddingLG: `${token.padding}px ${token.paddingLG}px`,
    collapsePanelBorderRadius: token.borderRadiusLG
  });
  return [genBaseStyle(collapseToken), genBorderlessStyle(collapseToken), genGhostStyle(collapseToken), genArrowStyle(collapseToken), (0, _motion.genCollapseMotion)(collapseToken)];
}, token => ({
  headerPadding: `${token.paddingSM}px ${token.padding}px`,
  headerBg: token.colorFillAlter,
  contentPadding: `${token.padding}px 16px`,
  contentBg: token.colorBgContainer
}));

/***/ }),

/***/ 27712:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true,
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(
  __webpack_require__(77687),
);
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31974));
var _typeof2 = _interopRequireDefault(__webpack_require__(50426));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _useMergedState3 = _interopRequireDefault(__webpack_require__(35374));
var _warning = _interopRequireDefault(__webpack_require__(37162));
var _react = _interopRequireDefault(__webpack_require__(18038));
var _useItems = _interopRequireDefault(__webpack_require__(54349));
var _Panel = _interopRequireDefault(__webpack_require__(8552));
function getActiveKeysArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = (0, _typeof2.default)(currentActiveKey);
    currentActiveKey =
      activeKeyType === 'number' || activeKeyType === 'string' ? [currentActiveKey] : [];
  }
  return currentActiveKey.map(function (key) {
    return String(key);
  });
}
var Collapse = /*#__PURE__*/ _react.default.forwardRef(function (props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-collapse' : _props$prefixCls,
    _props$destroyInactiv = props.destroyInactivePanel,
    destroyInactivePanel = _props$destroyInactiv === void 0 ? false : _props$destroyInactiv,
    style = props.style,
    accordion = props.accordion,
    className = props.className,
    children = props.children,
    collapsible = props.collapsible,
    openMotion = props.openMotion,
    expandIcon = props.expandIcon,
    rawActiveKey = props.activeKey,
    defaultActiveKey = props.defaultActiveKey,
    _onChange = props.onChange,
    items = props.items;
  var collapseClassName = (0, _classnames.default)(prefixCls, className);
  var _useMergedState = (0, _useMergedState3.default)([], {
      value: rawActiveKey,
      onChange: function onChange(v) {
        return _onChange === null || _onChange === void 0 ? void 0 : _onChange(v);
      },
      defaultValue: defaultActiveKey,
      postState: getActiveKeysArray,
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    activeKey = _useMergedState2[0],
    setActiveKey = _useMergedState2[1];
  var onItemClick = function onItemClick(key) {
    return setActiveKey(function () {
      if (accordion) {
        return activeKey[0] === key ? [] : [key];
      }
      var index = activeKey.indexOf(key);
      var isActive = index > -1;
      if (isActive) {
        return activeKey.filter(function (item) {
          return item !== key;
        });
      }
      return [].concat((0, _toConsumableArray2.default)(activeKey), [key]);
    });
  };

  // ======================== Children ========================
  (0,
  _warning.default)(!children, '`children` will be removed in next major version. Please use `items` instead.');
  var mergedChildren = (0, _useItems.default)(items, children, {
    prefixCls: prefixCls,
    accordion: accordion,
    openMotion: openMotion,
    expandIcon: expandIcon,
    collapsible: collapsible,
    destroyInactivePanel: destroyInactivePanel,
    onItemClick: onItemClick,
    activeKey: activeKey,
  });

  // ======================== Render ========================
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      ref: ref,
      className: collapseClassName,
      style: style,
      role: accordion ? 'tablist' : undefined,
    },
    mergedChildren,
  );
});
var _default = Object.assign(Collapse, {
  /**
   * @deprecated use `items` instead, will be removed in `v4.0.0`
   */
  Panel: _Panel.default,
});
exports["default"] = _default;


/***/ }),

/***/ 8552:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true,
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(75166));
var _objectWithoutProperties2 = _interopRequireDefault(
  __webpack_require__(46181),
);
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _rcMotion = _interopRequireDefault(__webpack_require__(45016));
var _KeyCode = _interopRequireDefault(__webpack_require__(41696));
var _react = _interopRequireDefault(__webpack_require__(18038));
var _PanelContent = _interopRequireDefault(__webpack_require__(30324));
var _excluded = [
  'showArrow',
  'headerClass',
  'isActive',
  'onItemClick',
  'forceRender',
  'className',
  'prefixCls',
  'collapsible',
  'accordion',
  'panelKey',
  'extra',
  'header',
  'expandIcon',
  'openMotion',
  'destroyInactivePanel',
  'children',
];
var CollapsePanel = /*#__PURE__*/ _react.default.forwardRef(function (props, ref) {
  var _classNames, _classNames2;
  var _props$showArrow = props.showArrow,
    showArrow = _props$showArrow === void 0 ? true : _props$showArrow,
    headerClass = props.headerClass,
    isActive = props.isActive,
    onItemClick = props.onItemClick,
    forceRender = props.forceRender,
    className = props.className,
    prefixCls = props.prefixCls,
    collapsible = props.collapsible,
    accordion = props.accordion,
    panelKey = props.panelKey,
    extra = props.extra,
    header = props.header,
    expandIcon = props.expandIcon,
    openMotion = props.openMotion,
    destroyInactivePanel = props.destroyInactivePanel,
    children = props.children,
    resetProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var disabled = collapsible === 'disabled';
  var collapsibleHeader = collapsible === 'header';
  var collapsibleIcon = collapsible === 'icon';
  var ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean';
  var handleItemClick = function handleItemClick() {
    onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(panelKey);
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (
      e.key === 'Enter' ||
      e.keyCode === _KeyCode.default.ENTER ||
      e.which === _KeyCode.default.ENTER
    ) {
      handleItemClick();
    }
  };

  // ======================== Icon ========================
  var iconNode =
    typeof expandIcon === 'function'
      ? expandIcon(props)
      : /*#__PURE__*/ _react.default.createElement('i', {
          className: 'arrow',
        });
  if (iconNode) {
    iconNode = /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-expand-icon'),
        onClick: ['header', 'icon'].includes(collapsible) ? handleItemClick : undefined,
      },
      iconNode,
    );
  }
  var collapsePanelClassNames = (0, _classnames.default)(
    ((_classNames = {}),
    (0, _defineProperty2.default)(_classNames, ''.concat(prefixCls, '-item'), true),
    (0, _defineProperty2.default)(_classNames, ''.concat(prefixCls, '-item-active'), isActive),
    (0, _defineProperty2.default)(_classNames, ''.concat(prefixCls, '-item-disabled'), disabled),
    _classNames),
    className,
  );
  var headerClassName = (0, _classnames.default)(
    headerClass,
    ((_classNames2 = {}),
    (0, _defineProperty2.default)(_classNames2, ''.concat(prefixCls, '-header'), true),
    (0, _defineProperty2.default)(
      _classNames2,
      ''.concat(prefixCls, '-header-collapsible-only'),
      collapsibleHeader,
    ),
    (0, _defineProperty2.default)(
      _classNames2,
      ''.concat(prefixCls, '-icon-collapsible-only'),
      collapsibleIcon,
    ),
    _classNames2),
  );

  // ======================== HeaderProps ========================
  var headerProps = {
    className: headerClassName,
    'aria-expanded': isActive,
    'aria-disabled': disabled,
    onKeyDown: handleKeyDown,
  };
  if (!collapsibleHeader && !collapsibleIcon) {
    headerProps.onClick = handleItemClick;
    headerProps.role = accordion ? 'tab' : 'button';
    headerProps.tabIndex = disabled ? -1 : 0;
  }

  // ======================== Render ========================
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    (0, _extends2.default)({}, resetProps, {
      ref: ref,
      className: collapsePanelClassNames,
    }),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      headerProps,
      showArrow && iconNode,
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-header-text'),
          onClick: collapsible === 'header' ? handleItemClick : undefined,
        },
        header,
      ),
      ifExtraExist &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: ''.concat(prefixCls, '-extra'),
          },
          extra,
        ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      _rcMotion.default,
      (0, _extends2.default)(
        {
          visible: isActive,
          leavedClassName: ''.concat(prefixCls, '-content-hidden'),
        },
        openMotion,
        {
          forceRender: forceRender,
          removeOnLeave: destroyInactivePanel,
        },
      ),
      function (_ref, motionRef) {
        var motionClassName = _ref.className,
          motionStyle = _ref.style;
        return /*#__PURE__*/ _react.default.createElement(
          _PanelContent.default,
          {
            ref: motionRef,
            prefixCls: prefixCls,
            className: motionClassName,
            style: motionStyle,
            isActive: isActive,
            forceRender: forceRender,
            role: accordion ? 'tabpanel' : void 0,
          },
          children,
        );
      },
    ),
  );
});
var _default = CollapsePanel;
exports["default"] = _default;


/***/ }),

/***/ 30324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true,
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(75166));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31974));
var _classnames2 = _interopRequireDefault(__webpack_require__(71198));
var _react = _interopRequireDefault(__webpack_require__(18038));
var PanelContent = /*#__PURE__*/ _react.default.forwardRef(function (props, ref) {
  var _classnames;
  var prefixCls = props.prefixCls,
    forceRender = props.forceRender,
    className = props.className,
    style = props.style,
    children = props.children,
    isActive = props.isActive,
    role = props.role;
  var _React$useState = _react.default.useState(isActive || forceRender),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    rendered = _React$useState2[0],
    setRendered = _React$useState2[1];
  _react.default.useEffect(
    function () {
      if (forceRender || isActive) {
        setRendered(true);
      }
    },
    [forceRender, isActive],
  );
  if (!rendered) {
    return null;
  }
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      ref: ref,
      className: (0, _classnames2.default)(
        ''.concat(prefixCls, '-content'),
        ((_classnames = {}),
        (0, _defineProperty2.default)(
          _classnames,
          ''.concat(prefixCls, '-content-active'),
          isActive,
        ),
        (0, _defineProperty2.default)(
          _classnames,
          ''.concat(prefixCls, '-content-inactive'),
          !isActive,
        ),
        _classnames),
        className,
      ),
      style: style,
      role: role,
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-content-box'),
      },
      children,
    ),
  );
});
PanelContent.displayName = 'PanelContent';
var _default = PanelContent;
exports["default"] = _default;


/***/ }),

/***/ 54349:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true,
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutProperties2 = _interopRequireDefault(
  __webpack_require__(46181),
);
var _toArray = _interopRequireDefault(__webpack_require__(91401));
var _react = _interopRequireDefault(__webpack_require__(18038));
var _Panel = _interopRequireDefault(__webpack_require__(8552));
var _excluded = ['children', 'label', 'key', 'collapsible', 'onItemClick', 'destroyInactivePanel'];
var convertItemsToNodes = function convertItemsToNodes(items, props) {
  var prefixCls = props.prefixCls,
    accordion = props.accordion,
    collapsible = props.collapsible,
    destroyInactivePanel = props.destroyInactivePanel,
    onItemClick = props.onItemClick,
    activeKey = props.activeKey,
    openMotion = props.openMotion,
    expandIcon = props.expandIcon;
  return items.map(function (item, index) {
    var children = item.children,
      label = item.label,
      rawKey = item.key,
      rawCollapsible = item.collapsible,
      rawOnItemClick = item.onItemClick,
      rawDestroyInactivePanel = item.destroyInactivePanel,
      restProps = (0, _objectWithoutProperties2.default)(item, _excluded);

    // You may be puzzled why you want to convert them all into strings, me too.
    // Maybe: https://github.com/react-component/collapse/blob/aac303a8b6ff30e35060b4f8fecde6f4556fcbe2/src/Collapse.tsx#L15
    var key = String(rawKey !== null && rawKey !== void 0 ? rawKey : index);
    var mergeCollapsible =
      rawCollapsible !== null && rawCollapsible !== void 0 ? rawCollapsible : collapsible;
    var mergeDestroyInactivePanel =
      rawDestroyInactivePanel !== null && rawDestroyInactivePanel !== void 0
        ? rawDestroyInactivePanel
        : destroyInactivePanel;
    var handleItemClick = function handleItemClick(value) {
      if (mergeCollapsible === 'disabled') return;
      onItemClick(value);
      rawOnItemClick === null || rawOnItemClick === void 0 ? void 0 : rawOnItemClick(value);
    };
    var isActive = false;
    if (accordion) {
      isActive = activeKey[0] === key;
    } else {
      isActive = activeKey.indexOf(key) > -1;
    }
    return /*#__PURE__*/ _react.default.createElement(
      _Panel.default,
      (0, _extends2.default)({}, restProps, {
        prefixCls: prefixCls,
        key: key,
        panelKey: key,
        isActive: isActive,
        accordion: accordion,
        openMotion: openMotion,
        expandIcon: expandIcon,
        header: label,
        collapsible: mergeCollapsible,
        onItemClick: handleItemClick,
        destroyInactivePanel: mergeDestroyInactivePanel,
      }),
      children,
    );
  });
};

/**
 * @deprecated The next major version will be removed
 */
var getNewChild = function getNewChild(child, index, props) {
  if (!child) return null;
  var prefixCls = props.prefixCls,
    accordion = props.accordion,
    collapsible = props.collapsible,
    destroyInactivePanel = props.destroyInactivePanel,
    onItemClick = props.onItemClick,
    activeKey = props.activeKey,
    openMotion = props.openMotion,
    expandIcon = props.expandIcon;
  var key = child.key || String(index);
  var _child$props = child.props,
    header = _child$props.header,
    headerClass = _child$props.headerClass,
    childDestroyInactivePanel = _child$props.destroyInactivePanel,
    childCollapsible = _child$props.collapsible,
    childOnItemClick = _child$props.onItemClick;
  var isActive = false;
  if (accordion) {
    isActive = activeKey[0] === key;
  } else {
    isActive = activeKey.indexOf(key) > -1;
  }
  var mergeCollapsible =
    childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
  var handleItemClick = function handleItemClick(value) {
    if (mergeCollapsible === 'disabled') return;
    onItemClick(value);
    childOnItemClick === null || childOnItemClick === void 0 ? void 0 : childOnItemClick(value);
  };
  var childProps = {
    key: key,
    panelKey: key,
    header: header,
    headerClass: headerClass,
    isActive: isActive,
    prefixCls: prefixCls,
    destroyInactivePanel:
      childDestroyInactivePanel !== null && childDestroyInactivePanel !== void 0
        ? childDestroyInactivePanel
        : destroyInactivePanel,
    openMotion: openMotion,
    accordion: accordion,
    children: child.props.children,
    onItemClick: handleItemClick,
    expandIcon: expandIcon,
    collapsible: mergeCollapsible,
  };

  // https://github.com/ant-design/ant-design/issues/20479
  if (typeof child.type === 'string') {
    return child;
  }
  Object.keys(childProps).forEach(function (propName) {
    if (typeof childProps[propName] === 'undefined') {
      delete childProps[propName];
    }
  });
  return /*#__PURE__*/ _react.default.cloneElement(child, childProps);
};
function useItems(items, rawChildren, props) {
  if (Array.isArray(items)) {
    return convertItemsToNodes(items, props);
  }
  return (0, _toArray.default)(rawChildren).map(function (child, index) {
    return getNewChild(child, index, props);
  });
}
var _default = useItems;
exports["default"] = _default;


/***/ }),

/***/ 85876:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true,
}));
exports["default"] = exports.Panel = void 0;
var _Collapse = _interopRequireDefault(__webpack_require__(27712));
var _default = _Collapse.default;
/**
 * @deprecated use `items` instead, will be removed in `v4.0.0`
 */
exports["default"] = _default;
var Panel = _Collapse.default.Panel;
exports.Panel = Panel;


/***/ })

};
;