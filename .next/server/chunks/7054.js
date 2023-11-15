"use strict";
exports.id = 7054;
exports.ids = [7054];
exports.modules = {

/***/ 89979:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isPresetSize = isPresetSize;
exports.isValidGapNumber = isValidGapNumber;
function isPresetSize(size) {
  return ['small', 'middle', 'large'].includes(size);
}
function isValidGapNumber(size) {
  if (!size) {
    // The case of size = 0 is deliberately excluded here, because the default value of the gap attribute in CSS is 0, so if the user passes 0 in, we can directly ignore it.
    return false;
  }
  return typeof size === 'number' && !Number.isNaN(size);
}

/***/ }),

/***/ 6965:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


"use client";

var _interopRequireWildcard = (__webpack_require__(94600)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _context = __webpack_require__(21909);
const Item = _ref => {
  let {
    className,
    index,
    children,
    split,
    style
  } = _ref;
  const {
    latestIndex
  } = React.useContext(_context.SpaceContext);
  if (children === null || children === undefined) {
    return null;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/React.createElement("span", {
    className: `${className}-split`
  }, split));
};
var _default = exports["default"] = Item;

/***/ }),

/***/ 21909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(27574)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SpaceContextProvider = exports.SpaceContext = void 0;
var _react = _interopRequireDefault(__webpack_require__(18038));
const SpaceContext = exports.SpaceContext = /*#__PURE__*/_react.default.createContext({
  latestIndex: 0
});
const SpaceContextProvider = exports.SpaceContextProvider = SpaceContext.Provider;

/***/ }),

/***/ 77054:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = (__webpack_require__(27574)["default"]);
var _interopRequireWildcard = (__webpack_require__(94600)["default"]);
__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _context.SpaceContext;
  }
});
exports.ZP = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(71198));
var _toArray = _interopRequireDefault(__webpack_require__(91401));
var _gapSize = __webpack_require__(89979);
var _configProvider = __webpack_require__(24056);
var _Compact = _interopRequireDefault(__webpack_require__(894));
var _context = __webpack_require__(21909);
var _Item = _interopRequireDefault(__webpack_require__(6965));
var _style = _interopRequireDefault(__webpack_require__(19724));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Space = /*#__PURE__*/React.forwardRef((props, ref) => {
  var _a, _b;
  const {
    getPrefixCls,
    space,
    direction: directionConfig
  } = React.useContext(_configProvider.ConfigContext);
  const {
      size = (space === null || space === void 0 ? void 0 : space.size) || 'small',
      align,
      className,
      rootClassName,
      children,
      direction = 'horizontal',
      prefixCls: customizePrefixCls,
      split,
      style,
      wrap = false,
      classNames: customClassNames,
      styles
    } = props,
    otherProps = __rest(props, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]);
  const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [size, size];
  const isPresetVerticalSize = (0, _gapSize.isPresetSize)(verticalSize);
  const isPresetHorizontalSize = (0, _gapSize.isPresetSize)(horizontalSize);
  const isValidVerticalSize = (0, _gapSize.isValidGapNumber)(verticalSize);
  const isValidHorizontalSize = (0, _gapSize.isValidGapNumber)(horizontalSize);
  const childNodes = (0, _toArray.default)(children, {
    keepEmpty: true
  });
  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const prefixCls = getPrefixCls('space', customizePrefixCls);
  const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
  const cls = (0, _classnames.default)(prefixCls, space === null || space === void 0 ? void 0 : space.className, hashId, `${prefixCls}-${direction}`, {
    [`${prefixCls}-rtl`]: directionConfig === 'rtl',
    [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
    [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
    [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize
  }, className, rootClassName);
  const itemClassName = (0, _classnames.default)(`${prefixCls}-item`, (_a = customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.item) !== null && _a !== void 0 ? _a : (_b = space === null || space === void 0 ? void 0 : space.classNames) === null || _b === void 0 ? void 0 : _b.item);
  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child, i) => {
    var _a, _b;
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    const key = child && child.key || `${itemClassName}-${i}`;
    return /*#__PURE__*/React.createElement(_Item.default, {
      className: itemClassName,
      key: key,
      index: i,
      split: split,
      style: (_a = styles === null || styles === void 0 ? void 0 : styles.item) !== null && _a !== void 0 ? _a : (_b = space === null || space === void 0 ? void 0 : space.styles) === null || _b === void 0 ? void 0 : _b.item
    }, child);
  });
  const spaceContext = React.useMemo(() => ({
    latestIndex
  }), [latestIndex]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  const gapStyle = {};
  if (wrap) {
    gapStyle.flexWrap = 'wrap';
  }
  if (!isPresetHorizontalSize && isValidHorizontalSize) {
    gapStyle.columnGap = horizontalSize;
  }
  if (!isPresetVerticalSize && isValidVerticalSize) {
    gapStyle.rowGap = verticalSize;
  }
  return wrapSSR( /*#__PURE__*/React.createElement("div", Object.assign({
    ref: ref,
    className: cls,
    style: Object.assign(Object.assign(Object.assign({}, gapStyle), space === null || space === void 0 ? void 0 : space.style), style)
  }, otherProps), /*#__PURE__*/React.createElement(_context.SpaceContextProvider, {
    value: spaceContext
  }, nodes)));
});
if (false) {}
const CompoundedSpace = Space;
CompoundedSpace.Compact = _Compact.default;
var _default = exports.ZP = CompoundedSpace;

/***/ })

};
;