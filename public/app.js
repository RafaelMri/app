!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},a={},n={},r={}.hasOwnProperty,l=/^\.\.?(\/|$)/,u=function(e,t){for(var a,n=[],r=(l.test(t)?e+"/"+t:t).split("/"),u=0,o=r.length;u<o;u++)a=r[u],".."===a?n.pop():"."!==a&&""!==a&&n.push(a);return n.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},i=function(t){return function(a){var n=u(o(t),a);return e.require(n,t)}},c=function(e,t){var n=k&&k.createHot(e),r={id:e,exports:{},hot:n};return a[e]=r,t(r.exports,i(e),r),r.exports},s=function(e){return n[e]?s(n[e]):e},d=function(e,t){return s(u(o(e),t))},m=function(e,n){null==n&&(n="/");var l=s(e);if(r.call(a,l))return a[l].exports;if(r.call(t,l))return c(l,t[l]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};m.alias=function(e,t){n[t]=e};var f=/\.[^.\/]+$/,p=/\/index(\.[^\/]+)?$/,h=function(e){if(f.test(e)){var t=e.replace(f,"");r.call(n,t)&&n[t].replace(f,"")!==t+"/index"||(n[t]=e)}if(p.test(e)){var a=e.replace(p,"");r.call(n,a)||(n[a]=e)}};m.register=m.define=function(e,n){if(e&&"object"==typeof e)for(var l in e)r.call(e,l)&&m.register(l,e[l]);else t[e]=n,delete a[e],h(e)},m.list=function(){var e=[];for(var a in t)r.call(t,a)&&e.push(a);return e};var k=e._hmr&&new e._hmr(d,m,t,a);m._cache=a,m.hmr=k&&k.wrap,m.brunch=!0,e.require=m}}(),function(){var e;"undefined"==typeof window?this:window;require.register("components/App.js",function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=t("react"),c=n(i),s=t("./Nav"),d=n(s),m=t("./Create"),f=n(m),p=t("./Sign"),h=n(p),k=t("react-router-dom"),b=t("react-uikit3"),g=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement(d["default"],null),c["default"].createElement(k.Switch,null,c["default"].createElement(k.Route,{exact:!0,path:"/",component:E}),c["default"].createElement(k.Route,{path:"/create",component:f["default"]}),c["default"].createElement(k.Route,{path:"/:id",component:h["default"]})),c["default"].createElement("footer",{className:"uk-padding uk-margin-top uk-text-center"},c["default"].createElement("a",{href:"https://github.com/trustlane/app",className:"uk-icon-link",target:"_blank"},c["default"].createElement("svg",{width:"80",height:"80",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-ratio":"1"}," ",c["default"].createElement("path",{d:"M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z",fill:"#FFF"})))))}}]),t}(c["default"].Component);e["default"]=g;var E=function(){return c["default"].createElement(b.Grid,{className:"uk-flex-center uk-padding"},c["default"].createElement("div",{className:"uk-width-2-3@m uk-padding uk-light"},c["default"].createElement("h2",null,"About ",c["default"].createElement("strong",null,"Trustlane"),".me"),c["default"].createElement("p",null,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo."),c["default"].createElement("p",null,c["default"].createElement(k.Link,{to:"/create",className:"uk-button uk-button-primary uk-margin-small-right"},"Create"),c["default"].createElement(k.Link,{to:"/create",className:"uk-button uk-button-default"},"Create"))))}}),require.register("components/Create.js",function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=t("react"),c=n(i),s=t("react-uikit3"),d=t("react-copy-to-clipboard"),m=t("react-number-format"),f=n(m),p=function(e){function t(){r(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={data:{testnet:!1,tokenType:"ALPHA4",copied:!1}},e.handleChange=e.handleChange.bind(e),e.setTokenType=e.setTokenType.bind(e),e.setTestnet=e.setTestnet.bind(e),e.generateURL=e.generateURL.bind(e),e}return u(t,e),o(t,[{key:"setTestnet",value:function(e){var t=this.state.data;t.testnet=e,this.setState(t)}},{key:"setTokenType",value:function(e){var t=this.state.data;t.tokenType=e,this.setState(t)}},{key:"handleChange",value:function(e){var t=this.state.data;t[e.target.name]=e.target.value,this.setState(t)}},{key:"generateURL",value:function(e){var t=btoa(JSON.stringify(this.state.data));this.setState({link:location.protocol+"//"+location.host+"/"+t}),e.preventDefault()}},{key:"onCopy",value:function(){console.log("Copied!")}},{key:"render",value:function(){var e=this;return c["default"].createElement(s.Grid,{className:"uk-child-width-1-2@m uk-flex-center uk-padding"},c["default"].createElement("div",{className:"uk-padding uk-light"},c["default"].createElement("h2",null,c["default"].createElement("b",null,"Create")," ",c["default"].createElement("small",null,"new Token Trust Form")),c["default"].createElement("h4",null,"Instructions"),c["default"].createElement("ol",null,c["default"].createElement("li",null,"Populate the form"),c["default"].createElement("li",null,"Copy your unique URL"),c["default"].createElement("li",null,"Share with your end users"),c["default"].createElement("li",null,"Donate")),c["default"].createElement("form",{onChange:this.handleChange,onSubmit:this.generateURL,method:"POST"},c["default"].createElement("fieldset",{className:"uk-fieldset"},c["default"].createElement("h3",null,"Form Page Info"),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement("input",{className:"uk-input",type:"text",placeholder:"Title",name:"title",value:this.state.data.title})),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement("input",{className:"uk-input",type:"text",placeholder:"Logo URL",name:"logoUrl",value:this.state.data.logoUrl})),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement("input",{className:"uk-input",type:"text",placeholder:"Message",name:"message",value:this.state.data.message})),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement("input",{className:"uk-input",type:"text",placeholder:"Company",name:"company",value:this.state.data.company})),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement("input",{className:"uk-input",type:"text",placeholder:"http://..",name:"companyUrl",value:this.state.data.companyUrl})),c["default"].createElement("h3",null,"Asset Info"),c["default"].createElement(s.Grid,{className:"uk-button-group uk-margin-bottom uk-child-width-1-2@m"},c["default"].createElement("div",null,c["default"].createElement("a",{className:"uk-button uk-width-1-1 "+(this.state.data.testnet?"":"uk-button-default"),onClick:function(){return e.setTestnet(!1)}},"Public")),c["default"].createElement("div",null,c["default"].createElement("a",{className:"uk-button uk-width-1-1 "+(this.state.data.testnet?"uk-button-default":""),onClick:function(){return e.setTestnet(!0)}},"Testnet"))),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement("input",{className:"uk-input",type:"text",placeholder:"Account",name:"account",value:this.state.data.account})),c["default"].createElement(s.Grid,{className:"uk-button-group uk-margin-bottom uk-child-width-1-2@m"},c["default"].createElement("div",null,c["default"].createElement("a",{className:"uk-button uk-width-1-1 "+("ALPHA4"==this.state.data.tokenType?"uk-button-default":""),onClick:function(){return e.setTokenType("ALPHA4")}},"Alphanumeric 4")),c["default"].createElement("div",null,c["default"].createElement("a",{className:"uk-button uk-width-1-1 "+("ALPHA12"==this.state.data.tokenType?"uk-button-default":""),onClick:function(){return e.setTokenType("ALPHA12")}},"Alphanumeric 12"))),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement("input",{className:"uk-input",type:"text",placeholder:"Token Code",name:"tokenCode",value:this.state.data.tokenCode})),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement(f["default"],{thousandSeparator:!0,className:"uk-input",type:"text",placeholder:"Trust Amount",name:"trustAmount",value:this.state.data.trustAmount})),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement("button",{className:"uk-button uk-button-primary uk-button-large uk-width-1-1"},c["default"].createElement("b",null,"Generate Unique URL"))))),this.state.link&&c["default"].createElement("div",{className:"uk-margin"},c["default"].createElement("div",{className:"uk-inline copy-field"},c["default"].createElement(d.CopyToClipboard,{onCopy:this.onCopy,text:this.state.link,className:"uk-form-icon uk-form-icon-flip uk-form-icon-clickable"},c["default"].createElement("span",null,c["default"].createElement("i",{className:"material-icons"},""))),c["default"].createElement("input",{className:"uk-input uk-width-1-1",type:"text",placeholder:"Your unique URL",value:this.state.link,disabled:!0})))))}}]),t}(c["default"].Component);e["default"]=p}),require.register("components/Nav.js",function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=t("react"),c=n(i),s=t("react-router-dom"),d=t("react-uikit3"),m=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"render",value:function(){return c["default"].createElement(d.Sticky,null,c["default"].createElement(d.NavBar,null,c["default"].createElement("div",{className:"uk-navbar-left uk-margin-left"},c["default"].createElement(s.Link,{to:"/",className:"uk-navbar-item uk-logo"},c["default"].createElement("b",null,"Trustlane"),".me")),c["default"].createElement("div",{className:"uk-navbar-right uk-margin-right"},c["default"].createElement("ul",{className:"uk-navbar-nav"},c["default"].createElement("li",null,c["default"].createElement(s.Link,{to:"/"},"About")),c["default"].createElement("li",null,c["default"].createElement(s.Link,{to:"/create"},"Create")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"https://github.com/trustlane/app",target:"_blank"},c["default"].createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-ratio":"1"}," ",c["default"].createElement("path",{d:"M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"}))))))))}}]),t}(c["default"].Component);e["default"]=m}),require.register("components/Sign.js",function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=t("react"),c=n(i),s=t("react-uikit3"),d=(t("react-copy-to-clipboard"),t("react-number-format"),t("react-router-dom")),m=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={data:{}},a}return u(t,e),o(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(atob(this.props.match.params.id));this.setState({data:e})}},{key:"componentHasMounted",value:function(){var e=JSON.parse(atob(this.props.match.params.id));this.setState({data:e})}},{key:"handleChange",value:function(e){var t=this.state.data;t[e.target.name]=e.target.value,this.setState({data:t})}},{key:"handleSubmit",value:function(e){var t=null,a=this.state.data.trustAmount.replace(/\,/g,"")||"";this.state.data.testnet?(StellarSdk.Network.useTestNetwork(),t=new StellarSdk.Server("https://horizon-testnet.stellar.org")):(StellarSdk.Network.usePublicNetwork(),t=new StellarSdk.Server("https://horizon.stellar.org"));var n=this.state.data.account,r=StellarSdk.Keypair.fromSecret(this.state.data.signerAccountPrivateKey),l=new StellarSdk.Asset(this.state.data.tokenCode,n);t.loadAccount(r.publicKey()).then(function(e){var n=new StellarSdk.TransactionBuilder(e).addOperation(StellarSdk.Operation.changeTrust({asset:l,limit:a})).build();return n.sign(r),t.submitTransaction(n)})["catch"](function(e){console.error("Error!",e)}),e.preventDefault()}},{key:"render",value:function(){return c["default"].createElement(s.Grid,{className:"uk-child-width-1-2@m uk-flex-center uk-padding"},c["default"].createElement("div",{className:"container uk-padding uk-light"},c["default"].createElement("p",{className:"uk-text-right"},"Token Trust Form generated by  ",c["default"].createElement("a",{href:this.state.data.companyUrl,target:"_blank"},c["default"].createElement("strong",null,this.state.data.company))," | ",c["default"].createElement(d.Link,{to:"/create",className:"text-primary"},"Create yours")),c["default"].createElement("h2",null,c["default"].createElement("span",{className:"uk-badge uk-padding-small network-badge"},this.state.data.testnet?"Testnet":"Public Net")," Trust new token ",c["default"].createElement("strong",null,this.state.data.tokenCode)),c["default"].createElement("form",{onSubmit:this.handleSubmit.bind(this),method:"POST"},c["default"].createElement("fieldset",{className:"uk-fieldset"},c["default"].createElement("h3",null,"Overview"),c["default"].createElement("img",{src:this.state.data.logoUrl}),c["default"].createElement("div",{className:"uk-margin uk-margin-bottom-large"},c["default"].createElement("p",null,this.state.data.message)),c["default"].createElement("h3",null,"Token Information"),c["default"].createElement(s.Grid,{className:"uk-grid-divider uk-child-width-expand@s uk-margin-bottom"},c["default"].createElement("div",{className:"uk-text-right"},c["default"].createElement("label",null,"Token (","ALPHA12"==this.state.data.tokenType?"Alpha 12":"Alpha 4",")"),c["default"].createElement("h3",{className:"uk-margin-remove"},c["default"].createElement("strong",null,this.state.data.tokenCode))),c["default"].createElement("div",null,c["default"].createElement("label",null,"Trust Limit"),c["default"].createElement("h3",{className:"uk-margin-remove"},c["default"].createElement("strong",null,this.state.data.trustAmount)))),c["default"].createElement("hr",null),c["default"].createElement("div",{className:"uk-margin-bottom uk-text-center"},c["default"].createElement("label",null,"Issuing Account"),c["default"].createElement("br",null),c["default"].createElement("span",{className:"code uk-margin-top uk-width-1-1"},this.state.data.stellarAccount)),c["default"].createElement("h3",null,"Paste Your ",c["default"].createElement("u",null,"Private Key")),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement("input",{className:"uk-input code",type:"text",placeholder:"GC2BKL...",name:"signerAccountPrivateKey",value:this.state.data.signerAccountPrivateKey,onChange:this.handleChange.bind(this)})),c["default"].createElement("h5",null,c["default"].createElement("strong",null,"Security Information:")," ",c["default"].createElement("em",null,"We never store your Private Key - anywhere. It is used in your browser to sign the transaction with the ",c["default"].createElement("a",{href:"http://",className:"text-primary"},"Stellar-JS-SDK"),". Verify code of the sign component ",c["default"].createElement("a",{className:"text-primary"},"here"),".")),c["default"].createElement("div",{className:"uk-margin uk-grid-small uk-child-width-auto uk-grid"},c["default"].createElement("label",null,c["default"].createElement("input",{className:"uk-checkbox uk-margin-small-right",type:"checkbox"})," I agree to the terms & conditions.")),c["default"].createElement("div",{className:"uk-margin-bottom"},c["default"].createElement("button",{className:"uk-button uk-button-primary uk-button-large uk-width-1-1"},c["default"].createElement("b",null,"Assign Trust")))))))}}]),t}(c["default"].Component);e["default"]=m}),require.register("initialize.js",function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r=t("react-dom"),l=n(r),u=t("react"),o=n(u),i=t("components/App"),c=n(i),s=t("react-router-dom");document.addEventListener("DOMContentLoaded",function(){l["default"].render(o["default"].createElement(s.BrowserRouter,null,o["default"].createElement(c["default"],null)),document.querySelector("#app"))})}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,a){})}(),require("___globals___");