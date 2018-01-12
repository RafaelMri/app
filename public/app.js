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
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;


var Home = function Home() {
  return _react2.default.createElement(
    'div',
    { className: 'container uk-padding uk-light' },
    _react2.default.createElement(
      'h2',
      null,
      'About'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.'
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      this.setState(_defineProperty({}, event.target.name, event.target.value));
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
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'Title', name: 'title', value: this.state.data.title })
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'Message', name: 'message', value: this.state.data.message })
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
                    'a',
                    { className: 'uk-button uk-width-1-1 ' + (this.state.data.tokenType == 'ALPHA4' ? 'uk-button-default' : ''), onClick: function onClick() {
                        return _this2.setTokenType('ALPHA4');
                      } },
                    'Alphanumeric 4'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'uk-button uk-width-1-1 ' + (this.state.data.tokenType == 'ALPHA12' ? 'uk-button-default' : ''), onClick: function onClick() {
                        return _this2.setTokenType('ALPHA12');
                      } },
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
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'Trust Amount', name: 'trustAmount', value: this.state.data.trustAmount })
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin-bottom' },
                _react2.default.createElement('input', { className: 'uk-input', type: 'text', placeholder: 'Logo URL', name: 'logoUrl', value: this.state.data.logoUrl })
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
          _react2.default.createElement(
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sign = function (_React$Component) {
  _inherits(Sign, _React$Component);

  function Sign(props) {
    _classCallCheck(this, Sign);

    var _this = _possibleConstructorReturn(this, (Sign.__proto__ || Object.getPrototypeOf(Sign)).call(this, props));

    _this.state = {
      signerAccount: '',
      appName: 'ABCompany',
      account: 'GC2BKLYOOYPDEFJKLKY6FNNRQMGFLVHJKQRGNSSRRGSMPGF32LHCQVGF',
      trustAmount: 10000,
      tokenCode: 'ABCD',
      logoUrl: 'http://lorempixel.com/800/300',
      message: 'Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
    };

    _this.handleChange = _this.handleChange.bind(_this);

    var data = atob(_this.props.match.params.id);
    console.log(data);

    return _this;
  }

  _createClass(Sign, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
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
              { href: '#' },
              _react2.default.createElement(
                'strong',
                null,
                this.state.appName
              )
            ),
            ' | ',
            _react2.default.createElement(
              'a',
              { className: 'text-primary' },
              'Create yours'
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(
              'span',
              { className: 'uk-badge uk-padding-small network-badge' },
              this.state.testnet ? 'Testnet' : 'Public Net'
            ),
            ' Trust new token ',
            _react2.default.createElement(
              'strong',
              null,
              'ABCD'
            )
          ),
          _react2.default.createElement(
            'form',
            { onChange: this.handleChange, onSubmit: this.submit, method: 'POST' },
            _react2.default.createElement(
              'fieldset',
              { className: 'uk-fieldset' },
              _react2.default.createElement(
                'h3',
                null,
                'Overview'
              ),
              _react2.default.createElement('img', { src: this.state.logoUrl }),
              _react2.default.createElement(
                'div',
                { className: 'uk-margin uk-margin-bottom-large' },
                _react2.default.createElement(
                  'p',
                  null,
                  this.state.message
                )
              ),
              _react2.default.createElement(
                'h3',
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
                    this.state.tokenType == 'ALPHA12' ? 'Alpha 12' : 'Alpha 4',
                    ')'
                  ),
                  _react2.default.createElement(
                    'h3',
                    { className: 'uk-margin-remove' },
                    _react2.default.createElement(
                      'strong',
                      null,
                      this.state.tokenCode
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
                      this.state.trustAmount,
                      ' ',
                      this.state.tokenCode
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
                  this.state.stellarAccount
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
                _react2.default.createElement('input', { className: 'uk-input code', type: 'text', placeholder: 'GC2BKL...', name: 'signerAccount', value: this.state.signerAccount })
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
                  '. Verify code of the sign component ',
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
                  _react2.default.createElement('input', { className: 'uk-checkbox uk-margin-small-right', type: 'checkbox' }),
                  ' I agree to the terms & conditions.'
                )
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