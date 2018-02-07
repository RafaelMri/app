(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("components/App.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Create = require('./Create');

var _Create2 = _interopRequireDefault(_Create);

var _Sign = require('./Sign');

var _Sign2 = _interopRequireDefault(_Sign);

var _reactRouterDom = require('react-router-dom');

var _reactUikit = require('react-uikit3');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Nav2.default, null),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/create', component: _Create2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/:id', component: _Sign2.default })
        ),
        _react2.default.createElement(
          'footer',
          { className: 'uk-padding uk-margin-top uk-text-center' },
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/trustlane/app', className: 'uk-icon-link', target: '_blank' },
            _react2.default.createElement(
              'svg',
              { width: '80', height: '80', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg', 'data-ratio': '1' },
              ' ',
              _react2.default.createElement('path', { d: 'M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z', fill: '#FFF' })
            )
          ),
          _react2.default.createElement(
            'h6',
            { className: 'donate' },
            'Donate: ',
            _react2.default.createElement(
              'b',
              null,
              'GBFLQVHFHI4OKNBGWB4BU7NWPJDJ7X5ULGFN2UTUI6DRB53HRC3ZGIWA'
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;


var Home = function Home() {
  return _react2.default.createElement(
    _reactUikit.Grid,
    { className: 'uk-flex-center uk-cover-container hero-image' },
    _react2.default.createElement(
      'div',
      { 'class': 'uk-position-center uk-overlay' },
      _react2.default.createElement(
        'div',
        { className: 'uk-width-2-3@m uk-padding uk-light uk-text-center uk-position-center' },
        _react2.default.createElement(
          'h2',
          null,
          'About ',
          _react2.default.createElement(
            'strong',
            null,
            'Trustlane'
          ),
          '.me'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Simple ',
          _react2.default.createElement(
            'u',
            null,
            _react2.default.createElement(
              'a',
              { href: 'http://stellar.org', target: '_blank' },
              'Stellar'
            )
          ),
          ' Trust generator app. Issuers quickly generate their custom token form (no Issuer private key needed). Issuers then share the unique URL with their prospective customers who sign the trust from for the new token.'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/create', className: 'uk-button uk-button-primary uk-margin-small-right' },
            'Create a Trust Form'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: 'https://github.com/trustlane/app', className: 'uk-button uk-button-default', target: '_blank' },
            'GitHub'
          )
        )
      )
    )
  );
};
});

;require.register("components/Create.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikit = require('react-uikit3');

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactNumberFormat = require('react-number-format');

var _reactNumberFormat2 = _interopRequireDefault(_reactNumberFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Create = function (_React$Component) {
  _inherits(Create, _React$Component);

  function Create() {
    _classCallCheck(this, Create);

    var _this = _possibleConstructorReturn(this, (Create.__proto__ || Object.getPrototypeOf(Create)).call(this));

    _this.state = {
      data: {
        testnet: false,
        tokenType: 'ALPHA4',
        tokenCode: '',
        copied: false
      }
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.setTokenType = _this.setTokenType.bind(_this);
    _this.setTestnet = _this.setTestnet.bind(_this);
    _this.generateURL = _this.generateURL.bind(_this);

    // title: "",
    // transactionMemo: "",
    // sourceAccount: "",
    // tokenCode: "",
    // tokenCodeLong: "",
    // tokenDescription: "",
    // url: "",
    // amount: 0,
    // network: "public",
    return _this;
  }

  _createClass(Create, [{
    key: 'setTestnet',
    value: function setTestnet(state) {
      var data = this.state.data;
      data.testnet = state;
      this.setState(data);
    }
  }, {
    key: 'setTokenType',
    value: function setTokenType(type) {
      var data = this.state.data;
      data.tokenType = type;
      this.setState(data);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var data = this.state.data;
      data[event.target.name] = event.target.value;
      this.setState(data);
    }
  }, {
    key: 'generateURL',
    value: function generateURL(e) {
      var s = btoa(JSON.stringify(this.state.data));
      this.setState({ link: location.protocol + '//' + location.host + "/" + s });
      e.preventDefault();
    }
  }, {
    key: 'onCopy',
    value: function onCopy() {
      console.log("Copied!");
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactUikit.Grid,
        { className: 'uk-child-width-1-2@m uk-flex-center uk-padding' },
        _react2.default.createElement(
          'div',
          { className: 'uk-padding uk-light' },
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Create'
            ),
            ' ',
            _react2.default.createElement(
              'small',
              null,
              'new Token Trust Form'
            )
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Instructions'
          ),
          _react2.default.createElement(
            'ol',
            null,
            _react2.default.createElement(
              'li',
              null,
              'Populate the form'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Copy your unique URL'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Share with your end users'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Donate'
            )
          ),
          _react2.default.createElement(
            'form',
            { onChange: this.handleChange, onSubmit: this.generateURL, method: 'POST' },
            _react2.default.createElement(
              'fieldset',
              { className: 'uk-fieldset' },
              _react2.default.createElement(
                'h3',
                null,
                'Form Page Info'
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'Title', name: 'title', value: this.state.data.title })
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'Logo URL', name: 'logoUrl', value: this.state.data.logoUrl })
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'Message', name: 'message', value: this.state.data.message })
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'Company', name: 'company', value: this.state.data.company })
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'http://..', name: 'companyUrl', value: this.state.data.companyUrl })
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Asset Info'
              ),
              _react2.default.createElement(
                _reactUikit.Grid,
                { className: 'uk-button-group uk-margin-bottom uk-child-width-1-2@m' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'uk-button uk-width-1-1 ' + (!this.state.data.testnet ? 'uk-button-default' : ''), onClick: function onClick() {
                        return _this2.setTestnet(false);
                      } },
                    'Public'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'uk-button uk-width-1-1 ' + (this.state.data.testnet ? 'uk-button-default' : ''), onClick: function onClick() {
                        return _this2.setTestnet(true);
                      } },
                    'Testnet'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'Account', name: 'account', value: this.state.data.account })
              ),
              _react2.default.createElement(
                _reactUikit.Grid,
                { className: 'uk-button-group uk-margin-bottom uk-child-width-1-2@m' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    { className: 'uk-button uk-width-1-1 ' + (this.state.data.tokenCode.length < 5 ? 'uk-button-default' : '') },
                    'Alphanumeric 4'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    { className: 'uk-button uk-width-1-1 ' + (this.state.data.tokenCode.length > 4 ? 'uk-button-default' : '') },
                    'Alphanumeric 12'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'Token Code', name: 'tokenCode', value: this.state.data.tokenCode })
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement(_reactNumberFormat2.default, { thousandSeparator: true, className: 'uk-input', type: 'text', placeholder: 'Trust Amount', name: 'trustAmount', value: this.state.data.trustAmount })
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement(
                  'button',
                  { className: 'uk-button uk-button-primary uk-button-large uk-width-1-1' },
                  _react2.default.createElement(
                    'b',
                    null,
                    'Generate Unique URL'
                  )
                )
              )
            )
          ),
          this.state.link && _react2.default.createElement(
            'div',
            { className: 'uk-margin' },
            _react2.default.createElement(
              'div',
              { className: 'uk-inline copy-field' },
              _react2.default.createElement(
                _reactCopyToClipboard.CopyToClipboard,
                { onCopy: this.onCopy, text: this.state.link, className: 'uk-form-icon uk-form-icon-flip uk-form-icon-clickable' },
                _react2.default.createElement(
                  'span',
                  null,
                  _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    '\uE14D'
                  )
                )
              ),
              _react2.default.createElement('input', { className: 'uk-input uk-width-1-1', type: 'text', placeholder: 'Your unique URL', value: this.state.link, disabled: true })
            )
          )
        )
      );
    }
  }]);

  return Create;
}(_react2.default.Component);

exports.default = Create;
});

;require.register("components/Nav.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactUikit = require('react-uikit3');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactUikit.Sticky,
        null,
        _react2.default.createElement(
          _reactUikit.NavBar,
          null,
          _react2.default.createElement(
            'div',
            { className: 'uk-navbar-left uk-margin-left' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'uk-navbar-item uk-logo' },
              _react2.default.createElement(
                'b',
                null,
                'Trustlane'
              ),
              '.me'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'uk-navbar-right uk-margin-right' },
            _react2.default.createElement(
              'ul',
              { className: 'uk-navbar-nav' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/' },
                  'About'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/create' },
                  'Create'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://github.com/trustlane/app', target: '_blank' },
                  _react2.default.createElement(
                    'svg',
                    { width: '20', height: '20', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg', 'data-ratio': '1' },
                    ' ',
                    _react2.default.createElement('path', { d: 'M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(_react2.default.Component);

exports.default = Nav;
});

;require.register("components/Sign.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikit = require('react-uikit3');

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactNumberFormat = require('react-number-format');

var _reactRouterDom = require('react-router-dom');

var _bignumber = require('bignumber.js');

var _bignumber2 = _interopRequireDefault(_bignumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base_reserve = 0.5,
    min_reserve = base_reserve * 2;

var Sign = function (_React$Component) {
  _inherits(Sign, _React$Component);

  function Sign(props) {
    _classCallCheck(this, Sign);

    var _this = _possibleConstructorReturn(this, (Sign.__proto__ || Object.getPrototypeOf(Sign)).call(this, props));

    _this.state = {
      data: {
        agree: false
      },
      c: true,
      accountConfirmed: true
    };

    return _this;
  }

  _createClass(Sign, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var data = JSON.parse(atob(this.props.match.params.id));
      this.setState({ 'data': data });
    }
  }, {
    key: 'componentHasMounted',
    value: function componentHasMounted() {
      var data = JSON.parse(atob(this.props.match.params.id));
      this.setState({ 'data': data });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      console.log(event.target.value);
      var data = this.state.data;
      data[event.target.name] = event.target.value;
      this.setState(data);
    }
  }, {
    key: 'getServer',
    value: function getServer() {
      var server = null;
      if (this.state.data.testnet) {
        StellarSdk.Network.useTestNetwork();
        server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
      } else {
        StellarSdk.Network.usePublicNetwork();
        server = new StellarSdk.Server('https://horizon.stellar.org');
      }
      return server;
    }
  }, {
    key: 'handleStellarAccountBlur',
    value: function handleStellarAccountBlur() {

      var server = this.getServer();

      if (!!this.state.data.signerAccountPrivateKey) {

        var receiverKeys = void 0;
        var self = this;

        try {
          receiverKeys = StellarSdk.Keypair.fromSecret(this.state.data.signerAccountPrivateKey);
        } catch (e) {
          self.setState({ 'accountNote': 'Error loading account / Account does not exist' });
          return false;
        }

        // server.offers().forAccount(receiverKeys.publicKey()).then(function(r) {
        //   console.log(r);
        // })
        // server.operations().forAccount(receiverKeys.publicKey()).then(function(r) {
        //   console.log(r);
        // })
        // server.ledgers().then(function(r) {
        //   console.log(r);
        // })

        server.loadAccount(receiverKeys.publicKey()).then(function (receiver) {

          var entriesTrustlines = receiver.balances.length - 1;
          var entriesOffers = Object.keys(receiver.offers).length;
          var entriesOthers = receiver.subentry_count - entriesTrustlines - entriesOffers;

          var min_fee = new _bignumber2.default(min_reserve + (entriesTrustlines + entriesOffers + entriesOthers) * base_reserve).toFixed(2);

          receiver.balances.forEach(function (asset) {
            if (asset.asset_type == "native") {
              var balance = new _bignumber2.default(asset.balance).toFixed(2);

              if (balance > min_fee) {
                self.setState({ 'accountNote': 'Good to go - you need ' + min_fee + ' XLM and you have ' + balance + " XLM" });
                self.setState({ 'accountConfirmed': true });
              } else {
                self.setState({ 'accountNote': 'Error - you need ' + min_fee + ' XLM to trust this token. You only have ' + balance + " XLM. You need " + new _bignumber2.default(min_fee - balance).toFixed(2) + " XLM more." });
              }
            }
          });
        }).catch(function (err) {
          console.log(err);
          self.setState({ 'accountNote': 'Account does not exist.' });
        });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {

      var server = this.getServer();
      var trustAmount = this.state.data.trustAmount.replace(/\,/g, '') || '';

      // Keys for accounts to issue and receive the new asset
      var issuerKey = this.state.data.account;
      var receiverKeys = StellarSdk.Keypair.fromSecret(this.state.data.signerAccountPrivateKey);

      // Create an object to represent the new asset
      var asset = new StellarSdk.Asset(this.state.data.tokenCode, issuerKey);

      // First, the receiving account must trust the asset
      server.loadAccount(receiverKeys.publicKey()).then(function (receiver) {
        var transaction = new StellarSdk.TransactionBuilder(receiver)
        // The `changeTrust` operation creates (or alters) a trustline
        // The `limit` parameter below is optional
        .addOperation(StellarSdk.Operation.changeTrust({
          asset: asset,
          limit: trustAmount
        })).build();
        transaction.sign(receiverKeys);
        return server.submitTransaction(transaction);
      }).catch(function (error) {
        console.error('Error!', error);
      });

      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactUikit.Grid,
        { className: 'uk-child-width-1-2@m uk-flex-center uk-padding' },
        _react2.default.createElement(
          'div',
          { className: 'container uk-padding uk-light' },
          _react2.default.createElement(
            'p',
            { className: 'uk-text-right' },
            'Token Trust Form generated by \xA0',
            _react2.default.createElement(
              'a',
              { href: this.state.data.companyUrl, target: '_blank' },
              _react2.default.createElement(
                'strong',
                null,
                this.state.data.company
              )
            ),
            ' | ',
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/create', className: 'text-primary' },
              'Create yours'
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(
              'span',
              { className: 'uk-badge uk-padding-small network-badge' },
              this.state.data.testnet ? 'Testnet' : 'Public Net'
            ),
            ' Trust new token ',
            _react2.default.createElement(
              'strong',
              null,
              this.state.data.tokenCode
            )
          ),
          !!this.state.data.title && _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'b',
              null,
              this.state.data.title
            )
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit.bind(this), method: 'POST' },
            _react2.default.createElement(
              'fieldset',
              { className: 'uk-fieldset' },
              _react2.default.createElement(
                'h4',
                null,
                'Overview'
              ),
              !!this.state.data.logoUrl && _react2.default.createElement('img', { src: this.state.data.logoUrl }),
              !!this.state.data.message && _react2.default.createElement(
                'div',
                { className: 'uk-margin uk-margin-bottom-large' },
                _react2.default.createElement(
                  'p',
                  null,
                  this.state.data.message
                )
              ),
              _react2.default.createElement(
                'h4',
                null,
                'Token Information'
              ),
              _react2.default.createElement(
                _reactUikit.Grid,
                { className: 'uk-grid-divider uk-child-width-expand@s uk-margin-bottom' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-text-right' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Token (',
                    this.state.data.tokenType == 'ALPHA12' ? 'Alpha 12' : 'Alpha 4',
                    ')'
                  ),
                  _react2.default.createElement(
                    'h3',
                    { className: 'uk-margin-remove' },
                    _react2.default.createElement(
                      'strong',
                      null,
                      this.state.data.tokenCode
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'label',
                    null,
                    'Trust Limit'
                  ),
                  _react2.default.createElement(
                    'h3',
                    { className: 'uk-margin-remove' },
                    _react2.default.createElement(
                      'strong',
                      null,
                      this.state.data.trustAmount || 'MAX'
                    )
                  )
                )
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom uk-text-center' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Issuing Account'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'span',
                  { className: 'code uk-margin-top uk-width-1-1' },
                  this.state.data.account
                )
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Paste Your ',
                _react2.default.createElement(
                  'u',
                  null,
                  'Private Key'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement('input', { className: 'uk-input code', type: 'text', placeholder: 'GC2BKL...', name: 'signerAccountPrivateKey', value: this.state.data.signerAccountPrivateKey, onChange: this.handleChange.bind(this), onBlur: this.handleStellarAccountBlur.bind(this) })
              ),
              this.state.accountNote && _react2.default.createElement(
                'span',
                null,
                this.state.accountNote
              ),
              _react2.default.createElement(
                'h5',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Security Information:'
                ),
                ' ',
                _react2.default.createElement(
                  'em',
                  null,
                  'We never store your Private Key - anywhere. It is used in your browser to sign the transaction with the ',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://', className: 'text-primary' },
                    'Stellar-JS-SDK'
                  ),
                  '. Verify code of the signing component ',
                  _react2.default.createElement(
                    'a',
                    { className: 'text-primary' },
                    'here'
                  ),
                  '.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin uk-grid-small uk-child-width-auto uk-grid' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { className: 'uk-checkbox uk-margin-small-right', type: 'checkbox', name: 'agree', value: this.state.data.agree, onChange: this.handleChange.bind(this) }),
                  ' I agree to the terms & conditions.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement(
                  'button',
                  { className: 'uk-button uk-button-primary uk-button-large uk-width-1-1', disabled: this.state.data.agree != 'on' || !this.state.accountConfirmed },
                  _react2.default.createElement(
                    'b',
                    null,
                    'Assign Trust'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Sign;
}(_react2.default.Component);

exports.default = Sign;
});

;require.register("initialize.js", function(exports, require, module) {
'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('components/App');

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  _reactDom2.default.render(_react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_App2.default, null)
  ), document.querySelector('#app'));
});
});

require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map