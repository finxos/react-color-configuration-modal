!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-dom"),require("react-color-configuration"),require("react-draggable")):"function"==typeof define&&define.amd?define(["react","prop-types","react-dom","react-color-configuration","react-draggable"],t):"object"==typeof exports?exports.BoilerplateReactComponent=t(require("react"),require("prop-types"),require("react-dom"),require("react-color-configuration"),require("react-draggable")):e.BoilerplateReactComponent=t(e.react,e["prop-types"],e["react-dom"],e["react-color-configuration"],e["react-draggable"])}(window,function(e,t,o,n,r){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}([function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAChklEQVRoQ83aP4vbMBQA8PcG50q7FC5DMR4CB/kYpZmOCwTaDu1QOmTKZ8pkyFzSW+rS79ItgdzSrW16cTgVmTjYsuXoz5OsbHEsWb88ydZ7GEH4rFarF8Ph8DidTh/F30L5vlwunw8Gg6f5fP5PHBNWD3DMfr/PEPF3kiTvQ0RxDCJ+A4DHKIreiqgzqMQAwGuORMQsNFSJYYy9OY3xh4gqQCKmjFpIKBFTGWMNhTJMSCgZpg2FWZZdbbfbNWNsKlv0fUbqEuY05vV4PP44mUyOxZQLFaWLKdZVGZXQUCaYGiikSJliGqAQUDaYVlCfKFuMFNQHigLTCfKJosJcBPlAUWKUQC5R1BhlkAuUC4wWiBLlCqMNokC5xBiBbFCuMcYgE5QPjBVIBxVF0ac8z7+WmaYkTTmnALI0RuV4raag0kA8R2WXDgC/AOC6o38SjHWEygEqomQeMgwZSHX6tYhIMaQgAxQ5hhzEO0zT9OXhcPh5Yc08xHF8M5vN/pqs26421jeFaueKt+aiCSJ+T5LkHXUxkwykgyn/BBcoEpAJxhXKGqSIeQCAV7K5TxkpK5AiZh3H8efdbveFMXbnGmUMUsWUFc3Tw5dvf5yijEC6GGFH4RSlDTLF+EJpgWwxPlDKICqMa5QSiBrjEnUR5ArjCtUJco1xgZKCfGGoUa0g3xhKVAPUF4YKVQP1jaFAnUGhYGxRBSg0jA0KQ8WYojBN02d5nt8zxm4luYqT6oxOcUQh9bgHgA+LxSIvplwHqneMQqTOmFoZqwUVDKYDVcM06nIV1J8y09SZGj7OrUw//oJiMc2q1208WDlqNBod+YtAPgZocg2O2mw2TyKmESGTzkNr8x9NV7ZisYt5DgAAAABJRU5ErkJggg=="},function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(2),i=o.n(a),c=o(3),l=o.n(c),u=o(1),s=o.n(u),f=o(4),p=o.n(f);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function d(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m="react-color-configuration-modal",C={DUPLICATE:"选色重复",LT_MIN:"至少保留1个颜色",GT_MAX:"最多可以自定义8个颜色"},A=function(e){function t(e){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=v(this,h(t).call(this,e)))._onChange=function(e){var t=e.target.action;o.change(e),"confirm"===t&&o.visibleChange(!1)},o._onModalClick=function(e){(0,o.props.onModalClick)()},o._onClose=function(e){var t=o._event.target;o.visibleChange(!1),t.action="dismiss",o.change({target:t})},o._onValidate=function(e){var t=e.target.value,n=C[t];o.setState({toastVisible:!0,validateMsg:n}),setTimeout(function(){o.setState({toastVisible:!1})},2e3)},o._onPropagation=function(e){e.stopPropagation()};var n=e.visible,r=e.value;return o._event=null,o.state={toastVisible:!1,validateMsg:"",value:r,visible:n},o}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),n=t,(a=[{key:"componentWillReceiveProps",value:function(e){var t=e.visible;e.value,t!==this.state.visible&&this.visibleChange(t)}},{key:"change",value:function(e){var t=e.target,o=t.value,n=t.multiple,r=this.props.onChange;this._event=e,n?this.setState({value:o},function(){r(e)}):r(e)}},{key:"visibleChange",value:function(e){var t=this.props.onVisibleChange;this.setState({visible:e},function(){t({target:{value:e}})})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.modal,a=e.colorCfgOptions,c=e.draggableOptions,u=this.state,s=u.toastVisible,f=u.value,g=u.visible,d=u.validateMsg;return g?r.a.createElement(p.a,b({onStart:this._onPropagation,handle:".".concat(m,"--hd")},c),r.a.createElement("section",{onMouseDown:this._onPropagation,onMouseMove:this._onPropagation,onMouseUp:this._onPropagation,className:m},r.a.createElement("header",{className:"".concat(m,"--hd")},r.a.createElement("span",null,t),r.a.createElement("span",{onClick:this._onClose},r.a.createElement("img",{draggable:"false",width:"24",src:o(5)}))),r.a.createElement("div",{className:"".concat(m,"--bd")},r.a.createElement(l.a,b({value:f,onValidate:this._onValidate,onChange:this._onChange},a))),r.a.createElement("div",{hidden:!s,className:"".concat(m,"__toast")},d),i.a.createPortal(r.a.createElement("div",{hidden:!n,onClick:this._onModalClick,className:"".concat(m,"__overlay")}),document.body))):null}}])&&d(n.prototype,a),c&&d(n,c),t}();A.propTypes={value:s.a.array,onChange:s.a.func,onVisibleChange:s.a.func,onModalClick:s.a.func,visible:s.a.bool,modal:s.a.bool,title:s.a.string,colorCfgOptions:s.a.object,draggableOptions:s.a.object},A.defaultProps={value:[],onVisibleChange:nx.noop,onModalClick:nx.noop,onChange:nx.noop,visible:!1,modal:!1,title:"颜色编辑器",draggableOptions:{defaultPosition:{x:-192.5,y:-275}}};t.default=A}])});