webpackJsonp([4],{"./app/containers/Preview/index.js":function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments[1],n=t.payload;switch(t.type){case x:return n.open?e.set("open",!0):e.set("open",!1).set("items",Object(w.fromJS)([]));case O:return e.set("items",e.get("items").push(n.item)).set("open",!0);default:return e}}function o(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},P,this)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{previewActions:Object(v.bindActionCreators)(_,e),dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("./node_modules/react/index.js"),l=n.n(d),u=(n("./node_modules/prop-types/index.js"),n("./node_modules/react-redux/lib/index.js")),p=n("./node_modules/reselect/es/index.js"),v=n("./node_modules/redux/lib/redux.js"),m=n("./node_modules/react-router-dom/index.js"),f=n("./app/utils/injectSaga.js"),b=n("./app/utils/injectReducer.js"),y=function(e){return e.get("preview")},h=function(){return Object(p.a)(y,function(e){return e.toJS()})},j=h,w=n("./node_modules/immutable/dist/immutable.js"),x="app/SearchPage/ACTION_PREVIEW_OPEN",O="app/SearchPage/ACTION_PREVIEW_ADD_ITEM",_={open:function(){return{type:x,payload:{visible:!0}}},close:function(){return{type:x,payload:{visible:!1}}},addAddress:function(e){return{type:O,payload:{item:{address:e}}}},addTx:function(e,t){return{type:O,payload:{item:{tx:e,selectedOutpoint:t}}}}},N=Object(w.fromJS)({open:!1,items:[]}),g=r,P=regeneratorRuntime.mark(o),A=n("./app/services/txUtils.js"),S=n("./app/components/Tools/index.js"),T=n("./app/components/Amount/index.js"),k=n("./app/components/SearchForm/index.js");n.d(t,"Preview",function(){return M});var E=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===s)n.children=o;else if(s>1){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),R=E("div",{}),C=E("span",{className:"icon",title:"Address"},void 0,"⚪"),D=E("br",{}),J=E("span",{className:"icon",title:"Transaction"},void 0,"▭"),M=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),I(t,[{key:"render",value:function(){var e=this;return console.log("this.props.preview",this.props.preview),this.props.preview.open&&0!=this.props.preview.items.length?E("div",{className:"col-3 rightPanel"},void 0,E("a",{className:"close",onClick:function(){return e.props.previewActions.close()}},void 0,"x"),this.props.preview.items.map(function(t){return e.renderItem(t)})):R}},{key:"renderItem",value:function(e){return e.address?this.renderAddress(e.address):this.renderTx(e.tx,e.selectedOutpoint)}},{key:"renderAddress",value:function(e){return E("div",{},void 0,E("div",{className:"panel address"},void 0,E("small",{},void 0,C,E(m.Link,{to:"/address/"+e.address,className:"label"},void 0,e.address),E(S.a,{type:k.a.ADDRESS,value:e.address})),D,E("div",{className:"row"},void 0,e.balance&&E("div",{className:"col-sm balance"},void 0,E(T.a,{value:e.balance})),e.entityName&&E("div",{className:"col-sm entity"},void 0,"Entity: ",E("small",{},void 0,e.entityName)))))}},{key:"renderTx",value:function(e,t){return E("div",{className:"panel tx"},void 0,E("small",{},void 0,J,E(m.Link,{to:"/tx/"+e.txid,className:"label"},void 0,e.txid),E(S.a,{type:k.a.TX,value:e.txid})),E("div",{className:"row"},void 0,E("div",{className:"col-sm txInfo"},void 0,A.b.renderTxStructure(e),E("span",{className:"totalOut",title:"total output"},void 0,"► ",E(T.a,{value:A.b.computeTotalOut(e)}),"btc")),E("div",{className:"col-sm"},void 0,A.b.renderTxMatrix(e,this.props.previewActions,!0,t))))}}]),t}(l.a.PureComponent),L=Object(p.b)({preview:j()}),V=Object(u.connect)(L,c),W=Object(b.a)({key:"preview",reducer:g}),$=Object(f.a)({key:"preview",saga:o});t.default=Object(v.compose)(m.withRouter,W,$,V)(M)}});