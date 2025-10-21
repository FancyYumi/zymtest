self.SPZ=self.SPZ||[];try{(function(_){if(self.SPZ&&!Array.isArray(self.SPZ))return;

(() => {
  // src/polyfills/abort-controller.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var AbortController2 = /* @__PURE__ */ function() {
    function AbortController3() {
      _classCallCheck(this, AbortController3);
      this.signal_ = new AbortSignal();
    }
    _createClass(AbortController3, [{
      key: "abort",
      value: function abort() {
        if (this.signal_.isAborted_) {
          return;
        }
        this.signal_.isAborted_ = true;
        if (this.signal_.onabort_) {
          var event = {
            "type": "abort",
            "bubbles": false,
            "cancelable": false,
            "target": this.signal_,
            "currentTarget": this.signal_
          };
          this.signal_.onabort_(event);
        }
      }
    }, {
      key: "signal",
      get: function get() {
        return this.signal_;
      }
    }]);
    return AbortController3;
  }();
  var AbortSignal = /* @__PURE__ */ function() {
    function AbortSignal2() {
      _classCallCheck(this, AbortSignal2);
      this.isAborted_ = false;
      this.onabort_ = null;
    }
    _createClass(AbortSignal2, [{
      key: "aborted",
      get: function get() {
        return this.isAborted_;
      }
    }, {
      key: "onabort",
      get: function get() {
        return this.onabort_;
      },
      set: function set(value) {
        this.onabort_ = value;
      }
    }]);
    return AbortSignal2;
  }();
  function install(win) {
    if (win.AbortController) {
      return;
    }
    Object.defineProperty(win, "AbortController", {
      configurable: true,
      enumerable: false,
      writable: true,
      value: AbortController2
    });
    Object.defineProperty(win, "AbortSignal", {
      configurable: true,
      enumerable: false,
      writable: true,
      value: AbortSignal
    });
  }

  // src/polyfills/array-includes.js
  function includes(value, opt_fromIndex) {
    var fromIndex = opt_fromIndex || 0;
    var len = this.length;
    var i = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);
    for (; i < len; i++) {
      var other = this[i];
      if (other === value || value !== value && other !== other) {
        return true;
      }
    }
    return false;
  }
  function install2(win) {
    if (!win.Array.prototype.includes) {
      win.Object.defineProperty(win.Array.prototype, "includes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: includes
      });
    }
  }

  // src/core/data-structures/promise.js
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var resolved;
  function resolvedPromise() {
    if (resolved) {
      return resolved;
    }
    resolved = Promise.resolve(void 0);
    return resolved;
  }
  var Deferred = function Deferred2() {
    var _this = this;
    _classCallCheck2(this, Deferred2);
    this.promise = new Promise(function(res, rej) {
      _this.resolve = res;
      _this.reject = rej;
    });
  };
  function tryResolve(fn) {
    return new Promise(function(resolve) {
      resolve(fn());
    });
  }

  // src/core/types/object/index.js
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;
  function isObject(value) {
    return toString_.call(value) === "[object Object]";
  }
  function isEmptyObject(object) {
    return JSON.stringify(object) === "{}";
  }
  function map(opt_initial) {
    var obj = Object.create(null);
    if (opt_initial) {
      Object.assign(obj, opt_initial);
    }
    return obj;
  }
  function dict(opt_initial) {
    return opt_initial || {};
  }
  function hasOwn(obj, key) {
    return hasOwn_.call(obj, key);
  }
  function getValueForExpr(obj, expr) {
    if (expr == ".") {
      return obj;
    }
    var parts = expr.split(".");
    var value = obj;
    for (var _iterator = _createForOfIteratorHelperLoose(parts), _step; !(_step = _iterator()).done; ) {
      var part = _step.value;
      if (part && value && value[part] !== void 0 && typeof value == "object" && hasOwn(value, part)) {
        value = value[part];
        continue;
      }
      value = void 0;
      break;
    }
    return value;
  }

  // src/core/error/index.js
  function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function duplicateErrorIfNecessary(error) {
    var messageProperty = Object.getOwnPropertyDescriptor(error, "message");
    if (messageProperty != null && messageProperty.writable) {
      return error;
    }
    var message = error.message, stack = error.stack;
    var e = new Error(message);
    for (var prop in error) {
      e[prop] = error[prop];
    }
    e.stack = stack;
    return e;
  }
  function createErrorVargs(var_args) {
    var error = null;
    var message = "";
    for (var _iterator = _createForOfIteratorHelperLoose2(arguments), _step; !(_step = _iterator()).done; ) {
      var arg = _step.value;
      if (arg instanceof Error && !error) {
        error = duplicateErrorIfNecessary(arg);
      } else {
        if (message) {
          message += " ";
        }
        message += arg;
      }
    }
    if (!error) {
      error = new Error(message);
    } else if (message) {
      error.message = message + ": " + error.message;
    }
    return error;
  }
  function rethrowAsync(var_args) {
    var error = createErrorVargs.apply(null, arguments);
    setTimeout(function() {
      self.__SPZ_REPORT_ERROR == null ? void 0 : self.__SPZ_REPORT_ERROR(error);
      throw error;
    });
  }

  // src/polyfills/custom-elements.js
  function _createForOfIteratorHelperLoose3(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray3(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var VALID_NAME = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/;
  var INVALID_NAMES = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"];
  var TRACK_SUBTREE = {
    "childList": true,
    "subtree": true
  };
  function assertValidName(SyntaxError, name) {
    if (!VALID_NAME.test(name) || INVALID_NAMES.includes(name)) {
      throw new SyntaxError('invalid custom element name "' + name + '"');
    }
  }
  function hasCustomElements(win) {
    var customElements = win.customElements;
    return !!(customElements && customElements.define && customElements.get && customElements.whenDefined);
  }
  function isPatched(win) {
    var tag = win.HTMLElement.toString();
    return tag.indexOf("[native code]") === -1;
  }
  var CustomElementRegistry = /* @__PURE__ */ function() {
    function CustomElementRegistry2(win, registry) {
      _classCallCheck3(this, CustomElementRegistry2);
      this.win_ = win;
      this.registry_ = registry;
      this.pendingDefines_ = map();
    }
    _createClass2(CustomElementRegistry2, [{
      key: "define",
      value: function define(name, ctor, options) {
        this.registry_.define(name, ctor, options);
        var pending = this.pendingDefines_;
        var deferred = pending[name];
        if (deferred) {
          deferred.resolve();
          delete pending[name];
        }
      }
    }, {
      key: "get",
      value: function get(name) {
        var def = this.registry_.getByName(name);
        if (def) {
          return def.ctor;
        }
      }
    }, {
      key: "whenDefined",
      value: function whenDefined(name) {
        var _this$win_ = this.win_, Promise2 = _this$win_.Promise, SyntaxError = _this$win_.SyntaxError;
        assertValidName(SyntaxError, name);
        if (this.registry_.getByName(name)) {
          return resolvedPromise();
        }
        var pending = this.pendingDefines_;
        var deferred = pending[name];
        if (!deferred) {
          deferred = new Deferred();
          pending[name] = deferred;
        }
        return deferred.promise;
      }
    }, {
      key: "upgrade",
      value: function upgrade(root) {
        this.registry_.upgrade(root);
      }
    }]);
    return CustomElementRegistry2;
  }();
  var Registry = /* @__PURE__ */ function() {
    function Registry2(win) {
      _classCallCheck3(this, Registry2);
      this.win_ = win;
      this.definitions_ = map();
      this.query_ = "";
      this.current_ = null;
      this.mutationObserver_ = null;
      this.roots_ = [win.document];
    }
    _createClass2(Registry2, [{
      key: "current",
      value: function current() {
        var current2 = this.current_;
        this.current_ = null;
        return current2;
      }
    }, {
      key: "getByName",
      value: function getByName(name) {
        var definition = this.definitions_[name];
        if (definition) {
          return definition;
        }
      }
    }, {
      key: "getByConstructor",
      value: function getByConstructor(ctor) {
        var definitions = this.definitions_;
        for (var name in definitions) {
          var def = definitions[name];
          if (def.ctor === ctor) {
            return def;
          }
        }
      }
    }, {
      key: "define",
      value: function define(name, ctor, options) {
        var _this$win_2 = this.win_, Error2 = _this$win_2.Error, SyntaxError = _this$win_2.SyntaxError;
        if (options) {
          throw new Error2("Extending native custom elements is not supported");
        }
        assertValidName(SyntaxError, name);
        if (this.getByName(name) || this.getByConstructor(ctor)) {
          throw new Error2('duplicate definition "' + name + '"');
        }
        this.definitions_[name] = {
          name,
          ctor
        };
        this.observe_(name);
        for (var _iterator = _createForOfIteratorHelperLoose3(this.roots_), _step; !(_step = _iterator()).done; ) {
          var tree = _step.value;
          this.upgrade(tree, name);
        }
      }
    }, {
      key: "upgrade",
      value: function upgrade(root, opt_query) {
        var newlyDefined = !!opt_query;
        var query2 = opt_query || this.query_;
        var upgradeCandidates = this.queryAll_(root, query2);
        for (var _iterator2 = _createForOfIteratorHelperLoose3(upgradeCandidates), _step2; !(_step2 = _iterator2()).done; ) {
          var candidate = _step2.value;
          if (newlyDefined) {
            this.connectedCallback_(candidate);
          } else {
            this.upgradeSelf(candidate);
          }
        }
      }
    }, {
      key: "upgradeSelf",
      value: function upgradeSelf(node) {
        var def = this.getByName(node.localName);
        if (!def) {
          return;
        }
        this.upgradeSelf_(node, def);
      }
    }, {
      key: "queryAll_",
      value: function queryAll_(root, query2) {
        if (!query2 || !root.querySelectorAll) {
          return [];
        }
        return root.querySelectorAll(query2);
      }
    }, {
      key: "upgradeSelf_",
      value: function upgradeSelf_(node, def) {
        var ctor = def.ctor;
        if (node instanceof ctor) {
          return;
        }
        this.current_ = node;
        try {
          var el = new ctor();
          if (el !== node) {
            throw new this.win_.Error("Constructor illegally returned a different instance.");
          }
        } catch (e) {
          rethrowAsync(e);
        }
      }
    }, {
      key: "connectedCallback_",
      value: function connectedCallback_(node) {
        var def = this.getByName(node.localName);
        if (!def) {
          return;
        }
        node = node;
        this.upgradeSelf_(node, def);
        if (node.connectedCallback) {
          try {
            node.connectedCallback();
          } catch (e) {
            rethrowAsync(e);
          }
        }
      }
    }, {
      key: "disconnectedCallback_",
      value: function disconnectedCallback_(node) {
        node = node;
        if (node.disconnectedCallback) {
          try {
            node.disconnectedCallback();
          } catch (e) {
            rethrowAsync(e);
          }
        }
      }
    }, {
      key: "observe_",
      value: function observe_(name) {
        var _this = this;
        if (this.query_) {
          this.query_ += "," + name;
          return;
        }
        this.query_ = name;
        var mo = new this.win_.MutationObserver(function(records) {
          if (records) {
            _this.handleRecords_(records);
          }
        });
        this.mutationObserver_ = mo;
        for (var _iterator3 = _createForOfIteratorHelperLoose3(this.roots_), _step3; !(_step3 = _iterator3()).done; ) {
          var tree = _step3.value;
          mo.observe(tree, TRACK_SUBTREE);
        }
        installPatches(this.win_, this);
      }
    }, {
      key: "observe",
      value: function observe(tree) {
        this.roots_.push(tree);
        if (this.mutationObserver_) {
          this.mutationObserver_.observe(tree, TRACK_SUBTREE);
        }
      }
    }, {
      key: "sync",
      value: function sync() {
        if (this.mutationObserver_) {
          this.handleRecords_(this.mutationObserver_.takeRecords());
        }
      }
    }, {
      key: "handleRecords_",
      value: function handleRecords_(records) {
        for (var _iterator4 = _createForOfIteratorHelperLoose3(records), _step4; !(_step4 = _iterator4()).done; ) {
          var record = _step4.value;
          if (!record) {
            continue;
          }
          var addedNodes = record.addedNodes, removedNodes = record.removedNodes;
          for (var _iterator5 = _createForOfIteratorHelperLoose3(addedNodes), _step5; !(_step5 = _iterator5()).done; ) {
            var node = _step5.value;
            var connectedCandidates = this.queryAll_(node, this.query_);
            this.connectedCallback_(node);
            for (var _iterator7 = _createForOfIteratorHelperLoose3(connectedCandidates), _step7; !(_step7 = _iterator7()).done; ) {
              var candidate = _step7.value;
              this.connectedCallback_(candidate);
            }
          }
          for (var _iterator6 = _createForOfIteratorHelperLoose3(removedNodes), _step6; !(_step6 = _iterator6()).done; ) {
            var _node = _step6.value;
            var disconnectedCandidates = this.queryAll_(_node, this.query_);
            this.disconnectedCallback_(_node);
            for (var _iterator8 = _createForOfIteratorHelperLoose3(disconnectedCandidates), _step8; !(_step8 = _iterator8()).done; ) {
              var _candidate = _step8.value;
              this.disconnectedCallback_(_candidate);
            }
          }
        }
      }
    }]);
    return Registry2;
  }();
  function installPatches(win, registry) {
    var _innerHTMLDesc;
    var Document = win.Document, Element2 = win.Element, Node2 = win.Node, document = win.document;
    var docProto = Document.prototype;
    var elProto = Element2.prototype;
    var nodeProto = Node2.prototype;
    var createElement = docProto.createElement, importNode = docProto.importNode;
    var appendChild = nodeProto.appendChild, cloneNode = nodeProto.cloneNode, insertBefore = nodeProto.insertBefore, removeChild = nodeProto.removeChild, replaceChild = nodeProto.replaceChild;
    docProto.createElement = function(name) {
      var def = registry.getByName(name);
      if (def) {
        return new def.ctor();
      }
      return createElement.apply(this, arguments);
    };
    docProto.importNode = function() {
      var imported = importNode.apply(this, arguments);
      if (imported && this === document) {
        registry.upgradeSelf(imported);
        registry.upgrade(imported);
      }
      return imported;
    };
    nodeProto.appendChild = function() {
      var appended = appendChild.apply(this, arguments);
      registry.sync();
      return appended;
    };
    nodeProto.insertBefore = function() {
      var inserted = insertBefore.apply(this, arguments);
      registry.sync();
      return inserted;
    };
    nodeProto.removeChild = function() {
      var removed = removeChild.apply(this, arguments);
      registry.sync();
      return removed;
    };
    nodeProto.replaceChild = function() {
      var replaced = replaceChild.apply(this, arguments);
      registry.sync();
      return replaced;
    };
    nodeProto.cloneNode = function() {
      var cloned = cloneNode.apply(this, arguments);
      if (cloned.ownerDocument === document) {
        registry.upgradeSelf(cloned);
        registry.upgrade(cloned);
      }
      return cloned;
    };
    var innerHTMLProto = elProto;
    var innerHTMLDesc = Object.getOwnPropertyDescriptor(innerHTMLProto, "innerHTML");
    if (!innerHTMLDesc) {
      innerHTMLProto = Object.getPrototypeOf(win.HTMLElement.prototype);
      innerHTMLDesc = Object.getOwnPropertyDescriptor(innerHTMLProto, "innerHTML");
    }
    if ((_innerHTMLDesc = innerHTMLDesc) != null && _innerHTMLDesc.configurable) {
      var innerHTMLSetter = innerHTMLDesc.set;
      innerHTMLDesc.set = function(html2) {
        innerHTMLSetter.call(this, html2);
        registry.upgrade(this);
      };
      Object.defineProperty(innerHTMLProto, "innerHTML", innerHTMLDesc);
    }
  }
  function polyfill(win) {
    var Element2 = win.Element;
    var registry = new Registry(win);
    var customElements = new CustomElementRegistry(win, registry);
    Object.defineProperty(win, "customElements", {
      enumerable: true,
      configurable: true,
      value: customElements
    });
    var elProto = Element2.prototype;
    var attachShadow = elProto.attachShadow, createShadowRoot = elProto.createShadowRoot;
    if (attachShadow) {
      elProto.attachShadow = function(unused) {
        var shadow = attachShadow.apply(this, arguments);
        registry.observe(shadow);
        return shadow;
      };
      elProto.attachShadow.toString = function() {
        return attachShadow.toString();
      };
    }
    if (createShadowRoot) {
      elProto.createShadowRoot = function() {
        var shadow = createShadowRoot.apply(this, arguments);
        registry.observe(shadow);
        return shadow;
      };
      elProto.createShadowRoot.toString = function() {
        return createShadowRoot.toString();
      };
    }
  }
  function install3(win, ctor) {
    var shouldInstall2 = win.document;
    var hasCE = hasCustomElements(win);
    if (!shouldInstall2 || hasCE && isPatched(win)) {
      return;
    }
    var install13 = true;
    var installWrapper = false;
    if (ctor && hasCE) {
      try {
        var _Reflect = win.Reflect;
        var instance = Object.create(ctor.prototype);
        Function.call.call(ctor, instance);
        installWrapper = !!(_Reflect != null && _Reflect.construct);
      } catch (e) {
        install13 = false;
      }
    }
    if (!installWrapper && install13) {
      polyfill(win);
    }
  }

  // src/polyfills/document-contains.js
  function documentContainsPolyfill(node) {
    return node == this || this.documentElement.contains(node);
  }
  function install4(win) {
    var documentClass = win.HTMLDocument || win.Document;
    if (documentClass && !documentClass.prototype.contains) {
      win.Object.defineProperty(documentClass.prototype, "contains", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: documentContainsPolyfill
      });
    }
  }

  // src/core/types/array.js
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
  var isArray = Array.isArray;
  function remove(array, shouldRemove) {
    var removed = [];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      if (shouldRemove(item, i, array)) {
        removed.push(item);
      } else {
        if (index < i) {
          array[index] = item;
        }
        index++;
      }
    }
    if (index < array.length) {
      array.length = index;
    }
    return removed;
  }
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
  }

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
  }
  function isString(s) {
    return typeof s == "string";
  }

  // src/core/types/function/index.js
  function throttle(win, callback, minInterval) {
    var locker = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      locker = win.setTimeout(waiter, minInterval);
      callback.apply(null, args);
    }
    function waiter() {
      locker = 0;
      if (nextCallArgs) {
        fire(nextCallArgs);
      }
    }
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (locker) {
        nextCallArgs = args;
      } else {
        fire(args);
      }
    };
  }
  function debounce(win, callback, minInterval) {
    var locker = 0;
    var timestamp = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      callback.apply(null, args);
    }
    function waiter() {
      locker = 0;
      var remaining = minInterval - (win.Date.now() - timestamp);
      if (remaining > 0) {
        locker = win.setTimeout(waiter, remaining);
      } else {
        fire(nextCallArgs);
      }
    }
    return function() {
      timestamp = win.Date.now();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      nextCallArgs = args;
      if (!locker) {
        locker = win.setTimeout(waiter, minInterval);
      }
    };
  }

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
  }
  function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
  }

  // src/core/error/message-helpers.js
  function elementStringOrPassThru(val) {
    if (isElement(val)) {
      val = val;
      return val.tagName.toLowerCase() + (val.id ? "#" + val.id : "");
    }
    return val;
  }

  // src/core/assert/index.js
  function assert(shouldBeTruthy, opt_message, var_args) {
    if (opt_message === void 0) {
      opt_message = "Assertion failed";
    }
    if (shouldBeTruthy) {
      return shouldBeTruthy;
    }
    var i = 2;
    var splitMessage = opt_message.split("%s");
    var message = splitMessage.shift();
    var messageArray = [message];
    while (splitMessage.length) {
      var subValue = arguments[i++];
      var nextConstant = splitMessage.shift();
      message += elementStringOrPassThru(subValue) + nextConstant;
      messageArray.push(subValue, nextConstant.trim());
    }
    var error = new Error(message);
    error.messageArray = remove(messageArray, function(x) {
      return x !== "";
    });
    throw error;
  }
  function assertElement(shouldBeElement, opt_message) {
    return assertType_(shouldBeElement, isElement(shouldBeElement), "Element expected", opt_message);
  }
  function assertString(shouldBeString, opt_message) {
    return assertType_(shouldBeString, isString(shouldBeString), "String expected", opt_message);
  }
  function assertNumber(shouldBeNumber, opt_message) {
    return assertType_(shouldBeNumber, typeof shouldBeNumber == "number", "Number expected", opt_message);
  }
  function assertType_(subject, shouldBeTruthy, defaultMessage, opt_message) {
    if (isArray(opt_message)) {
      assert(shouldBeTruthy, opt_message.concat([subject]));
    } else {
      assert(shouldBeTruthy, (opt_message || defaultMessage) + ": %s", subject);
    }
    return subject;
  }

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }
  function tryParseJson(json, opt_onFailed) {
    try {
      return parseJson(json);
    } catch (e) {
      opt_onFailed == null ? void 0 : opt_onFailed(e);
      return null;
    }
  }

  // src/core/types/string/bytes.js
  function utf8Encode(string) {
    if (typeof TextEncoder !== "undefined") {
      return new TextEncoder("utf-8").encode(string);
    }
    return stringToBytes(unescape(encodeURIComponent(string)));
  }
  function stringToBytes(str) {
    var bytes = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      assert(charCode <= 255, "Characters must be in range [0,255]");
      bytes[i] = charCode;
    }
    return bytes;
  }

  // src/polyfills/fetch.js
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf7(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _classCallCheck4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties3(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var allowedFetchTypes = {
    document: 1,
    text: 2
  };
  var allowedMethods = ["GET", "POST"];
  function fetchPolyfill(input, init2) {
    if (init2 === void 0) {
      init2 = {};
    }
    return new Promise(function(resolve, reject) {
      var requestMethod = normalizeMethod(init2.method || "GET");
      var xhr = createXhrRequest(requestMethod, input);
      if (init2.credentials == "include") {
        xhr.withCredentials = true;
      }
      if (init2.responseType in allowedFetchTypes) {
        xhr.responseType = init2.responseType;
      }
      if (init2.headers) {
        Object.keys(init2.headers).forEach(function(header) {
          xhr.setRequestHeader(header, init2.headers[header]);
        });
      }
      xhr.onreadystatechange = function() {
        if (xhr.readyState < 2) {
          return;
        }
        if (xhr.status < 100 || xhr.status > 599) {
          xhr.onreadystatechange = null;
          reject(new Error("Unknown HTTP status " + xhr.status));
          return;
        }
        if (xhr.readyState == 4) {
          resolve(new FetchResponse(xhr));
        }
      };
      xhr.onerror = function() {
        reject(new Error("Network failure"));
      };
      xhr.onabort = function() {
        reject(new Error("Request aborted"));
      };
      if (requestMethod == "POST") {
        xhr.send(init2.body);
      } else {
        xhr.send();
      }
    });
  }
  function createXhrRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else {
      throw new Error("CORS is not supported");
    }
    return xhr;
  }
  var FetchResponse = /* @__PURE__ */ function() {
    function FetchResponse2(xhr) {
      _classCallCheck4(this, FetchResponse2);
      this.xhr_ = xhr;
      this.status = this.xhr_.status;
      this.statusText = this.xhr_.statusText;
      this.ok = this.status >= 200 && this.status < 300;
      this.headers = new FetchResponseHeaders(xhr);
      this.bodyUsed = false;
      this.body = null;
      this.url = xhr.responseURL;
    }
    _createClass3(FetchResponse2, [{
      key: "clone",
      value: function clone() {
        assert(!this.bodyUsed, "Body already used");
        return new FetchResponse2(this.xhr_);
      }
    }, {
      key: "drainText_",
      value: function drainText_() {
        assert(!this.bodyUsed, "Body already used");
        this.bodyUsed = true;
        return Promise.resolve(this.xhr_.responseText);
      }
    }, {
      key: "text",
      value: function text() {
        return this.drainText_();
      }
    }, {
      key: "json",
      value: function json() {
        return this.drainText_().then(parseJson);
      }
    }, {
      key: "arrayBuffer",
      value: function arrayBuffer() {
        return this.drainText_().then(utf8Encode);
      }
    }]);
    return FetchResponse2;
  }();
  function normalizeMethod(method) {
    if (method === void 0) {
      return "GET";
    }
    method = method.toUpperCase();
    assert(allowedMethods.includes(method), "Only one of %s is currently allowed. Got %s", allowedMethods.join(", "), method);
    return method;
  }
  var FetchResponseHeaders = /* @__PURE__ */ function() {
    function FetchResponseHeaders2(xhr) {
      _classCallCheck4(this, FetchResponseHeaders2);
      this.xhr_ = xhr;
    }
    _createClass3(FetchResponseHeaders2, [{
      key: "get",
      value: function get(name) {
        return this.xhr_.getResponseHeader(name);
      }
    }, {
      key: "has",
      value: function has(name) {
        return this.xhr_.getResponseHeader(name) != null;
      }
    }]);
    return FetchResponseHeaders2;
  }();
  var Response = /* @__PURE__ */ function(_FetchResponse) {
    _inherits(Response2, _FetchResponse);
    var _super = _createSuper(Response2);
    function Response2(body, init2) {
      if (init2 === void 0) {
        init2 = {};
      }
      _classCallCheck4(this, Response2);
      var lowercasedHeaders = map();
      var data = _extends({
        status: 200,
        statusText: "OK",
        responseText: body ? String(body) : "",
        getResponseHeader: function getResponseHeader(name) {
          var headerName = String(name).toLowerCase();
          return hasOwn(lowercasedHeaders, headerName) ? lowercasedHeaders[headerName] : null;
        }
      }, init2);
      data.status = init2.status === void 0 ? 200 : parseInt(init2.status, 10);
      if (isArray(init2.headers)) {
        init2.headers.forEach(function(entry) {
          var headerName = entry[0];
          var headerValue = entry[1];
          lowercasedHeaders[String(headerName).toLowerCase()] = String(headerValue);
        });
      } else if (isObject(init2.headers)) {
        for (var key in init2.headers) {
          lowercasedHeaders[String(key).toLowerCase()] = String(init2.headers[key]);
        }
      }
      if (init2.statusText) {
        data.statusText = String(init2.statusText);
      }
      return _super.call(this, data);
    }
    return Response2;
  }(FetchResponse);
  function install5(win) {
    if (!win.fetch) {
      Object.defineProperty(win, "fetch", {
        value: fetchPolyfill,
        writable: true,
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(win, "Response", {
        value: Response,
        writable: true,
        enumerable: false,
        configurable: true
      });
    }
  }

  // src/core/document-ready.js
  function isDocumentReady(doc) {
    return doc.readyState != "loading" && doc.readyState != "uninitialized";
  }
  function onDocumentReady(doc, callback) {
    onDocumentState(doc, isDocumentReady, callback);
  }
  function onDocumentState(doc, stateFn, callback) {
    var ready = stateFn(doc);
    if (ready) {
      callback(doc);
    } else {
      var readyListener = function readyListener2() {
        if (stateFn(doc)) {
          if (!ready) {
            ready = true;
            callback(doc);
          }
          doc.removeEventListener("readystatechange", readyListener2);
        }
      };
      doc.addEventListener("readystatechange", readyListener);
    }
  }
  function whenDocumentReady(doc) {
    return new Promise(function(resolve) {
      onDocumentReady(doc, resolve);
    });
  }

  // src/core/dom/css-selectors.js
  var scopeSelectorSupported;
  function isScopeSelectorSupported(el) {
    if (scopeSelectorSupported !== void 0) {
      return scopeSelectorSupported;
    }
    return scopeSelectorSupported = testScopeSelector(el);
  }
  function testScopeSelector(el) {
    try {
      var doc = el.ownerDocument;
      var testElement = doc.createElement("div");
      var testChild = doc.createElement("div");
      testElement.appendChild(testChild);
      return testElement.querySelector(":scope div") === testChild;
    } catch (e) {
      return false;
    }
  }
  function prependSelectorsWith(selector, distribute) {
    return selector.replace(/^|,/g, "$&" + distribute + " ");
  }

  // src/core/dom/query.js
  function assertIsName(name) {
    assert(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
  }
  function scopedQuerySelectionFallback(root, selector) {
    var unique = "i-spzhtml-scoped";
    root.classList.add(unique);
    var scopedSelector = prependSelectorsWith(selector, "." + unique);
    var elements = root.querySelectorAll(scopedSelector);
    root.classList.remove(unique);
    return elements;
  }
  function realChildElements(element) {
    return childElements(element, function(element2) {
      return !isInternalOrServiceNode(element2);
    });
  }
  function isInternalOrServiceNode(node) {
    if (isInternalElement(node)) {
      return true;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
    assertElement(node);
    return node.hasAttribute("placeholder");
  }
  function isInternalElement(nodeOrTagName) {
    var tagName;
    if (typeof nodeOrTagName == "string") {
      tagName = nodeOrTagName;
    } else if (nodeOrTagName.nodeType === Node.ELEMENT_NODE) {
      tagName = assertElement(nodeOrTagName).tagName;
    }
    return !!tagName && tagName.toLowerCase().startsWith("i-");
  }
  function scopedQuerySelector(root, selector) {
    if (isScopeSelectorSupported(root)) {
      return root.querySelector(prependSelectorsWith(selector, ":scope"));
    }
    var fallbackResult = scopedQuerySelectionFallback(root, selector);
    return fallbackResult[0] === void 0 ? null : fallbackResult[0];
  }
  function scopedQuerySelectorAll(root, selector) {
    if (isScopeSelectorSupported(root)) {
      return root == null ? void 0 : root.querySelectorAll(prependSelectorsWith(selector, ":scope"));
    }
    return scopedQuerySelectionFallback(root, selector);
  }
  function matches(el, selector) {
    var matcher = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
    if (matcher) {
      return matcher.call(el, selector);
    }
    return false;
  }
  function closest(element, callback, opt_stopAt) {
    for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
      if (callback(el)) {
        return el;
      }
    }
    return null;
  }
  function closestAncestorElementBySelector(element, selector) {
    return element.closest ? element.closest(selector) : closest(element, function(el) {
      return matches(el, selector);
    });
  }
  function lastChildElement(parent, callback) {
    for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
  }
  function childElements(parent, callback) {
    var children = [];
    for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
      if (callback(child)) {
        children.push(child);
      }
    }
    return children;
  }
  function childNodes(parent, callback) {
    var nodes = [];
    for (var child = parent.firstChild; child; child = child.nextSibling) {
      if (callback(child)) {
        nodes.push(child);
      }
    }
    return nodes;
  }
  function childElementsByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelectorAll(parent, "> [" + attr + "]");
  }

  // src/core/dom/index.js
  var DEFAULT_CUSTOM_EVENT_OPTIONS = {
    bubbles: true,
    cancelable: true
  };
  var observerList = [];
  var intervalList = [];
  var failCallbackList = [];
  function waitForChild(parent, checkFunc, callback, failCallback) {
    if (failCallback === void 0) {
      failCallback = function failCallback2() {
      };
    }
    if (checkFunc(parent)) {
      callback();
      return;
    }
    var index = failCallbackList.push(failCallback);
    var win = parent.ownerDocument.defaultView;
    if (win.MutationObserver) {
      var observer = new win.MutationObserver(function() {
        if (checkFunc(parent)) {
          observer.disconnect();
          callback();
          failCallbackList[index] = function() {
          };
        }
      });
      observerList.push(observer);
      observer.observe(parent, {
        childList: true
      });
    } else {
      var interval = win.setInterval(function() {
        if (checkFunc(parent)) {
          win.clearInterval(interval);
          callback();
          failCallbackList[index] = function() {
          };
        }
      }, 5);
      intervalList.push(interval);
    }
    disConnect();
  }
  function disConnect() {
    if (getWaitForChildFlag()) {
      return;
    }
    setDisconnectFlag(true);
    var callback = function callback2() {
      intervalList.forEach(function(interval) {
        self.clearInterval(interval);
      });
      observerList.forEach(function(observer) {
        observer.disconnect();
      });
      failCallbackList.forEach(function(fn) {
        fn();
      });
    };
    if (isDocumentReady(self.document)) {
      callback();
    } else {
      whenDocumentReady(self.document).then(function() {
        return callback();
      });
    }
  }
  function getWaitForChildFlag() {
    return self.__SPZ_WAIT_FOR_CHILD;
  }
  function setDisconnectFlag(flag) {
    self.__SPZ_WAIT_FOR_CHILD = flag;
  }
  function waitForBodyOpen(doc, callback) {
    waitForChild(doc.documentElement, function() {
      return !!doc.body;
    }, callback);
  }
  function waitForBodyOpenPromise(doc) {
    return new Promise(function(resolve) {
      return waitForBodyOpen(doc, resolve);
    });
  }
  function removeElement(element) {
    var _element$parentElemen;
    (_element$parentElemen = element.parentElement) == null ? void 0 : _element$parentElemen.removeChild(element);
  }
  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  function insertAfterOrAtStart(root, element, after) {
    if (after === void 0) {
      after = null;
    }
    if (!after) {
      insertAtStart(root, element);
      return;
    }
    var before = after.nextSibling;
    root.insertBefore(element, before);
  }
  function insertAtStart(root, element) {
    root.insertBefore(element, root.firstChild);
  }
  function isConnectedNode(node) {
    var connected = node.isConnected;
    if (connected !== void 0) {
      return connected;
    }
    var n = node;
    do {
      n = rootNodeFor(n);
      if (n.host) {
        n = n.host;
      } else {
        break;
      }
    } while (true);
    return n.nodeType === Node.DOCUMENT_NODE;
  }
  function rootNodeFor(node) {
    if (Node.prototype.getRootNode) {
      return node.getRootNode() || node;
    }
    var n;
    for (n = node; !!n.parentNode; n = n.parentNode) {
    }
    return n;
  }
  function hasNextNodeInDocumentOrder(element, opt_stopNode) {
    var currentElement = element;
    do {
      if (currentElement.nextSibling) {
        return true;
      }
    } while ((currentElement = currentElement.parentNode) && currentElement != opt_stopNode);
    return false;
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
  }
  function isEnabled(element) {
    return !(element.disabled || matches(element, ":disabled"));
  }
  function toggleAttribute(element, name, forced) {
    var hasAttribute = element.hasAttribute(name);
    var enabled = forced !== void 0 ? forced : !hasAttribute;
    if (enabled !== hasAttribute) {
      if (enabled) {
        element.setAttribute(name, "");
      } else {
        element.removeAttribute(name);
      }
    }
    return enabled;
  }
  function getVerticalScrollbarWidth(win) {
    var documentElement = win.document.documentElement;
    var windowWidth = win.innerWidth;
    var documentWidth = documentElement.clientWidth;
    return windowWidth - documentWidth;
  }
  function dispatchCustomEvent(node, name, opt_data, opt_options) {
    var data = opt_data || {};
    var event = node.ownerDocument.createEvent("Event");
    event.data = data;
    var _ref = opt_options || DEFAULT_CUSTOM_EVENT_OPTIONS, bubbles = _ref.bubbles, cancelable = _ref.cancelable;
    event.initEvent(name, bubbles, cancelable);
    node.dispatchEvent(event);
  }
  function containsNotSelf(parent, child) {
    return child !== parent && parent.contains(child);
  }

  // src/core/dom/layout-rect.js
  function layoutRectLtwh(left, top, width, height) {
    return {
      left,
      top,
      width,
      height,
      bottom: top + height,
      right: left + width,
      x: left,
      y: top
    };
  }

  // src/polyfills/get-bounding-client-rect.js
  var nativeClientRect;
  function getBoundingClientRect() {
    if (isConnectedNode(this)) {
      return nativeClientRect.call(this);
    }
    return layoutRectLtwh(0, 0, 0, 0);
  }
  function shouldInstall(win) {
    if (false) {
      return false;
    }
    if (!win.document) {
      return false;
    }
    try {
      var div = win.document.createElement("div");
      var rect = div.getBoundingClientRect();
      return rect.top !== 0;
    } catch (e) {
      return true;
    }
  }
  function install6(win) {
    if (shouldInstall(win)) {
      nativeClientRect = Element.prototype.getBoundingClientRect;
      win.Object.defineProperty(win.Element.prototype, "getBoundingClientRect", {
        value: getBoundingClientRect
      });
    }
  }

  // src/polyfills/map-set.js
  function install7(win) {
    var Map2 = win.Map;
    var m = new Map2();
    if (m.set(0, 0) !== m) {
      var set = m.set;
      win.Object.defineProperty(Map2.prototype, "set", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value() {
          set.apply(this, arguments);
          return this;
        }
      });
    }
  }

  // src/polyfills/math-sign.js
  function sign(x) {
    x = Number(x);
    if (!x) {
      return x;
    }
    return x > 0 ? 1 : -1;
  }
  function install8(win) {
    if (!win.Math.sign) {
      win.Object.defineProperty(win.Math, "sign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: sign
      });
    }
  }

  // src/polyfills/object-assign.js
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function assign(target, var_args) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      if (source != null) {
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            output[key] = source[key];
          }
        }
      }
    }
    return output;
  }
  function install9(win) {
    if (!win.Object.assign) {
      win.Object.defineProperty(win.Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign
      });
    }
  }

  // src/polyfills/object-values.js
  function values(target) {
    return Object.keys(target).map(function(k) {
      return target[k];
    });
  }
  function install10(win) {
    if (!win.Object.values) {
      win.Object.defineProperty(win.Object, "values", {
        configurable: true,
        writable: true,
        value: values
      });
    }
  }

  // src/polyfills/set-add.js
  function install11(win) {
    var Set2 = win.Set;
    var s = new Set2();
    if (s.add(0) !== s) {
      var add = s.add;
      win.Object.defineProperty(Set2.prototype, "add", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value() {
          add.apply(this, arguments);
          return this;
        }
      });
    }
  }

  // src/polyfills/string-starts-with.js
  function startsWith(search, rawPos) {
    var pos = rawPos > 0 ? rawPos | 0 : 0;
    return this.substr(pos, search.length) === search;
  }
  function install12(win) {
    if (!win.String.prototype.startsWith) {
      win.Object.defineProperty(win.String.prototype, "startsWith", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: startsWith
      });
    }
  }

  // src/polyfills/index.js
  function _classCallCheck5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  if (true) {
    install5(self);
    install8(self);
    install9(self);
    install10(self);
    install2(self);
    install7(self);
    install11(self);
    install12(self);
  }
  if (self.document) {
    if (true) {
      install4(self);
      install6(self);
    }
    install3(self, /* @__PURE__ */ function() {
      function _class() {
        _classCallCheck5(this, _class);
      }
      return _class;
    }());
    install(self);
  }

  // src/core/dom/static-template.js
  var htmlContainer;
  function htmlFor(nodeOrDoc) {
    var doc = nodeOrDoc.ownerDocument || nodeOrDoc;
    if (!htmlContainer || htmlContainer.ownerDocument !== doc) {
      htmlContainer = doc.createElement("div");
    }
    return html;
  }
  function html(strings) {
    return createNode(htmlContainer, strings);
  }
  function createNode(container, strings) {
    assert(strings.length === 1, "Improper html template tag usage. %s", strings.length);
    container.innerHTML = strings[0];
    var el = container.firstElementChild;
    assert(el, "No elements in template");
    assert(!el.nextElementSibling, "Too many root elements in template");
    container.removeChild(el);
    return el;
  }

  // src/core/dom/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  var EMPTY_CSS_DECLARATION = {
    "getPropertyPriority": function getPropertyPriority() {
      return "";
    },
    "getPropertyValue": function getPropertyValue() {
      return "";
    }
  };
  function camelCaseToTitleCase(camelCase) {
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  }
  function getVendorJsPropertyName_(style, titleCase) {
    for (var i = 0; i < vendorPrefixes.length; i++) {
      var propertyName = vendorPrefixes[i] + titleCase;
      if (style[propertyName] !== void 0) {
        return propertyName;
      }
    }
    return "";
  }
  function getVendorJsPropertyName(style, camelCase, opt_bypassCache) {
    if (isVar(camelCase)) {
      return camelCase;
    }
    if (!propertyNameCache) {
      propertyNameCache = map();
    }
    var propertyName = propertyNameCache[camelCase];
    if (!propertyName || opt_bypassCache) {
      propertyName = camelCase;
      if (style[camelCase] === void 0) {
        var titleCase = camelCaseToTitleCase(camelCase);
        var prefixedPropertyName = getVendorJsPropertyName_(style, titleCase);
        if (style[prefixedPropertyName] !== void 0) {
          propertyName = prefixedPropertyName;
        }
      }
      if (!opt_bypassCache) {
        propertyNameCache[camelCase] = propertyName;
      }
    }
    return propertyName;
  }
  function setImportantStyles(element, styles) {
    var style = element.style;
    for (var k in styles) {
      style.setProperty(getVendorJsPropertyName(style, k), String(styles[k]), "important");
    }
  }
  function setStyle(element, property, value, opt_units, opt_bypassCache) {
    var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
    if (!propertyName) {
      return;
    }
    var styleValue = opt_units ? value + opt_units : value;
    if (isVar(propertyName)) {
      element.style.setProperty(propertyName, styleValue);
    } else {
      element.style[propertyName] = styleValue;
    }
  }
  function getStyle(element, property, opt_bypassCache) {
    var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
    if (!propertyName) {
      return void 0;
    }
    if (isVar(propertyName)) {
      return element.style.getPropertyValue(propertyName);
    }
    return element.style[propertyName];
  }
  function setStyles(element, styles) {
    for (var k in styles) {
      setStyle(element, k, styles[k]);
    }
  }
  function toggle(element, opt_display) {
    if (opt_display === void 0) {
      opt_display = element.hasAttribute("hidden");
    }
    if (opt_display) {
      element.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", "");
    }
  }
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function propagateObjectFitStyles(fromEl, toEl) {
    if (fromEl.hasAttribute("object-fit")) {
      setStyle(toEl, "object-fit", fromEl.getAttribute("object-fit"));
    }
    if (fromEl.hasAttribute("object-position")) {
      setStyle(toEl, "object-position", fromEl.getAttribute("object-position"));
    }
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/core/dom/layout.js
  var _templateObject;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var INTRINSIC_WIDTH_NAME = ["SPZ-IMG", "LJS-IMG"];
  var Layout = {
    NODISPLAY: "nodisplay",
    FIXED: "fixed",
    FIXED_HEIGHT: "fixed-height",
    RESPONSIVE: "responsive",
    CONTAINER: "container",
    FILL: "fill",
    FLEX_ITEM: "flex-item",
    INTRINSIC: "intrinsic",
    LOGIC: "logic"
  };
  var videoPlayerTagNameRe = /^spz\-(video|.+player)|SPZ-BRIGHTCOVE|SPZ-DAILYMOTION|SPZ-YOUTUBE|SPZ-VIMEO|SPZ-IMA-VIDEO/i;
  function parseLayout(s) {
    for (var k in Layout) {
      if (Layout[k] == s) {
        return Layout[k];
      }
    }
    return void 0;
  }
  function getLayoutClass(layout) {
    return "i-spzhtml-layout-" + layout;
  }
  function isLayoutSizeDefined(layout) {
    return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL || layout == Layout.FLEX_ITEM || layout == Layout.INTRINSIC;
  }
  function isLayoutSizeLogic(layout) {
    return layout == Layout.LOGIC;
  }
  function isLayoutSizeFixed(layout) {
    return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT;
  }
  function isInternalElement2(tag) {
    var tagName = typeof tag == "string" ? tag : tag.tagName;
    return tagName && tagName.toLowerCase().startsWith("i-");
  }
  function parseLength(s) {
    if (typeof s == "number") {
      return s + "px";
    }
    if (!s) {
      return void 0;
    }
    if (!/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(s)) {
      return void 0;
    }
    if (/^\d+(\.\d+)?$/.test(s)) {
      return s + "px";
    }
    return s;
  }
  function assertLength(length) {
    assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(length), "Invalid length value: %s", length);
    return length;
  }
  function getLengthUnits(length) {
    assertLength(length);
    var m = assert(/[a-z]+/i.exec(length), "Failed to read units from %s", length);
    return m[0];
  }
  function getLengthNumeral(length) {
    var res = parseFloat(length);
    return isFiniteNumber(res) ? res : void 0;
  }
  function isIframeVideoPlayerComponent(tagName) {
    if (tagName == "SPZ-VIDEO") {
      return false;
    }
    return videoPlayerTagNameRe.test(tagName);
  }
  function applyStaticLayout(element) {
    var completedLayoutAttr = element.getAttribute("i-spzhtml-layout");
    if (completedLayoutAttr) {
      var _layout = assert(parseLayout(completedLayoutAttr));
      if (_layout == Layout.NODISPLAY) {
        toggle(element, false);
        element["style"]["display"] = "";
      }
      return _layout;
    }
    var layoutAttr = element.getAttribute("layout");
    var widthAttr = element.getAttribute("width");
    var heightAttr = element.getAttribute("height");
    var heightsAttr = element.getAttribute("heights");
    var layout = layoutAttr ? parseLayout(layoutAttr) : null;
    assert(layout, 'Invalid "layout" value: %s, %s', layoutAttr, element);
    var width = widthAttr && widthAttr != "auto" ? parseLength(widthAttr) : widthAttr;
    assert(width !== void 0, 'Invalid "width" value: %s, %s', widthAttr, element);
    var height = heightAttr && heightAttr != "fluid" ? parseLength(heightAttr) : heightAttr;
    assert(height !== void 0, 'Invalid "height" value: %s, %s', heightAttr, element);
    if (layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.INTRINSIC && !INTRINSIC_WIDTH_NAME.includes(element.tagName)) {
      assert(height, 'The "height" attribute is missing: %s', element);
    }
    if (layout == Layout.FIXED_HEIGHT) {
      assert(!width || width == "auto", 'The "width" attribute must be missing or "auto": %s', element);
    }
    if (layout == Layout.FIXED || layout == Layout.RESPONSIVE || layout == Layout.INTRINSIC && !INTRINSIC_WIDTH_NAME.includes(element.tagName)) {
      assert(width && width != "auto", 'The "width" attribute must be present and not "auto": %s', element);
    }
    if (layout == Layout.RESPONSIVE || layout == Layout.INTRINSIC && !INTRINSIC_WIDTH_NAME.includes(element.tagName)) {
      assert(getLengthUnits(width) == getLengthUnits(height), 'Length units should be the same for "width" and "height": %s, %s, %s', widthAttr, heightAttr, element);
    } else {
      assert(heightsAttr === null, '"heights" attribute must be missing: %s', element);
    }
    element.classList.add(getLayoutClass(layout));
    if (isLayoutSizeDefined(layout)) {
      element.classList.add("i-spzhtml-layout-size-defined");
    }
    if (layout == Layout.NODISPLAY) {
      toggle(element, false);
      element["style"]["display"] = "";
    } else if (layout == Layout.FIXED) {
      setStyles(element, {
        width: assertString(width),
        height: assertString(height)
      });
    } else if (layout == Layout.FIXED_HEIGHT) {
      setStyle(element, "height", assertString(height));
    } else if (layout == Layout.RESPONSIVE) {
      var sizer = element.ownerDocument.createElement("i-spzhtml-sizer");
      setStyles(sizer, {
        paddingTop: getLengthNumeral(height) / getLengthNumeral(width) * 100 + "%"
      });
      element.insertBefore(sizer, element.firstChild);
      element.sizerElement = sizer;
    } else if (layout == Layout.INTRINSIC) {
      if (!height) {
        element.setAttribute("i-spzhtml-unheight-layout", "");
        setStyle(element, "width", width);
      } else {
        var _sizer = htmlFor(element)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n        <i-spzhtml-sizer class="i-spzhtml-sizer" slot="i-spzhtml-svc">\n          <img alt="" role="presentation" aria-hidden="true"\n              class="i-spzhtml-intrinsic-sizer" />\n        </i-spzhtml-sizer>'])));
        var intrinsicSizer = _sizer.firstElementChild;
        intrinsicSizer.setAttribute("src", 'data:image/svg+xml;charset=utf-8,<svg height="' + height + '" width="' + width + '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>');
        element.insertBefore(_sizer, element.firstChild);
        element.sizerElement = _sizer;
      }
    } else if (layout == Layout.FLEX_ITEM) {
      if (width) {
        setStyle(element, "width", width);
      }
      if (height) {
        setStyle(element, "height", height);
      }
    } else if (layout == Layout.FILL) {
    } else if (layout == Layout.CONTAINER) {
    } else if (layout === Layout.LOGIC) {
    }
    element.setAttribute("i-spzhtml-layout", layout);
    return layout;
  }

  // src/utils/spz-element-helpers.js
  var THIRD_PARTY_REG = /ljs-(.*)/;
  var NEW_VERSION = "v1";
  var PREFIX_NAME = "spz-";
  var NEW_PREFIX_NAME = "ljs-";
  var BEGIN_CSS = /^spz-/;
  var MIDDEN_CSS = /(}|,|\s)spz-/gi;
  function isSpzElement(element) {
    var tag = element.tagName;
    return tag.startsWith("SPZ-") || tag.startsWith("LJS-");
  }
  function isSpzTagName(tagName) {
    return (tagName == null ? void 0 : tagName.startsWith(PREFIX_NAME)) && !(tagName != null && tagName.startsWith(NEW_PREFIX_NAME));
  }
  function isLjsExtension(extensionId, type) {
    return type === NEW_VERSION && getLjsExtension(extensionId);
  }
  function isReplaceExtensionName(extensionId, type) {
    var isNewVersion = self.SPZ.spzVersion.includes(NEW_VERSION);
    return isLjsExtension(extensionId, type) && !isNewVersion;
  }
  function isAddExtensionName(extensionId, type) {
    var isNewVersion = self.SPZ.spzVersion.includes(NEW_VERSION);
    return isLjsExtension(extensionId, type) && isNewVersion;
  }
  function replaceExtensionName(extensionId) {
    return getLjsExtension(extensionId);
  }
  function handleLjsExtension(extensionId) {
    if (!THIRD_PARTY_REG.test(extensionId)) {
      return extensionId;
    }
    var newExtensionId = extensionId.replace("ljs", "spz");
    setLjsExtension(newExtensionId, extensionId);
    return newExtensionId;
  }
  function getLjsExtension(key) {
    if (!self.__SPZ_THIRD_EXTENSION) {
      self.__SPZ_THIRD_EXTENSION = {};
    }
    return self.__SPZ_THIRD_EXTENSION[key];
  }
  function setLjsExtension(key, value) {
    if (!self.__SPZ_THIRD_EXTENSION) {
      self.__SPZ_THIRD_EXTENSION = {};
    }
    self.__SPZ_THIRD_EXTENSION[key] = value;
  }
  function replaceCss(css) {
    try {
      var _css$replace;
      return css == null ? void 0 : (_css$replace = css.replace(BEGIN_CSS, NEW_PREFIX_NAME)) == null ? void 0 : _css$replace.replace(MIDDEN_CSS, function(match) {
        return match.replace(PREFIX_NAME, NEW_PREFIX_NAME);
      });
    } catch (error) {
      return css;
    }
  }

  // src/config/internal-version.js
  function internalRuntimeVersion() {
    return "1.0";
  }

  // src/config/mode.js
  function getMode(opt_win) {
    var win = opt_win || self;
    if (win.__SPZ_MODE) {
      return win.__SPZ_MODE;
    }
    return win.__SPZ_MODE = getMode_(win);
  }
  function getMode_(unusedwin) {
    var SPZ_CONFIG = self.SPZ_CONFIG || {};
    var IS_MINIFIED = false;
    return {
      localDev: !!SPZ_CONFIG.localDev,
      esm: false,
      minified: IS_MINIFIED,
      version: internalRuntimeVersion()
    };
  }

  // src/service/extension-script.js
  var _self$seahorse_env;
  var _self$seahorse_env2;
  var LATEST_VERSION = "latest";
  var DEFAULT_VERSION = "0.1";
  var CURRENT_VERSION = (_self$seahorse_env = self.seahorse_env) != null && _self$seahorse_env.v1_spz_version ? "?v=" + ((_self$seahorse_env2 = self.seahorse_env) == null ? void 0 : _self$seahorse_env2.v1_spz_version) : "";
  function calculateScriptBaseUrl(extensionId) {
    var isSpzTagNames = isSpzTagName(extensionId) || !extensionId;
    var _self$SPZ = self.SPZ, cdn = _self$SPZ.cdn, spzVersion = _self$SPZ.spzVersion;
    var isNewVersion = self.SPZ.spzVersion.includes(NEW_VERSION);
    var spzVersions = isNewVersion ? spzVersion : isSpzTagNames ? spzVersion : NEW_VERSION;
    return spzVersions ? cdn + "/" + spzVersions : "" + cdn;
  }
  function calculateExtensionScriptUrl(extensionId, version) {
    if (version === void 0) {
      version = DEFAULT_VERSION;
    }
    var fileExtension = getMode().esm ? ".mjs" : ".js";
    var base = calculateScriptBaseUrl(extensionId);
    var extensionVersion = version ? "-" + version : "";
    extensionId = handleLjsExtension(extensionId);
    return base + "/" + extensionId + extensionVersion + fileExtension + CURRENT_VERSION;
  }
  function calculateEntryPointScriptUrl(entryPoint) {
    var fileExtension = getMode().esm ? ".mjs" : ".js";
    var base = calculateScriptBaseUrl();
    return base + "/" + entryPoint + fileExtension + CURRENT_VERSION;
  }
  function parseExtensionUrl(scriptUrl) {
    if (!scriptUrl) {
      return null;
    }
    var matches2 = scriptUrl.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i);
    var extensionId = matches2 ? matches2[2] : void 0;
    var extensionVersion = matches2 ? matches2[3] : void 0;
    if (!extensionId || !extensionVersion) {
      return null;
    }
    return {
      extensionId,
      extensionVersion
    };
  }
  function createExtensionScript(win, extensionId, version) {
    var scriptElement = win.document.createElement("script");
    scriptElement.async = true;
    scriptElement.setAttribute("custom-element", extensionId);
    scriptElement.setAttribute("data-script", extensionId);
    scriptElement.setAttribute("i-spzhtml-inserted", "");
    if (getMode().esm) {
      scriptElement.setAttribute("type", "module");
    }
    var currentScript = win.document.head.querySelector("script[nonce]");
    if (currentScript) {
      scriptElement.setAttribute("nonce", currentScript.getAttribute("nonce"));
    }
    scriptElement.setAttribute("crossorigin", "anonymous");
    var scriptSrc = calculateExtensionScriptUrl(extensionId, version);
    scriptElement.src = scriptSrc;
    return scriptElement;
  }
  function getExtensionScripts(win, extensionId, version, latest, includeInserted) {
    if (includeInserted === void 0) {
      includeInserted = true;
    }
    var modifier = ":not([i-spzhtml-loaded-new-version])" + (includeInserted ? "" : ":not([i-spzhtml-inserted])");
    var matches2 = win.document.head.querySelectorAll('script[src*="/' + extensionId + '-"]' + modifier);
    var filtered = [];
    for (var i = 0; i < matches2.length; i++) {
      var match = matches2[i];
      var urlParts = parseExtensionUrl(match.src);
      if (!urlParts) {
        continue;
      }
      var scriptExtensionId = urlParts.extensionId, scriptExtensionVersion = urlParts.extensionVersion;
      if (scriptExtensionId == extensionId && (scriptExtensionVersion == version || scriptExtensionVersion == LATEST_VERSION && latest)) {
        filtered.push(match);
      }
    }
    return filtered;
  }
  function extensionScriptsInNode() {
    var head = self.document.head;
    if (!head) {
      return [];
    }
    var list = head.querySelectorAll("script[custom-element],script[custom-template]");
    var scripts = [];
    for (var i = 0; i < list.length; i++) {
      var script = list[i];
      var extensionId = script.getAttribute("custom-element") || script.getAttribute("custom-template");
      var urlParts = parseExtensionUrl(script.src);
      if (extensionId && urlParts) {
        scripts.push({
          extensionId,
          extensionVersion: urlParts.extensionVersion
        });
      }
    }
    return scripts;
  }

  // src/utils/style-installer.js
  var TRANSFORMER_PROP = "__SPZ_CSS_TR";
  var STYLE_MAP_PROP = "__SPZ_CSS_SM";
  function installStylesForDoc(cssText3, cb, opt_isRuntimeCss, opt_ext) {
    var cssRoot = self.document.head;
    var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText3), opt_isRuntimeCss || false, opt_ext || null);
    if (cb) {
      var rootNode = self.document;
      if (styleLoaded(rootNode, style)) {
        cb(style);
        return style;
      }
      var interval = setInterval(function() {
        if (styleLoaded(rootNode, style)) {
          clearInterval(interval);
          cb(style);
        }
      }, 4);
    }
    return style;
  }
  function insertStyleElement(cssRoot, cssText3, isRuntimeCss, ext) {
    var styleMap = cssRoot[STYLE_MAP_PROP];
    if (!styleMap) {
      styleMap = cssRoot[STYLE_MAP_PROP] = map();
    }
    var isExtCss = !isRuntimeCss && ext && ext != "spz-custom" && ext != "spz-keyframes";
    var key = isRuntimeCss ? "spz-runtime" : isExtCss ? "spz-extension=" + ext : null;
    if (key) {
      var existing = getExistingStyleElement(cssRoot, styleMap, key);
      if (existing) {
        if (existing.textContent !== cssText3 && !isRuntimeCss) {
          existing.textContent = cssText3;
        }
        return existing;
      }
    }
    var doc = cssRoot.ownerDocument || cssRoot;
    var style = doc.createElement("style");
    style.textContent = cssText3;
    var afterElement = null;
    if (isRuntimeCss) {
      style.setAttribute("spz-runtime", "");
    } else if (isExtCss) {
      style.setAttribute("spz-extension", ext || "");
      afterElement = assertElement(getExistingStyleElement(cssRoot, styleMap, "spz-runtime"));
    } else {
      if (ext) {
        style.setAttribute(ext, "");
      }
      afterElement = cssRoot.lastChild;
    }
    insertAfterOrAtStart(cssRoot, style, afterElement);
    if (key) {
      styleMap[key] = style;
    }
    return style;
  }
  function getExistingStyleElement(cssRoot, styleMap, key) {
    if (styleMap[key]) {
      return styleMap[key];
    }
    var existing = cssRoot.querySelector("style[" + key + "]");
    if (existing) {
      styleMap[key] = existing;
      return existing;
    }
    return null;
  }
  function maybeTransform(cssRoot, cssText3) {
    var transformer = cssRoot[TRANSFORMER_PROP];
    return transformer ? transformer(cssText3) : cssText3;
  }
  var bodyMadeVisible = false;
  function makeBodyVisible(doc) {
    assert(doc.defaultView, "Passed in document must have a defaultView");
    waitForBodyOpenPromise(doc).catch(function(reason) {
      rethrowAsync(reason);
    }).then(function() {
      bodyMadeVisible = true;
      setBodyVisibleStyles(doc);
    });
  }
  function makeBodyVisibleRecovery(doc) {
    assert(doc.defaultView, "Passed in document must have a defaultView");
    if (bodyMadeVisible) {
      return;
    }
    bodyMadeVisible = true;
    setBodyVisibleStyles(doc);
  }
  function setBodyVisibleStyles(doc) {
    setStyles(assertElement(doc.body), {
      opacity: 1,
      visibility: "visible",
      "animation": "none"
    });
  }
  function styleLoaded(doc, style) {
    var sheets = doc.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      if (sheet.ownerNode == style) {
        return true;
      }
    }
    return false;
  }

  // src/core/log/index.js
  function _classCallCheck6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties4(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass4(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties4(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties4(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var LogLevel = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    FINE: 4
  };
  var Log = /* @__PURE__ */ function() {
    function Log2(win) {
      _classCallCheck6(this, Log2);
      this.win = win;
      this.level_ = this.defaultLevel_();
    }
    _createClass4(Log2, [{
      key: "getLevel_",
      value: function getLevel_() {
        return this.level_;
      }
    }, {
      key: "defaultLevel_",
      value: function defaultLevel_() {
        if (!this.win.console || !this.win.console.log) {
          return LogLevel.OFF;
        }
        return LogLevel.INFO;
      }
    }, {
      key: "msg_",
      value: function msg_(tag, level, messages) {
        if (this.getLevel_() < level) {
          return false;
        }
        var fn = this.win.console.log;
        if (level == LogLevel.ERROR) {
          fn = this.win.console.error || fn;
        } else if (level == LogLevel.INFO) {
          fn = this.win.console.info || fn;
        } else if (level == LogLevel.WARN) {
          fn = this.win.console.warn || fn;
        }
        var prefix = "[" + tag + "]";
        if (!isArray(messages)) {
          messages = prefix + messages;
        } else {
          if (typeof messages[0] === "string") {
            messages[0] = prefix + " " + messages[0];
          } else {
            messages.unshift(prefix);
          }
        }
        fn.apply(this.win.console, messages);
        return messages;
      }
    }, {
      key: "isEnabled",
      value: function isEnabled2() {
        return this.getLevel_() != LogLevel.OFF;
      }
    }, {
      key: "fine",
      value: function fine(tag) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        this.msg_(tag, LogLevel.FINE, args);
      }
    }, {
      key: "info",
      value: function info(tag) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        this.msg_(tag, LogLevel.INFO, args);
      }
    }, {
      key: "warn",
      value: function warn(tag) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        this.msg_(tag, LogLevel.WARN, args);
      }
    }, {
      key: "error_",
      value: function error_(tag) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        return this.msg_(tag, LogLevel.ERROR, args);
      }
    }, {
      key: "error",
      value: function error(tag, var_args) {
        var error2 = this.error_.apply(this, arguments);
        if (error2) {
          error2.name = tag || error2.name;
          self.__SPZ_REPORT_ERROR(error2);
        }
      }
    }]);
    return Log2;
  }();
  self.__SPZ_LOG = self.__SPZ_LOG || {
    logger: null
  };
  var logs = self.__SPZ_LOG;
  function logger() {
    if (logs.logger) {
      return logs.logger;
    }
    return logs.logger = new Log(self);
  }
  function setReportError(fn) {
    self.__SPZ_REPORT_ERROR = fn;
  }

  // src/service/service-helper.js
  function registerServiceBuilder(win, id, constructor, opt_instantiate) {
    win = getTopWindow(win);
    registerServiceInternal(win, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(win, id);
    }
  }
  function registerServiceBuilderForDoc(id, constructor, opt_instantiate) {
    var holder = self;
    registerServiceInternal(holder, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(holder, id);
    }
  }
  function getService(win, id) {
    win = getTopWindow(win);
    return getServiceInternal(win, id);
  }
  function getServiceInEmbedWin(win, id) {
    return getServiceInternal(win, id);
  }
  function getServiceForDoc(id) {
    return getServiceInternal(self, id);
  }
  function getServiceForDocOrNull(id) {
    if (isServiceRegistered(self, id)) {
      return getServiceInternal(self, id);
    } else {
      return null;
    }
  }
  function getServicePromiseForDoc(id) {
    return getServicePromiseInternal(self, id);
  }
  function getServicePromiseOrNullForDoc(id) {
    return getServicePromiseOrNullInternal(self, id);
  }
  function getTopWindow(win) {
    return win.__SPZ_TOP || (win.__SPZ_TOP = win);
  }
  function getParentWindowFrameElement(node, opt_topWin) {
    var childWin = (node.ownerDocument || node).defaultView;
    var topWin = opt_topWin || getTopWindow(childWin);
    if (childWin && childWin != topWin && getTopWindow(childWin) == topWin) {
      try {
        return childWin.frameElement;
      } catch (e) {
      }
    }
    return null;
  }
  function getServiceInternal(holder, id) {
    if (!isServiceRegistered(holder, id)) {
      return null;
    }
    var services = getServices(holder);
    var s = services[id];
    if (!s.obj) {
      assert(s.ctor, "Service " + id + " registered without ctor nor impl.");
      assert(s.context, "Service " + id + " registered without context.");
      s.obj = new s.ctor(s.context);
      assert(s.obj, "Service " + id + " constructed to null.");
      s.context = null;
      if (s.resolve) {
        s.resolve(s.obj);
      }
    }
    return s.obj;
  }
  function registerServiceInternal(holder, id, ctor, opt_override, opt_sharedInstance) {
    var services = getServices(holder);
    var s = services[id];
    if (!s) {
      s = services[id] = {
        obj: null,
        promise: null,
        resolve: null,
        reject: null,
        context: null,
        ctor: null,
        sharedInstance: opt_sharedInstance || false
      };
    }
    if (!opt_override && s.ctor) {
      return;
    }
    s.ctor = ctor;
    s.context = self;
    s.sharedInstance = opt_sharedInstance || false;
    if (s.resolve) {
      getServiceInternal(holder, id);
    }
  }
  function getServicePromiseInternal(holder, id) {
    var cached = getServicePromiseOrNullInternal(holder, id);
    if (cached) {
      return cached;
    }
    var services = getServices(holder);
    services[id] = emptyServiceHolderWithPromise();
    return services[id].promise;
  }
  function getServicePromiseOrNullInternal(holder, id) {
    var services = getServices(holder);
    var s = services[id];
    if (s) {
      if (s.promise) {
        return s.promise;
      } else {
        getServiceInternal(holder, id);
        return s.promise = Promise.resolve(s.obj);
      }
    }
    return null;
  }
  function getServices(holder) {
    var services = holder.__SPZ_SERVICES;
    if (!services) {
      services = holder.__SPZ_SERVICES = {};
    }
    return services;
  }
  function isServiceRegistered(holder, id) {
    var service = holder.__SPZ_SERVICES && holder.__SPZ_SERVICES[id];
    return !!(service && service.ctor);
  }
  function emptyServiceHolderWithPromise() {
    var deferred = new Deferred();
    var promise = deferred.promise, reject = deferred.reject, resolve = deferred.resolve;
    promise.catch(function() {
    });
    return {
      obj: null,
      promise,
      resolve,
      reject,
      context: null,
      ctor: null
    };
  }

  // src/core/constants/common-signals.js
  var CommonSignals = {
    READY_TO_UPGRADE: "ready-upgrade",
    UPGRADED: "upgraded",
    BUILT: "built",
    MOUNTED: "mounted",
    LOAD_START: "load-start",
    RENDER_START: "render-start",
    LOAD_END: "load-end",
    INI_LOAD: "ini-load",
    UNLOAD: "unload"
  };

  // src/core/constants/ready-state.js
  var ReadyState = {
    UPGRADING: "upgrading",
    BUILDING: "building",
    MOUNTING: "mounting",
    LOADING: "loading",
    COMPLETE: "complete",
    ERROR: "error"
  };

  // src/core/data-structures/signals.js
  function _classCallCheck7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties5(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass5(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties5(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties5(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var Signals = /* @__PURE__ */ function() {
    function Signals2() {
      _classCallCheck7(this, Signals2);
      this.map_ = map();
      this.promiseMap_ = null;
    }
    _createClass5(Signals2, [{
      key: "get",
      value: function get(name) {
        var v = this.map_[name];
        return v == null ? null : v;
      }
    }, {
      key: "whenSignal",
      value: function whenSignal(name) {
        var _this$promiseMap_;
        var promiseStruct = (_this$promiseMap_ = this.promiseMap_) == null ? void 0 : _this$promiseMap_[name];
        if (!promiseStruct) {
          var result = this.map_[name];
          if (result != null) {
            var promise = typeof result == "number" ? Promise.resolve(result) : Promise.reject(result);
            promiseStruct = {
              promise
            };
          } else {
            promiseStruct = new Deferred();
          }
          if (!this.promiseMap_) {
            this.promiseMap_ = map();
          }
          this.promiseMap_[name] = promiseStruct;
        }
        return promiseStruct.promise;
      }
    }, {
      key: "signal",
      value: function signal(name, opt_time) {
        var _this$promiseMap_2;
        if (this.map_[name] != null) {
          return;
        }
        var time = opt_time != null ? opt_time : Date.now();
        this.map_[name] = time;
        var promiseStruct = (_this$promiseMap_2 = this.promiseMap_) == null ? void 0 : _this$promiseMap_2[name];
        if (promiseStruct != null && promiseStruct.resolve) {
          promiseStruct.resolve(time);
          promiseStruct.resolve = void 0;
          promiseStruct.reject = void 0;
        }
      }
    }, {
      key: "rejectSignal",
      value: function rejectSignal(name, error) {
        var _this$promiseMap_3;
        if (this.map_[name] != null) {
          return;
        }
        this.map_[name] = error;
        var promiseStruct = (_this$promiseMap_3 = this.promiseMap_) == null ? void 0 : _this$promiseMap_3[name];
        if (promiseStruct != null && promiseStruct.reject) {
          promiseStruct.reject(error);
          promiseStruct.promise.catch(function() {
          });
          promiseStruct.resolve = void 0;
          promiseStruct.reject = void 0;
        }
      }
    }, {
      key: "reset",
      value: function reset(name) {
        var _this$promiseMap_4;
        if (this.map_[name]) {
          delete this.map_[name];
        }
        var promiseStruct = (_this$promiseMap_4 = this.promiseMap_) == null ? void 0 : _this$promiseMap_4[name];
        if (promiseStruct && !promiseStruct.resolve) {
          delete this.promiseMap_[name];
        }
      }
    }]);
    return Signals2;
  }();

  // src/core/constants/spz-events.js
  var SpzEvents = {
    DOM_UPDATE: "spz:dom-update",
    FORM_DIRTINESS_CHANGE: "spz:form-dirtiness-change",
    FORM_VALUE_CHANGE: "spz:form-value-change",
    VISIBILITY_CHANGE: "spz:visibilitychange",
    ATTACHED: "spz:attached",
    STUBBED: "spz:stubbed",
    LOAD_START: "spz:load-start",
    LOAD_END: "spz:load-end",
    ERROR: "spz:error",
    SIZE_CHANGED: "spz:size-changed",
    UNLOAD: "spz:unload"
  };

  // src/utils/error-reporting.js
  var CANCELLED = "CANCELLED";
  var accumulatedErrorMessages = self.__SPZ_ERRORS || [];
  self.__SPZ_ERRORS = accumulatedErrorMessages;
  function reportErrorForWin(win, error, opt_associatedElement) {
    reportError(error, opt_associatedElement);
  }
  function reportError(error, opt_associatedElement) {
    if (self.console) {
      var output = console.error || console.log;
      if (error.messageArray) {
        output.apply(console, error.messageArray);
      } else {
        output.call(console, error.stack || error.message);
      }
    }
    return error;
  }
  function installErrorReporting(win) {
    win.onerror = onError;
    win.addEventListener("unhandledrejection", function(event) {
      reportError(event.reason || new Error("rejected promise " + event));
    });
  }
  function onError(message, filename, line, col, error) {
    if (this && this.document && (!error || !error.expected)) {
      makeBodyVisibleRecovery(this.document);
    }
  }
  function cancellation() {
    return new Error(CANCELLED);
  }
  function isCancellation(errorOrMessage) {
    if (!errorOrMessage) {
      return false;
    }
    if (typeof errorOrMessage == "string") {
      return errorOrMessage.startsWith(CANCELLED);
    }
    if (typeof errorOrMessage.message == "string") {
      return errorOrMessage.message.startsWith(CANCELLED);
    }
    return false;
  }

  // src/service/resources.js
  function _classCallCheck8(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties6(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass6(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties6(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties6(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var RESOURCE_PROP_ = "__SPZ__RESOURCE";
  var BUILDING_PROP_ = "__SPZ__BUILDING";
  var ID = "resources";
  function hasNextNodeInDocumentOrder2(element) {
    var currentElement = element;
    do {
      if (currentElement.nextSibling) {
        return true;
      }
    } while ((currentElement = currentElement.parentNode) && currentElement != self.document.body);
    return false;
  }
  var Resources = /* @__PURE__ */ function() {
    function Resources2() {
      _classCallCheck8(this, Resources2);
      this.documentReady_ = false;
      this.resources_ = [];
      this.pendingBuildResources_ = [];
      this.rebuildDomWhenReady_();
    }
    _createClass6(Resources2, [{
      key: "upgraded",
      value: function upgraded(element) {
        var resource = this.getElement_(element);
        if (!this.documentReady_ || !hasNextNodeInDocumentOrder2(element)) {
          var _this$pendingBuildRes;
          if (!this.pendingBuildResources_) {
            this.pendingBuildResources_ = [];
          }
          (_this$pendingBuildRes = this.pendingBuildResources_) == null ? void 0 : _this$pendingBuildRes.push(resource);
          return;
        }
        this.buildResourceUnsafe_(resource);
      }
    }, {
      key: "add",
      value: function add(element) {
        var resource = this.getElement_(element);
        this.resources_.push(resource);
      }
    }, {
      key: "remove",
      value: function remove2(element) {
        this.removeResource_(element);
      }
    }, {
      key: "rebuildDomWhenReady_",
      value: function rebuildDomWhenReady_() {
        var _this = this;
        whenDocumentReady(self.document).then(function() {
          _this.documentReady_ = true;
          _this.buildReadyResources_();
          _this.pendingBuildResources_ = [];
        });
      }
    }, {
      key: "getElement_",
      value: function getElement_(element) {
        if (!element[RESOURCE_PROP_]) {
          element[RESOURCE_PROP_] = element;
        }
        return element[RESOURCE_PROP_];
      }
    }, {
      key: "buildReadyResources_",
      value: function buildReadyResources_() {
        for (var i = 0; i < this.pendingBuildResources_.length; i++) {
          var resource = this.pendingBuildResources_[i];
          this.pendingBuildResources_.splice(i--, 1);
          this.buildResourceUnsafe_(resource);
        }
      }
    }, {
      key: "buildResourceUnsafe_",
      value: function buildResourceUnsafe_(resource) {
        var _this2 = this;
        var promise = this.build_(resource);
        if (!promise || !this.resources_.includes(resource)) {
          return null;
        }
        return promise.then(function() {
          return resource.layoutCallback();
        }).finally(function() {
          return _this2.removeResource_(resource);
        });
      }
    }, {
      key: "removeResource_",
      value: function removeResource_(resource) {
        var index = this.resources_.indexOf(resource);
        if (index != -1) {
          this.resources_.splice(index, 1);
        }
      }
    }, {
      key: "build_",
      value: function build_(element) {
        if (element[BUILDING_PROP_] || !element.isUpgraded()) {
          return null;
        }
        element[BUILDING_PROP_] = true;
        return element.whenBuilt();
      }
    }]);
    return Resources2;
  }();
  function getResourcesForDoc() {
    registerServiceBuilderForDoc(ID, Resources);
    return getServicePromiseForDoc(ID);
  }

  // src/service/scheduler.js
  function _classCallCheck9(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties7(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass7(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties7(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties7(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var ID2 = "scheduler";
  var ROOT_MARGIN = "150% 31.25%";
  var Scheduler = /* @__PURE__ */ function() {
    function Scheduler2() {
      var _this = this;
      _classCallCheck9(this, Scheduler2);
      var win = self;
      this.observer_ = new win.IntersectionObserver(function(e) {
        return _this.observed_(e);
      }, {
        rootMargin: ROOT_MARGIN
      });
      this.containerMap_ = new Map();
      this.targets_ = new Map();
      this.parsingTargets_ = [];
      this.scheduledReady_ = false;
      whenDocumentReady(self.document).then(function() {
        return _this.checkParsing_();
      });
    }
    _createClass7(Scheduler2, [{
      key: "dispose",
      value: function dispose() {
        this.observer_.disconnect();
        this.targets_.clear();
      }
    }, {
      key: "scheduleAsap",
      value: function scheduleAsap(target) {
        this.targets_.set(target, {
          asap: true,
          isIntersecting: false
        });
        this.waitParsing_(target);
      }
    }, {
      key: "schedule",
      value: function schedule(target) {
        var deferredMount = target.deferredMount();
        var value = this.targets_.get(target);
        if (this.targets_.has(target) && !(!deferredMount && !value.isIntersecting)) {
          return;
        }
        if (deferredMount) {
          this.targets_.set(target, {
            asap: false,
            isIntersecting: false
          });
          this.observer_.observe(target);
          if (this.containerMap_.size > 0) {
            this.containerMap_.forEach(function(observer, container) {
              if (containsNotSelf(container, target)) {
                observer.observe(target);
              }
            });
          }
        } else {
          this.targets_.set(target, {
            asap: false,
            isIntersecting: true
          });
        }
        this.waitParsing_(target);
      }
    }, {
      key: "unschedule",
      value: function unschedule(target) {
        if (!this.targets_.has(target)) {
          return;
        }
        this.targets_.delete(target);
        this.observer_.unobserve(target);
        if (this.containerMap_.size > 0) {
          this.containerMap_.forEach(function(observer) {
            observer.unobserve(target);
          });
        }
        if (this.parsingTargets_) {
          removeItem(this.parsingTargets_, target);
          this.checkParsing_();
        }
      }
    }, {
      key: "setContainer",
      value: function setContainer(container, opt_scroller, rootMargin) {
        var _this2 = this;
        if (this.containerMap_.has(container)) {
          return;
        }
        var win = self;
        var observer = new win.IntersectionObserver(function(e) {
          return _this2.observed_(e);
        }, {
          root: opt_scroller || container,
          rootMargin: rootMargin || ROOT_MARGIN
        });
        this.containerMap_.set(container, observer);
        this.targets_.forEach(function(_ref, target) {
          var asap = _ref.asap;
          if (!asap && containsNotSelf(container, target)) {
            observer.observe(target);
          }
        });
      }
    }, {
      key: "removeContainer",
      value: function removeContainer(container) {
        var observer = this.containerMap_.get(container);
        if (!observer) {
          return;
        }
        observer.disconnect();
        this.containerMap_.delete(container);
      }
    }, {
      key: "signalScanReady_",
      value: function signalScanReady_() {
        if (isDocumentReady(self.document) && !this.scheduledReady_) {
          this.scheduledReady_ = true;
        }
      }
    }, {
      key: "waitParsing_",
      value: function waitParsing_(target) {
        var parsingTargets = this.parsingTargets_;
        if (parsingTargets) {
          if (!parsingTargets.includes(target)) {
            parsingTargets.push(target);
          }
          this.checkParsing_();
        } else {
          this.maybeBuild_(target);
        }
      }
    }, {
      key: "checkParsing_",
      value: function checkParsing_() {
        var documentReady = isDocumentReady(self.document);
        var parsingTargets = this.parsingTargets_;
        if (parsingTargets) {
          for (var i = 0; i < parsingTargets.length; i++) {
            var target = parsingTargets[i];
            if (this.targets_.get(target).isIntersecting && (documentReady || hasNextNodeInDocumentOrder(target, self.document))) {
              parsingTargets.splice(i--, 1);
              this.observerCallback_(target);
            }
          }
        }
        if (documentReady) {
          this.parsingTargets_ = null;
          this.signalScanReady_();
        }
      }
    }, {
      key: "observed_",
      value: function observed_(entries) {
        for (var i = 0; i < entries.length; i++) {
          var _entries$i = entries[i], isThisIntersecting = _entries$i.isIntersecting, target = _entries$i.target;
          var spzTarget = target;
          var current = this.targets_.get(spzTarget);
          if (!current) {
            continue;
          }
          var isIntersecting = isThisIntersecting || current.isIntersecting;
          if (isIntersecting !== current.isIntersecting) {
            this.targets_.set(spzTarget, {
              asap: current.asap,
              isIntersecting
            });
          }
          if (isIntersecting) {
            this.observerCallback_(spzTarget);
          }
        }
      }
    }, {
      key: "observerCallback_",
      value: function observerCallback_(target) {
        var _this3 = this;
        this.installExtension_(target).then(function() {
          return _this3.maybeBuild_(target);
        });
      }
    }, {
      key: "maybeBuild_",
      value: function maybeBuild_(target) {
        var _ref2 = this.targets_.get(target) || {
          asap: false,
          isIntersecting: false
        }, asap = _ref2.asap, isIntersecting = _ref2.isIntersecting;
        var toBuild = asap || isIntersecting;
        if (!toBuild) {
          return;
        }
        this.unschedule(target);
        var win = self;
        win.setTimeout(function() {
          return target.mountInternal();
        });
      }
    }, {
      key: "installExtension_",
      value: function installExtension_(target) {
        return Services.extensionsFor(self).installExtensionForDoc(target.tagName.toLowerCase());
      }
    }]);
    return Scheduler2;
  }();
  function getSchedulerForDoc() {
    registerServiceBuilderForDoc(ID2, Scheduler);
    return getServiceForDoc(ID2);
  }

  // src/custom-element.js
  function _classCallCheck10(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties8(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass8(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties8(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties8(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf2(o, p);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized2(self2);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf2(o) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf7(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var UpgradeState = {
    NOT_UPGRADED: 1,
    UPGRADED: 2,
    UPGRADE_FAILED: 3,
    UPGRADE_IN_PROGRESS: 4
  };
  var NO_BUBBLES = {
    bubbles: false
  };
  var RETURN_TRUE = function RETURN_TRUE2() {
    return true;
  };
  var EVENT_STOP = "@tap.stop";
  var EVENT_PREVENT = "@tap.prevent";
  var templateTagSupported;
  var stubbedElements = [];
  function isTemplateTagSupported() {
    if (templateTagSupported === void 0) {
      var template = self.document.createElement("template");
      templateTagSupported = "content" in template;
    }
    return templateTagSupported;
  }
  function createCustomElementClass(win) {
    var BaseCustomElement = createBaseCustomElementClass(win);
    var CustomSpzElement = /* @__PURE__ */ function(_BaseCustomElement) {
      _inherits2(CustomSpzElement2, _BaseCustomElement);
      var _super = _createSuper2(CustomSpzElement2);
      function CustomSpzElement2() {
        _classCallCheck10(this, CustomSpzElement2);
        return _super.apply(this, arguments);
      }
      _createClass8(CustomSpzElement2, [{
        key: "adoptedCallback",
        value: function adoptedCallback() {
          if (Object.getPrototypeOf(this) !== customSpzElementProto) {
            Object.setPrototypeOf(this, customSpzElementProto);
          }
        }
      }]);
      return CustomSpzElement2;
    }(BaseCustomElement);
    var customSpzElementProto = CustomSpzElement.prototype;
    return CustomSpzElement;
  }
  function createBaseCustomElementClass(win) {
    if (win.__SPZ_BASE_CE_CLASS) {
      return win.__SPZ_BASE_CE_CLASS;
    }
    var htmlElement = win.HTMLElement;
    var BaseCustomElement = /* @__PURE__ */ function(_htmlElement) {
      _inherits2(BaseCustomElement2, _htmlElement);
      var _super2 = _createSuper2(BaseCustomElement2);
      function BaseCustomElement2() {
        var _this;
        _classCallCheck10(this, BaseCustomElement2);
        _this = _super2.call(this);
        _this.createdCallback();
        return _this;
      }
      _createClass8(BaseCustomElement2, [{
        key: "createdCallback",
        value: function createdCallback() {
          this.built_ = false;
          this.isConnected_ = false;
          this.buildingPromise_ = null;
          this.mounted_ = false;
          this.mountPromise_ = null;
          this.mountAbortController_ = null;
          this.readyState_ = ReadyState.UPGRADING;
          this.everAttached = false;
          this.layout_ = Layout.NODISPLAY;
          this.sizerElement = void 0;
          var Ctor = win.__SPZ_EXTENDED_ELEMENTS && win.__SPZ_EXTENDED_ELEMENTS[this.localName];
          this.implClass_ = Ctor === BaseElement ? null : Ctor || null;
          if (!this.implClass_) {
            stubbedElements.push(this);
          }
          this.impl_ = null;
          this.upgradeState_ = UpgradeState.NOT_UPGRADED;
          this.upgradeDelayMs_ = 0;
          this.actionQueue_ = void 0;
          this.isInTemplate_ = void 0;
          this.signals_ = new Signals();
          if (this.implClass_) {
            this.signals_.signal(CommonSignals.READY_TO_UPGRADE);
          }
        }
      }, {
        key: "readyState",
        get: function get() {
          return this.readyState_;
        }
      }, {
        key: "signals",
        value: function signals() {
          return this.signals_;
        }
      }, {
        key: "isUpgraded",
        value: function isUpgraded() {
          return this.upgradeState_ == UpgradeState.UPGRADED;
        }
      }, {
        key: "whenUpgraded",
        value: function whenUpgraded() {
          return this.signals_.whenSignal(CommonSignals.UPGRADED);
        }
      }, {
        key: "upgrade",
        value: function upgrade(newImplClass) {
          if (this.isInTemplate_) {
            return;
          }
          if (this.upgradeState_ != UpgradeState.NOT_UPGRADED) {
            return;
          }
          this.implClass_ = newImplClass;
          this.signals_.signal(CommonSignals.READY_TO_UPGRADE);
          if (this.everAttached) {
            this.upgradeOrSchedule_();
          }
        }
      }, {
        key: "getUpgradeDelayMs",
        value: function getUpgradeDelayMs() {
          return this.upgradeDelayMs_;
        }
      }, {
        key: "completeUpgrade_",
        value: function completeUpgrade_(newImpl, upgradeStartTime) {
          var _this2 = this;
          this.impl_ = newImpl;
          this.upgradeDelayMs_ = win.Date.now() - upgradeStartTime;
          this.upgradeState_ = UpgradeState.UPGRADED;
          this.setReadyStateInternal(ReadyState.BUILDING);
          this.classList.remove("spz-unresolved");
          this.classList.remove("i-spzhtml-unresolved");
          this.assertLayout_();
          var resources = getResourcesForDoc();
          resources.then(function(resource) {
            return resource.upgraded(_this2);
          });
          this.signals_.signal(CommonSignals.UPGRADED);
        }
      }, {
        key: "assertLayout_",
        value: function assertLayout_() {
          if (this.layout_ != Layout.NODISPLAY && this.impl_ && !this.impl_.isLayoutSupported(this.layout_)) {
            assert(this.getAttribute("layout"), "The element did not specify a layout attribute. ");
            assert(false, this + ", Layout not supported: " + this.layout_);
          }
        }
      }, {
        key: "getDefaultActionAlias",
        value: function getDefaultActionAlias() {
          assert(this.isUpgraded(), "Cannot get default action alias of unupgraded element");
          return this.impl_.getDefaultActionAlias();
        }
      }, {
        key: "isBuilding",
        value: function isBuilding() {
          return !!this.buildingPromise_;
        }
      }, {
        key: "isBuilt",
        value: function isBuilt() {
          return this.built_;
        }
      }, {
        key: "isMount",
        value: function isMount() {
          return this.mounted_;
        }
      }, {
        key: "whenBuilt",
        value: function whenBuilt() {
          return this.signals_.whenSignal(CommonSignals.BUILT);
        }
      }, {
        key: "buildInternal",
        value: function buildInternal() {
          var _this3 = this;
          assertNotTemplate(this);
          assert(this.implClass_, "Cannot build unupgraded element");
          if (this.buildingPromise_) {
            return this.buildingPromise_;
          }
          this.setReadyStateInternal(ReadyState.BUILDING);
          var implPromise = this.createImpl_();
          var buildPromise = implPromise.then(function() {
            assert(_this3.impl_).buildCallback();
          });
          return this.buildingPromise_ = buildPromise.then(function() {
            _this3.built_ = true;
            _this3.classList.add("i-spzhtml-built");
            _this3.classList.remove("i-spzhtml-notbuilt");
            _this3.classList.remove("spz-notbuilt");
            _this3.signals_.signal(CommonSignals.BUILT);
            _this3.setReadyStateInternal(_this3.readyState_ != ReadyState.BUILDING ? _this3.readyState_ : ReadyState.MOUNTING);
            if (_this3.isConnected_) {
              _this3.connected_();
            }
            if (!_this3.getPlaceholder()) {
              var placeholder = _this3.createPlaceholder();
              if (placeholder) {
                _this3.appendChild(placeholder);
              }
            }
          }, function(reason) {
            _this3.signals_.rejectSignal(CommonSignals.BUILT, reason);
            _this3.setReadyStateInternal(ReadyState.ERROR, reason);
            throw reason;
          });
        }
      }, {
        key: "build",
        value: function build() {
          var _this4 = this;
          if (this.buildingPromise_) {
            return this.buildingPromise_;
          }
          var readyPromise = this.signals_.whenSignal(CommonSignals.READY_TO_UPGRADE);
          return readyPromise.then(function() {
            var scheduler = getSchedulerForDoc();
            scheduler.scheduleAsap(_this4);
            return _this4.whenBuilt();
          });
        }
      }, {
        key: "mountInternal",
        value: function mountInternal() {
          var _this5 = this;
          if (this.mountPromise_) {
            return this.mountPromise_;
          }
          this.mountAbortController_ = this.mountAbortController_ || new AbortController();
          var signal = this.mountAbortController_.signal;
          return this.mountPromise_ = this.buildInternal().then(function() {
            if (signal.aborted) {
              return;
            }
            _this5.setReadyStateInternal(_this5.readyState_ != ReadyState.MOUNTING ? _this5.readyState_ : _this5.implClass_.usesLoading(_this5) ? ReadyState.LOADING : ReadyState.MOUNTING);
            var result = _this5.impl_.mountCallback(signal);
            return result ? result.then(RETURN_TRUE) : false;
          }).then(function(hasLoaded) {
            _this5.mounted_ = true;
            _this5.mountAbortController_ = null;
            if (signal.aborted) {
              throw cancellation();
            }
            _this5.signals_.signal(CommonSignals.MOUNTED);
            if (!_this5.implClass_.usesLoading(_this5) || hasLoaded) {
              _this5.setReadyStateInternal(ReadyState.COMPLETE);
            }
            if (_this5.actionQueue_) {
              Services.timerFor(_this5.ownerDocument.defaultView).delay(_this5.dequeueActions_.bind(_this5), 1);
            }
          }).catch(function(reason) {
            _this5.mountAbortController_ = null;
            if (isCancellation(reason)) {
              _this5.mountPromise_ = null;
            } else {
              _this5.signals_.rejectSignal(CommonSignals.MOUNTED, reason);
              _this5.setReadyStateInternal(ReadyState.ERROR, reason);
            }
            throw reason;
          });
        }
      }, {
        key: "mount",
        value: function mount() {
          var _this6 = this;
          if (this.mountPromise_) {
            return this.mountPromise_;
          }
          this.mountAbortController_ = this.mountAbortController_ || new AbortController();
          var signal = this.mountAbortController_.signal;
          var readyPromise = this.signals_.whenSignal(CommonSignals.READY_TO_UPGRADE);
          return readyPromise.then(function() {
            if (signal.aborted) {
              throw cancellation();
            }
            var scheduler = getSchedulerForDoc();
            scheduler.scheduleAsap(_this6);
            return _this6.whenMounted();
          });
        }
      }, {
        key: "unmount",
        value: function unmount() {
          if (this.mountAbortController_) {
            this.mountAbortController_.abort();
            this.mountAbortController_ = null;
          }
          var scheduler = getSchedulerForDoc();
          scheduler.unschedule(this);
          if (this.mounted_) {
            this.impl_.unmountCallback();
          }
          this.mounted_ = false;
          this.mountPromise_ = null;
          this.reset_();
          if (this.isConnected_) {
            this.upgradeOrSchedule_(true);
          }
        }
      }, {
        key: "whenMounted",
        value: function whenMounted() {
          return this.signals_.whenSignal(CommonSignals.MOUNTED);
        }
      }, {
        key: "whenLoaded",
        value: function whenLoaded() {
          return this.signals_.whenSignal(CommonSignals.LOAD_END);
        }
      }, {
        key: "setAsContainerInternal",
        value: function setAsContainerInternal(opt_scroller, rootMargin) {
          var builder = getSchedulerForDoc();
          builder.setContainer(this, opt_scroller, rootMargin);
        }
      }, {
        key: "removeAsContainerInternal",
        value: function removeAsContainerInternal() {
          var builder = getSchedulerForDoc();
          builder.removeContainer(this);
        }
      }, {
        key: "setReadyStateInternal",
        value: function setReadyStateInternal(state, opt_failure) {
          if (state === this.readyState_) {
            return;
          }
          this.readyState_ = state;
          switch (state) {
            case ReadyState.LOADING:
              this.signals_.signal(CommonSignals.LOAD_START);
              this.signals_.reset(CommonSignals.UNLOAD);
              this.signals_.reset(CommonSignals.LOAD_END);
              this.classList.add("i-spzhtml-layout");
              return;
            case ReadyState.COMPLETE:
              this.signals_.signal(CommonSignals.LOAD_START);
              this.signals_.reset(CommonSignals.UNLOAD);
              this.classList.add("i-spzhtml-layout");
              dispatchCustomEvent(this, "load", null, NO_BUBBLES);
              return;
            case ReadyState.ERROR:
              this.signals_.rejectSignal(CommonSignals.LOAD_END, opt_failure);
              dispatchCustomEvent(this, "error", opt_failure, NO_BUBBLES);
              return;
          }
        }
      }, {
        key: "deferredMount",
        value: function deferredMount() {
          return this.implClass_ ? this.implClass_.deferredMount(this) : true;
        }
      }, {
        key: "getSizer_",
        value: function getSizer_() {
          if (this.sizerElement === void 0 && (this.layout_ === Layout.RESPONSIVE || this.layout_ === Layout.INTRINSIC)) {
            this.sizerElement = this.querySelector("i-spzhtml-sizer");
          }
          return this.sizerElement || null;
        }
      }, {
        key: "resetSizer_",
        value: function resetSizer_(sizer) {
          if (this.layout_ === Layout.RESPONSIVE) {
            setStyle(sizer, "paddingTop", "0");
            return;
          }
          if (this.layout_ === Layout.INTRINSIC) {
            var intrinsicSizerImg = sizer.querySelector(".i-spzhtml-intrinsic-sizer");
            if (!intrinsicSizerImg) {
              return;
            }
            intrinsicSizerImg.setAttribute("src", "");
            return;
          }
        }
      }, {
        key: "applySize",
        value: function applySize(newHeight, newWidth, opt_newMargins) {
          var sizer = this.getSizer_();
          if (sizer) {
            this.sizerElement = null;
            this.resetSizer_(sizer);
            this.mutateOrInvoke_(function() {
              if (sizer) {
                removeElement(sizer);
              }
            });
          }
          if (newHeight !== void 0) {
            setStyle(this, "height", newHeight, "px");
          }
          if (newWidth !== void 0) {
            setStyle(this, "width", newWidth, "px");
          }
          if (opt_newMargins) {
            if (opt_newMargins.top != null) {
              setStyle(this, "marginTop", opt_newMargins.top, "px");
            }
            if (opt_newMargins.right != null) {
              setStyle(this, "marginRight", opt_newMargins.right, "px");
            }
            if (opt_newMargins.bottom != null) {
              setStyle(this, "marginBottom", opt_newMargins.bottom, "px");
            }
            if (opt_newMargins.left != null) {
              setStyle(this, "marginLeft", opt_newMargins.left, "px");
            }
          }
          if (this.isAwaitingSize_()) {
            this.sizeProvided_();
          }
          dispatchCustomEvent(this, SpzEvents.SIZE_CHANGED);
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this7 = this;
          if (!isTemplateTagSupported() && this.isInTemplate_ === void 0) {
            this.isInTemplate_ = !!closestAncestorElementBySelector(this, "template");
          }
          if (this.isInTemplate_) {
            return;
          }
          if (this.isConnected_ || !isConnectedNode(this)) {
            return;
          }
          this.isConnected_ = true;
          if (!this.everAttached) {
            this.classList.add("i-spzhtml-element");
            this.classList.add("i-spzhtml-notbuilt");
            this.classList.add("spz-notbuilt");
            initSyntacticSugar(this);
          }
          var resources = getResourcesForDoc();
          resources.then(function(resource) {
            return resource.add(_this7);
          });
          if (this.everAttached) {
            var reconstruct = this.reconstructWhenReparented();
            if (reconstruct) {
              this.reset_();
            }
            if (this.isUpgraded()) {
              if (reconstruct) {
                resources.then(function(resource) {
                  return resource.upgraded(_this7);
                });
              }
              this.connected_();
            }
            if (this.implClass_) {
              this.upgradeOrSchedule_();
            } else {
              var scheduler = getSchedulerForDoc();
              scheduler.schedule(this);
            }
          } else {
            this.everAttached = true;
            try {
              this.layout_ = applyStaticLayout(this, Services.platformFor(this.ownerDocument.defaultView).isIe());
            } catch (e) {
              reportError(e, this);
            }
            if (this.implClass_) {
              this.upgradeOrSchedule_();
            } else {
              var _scheduler = getSchedulerForDoc();
              _scheduler.schedule(this);
            }
            if (!this.isUpgraded()) {
              this.classList.add("spz-unresolved");
              this.classList.add("i-spzhtml-unresolved");
            }
          }
        }
      }, {
        key: "isAwaitingSize_",
        value: function isAwaitingSize_() {
          return this.classList.contains("i-spzhtml-layout-awaiting-size");
        }
      }, {
        key: "sizeProvided_",
        value: function sizeProvided_() {
          this.classList.remove("i-spzhtml-layout-awaiting-size");
        }
      }, {
        key: "upgradeOrSchedule_",
        value: function upgradeOrSchedule_(opt_disablePreload) {
          if (this.mountPromise_) {
            return;
          }
          var scheduler = getSchedulerForDoc();
          scheduler.schedule(this);
          if (this.buildingPromise_) {
            this.setReadyStateInternal(this.implClass_ && this.implClass_.usesLoading(this) ? ReadyState.LOADING : ReadyState.MOUNTING);
          } else {
            this.setReadyStateInternal(ReadyState.BUILDING);
          }
        }
      }, {
        key: "tryUpgrade_",
        value: function tryUpgrade_() {
          var _this8 = this;
          if (this.isInTemplate_) {
            return;
          }
          if (this.upgradeState_ != UpgradeState.NOT_UPGRADED) {
            return;
          }
          var Ctor = assert(this.implClass_, "Implementation must not be a stub");
          var impl = new Ctor(this);
          this.upgradeState_ = UpgradeState.UPGRADE_IN_PROGRESS;
          var startTime = win.Date.now();
          var res = impl.upgradeCallback();
          if (!res) {
            this.completeUpgrade_(impl, startTime);
          } else if (typeof res.then == "function") {
            return res.then(function(upgrade) {
              _this8.completeUpgrade_(upgrade || impl, startTime);
            }).catch(function(reason) {
              _this8.upgradeState_ = UpgradeState.UPGRADE_FAILED;
              rethrowAsync(reason);
            });
          } else {
            this.completeUpgrade_(res, startTime);
          }
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.disconnect(false);
        }
      }, {
        key: "connected_",
        value: function connected_() {
          if (this.built_) {
            this.impl_.attachedCallback();
          }
        }
      }, {
        key: "disconnect",
        value: function disconnect(pretendDisconnected) {
          var _this9 = this;
          if (this.isInTemplate_ || !this.isConnected_) {
            return;
          }
          if (!pretendDisconnected && isConnectedNode(this)) {
            return;
          }
          if (pretendDisconnected) {
            this.classList.remove("i-spzhtml-element");
          }
          this.isConnected_ = false;
          var resources = getResourcesForDoc();
          resources.then(function(resource) {
            return resource.remove(_this9);
          });
          if (this.impl_) {
            this.impl_.detachedCallback();
          }
          this.unmount();
        }
      }, {
        key: "prerenderAllowed",
        value: function prerenderAllowed() {
          if (this.hasAttribute("noprerender")) {
            return false;
          }
          return this.implClass_ ? this.implClass_.prerenderAllowed(this) : false;
        }
      }, {
        key: "isBuildRenderBlocking",
        value: function isBuildRenderBlocking() {
          return this.impl_ ? this.impl_.isBuildRenderBlocking() : false;
        }
      }, {
        key: "createPlaceholder",
        value: function createPlaceholder() {
          return this.impl_ ? this.impl_.createPlaceholderCallback() : null;
        }
      }, {
        key: "createLoaderLogo",
        value: function createLoaderLogo() {
          return this.implClass_ ? this.implClass_.createLoaderLogoCallback(this) : {};
        }
      }, {
        key: "getImpl",
        value: function getImpl(waitForBuild) {
          var _this10 = this;
          if (waitForBuild === void 0) {
            waitForBuild = true;
          }
          var waitFor = waitForBuild ? this.build() : this.createImpl_();
          return waitFor.then(function() {
            return _this10.impl_;
          });
        }
      }, {
        key: "createImpl_",
        value: function createImpl_() {
          var _this11 = this;
          return this.signals_.whenSignal(CommonSignals.READY_TO_UPGRADE).then(function() {
            _this11.tryUpgrade_();
            return _this11.whenUpgraded();
          });
        }
      }, {
        key: "getApi",
        value: function getApi() {
          return this.getImpl().then(function(impl) {
            return impl.getApi();
          });
        }
      }, {
        key: "getData",
        value: function getData2() {
          return this.getImpl().then(function(impl) {
            return impl.getData();
          });
        }
      }, {
        key: "getLayout",
        value: function getLayout() {
          return this.layout_;
        }
      }, {
        key: "layoutCallback",
        value: function layoutCallback() {
          var _this$impl_, _this12 = this;
          var result = (_this$impl_ = this.impl_) == null ? void 0 : _this$impl_.layoutCallback == null ? void 0 : _this$impl_.layoutCallback();
          if (result instanceof Promise) {
            return result.finally(function() {
              _this12.signals_.signal(CommonSignals.LOAD_END);
            });
          }
          this.signals_.signal(CommonSignals.LOAD_END);
          return resolvedPromise();
        }
      }, {
        key: "reset_",
        value: function reset_() {
          this.signals_.reset(CommonSignals.MOUNTED);
          this.signals_.reset(CommonSignals.RENDER_START);
          this.signals_.reset(CommonSignals.LOAD_START);
          this.signals_.reset(CommonSignals.LOAD_END);
          this.signals_.reset(CommonSignals.INI_LOAD);
        }
      }, {
        key: "reconstructWhenReparented",
        value: function reconstructWhenReparented() {
          return this.impl_ ? this.impl_.reconstructWhenReparented() : false;
        }
      }, {
        key: "mutatedAttributesCallback",
        value: function mutatedAttributesCallback(mutations) {
          if (this.impl_) {
            this.impl_.mutatedAttributesCallback(mutations);
          }
        }
      }, {
        key: "enqueAction",
        value: function enqueAction(invocation) {
          assertNotTemplate(this);
          if (!this.isBuilt() || !this.isMount()) {
            if (this.actionQueue_ === void 0) {
              this.actionQueue_ = [];
            }
            assert(this.actionQueue_).push(invocation);
            !this.isBuilt() ? this.build() : this.mount();
          } else {
            this.executionAction_(invocation, false);
          }
        }
      }, {
        key: "dequeueActions_",
        value: function dequeueActions_() {
          var _this13 = this;
          if (!this.actionQueue_) {
            return;
          }
          Services.timerFor(this.ownerDocument.defaultView).delay(function() {
            var actionQueue = assert(_this13.actionQueue_);
            _this13.actionQueue_ = void 0;
            actionQueue.forEach(function(invocation) {
              _this13.executionAction_(invocation, true);
            });
          }, 1);
        }
      }, {
        key: "executionAction_",
        value: function executionAction_(invocation, deferred) {
          try {
            this.impl_.executeAction(invocation, deferred);
          } catch (e) {
            rethrowAsync("Action execution failed:", e, invocation.node.tagName, invocation.method);
          }
        }
      }, {
        key: "getRealChildNodes",
        value: function getRealChildNodes() {
          return childNodes(this, function(node) {
            return !isInternalOrServiceNode2(node);
          });
        }
      }, {
        key: "getRealChildren",
        value: function getRealChildren() {
          return childElements(this, function(element) {
            return !isInternalOrServiceNode2(element);
          });
        }
      }, {
        key: "getPlaceholder",
        value: function getPlaceholder() {
          return lastChildElement(this, function(el) {
            return el.hasAttribute("placeholder") && !isInputPlaceholder(el);
          });
        }
      }, {
        key: "togglePlaceholder",
        value: function togglePlaceholder(show) {
          assertNotTemplate(this);
          if (show) {
            var placeholder = this.getPlaceholder();
            if (placeholder) {
              assertElement(placeholder).classList.remove("spz-hidden");
            }
          } else {
            var placeholders = childElementsByAttr(this, "placeholder");
            for (var i = 0; i < placeholders.length; i++) {
              if (isInputPlaceholder(placeholders[i])) {
                continue;
              }
              placeholders[i].classList.add("spz-hidden");
            }
          }
        }
      }, {
        key: "renderStarted",
        value: function renderStarted() {
          this.signals_.signal(CommonSignals.RENDER_START);
          this.togglePlaceholder(false);
        }
      }, {
        key: "mutateOrInvoke_",
        value: function mutateOrInvoke_(mutator, opt_element, opt_skipRemeasure) {
          if (opt_skipRemeasure === void 0) {
            opt_skipRemeasure = false;
          }
          Services.mutatorForDoc().mutateElement(opt_element || this, mutator, opt_skipRemeasure);
        }
      }, {
        key: "showToast",
        value: function showToast(text, animate, duration) {
          this.getImpl().then(function(impl) {
            return impl.showToast(text, animate, duration);
          });
        }
      }]);
      return BaseCustomElement2;
    }(htmlElement);
    win.__SPZ_BASE_CE_CLASS = BaseCustomElement;
    return win.__SPZ_BASE_CE_CLASS;
  }
  function isInputPlaceholder(element) {
    return "placeholder" in element;
  }
  function assertNotTemplate(element) {
    assert(!element.isInTemplate_, "Must never be called in template");
  }
  function isInternalOrServiceNode2(node) {
    if (isInternalElement2(node)) {
      return true;
    }
    if (node.tagName && node.hasAttribute("placeholder")) {
      return true;
    }
    return false;
  }
  function initSyntacticSugar(element) {
    if (element.hasAttribute(EVENT_STOP)) {
      element.addEventListener("click", function(e) {
        e.stopPropagation();
      });
      assert(!element.getAttribute(EVENT_STOP), "The click event has been blocked and cannot be executed.");
    }
    if (element.hasAttribute(EVENT_PREVENT)) {
      element.addEventListener("click", function(e) {
        e.preventDefault();
      });
    }
  }

  // src/service/custom-element-registry.js
  function getExtendedElements(win) {
    if (!win.__SPZ_EXTENDED_ELEMENTS) {
      win.__SPZ_EXTENDED_ELEMENTS = {};
    }
    return win.__SPZ_EXTENDED_ELEMENTS;
  }
  function upgradeOrRegisterElement(win, name, toClass) {
    upgradeOrRegisterElementReady(win, name, toClass);
  }
  function upgradeOrRegisterElementReady(win, name, toClass) {
    var knownElements = getExtendedElements(win);
    if (!knownElements[name]) {
      registerElement(win, name, toClass);
      return;
    }
    if (knownElements[name] == toClass) {
      return;
    }
    assert(knownElements[name] == BaseElement, "%s is already registered. The script tag for %s is likely included twice in the page.", name, name);
    knownElements[name] = toClass;
    for (var i = 0; i < stubbedElements.length; i++) {
      var element = stubbedElements[i];
      if (element.tagName.toLowerCase() == name && element.ownerDocument.defaultView == win) {
        tryUpgradeElement(element, toClass);
        stubbedElements.splice(i--, 1);
      }
    }
  }
  function tryUpgradeElement(element, toClass) {
    try {
      element.upgrade(toClass);
    } catch (e) {
      reportError(e, element);
    }
  }
  function stubElementsForDoc(extensions) {
    if (extensions === void 0) {
      extensions = extensionScriptsInNode();
    }
    extensions.forEach(function(_ref) {
      var extensionId = _ref.extensionId, extensionVersion = _ref.extensionVersion;
      setDeclareExtension(extensionId, extensionVersion);
      stubElementIfNotKnown(self, extensionId);
    });
  }
  function stubElementIfNotKnown(win, name) {
    var knownElements = getExtendedElements(win);
    if (!knownElements[name]) {
      registerElement(win, name, BaseElement);
    }
  }
  function registerElement(win, name, implementationClass) {
    var knownElements = getExtendedElements(win);
    knownElements[name] = implementationClass;
    var klass = createCustomElementClass(win);
    win["customElements"].define(name, klass);
  }

  // src/service/extensions-impl.js
  function _classCallCheck11(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties9(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass9(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties9(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties9(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var TAG = "extensions";
  var DEFAULT_VERSION2 = "0.1";
  var LATEST_VERSION2 = "latest";
  var UNKNOWN_EXTENSION = "_UNKNOWN_";
  var LOADER_PROP = "__SPZ_EXT_LDR";
  var BUILTINS_EXTENSION = ["spz-img", "ljs-img", "spz-layout", "ljs-layout"];
  function installExtensionsService(window2) {
    registerServiceBuilder(window2, "extensions", Extensions);
  }
  function getExtensionVersion(extensionId) {
    if (!self.__SPZ_DECLARE_EXTENSION) {
      self.__SPZ_DECLARE_EXTENSION = {};
    }
    return self.__SPZ_DECLARE_EXTENSION[extensionId] || null;
  }
  function setDeclareExtension(extensionId, version) {
    if (version === void 0) {
      version = DEFAULT_VERSION2;
    }
    if (!self.__SPZ_DECLARE_EXTENSION) {
      self.__SPZ_DECLARE_EXTENSION = {};
    }
    assert(!self.__SPZ_DECLARE_EXTENSION[extensionId] || self.__SPZ_DECLARE_EXTENSION[extensionId] === version, "extension already declared %s", extensionId);
    self.__SPZ_DECLARE_EXTENSION[extensionId] = version;
  }
  function declaresExtension(extensionId, version) {
    var declared = getExtensionVersion(extensionId);
    if (!declared) {
      return false;
    }
    return !version || declared === version;
  }
  var Extensions = /* @__PURE__ */ function() {
    function Extensions2(win) {
      _classCallCheck11(this, Extensions2);
      this.win = win;
      this.extensions_ = {};
      this.currentExtensionId_ = null;
      this.currentExtensionVersion_ = null;
      this.currentExtensionLatest_ = null;
    }
    _createClass9(Extensions2, [{
      key: "registerExtension",
      value: function registerExtension(_ref) {
        var _this = this;
        var arg = _ref.arg, extensionId = _ref.extensionId, factory = _ref.factory, latest = _ref.latest, type = _ref.type, version = _ref.version;
        var isReplace = isReplaceExtensionName(extensionId, type);
        var isAdd = isAddExtensionName(extensionId, type);
        var execute = function execute2(extensionId2) {
          var _latestHolder$auto;
          var latestHolder = latest ? _this.extensions_[extensionKey(extensionId2, LATEST_VERSION2)] : null;
          var holder = _this.getExtensionHolder_(extensionId2, version, (_latestHolder$auto = latestHolder == null ? void 0 : latestHolder.auto) != null ? _latestHolder$auto : true);
          holder.latest = latest;
          if (holder.loaded) {
            return;
          }
          if (latest) {
            _this.extensions_[extensionKey(extensionId2, LATEST_VERSION2)] = holder;
          }
          if (isReplace || !isSpzTagName(extensionId2)) {
            arg.addType = NEW_VERSION;
          }
          try {
            _this.currentExtensionId_ = extensionId2;
            _this.currentExtensionVersion_ = version;
            _this.currentExtensionLatest_ = latest;
            factory(arg, arg["_"]);
            holder.loaded = true;
            holder.resolve == null ? void 0 : holder.resolve(holder.extension);
            latestHolder == null ? void 0 : latestHolder.resolve == null ? void 0 : latestHolder.resolve(holder.extension);
          } catch (e) {
            holder.error = e;
            holder.reject == null ? void 0 : holder.reject(e);
            latestHolder == null ? void 0 : latestHolder.reject == null ? void 0 : latestHolder.reject(e);
            throw e;
          } finally {
            _this.currentExtensionId_ = null;
            _this.currentExtensionVersion_ = null;
            _this.currentExtensionLatest_ = null;
          }
        };
        if (isReplace) {
          execute(replaceExtensionName(extensionId));
          return;
        }
        Promise.resolve(execute(extensionId)).then(function() {
          if (isAdd) {
            execute(replaceExtensionName(extensionId));
          }
        });
      }
    }, {
      key: "waitForExtension",
      value: function waitForExtension(extensionId, version) {
        var wait = this.waitFor_(this.getExtensionHolder_(extensionId, version));
        return Services.timerFor(this.win).timeoutPromise(16e3, wait).catch(function(err) {
          if (!err.message.includes("timeout")) {
            throw err;
          }
          logger().error(TAG, "Waited over 16s to load extension " + extensionId + ".");
          return wait;
        });
      }
    }, {
      key: "preloadExtension",
      value: function preloadExtension(extensionId, version) {
        if (version === void 0) {
          version = DEFAULT_VERSION2;
        }
        var holder = this.getExtensionHolder_(extensionId, version);
        this.insertExtensionScriptIfNeeded_(extensionId, version, holder);
        return this.waitFor_(holder);
      }
    }, {
      key: "installExtensionForDoc",
      value: function installExtensionForDoc(extensionId, version) {
        var _this2 = this;
        if (version === void 0) {
          version = DEFAULT_VERSION2;
        }
        if (BUILTINS_EXTENSION.includes(extensionId)) {
          return resolvedPromise();
        }
        var rootNode = self.document;
        var extLoaders = rootNode[LOADER_PROP];
        if (!extLoaders) {
          extLoaders = rootNode[LOADER_PROP] = map();
        }
        if (extLoaders[extensionId]) {
          return extLoaders[extensionId];
        }
        setDeclareExtension(extensionId, version);
        stubElementIfNotKnown(self, extensionId);
        return extLoaders[extensionId] = this.preloadExtension(extensionId, version).then(function() {
          return _this2.installExtensionInDoc(extensionId, version);
        });
      }
    }, {
      key: "addElement",
      value: function addElement(name, implementationClass, css) {
        var _this3 = this;
        var execute = function execute2(name2) {
          var holder = _this3.getCurrentExtensionHolder_(name2);
          holder.extension.elements[name2] = {
            implementationClass,
            css
          };
          return Promise.resolve(_this3.addDocFactory(function() {
            _this3.installElement_(name2, implementationClass, css);
          }));
        };
        var isReplace = isLjsExtension(name, self.SPZ.addType);
        if (isReplace) {
          var newName = replaceExtensionName(name);
          self.SPZ.addType = "";
          css = replaceCss(css);
          execute(newName);
          return;
        }
        execute(name);
      }
    }, {
      key: "installElement_",
      value: function installElement_(name, implementationClass, css) {
        var _this4 = this;
        if (css) {
          installStylesForDoc(css, function() {
            _this4.registerElementInWindow_(self, name, implementationClass);
          }, false, name);
        } else {
          this.registerElementInWindow_(self, name, implementationClass);
        }
      }
    }, {
      key: "registerElementInWindow_",
      value: function registerElementInWindow_(win, name, implementationClass) {
        upgradeOrRegisterElement(win, name, implementationClass);
        registerServiceBuilder(win, name, emptyService);
      }
    }, {
      key: "addService",
      value: function addService(name, implementationClass) {
        var holder = this.getCurrentExtensionHolder_(name);
        holder.extension.services.push({
          serviceName: name,
          serviceClass: implementationClass
        });
        this.addDocFactory(function() {
          registerServiceBuilderForDoc(name, implementationClass, true);
        });
      }
    }, {
      key: "addDocFactory",
      value: function addDocFactory(factory, opt_forName) {
        var holder = this.getCurrentExtensionHolder_(opt_forName);
        holder.docFactories.push(factory);
        if (this.currentExtensionId_) {
          var extensionId = assertString(this.currentExtensionId_);
          var version = assertString(this.currentExtensionVersion_);
          var latest = this.currentExtensionLatest_ || false;
          if (declaresExtension(extensionId, version) || latest && declaresExtension(extensionId, LATEST_VERSION2) || holder.auto) {
            factory();
          }
        }
      }
    }, {
      key: "installExtensionInDoc",
      value: function installExtensionInDoc(extensionId, version) {
        var _this5 = this;
        if (version === void 0) {
          version = DEFAULT_VERSION2;
        }
        setDeclareExtension(extensionId, version);
        return this.waitFor_(this.getExtensionHolder_(extensionId, version)).then(function() {
          var holder = _this5.getExtensionHolder_(extensionId, version);
          holder.docFactories.forEach(function(factory) {
            try {
              factory();
            } catch (e) {
              rethrowAsync("Doc factory failed: ", e, extensionId);
            }
          });
        });
      }
    }, {
      key: "getExtensionHolder_",
      value: function getExtensionHolder_(extensionId, version, opt_auto) {
        var key = extensionKey(extensionId, version);
        var holder = this.extensions_[key];
        if (!holder) {
          var extension = {
            elements: {},
            services: []
          };
          holder = {
            version,
            latest: version == LATEST_VERSION2,
            extension,
            auto: opt_auto || false,
            docFactories: [],
            promise: void 0,
            resolve: void 0,
            reject: void 0,
            loaded: void 0,
            error: void 0,
            scriptPresent: void 0
          };
          this.extensions_[key] = holder;
        }
        return holder;
      }
    }, {
      key: "getCurrentExtensionHolder_",
      value: function getCurrentExtensionHolder_(opt_forName) {
        if (!this.currentExtensionId_ && !getMode(this.win).test) {
          logger().error(TAG, "unknown extension for ", opt_forName);
        }
        return this.getExtensionHolder_(this.currentExtensionId_ || UNKNOWN_EXTENSION, this.currentExtensionVersion_ || "");
      }
    }, {
      key: "waitFor_",
      value: function waitFor_(holder) {
        if (!holder.promise) {
          if (holder.loaded) {
            holder.promise = Promise.resolve(holder.extension);
          } else if (holder.error) {
            holder.promise = Promise.reject(holder.error);
          } else {
            var deferred = new Deferred();
            holder.promise = deferred.promise;
            holder.resolve = deferred.resolve;
            holder.reject = deferred.reject;
          }
        }
        return holder.promise;
      }
    }, {
      key: "insertExtensionScriptIfNeeded_",
      value: function insertExtensionScriptIfNeeded_(extensionId, version, holder) {
        if (this.isExtensionScriptRequired_(extensionId, version, holder)) {
          var scriptElement = createExtensionScript(this.win, extensionId, version);
          this.win.document.head.appendChild(scriptElement);
          holder.scriptPresent = true;
        }
      }
    }, {
      key: "isExtensionScriptRequired_",
      value: function isExtensionScriptRequired_(extensionId, version, holder) {
        if (holder.loaded || holder.error || extensionId.includes("spz-custom")) {
          return false;
        }
        if (holder.scriptPresent === void 0) {
          var scriptsInHead = getExtensionScripts(this.win, extensionId, version, holder.latest);
          holder.scriptPresent = scriptsInHead.length > 0;
        }
        return !holder.scriptPresent;
      }
    }]);
    return Extensions2;
  }();
  function emptyService() {
    return {};
  }
  function extensionKey(extensionId, version) {
    return extensionId + ":" + version;
  }

  // src/element-service.js
  function getElementServiceIfAvailableForDoc(element, id, extension, opt_element) {
    var s = getServicePromiseOrNullForDoc(id);
    if (s) {
      return s;
    }
    var version = getExtensionVersion(extension);
    if (!version) {
      return null;
    }
    var extensions = getService(self, "extensions");
    return extensions.waitForExtension(extension, version).then(function(ext) {
      if (!ext) {
        return null;
      }
      if (opt_element) {
        return getServicePromiseOrNullForDoc(id);
      }
      return getServicePromiseForDoc(id);
    });
  }
  function getElementServiceIfAvailableForDocInEmbedScope(element, id, extension) {
    var s = getServiceForDocOrNull(id);
    if (s) {
      return Promise.resolve(s);
    }
    return getElementServiceIfAvailableForDoc(element, id, extension);
  }

  // src/service/index.js
  function _classCallCheck12(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties10(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass10(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties10(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties10(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var Services = /* @__PURE__ */ function() {
    function Services2() {
      _classCallCheck12(this, Services2);
    }
    _createClass10(Services2, null, [{
      key: "actionServiceForDoc",
      value: function actionServiceForDoc() {
        return getServiceForDocOrNull("action");
      }
    }, {
      key: "templatesForDoc",
      value: function templatesForDoc() {
        return getServiceForDocOrNull("templates");
      }
    }, {
      key: "extensionsFor",
      value: function extensionsFor(window2) {
        return getService(window2, "extensions");
      }
    }, {
      key: "mutatorForDoc",
      value: function mutatorForDoc() {
        return getServiceForDoc("mutator");
      }
    }, {
      key: "platformFor",
      value: function platformFor(window2) {
        return getService(window2, "platform");
      }
    }, {
      key: "timerFor",
      value: function timerFor(window2) {
        return getServiceInEmbedWin(window2, "timer");
      }
    }, {
      key: "urlForDoc",
      value: function urlForDoc() {
        return getServiceForDocOrNull("url");
      }
    }, {
      key: "viewerForDoc",
      value: function viewerForDoc() {
        return getServiceForDoc("viewer");
      }
    }, {
      key: "viewerPromiseForDoc",
      value: function viewerPromiseForDoc() {
        return getServicePromiseForDoc("viewer");
      }
    }, {
      key: "vsyncFor",
      value: function vsyncFor(window2) {
        return getService(window2, "vsync");
      }
    }, {
      key: "viewportForDoc",
      value: function viewportForDoc() {
        return getServiceForDoc("viewport");
      }
    }, {
      key: "xhrFor",
      value: function xhrFor(window2) {
        return getService(window2, "xhr");
      }
    }, {
      key: "batchedXhrFor",
      value: function batchedXhrFor(window2) {
        return getService(window2, "batched-xhr");
      }
    }, {
      key: "scriptForDocOrNull",
      value: function scriptForDocOrNull(element) {
        return getElementServiceIfAvailableForDocInEmbedScope(element, "spz-script", "spz-script");
      }
    }, {
      key: "getTargetServiceApi",
      value: function getTargetServiceApi(setting) {
        return resolvedPromise().then(function() {
          var regex = /^custom:([a-zA-Z0-9-_]+)\.([a-zA-Z0-9-_]+)$/;
          var match = setting.match(regex);
          if (match) {
            var id = match[1], api = match[2];
            var targetElement = self.document.getElementById(id);
            if (targetElement && isSpzElement(targetElement)) {
              return SPZ.whenApiDefined(targetElement).then(function(apis) {
                return apis[api].bind(apis);
              });
            }
          }
        });
      }
    }, {
      key: "localeFor",
      value: function localeFor(element) {
        return getService(element, "spz-locale");
      }
    }, {
      key: "registerFor",
      value: function registerFor(transitionName) {
        return getServiceForDocOrNull(transitionName);
      }
    }]);
    return Services2;
  }();

  // src/core/dom/event-helper-listen.js
  function _extends2() {
    _extends2 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  var optsSupported;
  function internalListenImplementation(element, eventType, listener, opt_evtListenerOpts) {
    var localElement = element;
    var localListener = listener;
    var wrapped = function wrapped2(event) {
      try {
        return localListener(event);
      } catch (e) {
        self.__SPZ_REPORT_ERROR == null ? void 0 : self.__SPZ_REPORT_ERROR(e);
        throw e;
      }
    };
    var optsSupported2 = detectEvtListenerOptsSupport();
    var capture = !!(opt_evtListenerOpts != null && opt_evtListenerOpts.capture);
    localElement.addEventListener(eventType, wrapped, optsSupported2 ? opt_evtListenerOpts : capture);
    return function() {
      var _localElement;
      (_localElement = localElement) == null ? void 0 : _localElement.removeEventListener(eventType, wrapped, optsSupported2 ? opt_evtListenerOpts : capture);
      localListener = null;
      localElement = null;
      wrapped = null;
    };
  }
  function delegateListenImplementation(element, targetSelector, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, function(event) {
      var currentTarget = event.currentTarget, target = event.target;
      var node = target;
      while (node && node != currentTarget) {
        if (matches(node, targetSelector)) {
          var eventNode = _extends2({}, target);
          eventNode.target = node;
          eventNode.currentTarget = node;
          listener == null ? void 0 : listener(eventNode);
        }
        node = node.parentNode;
      }
    }, opt_evtListenerOpts);
  }
  function detectEvtListenerOptsSupport() {
    if (optsSupported !== void 0) {
      return optsSupported;
    }
    optsSupported = false;
    try {
      var options = {
        get capture() {
          optsSupported = true;
        }
      };
      self.addEventListener("test-options", null, options);
      self.removeEventListener("test-options", null, options);
    } catch (err) {
    }
    return optsSupported;
  }

  // src/utils/event-helper.js
  var LOAD_FAILURE_PREFIX = "Failed to load:";
  var MEDIA_LOAD_FAILURE_SRC_PROPERTY = "__SPZ_MEDIA_LOAD_FAILURE_SRC";
  function createCustomEvent(win, type, detail, opt_eventInit) {
    var eventInit = {
      detail
    };
    Object.assign(eventInit, opt_eventInit);
    if (typeof win.CustomEvent == "function") {
      return new win.CustomEvent(type, eventInit);
    } else {
      var e = win.document.createEvent("CustomEvent");
      e.initCustomEvent(type, !!eventInit.bubbles, !!eventInit.cancelable, detail);
      return e;
    }
  }
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function delegateListen(element, targetSelector, eventType, listener, opt_evtListenerOpts) {
    return delegateListenImplementation(element, targetSelector, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
  }
  function getDetail(event) {
    return event.detail;
  }
  function listenOnce(element, eventType, listener, opt_evtListenerOpts) {
    var localListener = listener;
    var unlisten = internalListenImplementation(element, eventType, function(event) {
      try {
        localListener(event);
      } finally {
        localListener = null;
        unlisten();
      }
    }, opt_evtListenerOpts);
    return unlisten;
  }
  function isLoaded(eleOrWindow) {
    return !!(eleOrWindow.complete || eleOrWindow.readyState == "complete" || isHTMLMediaElement(eleOrWindow) && eleOrWindow.readyState > 0 || eleOrWindow.document && eleOrWindow.document.readyState == "complete");
  }
  function loadPromise(eleOrWindow) {
    var unlistenLoad;
    var unlistenError;
    if (isLoaded(eleOrWindow)) {
      return Promise.resolve(eleOrWindow);
    }
    var isMediaElement = isHTMLMediaElement(eleOrWindow);
    if (isMediaElement && eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] === eleOrWindow.currentSrc) {
      return Promise.reject(eleOrWindow);
    }
    var loadingPromise = new Promise(function(resolve, reject) {
      if (isMediaElement) {
        unlistenLoad = listenOnce(eleOrWindow, "loadedmetadata", resolve, {
          capture: true
        });
      } else {
        unlistenLoad = listenOnce(eleOrWindow, "load", resolve);
      }
      if (!eleOrWindow.tagName) {
        return;
      }
      var errorTarget = eleOrWindow;
      if (isMediaElement && !eleOrWindow.hasAttribute("src")) {
        errorTarget = lastChildElement(eleOrWindow, function(child) {
          return child.tagName === "SOURCE";
        });
        if (!errorTarget) {
          return reject(new Error("Media has no source."));
        }
      }
      unlistenError = listenOnce(errorTarget, "error", reject);
    });
    return loadingPromise.then(function() {
      if (unlistenError) {
        unlistenError();
      }
      return eleOrWindow;
    }, function() {
      if (unlistenLoad) {
        unlistenLoad();
      }
      failedToLoad(eleOrWindow);
    });
  }
  function failedToLoad(eleOrWindow) {
    if (isHTMLMediaElement(eleOrWindow)) {
      eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] = eleOrWindow.currentSrc || true;
    }
    var target = eleOrWindow;
    if (target && target.src) {
      target = target.src;
    }
    throw new Error(LOAD_FAILURE_PREFIX);
  }
  function isHTMLMediaElement(eleOrWindow) {
    return eleOrWindow.tagName === "AUDIO" || eleOrWindow.tagName === "VIDEO";
  }

  // src/base-element.js
  function _classCallCheck13(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties11(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass11(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties11(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties11(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var BaseElement = /* @__PURE__ */ function() {
    function BaseElement2(element) {
      _classCallCheck13(this, BaseElement2);
      this.element = element;
      this.win = element.ownerDocument.defaultView;
      this["actionMap_"] = null;
      this["defaultActionAlias_"] = null;
    }
    _createClass11(BaseElement2, [{
      key: "signals",
      value: function signals() {
        return this.element.signals();
      }
    }, {
      key: "getDefaultActionAlias",
      value: function getDefaultActionAlias() {
        return this["defaultActionAlias_"];
      }
    }, {
      key: "getLayout",
      value: function getLayout() {
        return this.element.getLayout();
      }
    }, {
      key: "getWin",
      value: function getWin() {
        return this.win;
      }
    }, {
      key: "getVsync",
      value: function getVsync() {
        return Services.vsyncFor(this.win);
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.NODISPLAY;
      }
    }, {
      key: "upgradeCallback",
      value: function upgradeCallback() {
        return null;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
      }
    }, {
      key: "attachedCallback",
      value: function attachedCallback() {
      }
    }, {
      key: "detachedCallback",
      value: function detachedCallback() {
      }
    }, {
      key: "setAsContainer",
      value: function setAsContainer(opt_scroller, rootMargin) {
        this.element.setAsContainerInternal(opt_scroller, rootMargin);
      }
    }, {
      key: "removeAsContainer",
      value: function removeAsContainer() {
        this.element.removeAsContainerInternal();
      }
    }, {
      key: "isBuildRenderBlocking",
      value: function isBuildRenderBlocking() {
        return false;
      }
    }, {
      key: "createPlaceholderCallback",
      value: function createPlaceholderCallback() {
        return null;
      }
    }, {
      key: "ensureLoaded",
      value: function ensureLoaded() {
      }
    }, {
      key: "setReadyState",
      value: function setReadyState(state, opt_failure) {
        this.element.setReadyStateInternal(state, opt_failure);
      }
    }, {
      key: "mountCallback",
      value: function mountCallback(opt_abortSignal) {
      }
    }, {
      key: "unmountCallback",
      value: function unmountCallback() {
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        return resolvedPromise();
      }
    }, {
      key: "firstLayoutCompleted",
      value: function firstLayoutCompleted() {
        this.togglePlaceholder(false);
      }
    }, {
      key: "reconstructWhenReparented",
      value: function reconstructWhenReparented() {
        return true;
      }
    }, {
      key: "loadPromise",
      value: function loadPromise2(element) {
        return loadPromise(element);
      }
    }, {
      key: "registerAction",
      value: function registerAction(alias, handler) {
        initActionMap(this);
        this["actionMap_"][alias] = {
          handler
        };
      }
    }, {
      key: "registerDefaultAction",
      value: function registerDefaultAction(handler, alias) {
        if (alias === void 0) {
          alias = "activate";
        }
        assert(!this["defaultActionAlias_"], 'Default action "%s" already registered.', this["defaultActionAlias_"]);
        this.registerAction(alias, handler);
        this["defaultActionAlias_"] = alias;
      }
    }, {
      key: "executeAction",
      value: function executeAction(invocation, unusedDeferred) {
        var method = invocation.method;
        if (method === "activate") {
          method = this["defaultActionAlias_"] || method;
        }
        initActionMap(this);
        var holder = this["actionMap_"][method];
        var tagName = this.element.tagName;
        assert(holder, "Method not found: " + method + " in " + tagName);
        var handler = holder.handler;
        return handler(invocation);
      }
    }, {
      key: "propagateAttributes",
      value: function propagateAttributes(attributes, element, opt_removeMissingAttrs) {
        attributes = isArray(attributes) ? attributes : [attributes];
        for (var i = 0; i < attributes.length; i++) {
          var attr = attributes[i];
          var val = this.element.getAttribute(attr);
          if (val !== null) {
            element.setAttribute(attr, val);
          } else if (opt_removeMissingAttrs) {
            element.removeAttribute(attr);
          }
        }
      }
    }, {
      key: "forwardEvents",
      value: function forwardEvents(events, element) {
        var _this = this;
        var unlisteners = (isArray(events) ? events : [events]).map(function(eventType) {
          return listen(element, eventType, function(event) {
            dispatchCustomEvent(_this.element, eventType, getData(event) || {});
          });
        });
        return function() {
          return unlisteners.forEach(function(unlisten) {
            return unlisten();
          });
        };
      }
    }, {
      key: "getPlaceholder",
      value: function getPlaceholder() {
        return this.element.getPlaceholder();
      }
    }, {
      key: "togglePlaceholder",
      value: function togglePlaceholder(state) {
        this.element.togglePlaceholder(state);
      }
    }, {
      key: "renderStarted",
      value: function renderStarted() {
        this.element.renderStarted();
      }
    }, {
      key: "getRealChildNodes",
      value: function getRealChildNodes() {
        return this.element.getRealChildNodes();
      }
    }, {
      key: "getRealChildren",
      value: function getRealChildren() {
        return this.element.getRealChildren();
      }
    }, {
      key: "applyFillContent",
      value: function applyFillContent(element, opt_replacedContent) {
        element.classList.add("i-spzhtml-fill-content");
        if (opt_replacedContent) {
          element.classList.add("i-spzhtml-replaced-content");
        }
      }
    }, {
      key: "getViewport",
      value: function getViewport() {
        return Services.viewportForDoc();
      }
    }, {
      key: "mutateElement",
      value: function mutateElement(mutator, opt_element) {
        return this.measureMutateElement(null, mutator, opt_element);
      }
    }, {
      key: "measureMutateElement",
      value: function measureMutateElement(measurer, mutator, opt_element) {
        return Services.mutatorForDoc().measureMutateElement(opt_element || this.element, measurer, mutator);
      }
    }, {
      key: "mutatedAttributesCallback",
      value: function mutatedAttributesCallback(unusedMutations) {
      }
    }, {
      key: "logger",
      value: function logger2() {
        return logger(this.element);
      }
    }, {
      key: "assert",
      value: function assert2() {
        return assert.apply(this, arguments);
      }
    }, {
      key: "assertElement",
      value: function assertElement2() {
        return assertElement.apply(this, arguments);
      }
    }, {
      key: "getApi",
      value: function getApi() {
        return this;
      }
    }, {
      key: "getData",
      value: function getData2() {
        return resolvedPromise();
      }
    }, {
      key: "showToast",
      value: function showToast(data) {
        var _this2 = this;
        var text;
        var duration;
        if (typeof data === "string") {
          text = data;
        } else {
          text = data.text;
          duration = data.duration;
        }
        SPZServices.extensionsFor(this.win).installExtensionForDoc("spz-toast").then(function() {
          var elements = _this2.win.document.getElementsByClassName("i-spzhtml-toast-global");
          if (!elements.length) {
            var el = _this2.win.document.createElement("spz-toast");
            el.setAttribute("layout", "nodisplay");
            el.classList.add("i-spzhtml-toast-global");
            self.document.body.appendChild(el);
            el.showToast(text, duration);
          } else {
            elements[0].showToast(text, duration);
          }
        });
      }
    }, {
      key: "show",
      value: function show(options) {
        var _this3 = this;
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$parent = _options.parent, parent = _options$parent === void 0 ? this.element : _options$parent, _options$type = _options.type, type = _options$type === void 0 ? "loading" : _options$type;
        var hasLoading = this.element.hasAttribute("has-loading");
        var hasMask = this.element.hasAttribute("has-mask");
        type = hasLoading ? "loading" : hasMask ? "mask" : type;
        var handleEleFun_ = function handleEleFun_2(loadingWrapper2) {
          _this3.win.document.activeElement && _this3.win.document.activeElement.blur();
          SPZCore.Dom.toggle(loadingWrapper2, true);
          return loadingWrapper2;
        };
        var getUserLoading = function getUserLoading2() {
          var loadingWrapper2 = Array.prototype.find.call(parent.children, function(item) {
            return item.getAttribute("role") === type;
          });
          if (loadingWrapper2) {
            return Promise.resolve(handleEleFun_(loadingWrapper2));
          }
          return;
        };
        if (!hasLoading && !hasMask) {
          return resolvedPromise();
        }
        var loadingWrapper = getUserLoading();
        if (loadingWrapper) {
          return loadingWrapper;
        }
        return SPZServices.extensionsFor(this.win).installExtensionForDoc("spz-loading").then(function() {
          var loadingWrapper2 = getUserLoading();
          if (loadingWrapper2) {
            return loadingWrapper2;
          }
          loadingWrapper2 = _this3.win.document.createElement("spz-loading");
          loadingWrapper2.setAttribute("layout", "container");
          loadingWrapper2.setAttribute("role", type);
          type === "mask" && loadingWrapper2.setAttribute("has-mask", "");
          parent.appendChild(loadingWrapper2);
          return handleEleFun_(loadingWrapper2);
        });
      }
    }, {
      key: "hide",
      value: function hide(options) {
        if (options === void 0) {
          options = {};
        }
        var _options2 = options, _options2$parent = _options2.parent, parent = _options2$parent === void 0 ? this.element : _options2$parent, _options2$type = _options2.type, type = _options2$type === void 0 ? "loading" : _options2$type;
        var hasLoading = this.element.hasAttribute("has-loading");
        var hasMask = this.element.hasAttribute("has-mask");
        type = hasLoading ? "loading" : hasMask ? "mask" : type;
        if (!hasLoading && !hasMask) {
          return resolvedPromise();
        }
        var loadingWrapper = Array.prototype.find.call(parent.children, function(item) {
          return item.getAttribute("role") === type;
        });
        loadingWrapper && SPZCore.Dom.toggle(loadingWrapper, false);
      }
    }], [{
      key: "deferredMount",
      value: function deferredMount(unusedElement) {
        return true;
      }
    }, {
      key: "prerenderAllowed",
      value: function prerenderAllowed(unusedElement) {
        return false;
      }
    }, {
      key: "usesLoading",
      value: function usesLoading(unusedElement) {
        return false;
      }
    }, {
      key: "createLoaderLogoCallback",
      value: function createLoaderLogoCallback(unusedElement) {
        return {};
      }
    }]);
    return BaseElement2;
  }();
  function initActionMap(baseElement) {
    if (!baseElement["actionMap_"]) {
      baseElement["actionMap_"] = baseElement.win.Object.create(null);
    }
  }

  // src/core/constants/key-codes.js
  var Keys = {
    ENTER: "Enter",
    ESCAPE: "Escape",
    SPACE: " ",
    LEFT_ARROW: "ArrowLeft",
    UP_ARROW: "ArrowUp",
    RIGHT_ARROW: "ArrowRight",
    DOWN_ARROW: "ArrowDown",
    TAB: "Tab",
    BACKSPACE: "Backspace",
    HOME: "Home",
    END: "End"
  };

  // src/service/action-impl.js
  function _defineProperties12(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass12(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties12(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties12(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _classCallCheck14(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var TAG_ = "Action";
  var ACTION_MAP_ = "__SPZ_ACTION_MAP__" + Math.random();
  var ACTION_QUEUE_ = "__SPZ_ACTION_QUEUE__";
  var ACTION_HANDLER_ = "__SPZ_ACTION_HANDLER__";
  var DEFAULT_DEBOUNCE_WAIT = 300;
  var DEFAULT_THROTTLE_INTERVAL = 100;
  var NON_SPZ_ELEMENTS_ACTIONS_ = {
    "form": ["submit", "clear", "insert", "init", "focus", "check", "togglePasswordVisibility"]
  };
  var TAPPABLE_ARIA_ROLES = {
    "button": true,
    "checkbox": true,
    "link": true,
    "listbox": true,
    "menuitem": true,
    "menuitemcheckbox": true,
    "menuitemradio": true,
    "option": true,
    "radio": true,
    "scrollbar": true,
    "slider": true,
    "spinbutton": true,
    "switch": true,
    "tab": true,
    "treeitem": true
  };
  var EVENT_NAME = ["tap", "submit", "change", "input-debounced", "input-throttled", "input-smooth", "valid", "invalid"];
  var regExp = /\(([^)]+)\)/;
  var regExpParams = new RegExp(/^event(\.[a-zA-Z_].*)+$/);
  var DOM_UPDATE = "eventChange";
  var ActionInvocation = function ActionInvocation2(node, method, args, source, caller, event, actionEventType, tagOrTarget, sequenceId) {
    if (actionEventType === void 0) {
      actionEventType = "?";
    }
    if (tagOrTarget === void 0) {
      tagOrTarget = null;
    }
    if (sequenceId === void 0) {
      sequenceId = Math.random();
    }
    _classCallCheck14(this, ActionInvocation2);
    this.node = node;
    this.method = method;
    this.args = args;
    this.source = source;
    this.caller = caller;
    this.event = event;
    this.actionEventType = actionEventType;
    this.tagOrTarget = tagOrTarget || node.tagName;
    this.sequenceId = sequenceId;
  };
  var ActionService = /* @__PURE__ */ function() {
    function ActionService2() {
      var _this = this;
      _classCallCheck14(this, ActionService2);
      this.root_ = self.document;
      this.globalTargets_ = map();
      this.globalMethodHandlers_ = map();
      EVENT_NAME.forEach(function(event) {
        return _this.addEvent(event);
      });
    }
    _createClass12(ActionService2, [{
      key: "addEvent",
      value: function addEvent(name) {
        var _this2 = this;
        if (name == "tap") {
          this.root_.addEventListener("click", function(event) {
            if (!event.defaultPrevented) {
              var element = assertElement(event.target);
              _this2.trigger(element, name, event);
            }
          });
          this.root_.addEventListener("keydown", function(event) {
            var key = event.key, target = event.target;
            var element = assertElement(target);
            if (key == Keys.ENTER || key == Keys.SPACE) {
              var role = element.getAttribute("role");
              var isTapEventRole = role && hasOwn(TAPPABLE_ARIA_ROLES, role.toLowerCase());
              if (!event.defaultPrevented && isTapEventRole) {
                var hasAction = _this2.trigger(element, name, event);
                if (hasAction) {
                  event.preventDefault();
                }
              }
            }
          });
        } else if (name == "submit") {
          this.root_.addEventListener(name, function(event) {
            var element = assertElement(event.target);
            _this2.trigger(element, name, event);
          });
        } else if (name == "change") {
          this.root_.addEventListener(name, function(event) {
            var element = assertElement(event.target);
            _this2.addTargetPropertiesAsDetail_(event);
            _this2.trigger(element, name, event);
          });
        } else if (name == "input-debounced") {
          var debouncedInput = debounce(self, function(event) {
            var target = assertElement(event.target);
            _this2.trigger(target, name, event);
          }, DEFAULT_DEBOUNCE_WAIT);
          this.root_.addEventListener("input", function(event) {
            var deferredEvent = new DeferredEvent(event);
            _this2.addTargetPropertiesAsDetail_(deferredEvent);
            debouncedInput(deferredEvent);
          });
        } else if (name == "input-throttled") {
          var throttledInput = throttle(self, function(event) {
            var target = assertElement(event.target);
            _this2.trigger(target, name, event);
          }, DEFAULT_THROTTLE_INTERVAL);
          this.root_.addEventListener("input", function(event) {
            var deferredEvent = new DeferredEvent(event);
            _this2.addTargetPropertiesAsDetail_(deferredEvent);
            throttledInput(deferredEvent);
          });
        } else if (name == "input-smooth") {
          var smoothInput = function smoothInput2(event) {
            Services.mutatorForDoc().mutateElement(null, function() {
              var target = assertElement(event.target);
              _this2.trigger(target, name, event);
            });
          };
          this.root_.addEventListener("input", function(event) {
            var deferredEvent = new DeferredEvent(event);
            _this2.addTargetPropertiesAsDetail_(deferredEvent);
            smoothInput(deferredEvent);
          });
        } else if (name == "valid" || name == "invalid") {
          this.root_.addEventListener(name, function(event) {
            var element = assertElement(event.target);
            _this2.trigger(element, name, event);
          });
        }
      }
    }, {
      key: "addGlobalTarget",
      value: function addGlobalTarget(name, handler) {
        this.globalTargets_[name] = handler;
      }
    }, {
      key: "addGlobalMethodHandler",
      value: function addGlobalMethodHandler(name, handler) {
        this.globalMethodHandlers_[name] = {
          handler
        };
      }
    }, {
      key: "trigger",
      value: function trigger(target, eventType, event, opt_args) {
        return this.action_(target, eventType, event, opt_args);
      }
    }, {
      key: "execute",
      value: function execute(target, method, args, source, caller, event) {
        var invocation = new ActionInvocation(target, method, args, source, caller, event);
        this.invoke_(invocation);
      }
    }, {
      key: "installActionHandler",
      value: function installActionHandler(target, handler) {
        var targetId = target.getAttribute("id") || "";
        assert(isSpzTagName2(targetId) || target.tagName.toLowerCase() in NON_SPZ_ELEMENTS_ACTIONS_, "SPZ or special element expected: %s", target.tagName + "#" + targetId);
        if (target[ACTION_HANDLER_]) {
          logger().error(TAG_, "Action handler already installed for " + target);
          return;
        }
        target[ACTION_HANDLER_] = handler;
        var queuedInvocations = target[ACTION_QUEUE_];
        if (isArray(queuedInvocations)) {
          Services.timerFor(target.ownerDocument.defaultView).delay(function() {
            queuedInvocations.forEach(function(invocation) {
              try {
                handler(invocation);
              } catch (e) {
                logger().error(TAG_, "Action execution failed:", invocation, e);
              }
            });
            target[ACTION_QUEUE_].length = 0;
          }, 1);
        }
      }
    }, {
      key: "hasAction",
      value: function hasAction(element, actionEventType, opt_stopAt) {
        return !!this.findAction_(element, actionEventType, opt_stopAt);
      }
    }, {
      key: "hasResolvableAction",
      value: function hasResolvableAction(element, actionEventType, opt_stopAt) {
        var _this3 = this;
        var action = this.findAction_(element, actionEventType, opt_stopAt);
        if (!action) {
          return false;
        }
        return action.actionInfos.some(function(action2) {
          var target = action2.target;
          return !!_this3.getActionNode_(target);
        });
      }
    }, {
      key: "hasResolvableActionForTarget",
      value: function hasResolvableActionForTarget(element, actionEventType, targetElement, opt_stopAt) {
        var _this4 = this;
        var action = this.findAction_(element, actionEventType, opt_stopAt);
        if (!action) {
          return false;
        }
        return action.actionInfos.some(function(actionInfo) {
          var target = actionInfo.target;
          return _this4.getActionNode_(target) == targetElement;
        });
      }
    }, {
      key: "getActionNode_",
      value: function getActionNode_(target) {
        return this.globalTargets_[target] ? this.root_ : this.root_.getElementById(target);
      }
    }, {
      key: "action_",
      value: function action_(source, actionEventType, event, opt_args) {
        var _this5 = this;
        var opt_stopAt = null;
        if ((opt_args == null ? void 0 : opt_args.bubbles) === false) {
          opt_stopAt = source.parentElement;
        }
        var action = this.findAction_(source, actionEventType, opt_stopAt);
        if (!action || !isArray(action == null ? void 0 : action.actionInfos)) {
          return false;
        }
        var sequenceId = Math.random();
        var currentPromise = null;
        action.actionInfos.forEach(function(actionInfo) {
          var args = actionInfo.args, method = actionInfo.method, target = actionInfo.target;
          var dereferencedArgs = dereferenceArgsVariables(args, event, opt_args);
          var invokeAction = function invokeAction2() {
            var node = _this5.getActionNode_(target);
            var execute = function execute2() {
              var invocation = new ActionInvocation(node, method, dereferencedArgs, source, action.node, event, actionEventType, node.tagName || target, sequenceId);
              return _this5.invoke_(invocation);
            };
            if (node) {
              return execute();
            }
            waitForChild(self.document.body, function() {
              return !!self.document.getElementById(target);
            }, function() {
              node = _this5.getActionNode_(target);
              execute();
            });
          };
          currentPromise = currentPromise ? currentPromise.then(invokeAction) : invokeAction();
        });
        return action.actionInfos.length >= 1;
      }
    }, {
      key: "error_",
      value: function error_(message, opt_element) {
        if (opt_element) {
          var e = new Error("[" + TAG_ + "] " + message);
          reportError(e, opt_element);
          throw e;
        } else {
          logger().error(TAG_, message);
        }
      }
    }, {
      key: "invoke_",
      value: function invoke_(invocation) {
        var _this6 = this;
        var method = invocation.method, tagOrTarget = invocation.tagOrTarget;
        var globalTarget = this.globalTargets_[tagOrTarget];
        if (globalTarget) {
          return globalTarget(invocation);
        }
        var node = assertElement(invocation.node);
        var globalMethod = this.globalMethodHandlers_[method];
        if (globalMethod) {
          return globalMethod.handler(invocation);
        }
        var lowerTagName = node.tagName.toLowerCase();
        if (isSpzTagName2(lowerTagName)) {
          self.SPZ.whenDefined(node).then(function() {
            node.enqueAction(invocation);
          }, function() {
            _this6.error_('Unrecognized SPZ element "' + lowerTagName + '".', node);
          });
          return null;
        }
        var nonSpzActions = NON_SPZ_ELEMENTS_ACTIONS_[lowerTagName];
        var targetId = node.getAttribute("id") || "";
        if (isSpzTagName2(targetId) || nonSpzActions && nonSpzActions.indexOf(method) > -1) {
          var handler = node[ACTION_HANDLER_];
          if (handler) {
            handler(invocation);
          } else {
            node[ACTION_QUEUE_] = node[ACTION_QUEUE_] || [];
            node[ACTION_QUEUE_].push(invocation);
          }
          return null;
        }
        this.error_("Target (" + tagOrTarget + `) doesn't support "` + method + '" action.', invocation.caller);
        return null;
      }
    }, {
      key: "findAction_",
      value: function findAction_(target, actionEventType, opt_stopAt) {
        var n = target;
        while (n) {
          if (opt_stopAt && n == opt_stopAt) {
            return null;
          }
          var actionInfos = this.matchActionInfos_(n, actionEventType);
          if (actionInfos && isEnabled(n)) {
            return {
              node: n,
              actionInfos: assert(actionInfos)
            };
          }
          n = n.parentElement;
        }
        return null;
      }
    }, {
      key: "matchActionInfos_",
      value: function matchActionInfos_(node, actionEventType) {
        return this.geActionMap_(node, actionEventType);
      }
    }, {
      key: "geActionMap_",
      value: function geActionMap_(node, actionEventType) {
        var event = "@" + actionEventType;
        var onEvent = "on:" + actionEventType;
        var actionMap = node[ACTION_MAP_] || {};
        var hasDomUpdate = node.hasAttribute(DOM_UPDATE);
        var hasDomOn = node.hasAttribute(onEvent);
        if (!actionMap[event] && !actionMap[onEvent] || hasDomUpdate) {
          var _node$ACTION_MAP_;
          if (!node.hasAttribute(event) && !node.hasAttribute(onEvent)) {
            return null;
          }
          var events = null;
          if (hasDomOn) {
            events = node.getAttribute(onEvent);
            node.removeAttribute(DOM_UPDATE);
          } else {
            events = node.getAttribute(event);
          }
          var eventList = parseEventMap(events, node);
          node[ACTION_MAP_] = (_node$ACTION_MAP_ = {}, _node$ACTION_MAP_[hasDomOn ? onEvent : event] = eventList, _node$ACTION_MAP_);
        }
        return node[ACTION_MAP_][hasDomOn ? onEvent : event];
      }
    }, {
      key: "addTargetPropertiesAsDetail_",
      value: function addTargetPropertiesAsDetail_(event) {
        var detail = map();
        var target = event.target;
        if (target.value !== void 0) {
          detail["value"] = target.value;
          if (/^[{\[][\s\S]*[}\]]$/.test(target.value)) {
            detail["valueAsJson"] = tryParseJson(target.value);
          }
        }
        if (target.tagName == "INPUT") {
          detail["valueAsNumber"] = Number(target.value);
        }
        if (target.checked !== void 0) {
          detail["checked"] = target.checked;
        }
        if (target.min !== void 0 || target.max !== void 0) {
          detail["min"] = target.min;
          detail["max"] = target.max;
        }
        if (target.files) {
          detail["files"] = toArray(target.files).map(function(file) {
            return {
              "name": file.name,
              "size": file.size,
              "type": file.type
            };
          });
        }
        if (Object.keys(detail).length > 0) {
          try {
            event.detail = detail;
          } catch (_unused) {
          }
        }
      }
    }]);
    return ActionService2;
  }();
  function isSpzTagName2(lowercaseTagName) {
    var name = lowercaseTagName.substring(0, 4);
    return ["spz-", "ljs-"].includes(name);
  }
  var DeferredEvent = function DeferredEvent2(event) {
    _classCallCheck14(this, DeferredEvent2);
    this.detail = null;
    cloneWithoutFunctions(event, this);
  };
  function cloneWithoutFunctions(original, opt_dest) {
    var clone = opt_dest || map();
    for (var prop in original) {
      var value = original[prop];
      if (typeof value === "function") {
        clone[prop] = notImplemented;
      } else {
        clone[prop] = original[prop];
      }
    }
    return clone;
  }
  function notImplemented() {
    assert(null, "Deferred events cannot access native event functions.");
  }
  function parseEventMap(events) {
    var eventList = events.split(";").filter(function(item) {
      return item && item.includes(".");
    });
    return eventList == null ? void 0 : eventList.map(function(event) {
      var firstDotIdx = event.indexOf(".");
      var methods = event.substring(firstDotIdx + 1, event.length);
      var separatorIdx = methods.includes("(") ? methods.indexOf("(") : methods.length;
      return {
        target: event.substring(0, firstDotIdx),
        method: methods.substring(0, separatorIdx),
        args: getMethodsArguments(methods)
      };
    });
  }
  function getMethodsArguments(methods) {
    var matches2 = regExp.exec(methods);
    var result = {};
    if (!matches2) {
      return result;
    }
    var params = matches2[1].split(/(?:\b|['"])\s*,\s*(?=[\w-]+=)/g);
    params == null ? void 0 : params.forEach(function(item) {
      var data = item.trim().split("=");
      var key = data[0];
      var value = data[1];
      result[key] = null;
      if (regExpParams.test(value)) {
        result[key] = {
          expression: value
        };
      } else {
        try {
          result[key] = JSON.parse(value);
        } catch (_unused2) {
          result[key] = value.replace(/\'/g, "");
        }
      }
    });
    return result;
  }
  function dereferenceArgsVariables(args, event, opt_args) {
    if (!args) {
      return args;
    }
    var data = opt_args || dict({});
    if (event) {
      var detail = getDetail(event);
      if (typeof detail !== "undefined") {
        data["event"] = detail;
      }
    }
    var applied = map();
    Object.keys(args).forEach(function(key) {
      var value = args[key];
      if (typeof value == "object" && value.expression) {
        var expr = value.expression;
        var exprValue = getValueForExpr(data, expr);
        value = exprValue === void 0 ? null : exprValue;
      }
      if (typeof data[value] !== "undefined") {
        applied[key] = data[value];
      } else {
        applied[key] = value;
      }
    });
    return applied;
  }
  function installActionServiceForDoc() {
    registerServiceBuilderForDoc("action", ActionService, true);
  }

  // src/core/types/string/url.js
  var QUERY_STRING_REGEX = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
  var QUERY_PARAM_TYPES = {
    SAME_QUERIES_IN_STRING: "same-queries-in-string",
    SAME_QUERIES_IN_ARRAY: "same-queries-in-array"
  };
  function tryDecodeUriComponent(component, fallback) {
    if (fallback === void 0) {
      fallback = "";
    }
    try {
      return decodeURIComponent(component);
    } catch (e) {
      return fallback;
    }
  }
  function parseQueryString(queryString, format) {
    if (format === void 0) {
      format = QUERY_PARAM_TYPES.SAME_QUERIES_IN_STRING;
    }
    var params = map();
    if (!queryString) {
      return params;
    }
    var match;
    while (match = QUERY_STRING_REGEX.exec(queryString)) {
      var name = tryDecodeUriComponent(match[1], match[1]);
      var value = match[2] ? tryDecodeUriComponent(match[2].replace(/\+/g, " "), match[2]) : "";
      if (!params[name]) {
        params[name] = value;
        continue;
      }
      if (format === QUERY_PARAM_TYPES.SAME_QUERIES_IN_ARRAY) {
        params[name] = Array.isArray(params[name]) ? params[name] : [params[name]];
        params[name].push(value);
      } else {
        params[name] += "," + value;
      }
    }
    return params;
  }

  // src/utils/cookies.js
  function getCookie(win, name) {
    var cookieString = tryGetDocumentCookie_(win);
    if (!cookieString) {
      return null;
    }
    var cookies = cookieString.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      var eq = cookie.indexOf("=");
      if (eq == -1) {
        continue;
      }
      if (tryDecodeUriComponent(cookie.substring(0, eq).trim()) == name) {
        var value = cookie.substring(eq + 1).trim();
        return tryDecodeUriComponent(value, value);
      }
    }
    return null;
  }
  function tryGetDocumentCookie_(win) {
    try {
      return win.document.cookie;
    } catch (e) {
      return "";
    }
  }

  // src/core/data-structures/lru-cache.js
  function _classCallCheck15(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties13(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass13(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties13(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties13(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck15(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass13(LruCache2, [{
      key: "has",
      value: function has(key) {
        return !!this.cache_[key];
      }
    }, {
      key: "get",
      value: function get(key) {
        var cacheable = this.cache_[key];
        if (cacheable) {
          cacheable.access = ++this.access_;
          return cacheable.payload;
        }
        return void 0;
      }
    }, {
      key: "put",
      value: function put(key, payload) {
        if (!this.has(key)) {
          this.size_++;
        }
        this.cache_[key] = {
          payload,
          access: this.access_
        };
        this.evict_();
      }
    }, {
      key: "evict_",
      value: function evict_() {
        if (this.size_ <= this.capacity_) {
          return;
        }
        var cache2 = this.cache_;
        var oldest = this.access_ + 1;
        var oldestKey;
        for (var key in cache2) {
          var access = cache2[key].access;
          if (access < oldest) {
            oldest = access;
            oldestKey = key;
          }
        }
        if (oldestKey !== void 0) {
          delete cache2[oldestKey];
          this.size_--;
        }
      }
    }]);
    return LruCache2;
  }();

  // src/config/config.js
  var env = self.SPZ_CONFIG || {};
  var sdkRegex = /spz.min|spz.js|v0.js$/;
  var infoRegex = /(\S*(?:cuttlefish|dist))(\S*)\/(?:spz.min|spz|v0)\.js/;
  var newVersion = "v1";
  var cdnProxyRegex = (typeof env["cdnProxyRegex"] == "string" ? new RegExp(env["cdnProxyRegex"]) : env["cdnProxyRegex"]) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
  function getUrlInfo() {
    var _Array$prototype$filt, _scriptList$0$;
    var scriptList = ((_Array$prototype$filt = Array.prototype.filter.call(self.document.querySelectorAll("script[src]"), function(_ref) {
      var src = _ref.src;
      return sdkRegex.test(src);
    })) == null ? void 0 : _Array$prototype$filt.map(function(script) {
      var _script$src;
      return script == null ? void 0 : (_script$src = script.src) == null ? void 0 : _script$src.split(infoRegex);
    })) || [];
    var _ref2 = scriptList.length > 1 && (_scriptList$0$ = scriptList[0][2]) != null && _scriptList$0$.includes(newVersion) ? scriptList[1] : scriptList[0], cdnUrl = _ref2[1], spzVersion = _ref2[2];
    return {
      cdn: env["cdnUrl"] || cdnUrl,
      spzVersion: (spzVersion == null ? void 0 : spzVersion.slice(1)) || ""
    };
  }
  var config = {
    cdnProxyRegex,
    localhostRegex: /^https?:\/\/localhost(:\d+)?$/
  };
  var cdnInfo = {
    url: getUrlInfo()
  };

  // src/utils/url.js
  var SERVING_TYPE_PREFIX = dict({
    "c": true,
    "v": true,
    "a": true,
    "ad": true
  });
  var a;
  var cache;
  var SPZ_JS_PARAMS_REGEX = /[?&]spz_js[^&]*/;
  var SPZ_GSA_PARAMS_REGEX = /[?&]spz_gsa[^&]*/;
  var SPZ_R_PARAMS_REGEX = /[?&]spz_r[^&]*/;
  var SPZ_KIT_PARAMS_REGEX = /[?&]spz_kit[^&]*/;
  var GOOGLE_EXPERIMENT_PARAMS_REGEX = /[?&]usqp[^&]*/;
  var INVALID_PROTOCOLS = [
    "javascript:",
    "data:",
    "vbscript:"
  ];
  var QUERY_PARAM_TYPES2 = {
    SAME_QUERIES_IN_STRING: "same-queries-in-string",
    SAME_QUERIES_IN_ARRAY: "same-queries-in-array"
  };
  function parseUrlDeprecated(url, opt_nocache) {
    if (!a) {
      a = self.document.createElement("a");
      cache = false ? null : self.__SPZ_URL_CACHE || (self.__SPZ_URL_CACHE = new LruCache(100));
    }
    return parseUrlWithA(a, url, opt_nocache ? null : cache);
  }
  function parseUrlWithA(a2, url, opt_cache) {
    if (false) {
      a2.href = "";
      return new URL(url, a2.href);
    }
    if (opt_cache && opt_cache.has(url)) {
      return opt_cache.get(url);
    }
    a2.href = url;
    if (!a2.protocol) {
      a2.href = a2.href;
    }
    var info = {
      href: a2.href,
      protocol: a2.protocol,
      host: a2.host,
      hostname: a2.hostname,
      port: a2.port == "0" ? "" : a2.port,
      pathname: a2.pathname,
      search: a2.search,
      hash: a2.hash,
      origin: null
    };
    if (info.pathname[0] !== "/") {
      info.pathname = "/" + info.pathname;
    }
    if (info.protocol == "http:" && info.port == 80 || info.protocol == "https:" && info.port == 443) {
      info.port = "";
      info.host = info.hostname;
    }
    var origin;
    if (a2.origin && a2.origin != "null") {
      origin = a2.origin;
    } else if (info.protocol == "data:" || !info.host) {
      origin = info.href;
    } else {
      origin = info.protocol + "//" + info.host;
    }
    info.origin = origin;
    if (opt_cache) {
      opt_cache.put(url, info);
    }
    return info;
  }
  function appendEncodedParamStringToUrl(url, paramString, opt_addToFront) {
    if (!paramString) {
      return url;
    }
    var mainAndFragment = url.split("#", 2);
    var mainAndQuery = mainAndFragment[0].split("?", 2);
    var newUrl = mainAndQuery[0] + (mainAndQuery[1] ? opt_addToFront ? "?" + paramString + "&" + mainAndQuery[1] : "?" + mainAndQuery[1] + "&" + paramString : "?" + paramString);
    newUrl += mainAndFragment[1] ? "#" + mainAndFragment[1] : "";
    return newUrl;
  }
  function addParamsToUrl(url, params) {
    return appendEncodedParamStringToUrl(url, serializeQueryString(params));
  }
  function addOrReplaceParams(url, params, parseParamFormat) {
    if (parseParamFormat === void 0) {
      parseParamFormat = QUERY_PARAM_TYPES2.SAME_QUERIES_IN_STRING;
    }
    var _parseUrlDeprecated = parseUrlDeprecated(url), origin = _parseUrlDeprecated.origin, pathname = _parseUrlDeprecated.pathname, search = _parseUrlDeprecated.search;
    var existingParams = parseQueryString(search, parseParamFormat);
    var keys = Object.keys(params);
    for (var i = 0; i < keys.length; i++) {
      existingParams[keys[i]] = params[keys[i]];
    }
    var finalOrigin = origin && origin !== self.location.origin ? origin : "";
    return addParamsToUrl(finalOrigin + pathname, existingParams);
  }
  function serializeQueryString(params) {
    var s = [];
    for (var k in params) {
      var v = params[k];
      if (v == null) {
        continue;
      } else if (isArray(v)) {
        for (var i = 0; i < v.length; i++) {
          var sv = v[i];
          s.push(encodeURIComponent(k) + "=" + encodeURIComponent(sv));
        }
      } else {
        var _sv = v;
        s.push(encodeURIComponent(k) + "=" + encodeURIComponent(_sv));
      }
    }
    return s.join("&");
  }
  function isSecureUrlDeprecated(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return url.protocol == "https:" || url.hostname == "localhost" || url.hostname == "127.0.0.1" || endsWith(url.hostname, ".localhost");
  }
  function assertHttpsUrl(urlString, elementContext, sourceName) {
    if (sourceName === void 0) {
      sourceName = "source";
    }
    assert(urlString != null, "%s %s must be available", elementContext, sourceName);
    var theUrlString = urlString;
    assert(isSecureUrlDeprecated(theUrlString) || /^(\/\/)/.test(theUrlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, theUrlString);
    return theUrlString;
  }
  function assertAbsoluteHttpOrHttpsUrl(urlString) {
    assert(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
    return parseUrlDeprecated(urlString).href;
  }
  function removeFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return url;
    }
    return url.substring(0, index);
  }
  function getFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return "";
    }
    return url.substring(index);
  }
  function isProxyOrigin(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return config.cdnProxyRegex.test(url.origin);
  }
  function isProtocolValid(url) {
    if (!url) {
      return true;
    }
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return !INVALID_PROTOCOLS.includes(url.protocol);
  }
  function removeSearch(url) {
    var index = url.indexOf("?");
    if (index == -1) {
      return url;
    }
    var fragment = getFragment(url);
    return url.substring(0, index) + fragment;
  }
  function removeSpzJsParamsFromSearch(urlSearch) {
    if (!urlSearch || urlSearch == "?") {
      return "";
    }
    var search = urlSearch.replace(SPZ_JS_PARAMS_REGEX, "").replace(SPZ_GSA_PARAMS_REGEX, "").replace(SPZ_R_PARAMS_REGEX, "").replace(SPZ_KIT_PARAMS_REGEX, "").replace(GOOGLE_EXPERIMENT_PARAMS_REGEX, "").replace(/^[?&]/, "");
    return search ? "?" + search : "";
  }
  function getSourceUrl(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    if (!isProxyOrigin(url)) {
      return url.href;
    }
    var path = url.pathname.split("/");
    var prefix = path[1];
    assert(SERVING_TYPE_PREFIX[prefix], "Unknown path prefix in url %s", url.href);
    var domainOrHttpsSignal = path[2];
    var origin = domainOrHttpsSignal == "s" ? "https://" + decodeURIComponent(path[3]) : "http://" + decodeURIComponent(domainOrHttpsSignal);
    assert(origin.indexOf(".") > 0, "Expected a . in origin %s", origin);
    path.splice(1, domainOrHttpsSignal == "s" ? 3 : 2);
    return origin + path.join("/") + removeSpzJsParamsFromSearch(url.search) + (url.hash || "");
  }
  function getSourceOrigin(url) {
    return parseUrlDeprecated(getSourceUrl(url)).origin;
  }
  function resolveRelativeUrl(relativeUrlString, baseUrl) {
    if (typeof baseUrl == "string") {
      baseUrl = parseUrlDeprecated(baseUrl);
    }
    if (typeof URL == "function") {
      return new URL(relativeUrlString, baseUrl.href).toString();
    }
    return resolveRelativeUrlFallback_(relativeUrlString, baseUrl);
  }
  function resolveRelativeUrlFallback_(relativeUrlString, baseUrl) {
    if (typeof baseUrl == "string") {
      baseUrl = parseUrlDeprecated(baseUrl);
    }
    relativeUrlString = relativeUrlString.replace(/\\/g, "/");
    var relativeUrl = parseUrlDeprecated(relativeUrlString);
    if (relativeUrlString.toLowerCase().startsWith(relativeUrl.protocol)) {
      return relativeUrl.href;
    }
    if (relativeUrlString.startsWith("//")) {
      return baseUrl.protocol + relativeUrlString;
    }
    if (relativeUrlString.startsWith("/")) {
      return baseUrl.origin + relativeUrlString;
    }
    return baseUrl.origin + baseUrl.pathname.replace(/\/[^/]*$/, "/") + relativeUrlString;
  }

  // src/utils/xhr-utils.js
  var allowedMethods_ = ["GET", "POST", "DELETE", "PATCH", "PUT"];
  var allowedJsonBodyTypes_ = [isArray, isObject];
  function setupInput(win, input) {
    assert(typeof input == "string", "Only URL supported: %s", input);
    return input;
  }
  function setupInit(opt_init, opt_accept, opt_csrf) {
    if (opt_csrf === void 0) {
      opt_csrf = true;
    }
    var init2 = opt_init || {};
    var creds = init2.credentials;
    assert(creds === void 0 || creds == "include" || creds == "omit", "Only credentials=include|omit support: %s", creds);
    init2.method = normalizeMethod_(init2.method);
    init2.headers = init2.headers || dict({});
    if (opt_accept) {
      init2.headers["Accept"] = opt_accept;
    }
    var token = getCookie(self, "CSRF-TOKEN");
    if (token && !hasOwn(init2, "X-CSRF-Token") && opt_csrf) {
      init2.headers["X-CSRF-Token"] = token;
    }
    assert(init2.body !== null, "fetch `body` can not be `null`");
    return init2;
  }
  function setupJsonFetchInit(init2) {
    var fetchInit = setupInit(init2, "application/json");
    if (["POST", "PATCH", "DELETE", "PUT"].includes(fetchInit.method)) {
      assert(allowedJsonBodyTypes_.some(function(test) {
        return test(fetchInit.body);
      }), "body must be of type object or array. %s", fetchInit.body);
      fetchInit.headers["Content-Type"] = fetchInit.headers["Content-Type"] || "application/json;charset=utf-8";
      var headerContentType = fetchInit.headers["Content-Type"];
      if (headerContentType === "application/x-www-form-urlencoded") {
        fetchInit.body = serializeQueryString(fetchInit.body);
      } else {
        fetchInit.body = JSON.stringify(fetchInit.body);
      }
    }
    return fetchInit;
  }
  function normalizeMethod_(method) {
    if (method === void 0) {
      return "GET";
    }
    method = method.toUpperCase();
    assert(allowedMethods_.includes(method), "Only one of %s is currently allowed. Got %s", allowedMethods_.join(", "), method);
    return method;
  }
  function assertSuccess(response) {
    return new Promise(function(resolve, reject) {
      if (response && response.ok) {
        if (response.redirected && response.url) {
          location.href = response.url;
          return;
        }
        return resolve(response);
      }
      return reject(response);
    });
  }

  // src/service/xhr-impl.js
  function _classCallCheck16(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties14(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass14(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties14(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties14(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var Xhr = /* @__PURE__ */ function() {
    function Xhr2(win) {
      _classCallCheck16(this, Xhr2);
      this.win = win;
      this.fetchPromises_ = map();
    }
    _createClass14(Xhr2, [{
      key: "fetch_",
      value: function fetch_(unusedinput, unusedinit) {
        return this.win.fetch.apply(null, arguments);
      }
    }, {
      key: "fetchHandler_",
      value: function fetchHandler_(input, init2) {
        if (init2 === void 0) {
          init2 = {};
        }
        input = setupInput(this.win, input);
        return this.fetch_(input, init2).then(function(response) {
          return response;
        }, function(reason) {
          throw new Error("XHR", "Failed fetching (" + (reason && reason.message) + "/...):");
        });
      }
    }, {
      key: "fetchJson",
      value: function fetchJson(input, opt_init) {
        return this.fetch(input, setupJsonFetchInit(opt_init)).then(function(res) {
          try {
            return res.json();
          } catch (error) {
            return res;
          }
        }, function(reason) {
          if (reason && typeof reason.json === "function") {
            throw reason.json();
          } else {
            var error = {
              message: reason
            };
            throw error;
          }
        });
      }
    }, {
      key: "fetchText",
      value: function fetchText(input, opt_init) {
        return this.fetch(input, setupInit(opt_init, "text/plain"));
      }
    }, {
      key: "setFetchParam_",
      value: function setFetchParam_(opt_init) {
        var _ref = opt_init || {}, _ref$headers = _ref.headers, headers = _ref$headers === void 0 ? {} : _ref$headers, _ref$method = _ref.method, method = _ref$method === void 0 ? "" : _ref$method;
        this.responseType_ = headers["Accept"] || "";
        this.isBatchAble_ = !method || method === "GET";
      }
    }, {
      key: "getCacheFetch_",
      value: function getCacheFetch_(input) {
        var key = this.getMapKey_(input);
        var isBatched = !!this.fetchPromises_[key];
        if (!this.isBatchAble_ || !isBatched) {
          return;
        }
        return this.fetchPromises_[key].then(function(response) {
          return response.clone();
        });
      }
    }, {
      key: "setCacheFetch_",
      value: function setCacheFetch_(input, fetchPromise) {
        var _this = this;
        var key = this.getMapKey_(input);
        this.fetchPromises_[key] = fetchPromise.then(function(response) {
          delete _this.fetchPromises_[key];
          return response.clone();
        }, function(err) {
          delete _this.fetchPromises_[key];
          throw err;
        });
      }
    }, {
      key: "fetch",
      value: function fetch(input, opt_init, opt_csrf) {
        if (opt_csrf === void 0) {
          opt_csrf = true;
        }
        this.setFetchParam_(opt_init);
        var resultPromise = this.getCacheFetch_(input);
        if (!!resultPromise) {
          return resultPromise;
        }
        var fetchPromise = this.request_(input, opt_init, opt_csrf);
        if (this.isBatchAble_) {
          this.setCacheFetch_(input, fetchPromise);
        }
        return fetchPromise;
      }
    }, {
      key: "request_",
      value: function request_(input, opt_init, opt_csrf) {
        var init2 = setupInit(opt_init, null, opt_csrf);
        return this.fetchHandler_(input, init2).then(function(response) {
          return assertSuccess(response);
        });
      }
    }, {
      key: "getMapKey_",
      value: function getMapKey_(input) {
        var absoluteUrl = resolveRelativeUrl(input, getSourceOrigin(this.win.location));
        return removeFragment(absoluteUrl) + this.responseType_;
      }
    }]);
    return Xhr2;
  }();
  function installXhrService(window2) {
    registerServiceBuilder(window2, "xhr", Xhr);
  }

  // src/service/batched-xhr-impl.js
  function _classCallCheck17(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties15(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass15(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties15(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties15(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf3(o, p);
  }
  function _createSuper3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct3();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf3(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf3(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn3(this, result);
    };
  }
  function _possibleConstructorReturn3(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized3(self2);
  }
  function _assertThisInitialized3(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct3() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf3(o) {
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf7(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var BatchedXhr = /* @__PURE__ */ function(_Xhr) {
    _inherits3(BatchedXhr2, _Xhr);
    var _super = _createSuper3(BatchedXhr2);
    function BatchedXhr2(win) {
      _classCallCheck17(this, BatchedXhr2);
      return _super.call(this, win);
    }
    _createClass15(BatchedXhr2, [{
      key: "batchFetchJsonFor",
      value: function batchFetchJsonFor(element, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$url = _options.url, url = _options$url === void 0 ? element.getAttribute("src") : _options$url;
        return this.fetchJson(assertString(url), options).then(function(data) {
          return getValueForExpr(data, element.getAttribute("items") || ".");
        }).catch(function(err) {
          throw err;
        });
      }
    }]);
    return BatchedXhr2;
  }(Xhr);
  function installBatchedXhrService(window2) {
    registerServiceBuilder(window2, "batched-xhr", BatchedXhr);
  }

  // builtins/spz-img/spz-img.js
  function _classCallCheck18(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties16(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass16(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties16(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties16(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf4(subClass, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf4(o, p);
  }
  function _createSuper4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct4();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf4(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf4(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn4(this, result);
    };
  }
  function _possibleConstructorReturn4(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized4(self2);
  }
  function _assertThisInitialized4(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct4() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf4(o) {
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf7(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  var TAG2 = "spz-img";
  var ATTRIBUTES_TO_PROPAGATE = ["alt", "aria-describedby", "aria-label", "aria-labelledby", "crossorigin", "referrerpolicy", "title", "sizes", "srcset"];
  var DEFAULT_SIZE = 330;
  var SIZE_SPLITERS = [48, 180, 420, 540, 720, 900, 1024, 1280, 1366, 1440, 1536, 1600, 1920, 2056, 2560, 2732, 2880, 3072, 3200, 3840];
  var AUTO_FIT_SIZE = /^_\d{1,}x$/i;
  var SpzImg = /* @__PURE__ */ function(_BaseElement) {
    _inherits4(SpzImg2, _BaseElement);
    var _super = _createSuper4(SpzImg2);
    function SpzImg2(element) {
      var _this;
      _classCallCheck18(this, SpzImg2);
      _this = _super.call(this, element);
      _this.allowImgLoadFallback_ = true;
      _this.src_ = void 0;
      _this.img_ = null;
      _this.autoFitSize_ = DEFAULT_SIZE;
      _this.autoFit_ = false;
      return _this;
    }
    _createClass16(SpzImg2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return SPZCore.isLayoutSizeDefined(layout);
      }
    }, {
      key: "setSrc",
      value: function setSrc() {
        this.initialize_();
      }
    }, {
      key: "mutatedAttributesCallback",
      value: function mutatedAttributesCallback(mutations) {
        if (!SPZCore.Types.hasOwn(mutations, "src") || !this.img_) {
          return;
        }
        this.src_ = mutations.src;
        this.img_.src = mutations.src;
      }
    }, {
      key: "initialize_",
      value: function initialize_() {
        if (this.img_) {
          return this.img_;
        }
        this.allowImgLoadFallback_ = !this.element.hasAttribute("fallback");
        var serverRendered = this.element.hasAttribute("i-spzhtml-ssr");
        if (serverRendered) {
          this.img_ = scopedQuerySelector(this.element, "> img:not([placeholder])");
        }
        this.img_ = this.img_ || new Image();
        this.img_.setAttribute("decoding", "async");
        if (this.element.id) {
          this.img_.setAttribute("spz-img-id", this.element.id);
        }
        if (this.element.getAttribute("role") == "img") {
          this.element.removeAttribute("role");
          this.logger().error(TAG2, "Setting role=img on spz-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element.");
        }
        this.fillImgStyle_();
        if (!serverRendered) {
          this.element.appendChild(this.img_);
        }
        return this.img_;
      }
    }, {
      key: "attemptChangeSizeFitSrc_",
      value: function attemptChangeSizeFitSrc_() {
        if (this.src_) {
          return;
        }
        this.src_ = this.element.getAttribute("src");
        if (!this.src_) {
          return;
        }
        var lastDotIdx = this.src_.lastIndexOf(".");
        if (lastDotIdx > -1) {
          this.initFitSize_();
          if (this.isAddAutoFit_()) {
            var fitSize = this.scaleRatio_ ? this.autoFitSize_ * this.scaleRatio_ : this.autoFitSize_;
            this.src_ = this.src_.substring(0, lastDotIdx) + "_" + fitSize + "x" + this.src_.substring(lastDotIdx);
          }
        }
      }
    }, {
      key: "isAddAutoFit_",
      value: function isAddAutoFit_() {
        var lastFitIdx = this.src_.lastIndexOf("_");
        var lastDotIdx = this.src_.lastIndexOf(".");
        if (lastFitIdx < 0) {
          return this.autoFit_ && this.autoFitSize_;
        }
        var autoFit = this.src_.substring(lastFitIdx, lastDotIdx);
        if (AUTO_FIT_SIZE.test(autoFit)) {
          return false;
        }
        return this.autoFit_ && this.autoFitSize_;
      }
    }, {
      key: "initFitSize_",
      value: function initFitSize_() {
        var _this2 = this;
        if (this.autoFit_) {
          this.autoFitSize_ = !!this.fitSizeGiven_ ? parseInt(this.fitSizeGiven_ || 0, 10) || DEFAULT_SIZE : SIZE_SPLITERS.filter(function(w) {
            return w > ((window.devicePixelRatio || 1) + 1) / 2 * _this2.size_;
          })[0];
        }
      }
    }, {
      key: "reconstructWhenReparented",
      value: function reconstructWhenReparented() {
        return false;
      }
    }, {
      key: "mountCallback",
      value: function mountCallback() {
        var _this3 = this;
        this.autoFit_ = this.element.hasAttribute("auto-fit");
        this.fitSizeGiven_ = this.element.getAttribute("auto-fit");
        this.scaleRatio_ = this.element.getAttribute("scale-ratio");
        if (this.autoFit_ && !this.fitSizeGiven_) {
          this.size_ = Math.max(this.element.offsetWidth, this.element.clientWidth || 0, this.element.offsetHeight, this.element.clientHeight || 0);
          if (!this.size_) {
            setTimeout(function() {
              _this3.element.unmount();
            });
            return;
          }
        }
        var initialized = !!this.img_;
        var img = this.getImgElement_();
        if (!initialized) {
          listen(img, "load", function() {
            _this3.setReadyState(ReadyState.COMPLETE);
            _this3.firstLayoutCompleted();
            _this3.hideFallbackImg_();
            _this3.triggerEvent_();
          });
          listen(img, "error", function(reason) {
            _this3.setReadyState(ReadyState.ERROR, reason);
            _this3.onImgLoadingError_();
          });
        }
        if (img.complete) {
          this.setReadyState(ReadyState.COMPLETE);
          this.firstLayoutCompleted();
          this.hideFallbackImg_();
          this.triggerEvent_();
        } else {
          this.setReadyState(ReadyState.LOADING);
        }
      }
    }, {
      key: "unmountCallback",
      value: function unmountCallback() {
        var img = this.img_;
        if (img && !img.complete) {
          img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=";
          removeElement(img);
          this.img_ = null;
        }
      }
    }, {
      key: "ensureLoaded",
      value: function ensureLoaded() {
        var img = assertElement(this.img_);
        img.loading = "eager";
      }
    }, {
      key: "hideFallbackImg_",
      value: function hideFallbackImg_() {
        if (!this.allowImgLoadFallback_ && this.img_.classList.contains("i-spzhtml-ghost")) {
          this.img_.classList.remove("i-spzhtml-ghost");
        }
      }
    }, {
      key: "onImgLoadingError_",
      value: function onImgLoadingError_() {
        if (this.allowImgLoadFallback_ || !this.src_) {
          this.img_.classList.add("i-spzhtml-ghost");
          this.togglePlaceholder(false);
          if (this.allowImgLoadFallback_) {
            this.allowImgLoadFallback_ = false;
          }
          if (!this.src_) {
            this.element.setAttribute("src-unset", "");
          }
        }
      }
    }, {
      key: "triggerEvent_",
      value: function triggerEvent_() {
        this.element.setAttribute(ReadyState.COMPLETE, "");
        SPZCore.Dom.dispatchCustomEvent(this.element, ReadyState.COMPLETE);
      }
    }, {
      key: "fillImgStyle_",
      value: function fillImgStyle_() {
        if (this.img_.classList.contains("i-spzhtml-fill-content")) {
          return;
        }
        this.propagateAttributes(ATTRIBUTES_TO_PROPAGATE, this.img_);
        this.attemptChangeSizeFitSrc_();
        this.img_.setAttribute("src", this.src_);
        this.applyFillContent(this.img_, true);
        propagateObjectFitStyles(this.element, this.img_);
      }
    }, {
      key: "getImgElement_",
      value: function getImgElement_() {
        var img = this.findChild_(this.element);
        if (!img) {
          img = this.findChild_(this.findChild_(this.element, "PICTURE"));
        }
        if (img) {
          this.img_ = img;
          this.fillImgStyle_();
          return this.img_;
        }
        return this.initialize_();
      }
    }, {
      key: "findChild_",
      value: function findChild_(parent, tag) {
        if (tag === void 0) {
          tag = "IMG";
        }
        return !parent ? void 0 : toArray(parent.children).find(function(item) {
          return item.tagName == tag;
        });
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return true;
      }
    }, {
      key: "usesLoading",
      value: function usesLoading() {
        return true;
      }
    }]);
    return SpzImg2;
  }(BaseElement);
  function installImg(win, tag) {
    if (tag === void 0) {
      tag = TAG2;
    }
    registerElement(win, tag, SpzImg);
  }

  // builtins/spz-layout/spz-layout.js
  function _classCallCheck19(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties17(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass17(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties17(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties17(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _inherits5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf5(subClass, superClass);
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf5(o, p);
  }
  function _createSuper5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct5();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf5(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf5(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn5(this, result);
    };
  }
  function _possibleConstructorReturn5(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized5(self2);
  }
  function _assertThisInitialized5(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct5() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf5(o) {
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf7(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  var TAG3 = "spz-layout";
  var SpzLayout = /* @__PURE__ */ function(_BaseElement) {
    _inherits5(SpzLayout2, _BaseElement);
    var _super = _createSuper5(SpzLayout2);
    function SpzLayout2() {
      _classCallCheck19(this, SpzLayout2);
      return _super.apply(this, arguments);
    }
    _createClass17(SpzLayout2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.CONTAINER || isLayoutSizeDefined(layout);
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        if (this.getLayout() == Layout.CONTAINER) {
          return;
        }
        var container = this.win.document.createElement("div");
        this.applyFillContent(container);
        this.getRealChildNodes().forEach(function(child) {
          container.appendChild(child);
        });
        this.element.appendChild(container);
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return true;
      }
    }]);
    return SpzLayout2;
  }(BaseElement);
  function installLayout(win, tag) {
    if (tag === void 0) {
      tag = TAG3;
    }
    registerElement(win, tag, SpzLayout);
  }

  // src/service/locale-impl.js
  function _classCallCheck20(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties18(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass18(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties18(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties18(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var SpzLocale = /* @__PURE__ */ function() {
    function SpzLocale2() {
      _classCallCheck20(this, SpzLocale2);
      this.text_ = null;
    }
    _createClass18(SpzLocale2, [{
      key: "i18n",
      value: function i18n(keys) {
        var _SETTINGS$routes, _SETTINGS$theme;
        var SETTINGS = self.C_SETTINGS || self[atob("U0hPUExBWlpB")];
        var SITE = (SETTINGS == null ? void 0 : (_SETTINGS$routes = SETTINGS.routes) == null ? void 0 : _SETTINGS$routes.root) || "";
        var themeId = SETTINGS == null ? void 0 : (_SETTINGS$theme = SETTINGS.theme) == null ? void 0 : _SETTINGS$theme.theme_id;
        var _this$parseKeys_ = this.parseKeys_(keys), key = _this$parseKeys_.key, queryString = _this$parseKeys_.queryString;
        if (SPZ.i18n && SPZ.i18n[key]) {
          return Promise.resolve(SPZ.i18n[key]);
        }
        return SPZServices.xhrFor(self).fetchJson(SITE + "/api/front/themes/languages?theme_id=" + (themeId || "") + "&" + queryString).then(function(_ref) {
          var data = _ref.data;
          if (!SPZ.i18n) {
            SPZ.i18n = {};
          }
          SPZ.i18n[key] = data.config;
          return data.config;
        });
      }
    }, {
      key: "textI18n",
      value: function textI18n() {
        var _SETTINGS$routes2, _SETTINGS$meta, _SETTINGS$meta2, _SETTINGS$theme2, _SETTINGS$meta3;
        if (this.text_) {
          return this.text_;
        }
        var SETTINGS = self.C_SETTINGS || self[atob("U0hPUExBWlpB")];
        var SITE = (SETTINGS == null ? void 0 : (_SETTINGS$routes2 = SETTINGS.routes) == null ? void 0 : _SETTINGS$routes2.root) || "";
        var suffix = (SETTINGS == null ? void 0 : (_SETTINGS$meta = SETTINGS.meta) == null ? void 0 : _SETTINGS$meta.page.template_suffix) === "default" ? "" : "." + (SETTINGS == null ? void 0 : (_SETTINGS$meta2 = SETTINGS.meta) == null ? void 0 : _SETTINGS$meta2.page.template_suffix);
        var sourceId = (SETTINGS == null ? void 0 : (_SETTINGS$theme2 = SETTINGS.theme) == null ? void 0 : _SETTINGS$theme2.theme_id) + "." + (SETTINGS == null ? void 0 : (_SETTINGS$meta3 = SETTINGS.meta) == null ? void 0 : _SETTINGS$meta3.page.template_name) + suffix;
        this.text_ = SPZServices.xhrFor(self).fetchJson(SITE + "/api/front/translations?source_type=themes&source_ids=" + sourceId).then(function(_ref2) {
          var _data$themes;
          var data = _ref2.data;
          return (data == null ? void 0 : (_data$themes = data.themes) == null ? void 0 : _data$themes[sourceId].data) || {};
        });
        return this.text_;
      }
    }, {
      key: "parseKeys_",
      value: function parseKeys_(keys) {
        var queryString = "";
        keys.forEach(function(key) {
          queryString += "catalogues=" + key + "&";
        });
        return {
          queryString,
          key: keys.join("&")
        };
      }
    }]);
    return SpzLocale2;
  }();
  function installLocaleForDoc() {
    registerServiceBuilderForDoc("spz-locale", SpzLocale);
  }

  // src/service/manager-impl.js
  function _extends3() {
    _extends3 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends3.apply(this, arguments);
  }
  function _classCallCheck21(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties19(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass19(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties19(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties19(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var ComponentManager = /* @__PURE__ */ function() {
    function ComponentManager2(name) {
      _classCallCheck21(this, ComponentManager2);
      this.currentName = name;
      this.components = {};
      this.components[name] = [];
    }
    _createClass19(ComponentManager2, [{
      key: "modify",
      value: function modify(callback) {
        if (!this.components[this.currentName]) {
          this.components[this.currentName] = [];
        }
        if (!this.components[this.currentName].includes(callback)) {
          this.components[this.currentName].push(callback);
        }
      }
    }, {
      key: "get",
      value: function get(data) {
        if (!this.components[this.currentName]) {
          return Promise.resolve(data);
        }
        var firstRes = Promise.resolve(data);
        var result = this.components[this.currentName].reduce(function(lastRes, callback) {
          return lastRes.then(function(res) {
            return Promise.resolve(callback(res)).then(function(transitionRes) {
              return Promise.resolve(_extends3({}, res, {
                properties: _extends3({}, res == null ? void 0 : res.properties, transitionRes == null ? void 0 : transitionRes.properties)
              }));
            });
          });
        }, firstRes);
        return result.then(function(res) {
          return Promise.resolve({
            properties: res.properties
          });
        });
      }
    }]);
    return ComponentManager2;
  }();
  function installManagerService() {
    registerServiceBuilderForDoc("product-form", function() {
      return new ComponentManager("product-form");
    });
  }

  // src/service/mutator-impl.js
  function _classCallCheck22(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties20(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass20(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties20(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties20(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var MutatorImpl = /* @__PURE__ */ function() {
    function MutatorImpl2() {
      _classCallCheck22(this, MutatorImpl2);
      this.win = self;
      this.vsync_ = Services.vsyncFor(this.win);
    }
    _createClass20(MutatorImpl2, [{
      key: "measureElement",
      value: function measureElement(measurer) {
        return this.vsync_.measurePromise(measurer);
      }
    }, {
      key: "mutateElement",
      value: function mutateElement(element, mutator) {
        return this.measureMutateElementResources_(null, mutator);
      }
    }, {
      key: "measureMutateElement",
      value: function measureMutateElement(element, measurer, mutator) {
        return this.measureMutateElementResources_(measurer, mutator);
      }
    }, {
      key: "measureMutateElementResources_",
      value: function measureMutateElementResources_(measurer, mutator) {
        return this.vsync_.runPromise({
          measure: function measure() {
            if (measurer) {
              measurer();
            }
          },
          mutate: function mutate() {
            mutator();
          }
        });
      }
    }]);
    return MutatorImpl2;
  }();
  function installMutatorServiceForDoc() {
    registerServiceBuilderForDoc("mutator", MutatorImpl);
  }

  // src/service/platform-impl.js
  function _classCallCheck23(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties21(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass21(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties21(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties21(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var Platform = /* @__PURE__ */ function() {
    function Platform2(win) {
      _classCallCheck23(this, Platform2);
      this.navigator_ = win.navigator;
      this.win_ = win;
    }
    _createClass21(Platform2, [{
      key: "isAndroid",
      value: function isAndroid() {
        return /Android/i.test(this.navigator_.userAgent);
      }
    }, {
      key: "isIos",
      value: function isIos() {
        return /iPhone|iPad|iPod/i.test(this.navigator_.userAgent);
      }
    }, {
      key: "isSafari",
      value: function isSafari() {
        return /Safari/i.test(this.navigator_.userAgent) && !this.isChrome() && !this.isIe() && !this.isEdge() && !this.isFirefox() && !this.isOpera();
      }
    }, {
      key: "isChrome",
      value: function isChrome() {
        return /Chrome|CriOS/i.test(this.navigator_.userAgent) && !this.isEdge() && !this.isOpera();
      }
    }, {
      key: "isFirefox",
      value: function isFirefox() {
        return /Firefox|FxiOS/i.test(this.navigator_.userAgent) && !this.isEdge();
      }
    }, {
      key: "isOpera",
      value: function isOpera() {
        return /OPR\/|Opera|OPiOS/i.test(this.navigator_.userAgent);
      }
    }, {
      key: "isIe",
      value: function isIe() {
        if (false) {
          return false;
        }
        return /Trident|MSIE|IEMobile/i.test(this.navigator_.userAgent);
      }
    }, {
      key: "isEdge",
      value: function isEdge() {
        return /Edge/i.test(this.navigator_.userAgent);
      }
    }, {
      key: "isWebKit",
      value: function isWebKit() {
        return /WebKit/i.test(this.navigator_.userAgent) && !this.isEdge();
      }
    }, {
      key: "isWindows",
      value: function isWindows() {
        return /Windows/i.test(this.navigator_.userAgent);
      }
    }, {
      key: "isStandalone",
      value: function isStandalone() {
        return this.isIos() && this.navigator_.standalone || this.isChrome() && this.win_.matchMedia("(display-mode: standalone)").matches;
      }
    }, {
      key: "isBot",
      value: function isBot() {
        return /bot/i.test(this.navigator_.userAgent);
      }
    }, {
      key: "getMajorVersion",
      value: function getMajorVersion() {
        if (this.isSafari()) {
          return this.isIos() ? this.getIosMajorVersion() || 0 : this.evalMajorVersion_(/\sVersion\/(\d+)/, 1);
        }
        if (this.isChrome()) {
          return this.evalMajorVersion_(/(Chrome|CriOS)\/(\d+)/, 2);
        }
        if (this.isFirefox()) {
          return this.evalMajorVersion_(/(Firefox|FxiOS)\/(\d+)/, 2);
        }
        if (this.isOpera()) {
          return this.evalMajorVersion_(/(OPR|Opera|OPiOS)\/(\d+)/, 2);
        }
        if (this.isIe()) {
          return this.evalMajorVersion_(/MSIE\s(\d+)/, 1);
        }
        if (this.isEdge()) {
          return this.evalMajorVersion_(/Edge\/(\d+)/, 1);
        }
        return 0;
      }
    }, {
      key: "evalMajorVersion_",
      value: function evalMajorVersion_(expr, index) {
        if (!this.navigator_.userAgent) {
          return 0;
        }
        var res = this.navigator_.userAgent.match(expr);
        if (!res || index >= res.length) {
          return 0;
        }
        return parseInt(res[index], 10);
      }
    }, {
      key: "getIosVersionString",
      value: function getIosVersionString() {
        if (!this.navigator_.userAgent) {
          return "";
        }
        if (!this.isIos()) {
          return "";
        }
        var version = this.navigator_.userAgent.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/);
        if (!version) {
          return "";
        }
        version = version[1].replace(/_/g, ".");
        return version;
      }
    }, {
      key: "getIosMajorVersion",
      value: function getIosMajorVersion() {
        var currentIosVersion = this.getIosVersionString();
        if (currentIosVersion == "") {
          return null;
        }
        return Number(currentIosVersion.split(".")[0]);
      }
    }]);
    return Platform2;
  }();
  function installPlatformService(window2) {
    registerServiceBuilder(window2, "platform", Platform);
  }

  // src/core/window/clipboard.js
  function deprecatedCopyTextToClipboard(win, text) {
    var _win$getSelection;
    var copySuccessful = false;
    var doc = win.document;
    var textarea = doc.createElement("textarea");
    setStyles(textarea, {
      "position": "fixed",
      "top": 0,
      "left": 0,
      "width": "50px",
      "height": "50px",
      "padding": 0,
      "border": "none",
      "outline": "none",
      "background": "transparent"
    });
    textarea.value = text;
    textarea.readOnly = true;
    textarea.contentEditable = "true";
    doc.body.appendChild(textarea);
    (_win$getSelection = win.getSelection()) == null ? void 0 : _win$getSelection.removeAllRanges();
    textarea.focus();
    textarea.setSelectionRange(0, text.length);
    try {
      copySuccessful = doc.execCommand("copy");
    } catch (e) {
    }
    removeElement(textarea);
    return copySuccessful;
  }
  function isDeprecatedCopyingToClipboardSupported(doc) {
    return doc.queryCommandSupported("copy");
  }
  function copyTextToClipboard(win, text, successCallback, failCallback) {
    var _win$navigator;
    if ((_win$navigator = win.navigator) != null && _win$navigator.clipboard) {
      win.navigator.clipboard.writeText(text).then(successCallback, failCallback);
    } else if (isDeprecatedCopyingToClipboardSupported(win.document) && deprecatedCopyTextToClipboard(win, text)) {
      successCallback();
    } else {
      failCallback();
    }
  }
  function isCopyingToClipboardSupported(doc) {
    var _doc$defaultView, _doc$defaultView$navi;
    return !!((_doc$defaultView = doc.defaultView) != null && (_doc$defaultView$navi = _doc$defaultView.navigator) != null && _doc$defaultView$navi.clipboard) || isDeprecatedCopyingToClipboardSupported(doc);
  }

  // src/service/standard-actions-impl.js
  function _classCallCheck24(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties22(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass22(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties22(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties22(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var SPZ_CSS_RE = /^i-spzhtml-/;
  var StandardActions = /* @__PURE__ */ function() {
    function StandardActions2() {
      _classCallCheck24(this, StandardActions2);
      var context = self.document.head;
      this.mutator_ = Services.mutatorForDoc();
      this.viewport_ = Services.viewportForDoc();
      this.installActions_(Services.actionServiceForDoc(context));
    }
    _createClass22(StandardActions2, [{
      key: "installActions_",
      value: function installActions_(actionService) {
        actionService.addGlobalTarget("SPZ", this.handleSpzTarget_.bind(this));
        actionService.addGlobalMethodHandler("scrollTo", this.handleScrollTo_.bind(this));
        actionService.addGlobalMethodHandler("focus", this.handleFocus_.bind(this));
        actionService.addGlobalMethodHandler("toggleClass", this.handleToggleClass_.bind(this));
        actionService.addGlobalMethodHandler("toggleAttribute", this.handleToggleAttribute_.bind(this));
        actionService.addGlobalMethodHandler("show", function(invocation) {
          toggle(assertElement(invocation.node), true);
        });
        actionService.addGlobalMethodHandler("hide", function(invocation) {
          toggle(assertElement(invocation.node), false);
        });
      }
    }, {
      key: "handleSpzTarget_",
      value: function handleSpzTarget_(invocation) {
        var args = invocation.args, method = invocation.method;
        switch (method) {
          case "copy":
            return this.handleCopy_(invocation);
          case "scrollTo":
            assert(args["id"], "SPZ.scrollTo must provide element ID");
            invocation.node = assertElement(self.document.getElementById(args["id"]), "scrollTo element ID must exist on page");
            return this.handleScrollTo_(invocation);
          case "replaceUrlState":
            assert(args && !isEmptyObject(args), "SPZ.replaceUrlState must provide params");
            return this.handleReplaceUrlState_(invocation);
          case "navigateTo":
            var url = args["url"];
            self.location.href = url;
            return;
          case "postMessage":
            var id = args["id"];
            var data = args["data"];
            if (!id) {
              assert(iframe, "SPZ.postMessage must provide id dom");
              return;
            }
            var iframe = self.document.getElementById(id);
            iframe.contentWindow.postMessage(data);
            return;
          case "history":
            var type = args["type"];
            var defaultUrl = args["defaultUrl"];
            if (type == "back") {
              var referrer = self.document.referrer;
              try {
                var _url = new URL(referrer);
                if (self.document.referrer && _url && _url.pathname.startsWith("/admin/card")) {
                  referrer = defaultUrl;
                }
              } catch (error) {
                console.error(error);
              }
              var nextHref = referrer || defaultUrl || "";
              if (nextHref) {
                self.location.href = nextHref;
              }
            }
            return;
          default:
            throw new Error("Unknown SPZ action " + method);
        }
      }
    }, {
      key: "handleReplaceUrlState_",
      value: function handleReplaceUrlState_(invocation) {
        var _invocation$args = invocation.args, args = _invocation$args === void 0 ? {} : _invocation$args;
        var _args$reload = args.reload, reload = _args$reload === void 0 ? false : _args$reload;
        delete args.reload;
        history.replaceState({}, "", addOrReplaceParams(self.location.href, args));
        if (reload) {
          location.reload();
        }
      }
    }, {
      key: "handleCopy_",
      value: function handleCopy_(invocation) {
        var args = invocation.args;
        var win = self;
        var CopyEvents = {
          COPY_ERROR: "copy-error",
          COPY_SUCCESS: "copy-success"
        };
        var textToCopy;
        if (invocation.tagOrTarget === "SPZ") {
          textToCopy = args["text"].trim();
        } else {
          var _invocation$node$valu;
          var target = invocation.node;
          textToCopy = ((_invocation$node$valu = invocation.node.value) != null ? _invocation$node$valu : target.textContent).trim();
        }
        var triggerEvent = function triggerEvent2(eventName, eventResult, invocation2) {
          var eventValue = {
            data: {
              type: eventResult
            }
          };
          var copyEvent = createCustomEvent(win, "" + eventName, eventValue);
          var action_ = SPZServices.actionServiceForDoc(invocation2.caller);
          action_.trigger(invocation2.caller, eventName, copyEvent);
        };
        if (isCopyingToClipboardSupported(self.document)) {
          copyTextToClipboard(self, textToCopy, function() {
            triggerEvent(CopyEvents.COPY_SUCCESS, "success", invocation);
          }, function() {
            triggerEvent(CopyEvents.COPY_ERROR, "error", invocation);
          });
        } else {
          triggerEvent(CopyEvents.COPY_ERROR, "unsupported", invocation);
        }
      }
    }, {
      key: "handleScrollTo_",
      value: function handleScrollTo_(invocation) {
        var node = assertElement(invocation.node);
        var args = invocation.args;
        var posOrUndef = args && args["position"];
        var durationOrUndef = args && args["duration"];
        var targetID = args && args["target-id"];
        var target = void 0;
        if (posOrUndef && !["top", "bottom", "center"].includes(posOrUndef)) {
          posOrUndef = void 0;
        }
        if (!isFiniteNumber(durationOrUndef)) {
          durationOrUndef = void 0;
        }
        if (targetID) {
          target = assert(self.document.getElementById(targetID), 'target-id="%s" not found.', targetID);
          var _computedStyle = computedStyle(self, target), position = _computedStyle.position;
          if (position !== "fixed" && position !== "sticky") {
            target = void 0;
          }
        }
        return this.viewport_.animateScrollIntoView(node, {
          pos: posOrUndef,
          durationOrUndef,
          target
        });
      }
    }, {
      key: "handleFocus_",
      value: function handleFocus_(invocation) {
        var node = assertElement(invocation.node);
        tryFocus(node);
        return null;
      }
    }, {
      key: "handleToggleClass_",
      value: function handleToggleClass_(invocation, className) {
        var target = assertElement(invocation.node);
        var args = invocation.args;
        className = assertString(className || args["class"], "Argument 'class' must be a string.");
        if (SPZ_CSS_RE.test(className)) {
          return null;
        }
        this.mutator_.mutateElement(target, function() {
          if (args["force"] !== void 0) {
            var shouldForce = !!args["force"];
            target.classList.toggle(className, shouldForce);
          } else {
            target.classList.toggle(className);
          }
        });
        return null;
      }
    }, {
      key: "handleToggleAttribute_",
      value: function handleToggleAttribute_(invocation) {
        var target = assertElement(invocation.node);
        var _ref = invocation.args || {}, force = _ref.force, key = _ref.key, value = _ref.value;
        assertString(key, "Argument 'key' must be a string.");
        if (target && key) {
          if (!!force) {
            target.setAttribute(key, value);
          } else {
            target.removeAttribute(key);
          }
        }
      }
    }]);
    return StandardActions2;
  }();
  function installStandardActionsForDoc() {
    registerServiceBuilderForDoc("standard-actions", StandardActions, true);
  }

  // src/web-worker/spz-worker.js
  function _classCallCheck25(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties23(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass23(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties23(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties23(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var SpzWorker = /* @__PURE__ */ function() {
    function SpzWorker2() {
      var _this = this;
      _classCallCheck25(this, SpzWorker2);
      var win = self;
      this.win_ = win;
      var url = calculateEntryPointScriptUrl("ww");
      this.worker_ = null;
      this.fetchPromise_ = new Promise(function(resolve) {
        url = url.startsWith("http") ? url : "" + location.protocol + url;
        var blob = new win.Blob(['importScripts("' + url + '")'], {
          type: "text/javascript"
        });
        var blobUrl = win.URL.createObjectURL(blob);
        _this.worker_ = new win.Worker(blobUrl);
        _this.worker_.onmessage = _this.receiveMessage_.bind(_this);
        resolve();
      });
      this.messages_ = {};
      this.counter_ = 0;
      this.windows_ = [win];
    }
    _createClass23(SpzWorker2, [{
      key: "sendMessage_",
      value: function sendMessage_(method, args, opt_localWin) {
        var _this2 = this;
        return this.fetchPromise_.then(function() {
          return new Promise(function(resolve, reject) {
            var id = _this2.counter_++;
            _this2.messages_[id] = {
              method,
              resolve,
              reject
            };
            var scope = _this2.idForWindow_(opt_localWin || _this2.win_);
            args.data = JSON.parse(JSON.stringify(args.data));
            var message = {
              method,
              args,
              scope,
              id
            };
            _this2.worker_.postMessage(message);
          });
        });
      }
    }, {
      key: "receiveMessage_",
      value: function receiveMessage_(event) {
        var _event$data = event.data, id = _event$data.id, returnValue = _event$data.returnValue;
        var message = this.messages_[id];
        if (!message) {
          return;
        }
        message.resolve(returnValue);
        delete this.messages_[id];
      }
    }, {
      key: "hasPendingMessages",
      value: function hasPendingMessages() {
        return Object.keys(this.messages_).length > 0;
      }
    }, {
      key: "idForWindow_",
      value: function idForWindow_(win) {
        var index = this.windows_.indexOf(win);
        if (index >= 0) {
          return index;
        } else {
          return this.windows_.push(win) - 1;
        }
      }
    }]);
    return SpzWorker2;
  }();
  function invokeWebWorker(win, method, opt_args) {
    registerServiceBuilder(win, "spz-worker", SpzWorker);
    var worker = getService(win, "spz-worker");
    return worker.sendMessage_(method, opt_args || [], win);
  }

  // src/service/template-impl.js
  function _classCallCheck26(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties24(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass24(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties24(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties24(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var Templates = /* @__PURE__ */ function() {
    function Templates2() {
      _classCallCheck26(this, Templates2);
      this.container_ = null;
    }
    _createClass24(Templates2, [{
      key: "renderTemplate",
      value: function renderTemplate(templateElement, data, vnode) {
        var code = this.extractFunctionCode_(templateElement);
        return this.render(templateElement.innerHTML, data, code, vnode);
      }
    }, {
      key: "renderTemplateArray",
      value: function renderTemplateArray(templateElement, array) {
        var _this = this;
        if (array.length == 0) {
          return Promise.resolve([]);
        }
        return Promise.all(array.map(function(item) {
          var code = _this.extractFunctionCode_(templateElement);
          return _this.render(templateElement.innerHTML, item, code);
        }));
      }
    }, {
      key: "extractFunctionCode_",
      value: function extractFunctionCode_(templateElement) {
        var mergeFunction = templateElement.getAttribute("data-function");
        if (mergeFunction) {
          return mergeFunction;
        }
        var functionId = templateElement.getAttribute("data-function-id");
        if (functionId) {
          var scriptElement = self.document.getElementById(functionId);
          if (scriptElement && scriptElement.tagName === "SCRIPT" && scriptElement.getAttribute("type") === "text/template-merge") {
            return scriptElement.textContent;
          }
        }
        return null;
      }
    }, {
      key: "findAndRenderTemplate",
      value: function findAndRenderTemplate(parent, data, opt_querySelector, vnode) {
        return this.renderTemplate(this.findTemplate(parent, opt_querySelector), data, vnode);
      }
    }, {
      key: "findAndRenderTemplateArray",
      value: function findAndRenderTemplateArray(parent, array, opt_querySelector) {
        return this.renderTemplateArray(this.findTemplate(parent, opt_querySelector), array);
      }
    }, {
      key: "hasTemplate",
      value: function hasTemplate(parent, opt_querySelector) {
        return !!this.maybeFindTemplate(parent, opt_querySelector);
      }
    }, {
      key: "findTemplate",
      value: function findTemplate(parent, opt_querySelector) {
        var templateElement = this.maybeFindTemplate(parent, opt_querySelector);
        assert(templateElement, "Template not found for %s", parent);
        var templateTagName = templateElement.tagName;
        assert(templateTagName == "TEMPLATE" || templateTagName == "SCRIPT" && templateElement.getAttribute("type") === "text/plain", 'Template must be defined in a <template> or <script type="text/plain"> tag');
        return templateElement;
      }
    }, {
      key: "maybeFindTemplate",
      value: function maybeFindTemplate(parent, opt_querySelector) {
        var templateId = parent.getAttribute("template");
        if (templateId) {
          return self.document.getElementById(templateId);
        } else if (opt_querySelector) {
          return scopedQuerySelector(parent, opt_querySelector);
        } else {
          return scopedQuerySelector(parent, '> template, > script[type="text/plain"], template, script[type="text/plain"]');
        }
      }
    }, {
      key: "render",
      value: function render(templateStr, data, code, vnode) {
        var _this2 = this;
        return invokeWebWorker(self, "spz.template", {
          templateStr,
          data: {
            data,
            vnode: true,
            code
          }
        }).then(function(_ref) {
          var ast = _ref.ast, html2 = _ref.html;
          if (!vnode) {
            return _this2.parseHtml_(html2);
          }
          return {
            el: _this2.parseHtml_(html2),
            vnode: ast
          };
        });
      }
    }, {
      key: "parseHtml_",
      value: function parseHtml_(html2) {
        if (!this.container_) {
          this.container_ = self.document.createElement("div");
        }
        this.container_.innerHTML = html2;
        var el = this.container_.firstElementChild;
        assert(el, "No elements in template");
        assert(!el.nextElementSibling, "Too many root elements in template");
        this.container_.removeChild(el);
        return el;
      }
    }]);
    return Templates2;
  }();
  function installTemplatesServiceForDoc() {
    registerServiceBuilderForDoc("templates", Templates);
  }

  // src/service/timer-impl.js
  function _classCallCheck27(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties25(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass25(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties25(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties25(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var TAG4 = "timer";
  var Timer = /* @__PURE__ */ function() {
    function Timer2(win) {
      _classCallCheck27(this, Timer2);
      this.win = win;
      this.resolved_ = this.win.Promise.resolve();
      this.taskCount_ = 0;
      this.canceled_ = {};
      this.startTime_ = Date.now();
    }
    _createClass25(Timer2, [{
      key: "timeSinceStart",
      value: function timeSinceStart() {
        return Date.now() - this.startTime_;
      }
    }, {
      key: "delay",
      value: function delay(callback, opt_delay) {
        var _this = this;
        if (!opt_delay) {
          var id = "p" + this.taskCount_++;
          this.resolved_.then(function() {
            if (_this.canceled_[id]) {
              delete _this.canceled_[id];
              return;
            }
            callback();
          }).catch(reportError);
          return id;
        }
        var wrapped = function wrapped2() {
          try {
            callback();
          } catch (e) {
            reportError(e);
            throw e;
          }
        };
        var index = this.win.setTimeout(wrapped, opt_delay);
        return index;
      }
    }, {
      key: "cancel",
      value: function cancel(timeoutId) {
        if (typeof timeoutId == "string") {
          this.canceled_[timeoutId] = true;
          return;
        }
        this.win.clearTimeout(timeoutId);
      }
    }, {
      key: "promise",
      value: function promise(opt_delay) {
        var _this2 = this;
        return new this.win.Promise(function(resolve) {
          var timerKey = _this2.delay(resolve, opt_delay);
          if (timerKey == -1) {
            throw new Error("Failed to schedule timer.");
          }
        });
      }
    }, {
      key: "timeoutPromise",
      value: function timeoutPromise(delay, opt_racePromise, opt_message) {
        var _this3 = this;
        var timerKey;
        var delayPromise = new this.win.Promise(function(_resolve, reject) {
          timerKey = _this3.delay(function() {
            reject(new Error(opt_message || "timeout"));
          }, delay);
          if (timerKey == -1) {
            throw new Error("Failed to schedule timer.");
          }
        });
        if (!opt_racePromise) {
          return delayPromise;
        }
        var cancel = function cancel2() {
          _this3.cancel(timerKey);
        };
        opt_racePromise.then(cancel, cancel);
        return this.win.Promise.race([delayPromise, opt_racePromise]);
      }
    }, {
      key: "poll",
      value: function poll(delay, predicate) {
        var _this4 = this;
        return new this.win.Promise(function(resolve) {
          var interval = _this4.win.setInterval(function() {
            if (predicate()) {
              _this4.win.clearInterval(interval);
              resolve();
            }
          }, delay);
        });
      }
    }]);
    return Timer2;
  }();
  function installTimerService(window2) {
    registerServiceBuilder(window2, TAG4, Timer);
  }

  // src/service/url-impl.js
  function _classCallCheck28(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties26(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass26(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties26(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties26(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var SERVICE = "url";
  var Url = /* @__PURE__ */ function() {
    function Url2() {
      _classCallCheck28(this, Url2);
      var root = self.document;
      var doc = root.ownerDocument || root;
      this.anchor_ = doc.createElement("a");
      this.cache_ = false ? null : new LruCache(100);
    }
    _createClass26(Url2, [{
      key: "parse",
      value: function parse(url, opt_nocache) {
        return parseUrlWithA(this.anchor_, url, opt_nocache ? null : this.cache_);
      }
    }, {
      key: "parse_",
      value: function parse_(url) {
        if (typeof url !== "string") {
          return url;
        }
        return this.parse(url);
      }
    }, {
      key: "isProtocolValid",
      value: function isProtocolValid2(url) {
        return isProtocolValid(url);
      }
    }, {
      key: "getSourceOrigin",
      value: function getSourceOrigin2(url) {
        return getSourceOrigin(this.parse_(url));
      }
    }, {
      key: "getSourceUrl",
      value: function getSourceUrl2(url) {
        return getSourceUrl(this.parse_(url));
      }
    }, {
      key: "resolveRelativeUrl",
      value: function resolveRelativeUrl2(relativeUrlString, baseUrl) {
        return resolveRelativeUrl(relativeUrlString, this.parse_(baseUrl));
      }
    }, {
      key: "assertHttpsUrl",
      value: function assertHttpsUrl2(urlString, elementContext, sourceName) {
        if (sourceName === void 0) {
          sourceName = "source";
        }
        return assertHttpsUrl(urlString, elementContext, sourceName);
      }
    }, {
      key: "assertAbsoluteHttpOrHttpsUrl",
      value: function assertAbsoluteHttpOrHttpsUrl2(urlString) {
        return assertAbsoluteHttpOrHttpsUrl(urlString);
      }
    }, {
      key: "isProxyOrigin",
      value: function isProxyOrigin2(url) {
        return isProxyOrigin(this.parse_(url));
      }
    }, {
      key: "isSecure",
      value: function isSecure(url) {
        return isSecureUrlDeprecated(this.parse_(url));
      }
    }, {
      key: "getWinOrigin",
      value: function getWinOrigin(win) {
        return win.origin || this.parse_(win.location.href).origin;
      }
    }]);
    return Url2;
  }();
  function installUrlForDoc() {
    registerServiceBuilderForDoc(SERVICE, Url, true);
  }

  // src/core/data-structures/curve.js
  function _classCallCheck29(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties27(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass27(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties27(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties27(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function bezierCurve(x1, y1, x2, y2) {
    return function(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, x1, y1, x2, y2, 1, 1);
    };
  }
  var Bezier = /* @__PURE__ */ function() {
    function Bezier2() {
      _classCallCheck29(this, Bezier2);
    }
    _createClass27(Bezier2, null, [{
      key: "solveYValueFromXValue",
      value: function solveYValueFromXValue(xVal, x0, y0, x1, y1, x2, y2, x3, y3) {
        return Bezier2.getPointY_(Bezier2.solvePositionFromXValue_(xVal, x0, x1, x2, x3), y0, y1, y2, y3);
      }
    }, {
      key: "solvePositionFromXValue_",
      value: function solvePositionFromXValue_(xVal, x0, x1, x2, x3) {
        var epsilon = 1e-6;
        var t = (xVal - x0) / (x3 - x0);
        if (t <= 0) {
          return 0;
        } else if (t >= 1) {
          return 1;
        }
        var tMin = 0;
        var tMax = 1;
        var value = 0;
        for (var i = 0; i < 8; i++) {
          value = Bezier2.getPointX_(t, x0, x1, x2, x3);
          var derivative = (Bezier2.getPointX_(t + epsilon, x0, x1, x2, x3) - value) / epsilon;
          if (Math.abs(value - xVal) < epsilon) {
            return t;
          } else if (Math.abs(derivative) < epsilon) {
            break;
          } else {
            if (value < xVal) {
              tMin = t;
            } else {
              tMax = t;
            }
            t -= (value - xVal) / derivative;
          }
        }
        for (var _i = 0; Math.abs(value - xVal) > epsilon && _i < 8; _i++) {
          if (value < xVal) {
            tMin = t;
            t = (t + tMax) / 2;
          } else {
            tMax = t;
            t = (t + tMin) / 2;
          }
          value = Bezier2.getPointX_(t, x0, x1, x2, x3);
        }
        return t;
      }
    }, {
      key: "getPointX_",
      value: function getPointX_(t, x0, x1, x2, x3) {
        if (t == 0) {
          return x0;
        } else if (t == 1) {
          return x3;
        }
        var ix0 = Bezier2.lerp_(x0, x1, t);
        var ix1 = Bezier2.lerp_(x1, x2, t);
        var ix2 = Bezier2.lerp_(x2, x3, t);
        ix0 = Bezier2.lerp_(ix0, ix1, t);
        ix1 = Bezier2.lerp_(ix1, ix2, t);
        return Bezier2.lerp_(ix0, ix1, t);
      }
    }, {
      key: "getPointY_",
      value: function getPointY_(t, y0, y1, y2, y3) {
        if (t == 0) {
          return y0;
        } else if (t == 1) {
          return y3;
        }
        var iy0 = Bezier2.lerp_(y0, y1, t);
        var iy1 = Bezier2.lerp_(y1, y2, t);
        var iy2 = Bezier2.lerp_(y2, y3, t);
        iy0 = Bezier2.lerp_(iy0, iy1, t);
        iy1 = Bezier2.lerp_(iy1, iy2, t);
        return Bezier2.lerp_(iy0, iy1, t);
      }
    }, {
      key: "lerp_",
      value: function lerp_(a2, b, x) {
        return a2 + x * (b - a2);
      }
    }]);
    return Bezier2;
  }();
  var Curves = {
    LINEAR: function LINEAR(xVal) {
      return xVal;
    },
    EASE: function EASE(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.25, 0.1, 0.25, 1, 1, 1);
    },
    EASE_IN: function EASE_IN(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.42, 0, 1, 1, 1, 1);
    },
    EASE_OUT: function EASE_OUT(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0, 0, 0.58, 1, 1, 1);
    },
    EASE_IN_OUT: function EASE_IN_OUT(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.42, 0, 0.58, 1, 1, 1);
    }
  };
  var NAME_MAP = {
    "linear": Curves.LINEAR,
    "ease": Curves.EASE,
    "ease-in": Curves.EASE_IN,
    "ease-out": Curves.EASE_OUT,
    "ease-in-out": Curves.EASE_IN_OUT
  };
  function getCurve(curve) {
    if (!curve) {
      return null;
    }
    if (isString(curve)) {
      curve = curve;
      if (curve.indexOf("cubic-bezier") != -1) {
        var match = curve.match(/cubic-bezier\((.+)\)/);
        if (match) {
          var values2 = match[1].split(",").map(parseFloat);
          if (values2.length == 4) {
            for (var i = 0; i < 4; i++) {
              if (isNaN(values2[i])) {
                return null;
              }
            }
            return bezierCurve(values2[0], values2[1], values2[2], values2[3]);
          }
        }
        return null;
      }
      return NAME_MAP[curve];
    }
    return curve;
  }

  // src/utils/animation.js
  function _classCallCheck30(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties28(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass28(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties28(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties28(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var TAG_2 = "Animation";
  var NOOP_CALLBACK = function NOOP_CALLBACK2() {
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(contextNode, opt_vsync) {
      _classCallCheck30(this, Animation2);
      this.contextNode_ = contextNode;
      this.vsync_ = opt_vsync || Services.vsyncFor(self);
      this.curve_ = null;
      this.segments_ = [];
    }
    _createClass28(Animation2, [{
      key: "setCurve",
      value: function setCurve(curve) {
        if (curve) {
          this.curve_ = getCurve(curve);
        }
        return this;
      }
    }, {
      key: "add",
      value: function add(delay, transition, duration, opt_curve) {
        this.segments_.push({
          delay,
          func: transition,
          duration,
          curve: getCurve(opt_curve)
        });
        return this;
      }
    }, {
      key: "start",
      value: function start(duration) {
        var player = new AnimationPlayer(this.vsync_, this.contextNode_, this.segments_, this.curve_, duration);
        return player;
      }
    }], [{
      key: "animate",
      value: function animate(contextNode, transition, duration, opt_curve) {
        return new Animation2(contextNode).setCurve(opt_curve).add(0, transition, 1).start(duration);
      }
    }]);
    return Animation2;
  }();
  var AnimationPlayer = /* @__PURE__ */ function() {
    function AnimationPlayer2(vsync, contextNode, segments, defaultCurve, duration) {
      _classCallCheck30(this, AnimationPlayer2);
      this.vsync_ = vsync;
      this.contextNode_ = contextNode;
      this.segments_ = [];
      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        this.segments_.push({
          delay: segment.delay,
          func: segment.func,
          duration: segment.duration,
          curve: segment.curve || defaultCurve,
          started: false,
          completed: false
        });
      }
      this.duration_ = duration;
      this.startTime_ = Date.now();
      this.running_ = true;
      this.state_ = {};
      var deferred = new Deferred();
      this.promise_ = deferred.promise;
      this.resolve_ = deferred.resolve;
      this.reject_ = deferred.reject;
      this.task_ = this.vsync_.createAnimTask(this.contextNode_, {
        mutate: this.stepMutate_.bind(this)
      });
      if (this.vsync_.canAnimate(this.contextNode_)) {
        this.task_(this.state_);
      } else {
        logger().warn(TAG_2, "cannot animate");
        this.complete_(false, 0);
      }
    }
    _createClass28(AnimationPlayer2, [{
      key: "then",
      value: function then(opt_resolve, opt_reject) {
        if (!opt_resolve && !opt_reject) {
          return this.promise_;
        }
        return this.promise_.then(opt_resolve, opt_reject);
      }
    }, {
      key: "thenAlways",
      value: function thenAlways(opt_callback) {
        var callback = opt_callback || NOOP_CALLBACK;
        return this.then(callback, callback);
      }
    }, {
      key: "halt",
      value: function halt(opt_dir) {
        this.complete_(false, opt_dir || 0);
      }
    }, {
      key: "complete_",
      value: function complete_(success, dir) {
        if (!this.running_) {
          return;
        }
        this.running_ = false;
        if (dir != 0) {
          if (this.segments_.length > 1) {
            this.segments_.sort(function(s1, s2) {
              return s1.delay + s1.duration - (s2.delay + s2.duration);
            });
          }
          try {
            if (dir > 0) {
              for (var i = 0; i < this.segments_.length; i++) {
                this.segments_[i].func(1, true);
              }
            } else {
              for (var _i = this.segments_.length - 1; _i >= 0; _i--) {
                this.segments_[_i].func(0, false);
              }
            }
          } catch (e) {
            logger().error(TAG_2, "completion failed: " + e, e);
            success = false;
          }
        }
        if (success) {
          this.resolve_();
        } else {
          this.reject_();
        }
      }
    }, {
      key: "stepMutate_",
      value: function stepMutate_(unusedState) {
        if (!this.running_) {
          return;
        }
        var currentTime = Date.now();
        var normLinearTime = Math.min((currentTime - this.startTime_) / this.duration_, 1);
        for (var i = 0; i < this.segments_.length; i++) {
          var segment = this.segments_[i];
          if (!segment.started && normLinearTime >= segment.delay) {
            segment.started = true;
          }
        }
        for (var _i2 = 0; _i2 < this.segments_.length; _i2++) {
          var _segment = this.segments_[_i2];
          if (!_segment.started || _segment.completed) {
            continue;
          }
          this.mutateSegment_(_segment, normLinearTime);
        }
        if (normLinearTime == 1) {
          this.complete_(true, 0);
        } else {
          if (this.vsync_.canAnimate(this.contextNode_)) {
            this.task_(this.state_);
          } else {
            logger().warn(TAG_2, "cancel animation");
            this.complete_(false, 0);
          }
        }
      }
    }, {
      key: "mutateSegment_",
      value: function mutateSegment_(segment, totalLinearTime) {
        var normLinearTime;
        var normTime;
        if (segment.duration > 0) {
          normLinearTime = Math.min((totalLinearTime - segment.delay) / segment.duration, 1);
          normTime = normLinearTime;
          if (segment.curve && normTime != 1) {
            try {
              normTime = segment.curve(normLinearTime);
            } catch (e) {
              logger().error(TAG_2, "step curve failed: " + e, e);
              this.complete_(false, 0);
              return;
            }
          }
        } else {
          normLinearTime = 1;
          normTime = 1;
        }
        if (normLinearTime == 1) {
          segment.completed = true;
        }
        try {
          segment.func(normTime, segment.completed);
        } catch (e) {
          logger().error(TAG_2, "step mutate failed: " + e, e);
          this.complete_(false, 0);
          return;
        }
      }
    }]);
    return AnimationPlayer2;
  }();

  // src/core/data-structures/observable.js
  function _createForOfIteratorHelperLoose4(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray4(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
  function _arrayLikeToArray4(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _classCallCheck31(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties29(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass29(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties29(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties29(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var Observable = /* @__PURE__ */ function() {
    function Observable2() {
      _classCallCheck31(this, Observable2);
      this.handlers_ = null;
    }
    _createClass29(Observable2, [{
      key: "add",
      value: function add(handler) {
        var _this = this;
        if (!this.handlers_) {
          this.handlers_ = [];
        }
        this.handlers_.push(handler);
        return function() {
          _this.remove(handler);
        };
      }
    }, {
      key: "remove",
      value: function remove2(handler) {
        if (!this.handlers_) {
          return;
        }
        removeItem(this.handlers_, handler);
      }
    }, {
      key: "removeAll",
      value: function removeAll() {
        if (!this.handlers_) {
          return;
        }
        this.handlers_.length = 0;
      }
    }, {
      key: "fire",
      value: function fire(opt_event) {
        if (!this.handlers_) {
          return;
        }
        for (var _iterator = _createForOfIteratorHelperLoose4(this.handlers_), _step; !(_step = _iterator()).done; ) {
          var handler = _step.value;
          handler(opt_event);
        }
      }
    }, {
      key: "getHandlerCount",
      value: function getHandlerCount() {
        var _this$handlers_$lengt, _this$handlers_;
        return (_this$handlers_$lengt = (_this$handlers_ = this.handlers_) == null ? void 0 : _this$handlers_.length) != null ? _this$handlers_$lengt : 0;
      }
    }]);
    return Observable2;
  }();

  // src/service/viewport/viewport-binding-natural.js
  function _classCallCheck32(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties30(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass30(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties30(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties30(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var TAG_3 = "Viewport";
  var ViewportBindingNatural_ = /* @__PURE__ */ function() {
    function ViewportBindingNatural_2() {
      var _this = this;
      _classCallCheck32(this, ViewportBindingNatural_2);
      this.win = self;
      this.platform_ = Services.platformFor(this.win);
      this.scrollObservable_ = new Observable();
      this.resizeObservable_ = new Observable();
      this.boundScrollEventListener_ = this.handleScrollEvent_.bind(this);
      this.boundResizeEventListener_ = function() {
        return _this.resizeObservable_.fire();
      };
      this.boundTouchMoveEventListener_ = function() {
        _this.win.document.activeElement && _this.win.document.activeElement.blur();
      };
      logger().fine(TAG_3, "initialized natural viewport");
    }
    _createClass30(ViewportBindingNatural_2, [{
      key: "handleScrollEvent_",
      value: function handleScrollEvent_() {
        this.scrollObservable_.fire();
      }
    }, {
      key: "connect",
      value: function connect() {
        this.win.addEventListener("scroll", this.boundScrollEventListener_);
        this.win.addEventListener("resize", this.boundResizeEventListener_);
        this.win.addEventListener("touchmove", this.boundTouchMoveEventListener_);
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        this.win.removeEventListener("scroll", this.boundScrollEventListener_);
        this.win.removeEventListener("resize", this.boundResizeEventListener_);
      }
    }, {
      key: "onScroll",
      value: function onScroll(callback) {
        this.scrollObservable_.add(callback);
      }
    }, {
      key: "onResize",
      value: function onResize(callback) {
        this.resizeObservable_.add(callback);
      }
    }, {
      key: "disableScroll",
      value: function disableScroll() {
        this.win.document.documentElement.classList.add("i-spzhtml-scroll-disabled");
      }
    }, {
      key: "resetScroll",
      value: function resetScroll() {
        this.win.document.documentElement.classList.remove("i-spzhtml-scroll-disabled");
      }
    }, {
      key: "getSize",
      value: function getSize() {
        var winWidth = this.win.innerWidth;
        var winHeight = this.win.innerHeight;
        if (winWidth && winHeight) {
          return {
            width: winWidth,
            height: winHeight
          };
        }
        var el = this.win.document.documentElement;
        return {
          width: el.clientWidth,
          height: el.clientHeight
        };
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return this.getScrollingElement().scrollHeight;
      }
    }, {
      key: "getScrollTop",
      value: function getScrollTop() {
        var pageScrollTop = this.getScrollingElement().scrollTop || this.win.pageYOffset;
        var host = self.document.host;
        return host ? pageScrollTop - host.offsetTop : pageScrollTop;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        return 0;
      }
    }, {
      key: "getLayoutRect",
      value: function getLayoutRect(el, opt_scrollLeft, opt_scrollTop) {
        var b = el.getBoundingClientRect();
        var scrollTop = opt_scrollTop != void 0 ? opt_scrollTop : this.getScrollTop();
        var scrollLeft = opt_scrollLeft != void 0 ? opt_scrollLeft : this.getScrollLeft();
        return layoutRectLtwh(Math.round(b.left + scrollLeft), Math.round(b.top + scrollTop), Math.round(b.width), Math.round(b.height));
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(scrollTop) {
        this.getScrollingElement().scrollTop = scrollTop;
      }
    }, {
      key: "getScrollingElement",
      value: function getScrollingElement() {
        var doc = this.win.document;
        if (doc.scrollingElement) {
          return doc.scrollingElement;
        }
        if (doc.body && this.platform_.isWebKit()) {
          return doc.body;
        }
        return doc.documentElement;
      }
    }, {
      key: "getScrollingElementScrollsLikeViewport",
      value: function getScrollingElementScrollsLikeViewport() {
        return true;
      }
    }]);
    return ViewportBindingNatural_2;
  }();

  // src/core/math/index.js
  function clamp(val, min, max) {
    assert(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }

  // src/utils/assert-display.js
  function assertNotDisplay(style) {
    if (style === "display") {
      logger().error("STYLE", "`display` style detected. You must use toggle instead.");
    }
    return style;
  }

  // src/utils/transition.js
  function setStyles2(element, styles) {
    return function(time, complete) {
      for (var k in styles) {
        setStyle(element, assertNotDisplay(k), styles[k](time, complete));
      }
    };
  }
  function numeric(start, end) {
    return function(time) {
      return start + (end - start) * time;
    };
  }
  function px2(transition) {
    return function(time) {
      return transition(time) + "px";
    };
  }

  // src/service/viewport/viewport-impl.js
  function _classCallCheck33(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties31(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass31(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties31(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties31(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var TAG_4 = "Viewport";
  function findConditionParent(target, rootElement, conditionFunc) {
    var parent = target;
    while (parent) {
      if (rootElement === parent) {
        return null;
      }
      if (conditionFunc(parent)) {
        return parent;
      }
      parent = parent.parentNode;
    }
    return null;
  }
  var ViewportImpl = /* @__PURE__ */ function() {
    function ViewportImpl2(binding) {
      _classCallCheck33(this, ViewportImpl2);
      var win = self;
      this.globalDoc_ = self.document;
      this.binding_ = binding;
      this.size_ = null;
      this.scrollTop_ = null;
      this.scrollHeight_ = null;
      this.scrollLeft_ = null;
      this.paddingTop_ = 0;
      this.timer_ = Services.timerFor(win);
      this.vsync_ = Services.vsyncFor(win);
      this.scrollTracking_ = false;
      this.scrollingElement_ = null;
      this.scrollCount_ = 0;
      this.changeObservable_ = new Observable();
      this.scrollObservable_ = new Observable();
      this.resizeObservable_ = new Observable();
      this.viewportMeta_ = void 0;
      this.originalViewportMetaString_ = void 0;
      this.ios_ = Services.platformFor(win).isIos();
      this.binding_.onScroll(this.scroll_.bind(this));
      this.binding_.onResize(this.resize_.bind(this));
      this.binding_.connect();
      this.documentElement_ = this.globalDoc_.documentElement;
      this.documentElement_.classList.add("i-spzhtml-doc");
      this.documentElement_.classList.add("i-spzhtml-standalone");
      this.overlayModeElements_ = [];
    }
    _createClass31(ViewportImpl2, [{
      key: "dispose",
      value: function dispose() {
        this.binding_.disconnect();
      }
    }, {
      key: "onScroll",
      value: function onScroll(handler) {
        return this.scrollObservable_.add(handler);
      }
    }, {
      key: "removeScroll",
      value: function removeScroll(handler) {
        return this.scrollObservable_.remove(handler);
      }
    }, {
      key: "getScrollTop",
      value: function getScrollTop() {
        if (this.scrollTop_ == null) {
          this.scrollTop_ = this.binding_.getScrollTop();
        }
        return this.scrollTop_;
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        if (this.scrollHeight_ == null) {
          this.scrollHeight_ = this.binding_.getScrollHeight();
        }
        return this.scrollHeight_;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        if (this.scrollLeft_ == null) {
          this.scrollLeft_ = this.binding_.getScrollLeft();
        }
        return this.scrollLeft_;
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(scrollPos) {
        this.scrollTop_ = null;
        this.binding_.setScrollTop(scrollPos);
      }
    }, {
      key: "getSize",
      value: function getSize() {
        if (this.size_) {
          return this.size_;
        }
        this.size_ = this.binding_.getSize();
        return this.size_;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.getSize().height;
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.getSize().width;
      }
    }, {
      key: "getLayoutRect",
      value: function getLayoutRect(el) {
        var scrollLeft = this.getScrollLeft();
        var scrollTop = this.getScrollTop();
        var frameElement = getParentWindowFrameElement(el, self);
        if (frameElement) {
          var b = this.binding_.getLayoutRect(el, 0, 0);
          var c = this.binding_.getLayoutRect(frameElement, scrollLeft, scrollTop);
          return layoutRectLtwh(Math.round(b.left + c.left), Math.round(b.top + c.top), Math.round(b.width), Math.round(b.height));
        }
        return this.binding_.getLayoutRect(el, scrollLeft, scrollTop);
      }
    }, {
      key: "scrollIntoView",
      value: function scrollIntoView(element) {
        var _this = this;
        return this.getScrollingContainerFor_(element).then(function(parent) {
          return _this.scrollIntoViewInternal_(element, parent);
        });
      }
    }, {
      key: "scrollIntoViewInternal_",
      value: function scrollIntoViewInternal_(element, parent) {
        var _this2 = this;
        var elementTop = this.binding_.getLayoutRect(element).top;
        var newScrollTopPromise = tryResolve(function() {
          return Math.max(0, elementTop - _this2.paddingTop_);
        });
        newScrollTopPromise.then(function(newScrollTop) {
          return _this2.setElementScrollTop_(parent, newScrollTop);
        });
      }
    }, {
      key: "animateScrollIntoView",
      value: function animateScrollIntoView(element, options) {
        var _this3 = this;
        var opt_curve = options.opt_curve, opt_duration = options.opt_duration, _options$pos = options.pos, pos = _options$pos === void 0 ? "top" : _options$pos, target = options.target;
        assert(!opt_curve || opt_duration !== void 0, "Curve without duration doesn't make sense.");
        return this.getScrollingContainerFor_(element).then(function(parent) {
          return _this3.animateScrollWithinParent(element, parent, {
            pos: assertString(pos),
            opt_duration,
            opt_curve,
            target
          });
        });
      }
    }, {
      key: "animateScrollWithinParent",
      value: function animateScrollWithinParent(element, parent, options) {
        var _this4 = this;
        var opt_curve = options.opt_curve, opt_duration = options.opt_duration, _options$pos2 = options.pos, pos = _options$pos2 === void 0 ? "top" : _options$pos2, target = options.target;
        assert(!opt_curve || opt_duration !== void 0, "Curve without duration doesn't make sense.");
        var elementRect = this.binding_.getLayoutRect(element);
        var _ref = this.isScrollingElement_(parent) ? this.getSize() : this.getLayoutRect(parent), parentHeight = _ref.height;
        var targetPosition = getPosition(self, pos, target);
        var offset;
        switch (pos) {
          case "bottom":
            offset = -parentHeight + elementRect.height + targetPosition;
            break;
          case "center":
            offset = -parentHeight / 2 + elementRect.height / 2 + targetPosition;
            break;
          default:
            offset = -targetPosition;
            break;
        }
        return this.getElementScrollTop_(parent).then(function(curScrollTop) {
          var calculatedScrollTop = elementRect.top - _this4.paddingTop_ + offset;
          var newScrollTop = Math.max(0, calculatedScrollTop);
          if (newScrollTop == curScrollTop) {
            return;
          }
          return _this4.interpolateScrollIntoView_(parent, curScrollTop, newScrollTop, opt_duration, opt_curve);
        });
      }
    }, {
      key: "interpolateScrollIntoView_",
      value: function interpolateScrollIntoView_(parent, curScrollTop, newScrollTop, opt_duration, curve) {
        var _this5 = this;
        if (curve === void 0) {
          curve = "ease-in";
        }
        var duration = opt_duration !== void 0 ? assertNumber(opt_duration) : getDefaultScrollAnimationDuration(curScrollTop, newScrollTop);
        var interpolate = numeric(curScrollTop, newScrollTop);
        return Animation.animate(parent, function(position) {
          _this5.setElementScrollTop_(parent, interpolate(position));
        }, duration, curve).thenAlways(function() {
          _this5.setElementScrollTop_(parent, newScrollTop);
        });
      }
    }, {
      key: "getScrollingContainerFor_",
      value: function getScrollingContainerFor_(element) {
        var _this6 = this;
        return this.vsync_.measurePromise(function() {
          return closestAncestorElementBySelector(element, ".i-spzhtml-scrollable") || _this6.binding_.getScrollingElement();
        });
      }
    }, {
      key: "setElementScrollTop_",
      value: function setElementScrollTop_(element, scrollTop) {
        if (this.isScrollingElement_(element)) {
          this.binding_.setScrollTop(scrollTop);
          return;
        }
        this.vsync_.mutate(function() {
          element.scrollTop = scrollTop;
        });
      }
    }, {
      key: "getElementScrollTop_",
      value: function getElementScrollTop_(element) {
        var _this7 = this;
        if (this.isScrollingElement_(element)) {
          return tryResolve(function() {
            return _this7.getScrollTop();
          });
        }
        return this.vsync_.measurePromise(function() {
          return element.scrollTop;
        });
      }
    }, {
      key: "isScrollingElement_",
      value: function isScrollingElement_(element) {
        return element == this.binding_.getScrollingElement();
      }
    }, {
      key: "getScrollingElement",
      value: function getScrollingElement() {
        if (this.scrollingElement_) {
          return this.scrollingElement_;
        }
        return this.scrollingElement_ = this.binding_.getScrollingElement();
      }
    }, {
      key: "onChanged",
      value: function onChanged(handler) {
        return this.changeObservable_.add(handler);
      }
    }, {
      key: "onResize",
      value: function onResize(handler) {
        return this.resizeObservable_.add(handler);
      }
    }, {
      key: "removeResize",
      value: function removeResize(handler) {
        return this.resizeObservable_.remove(handler);
      }
    }, {
      key: "enterOverlayMode",
      value: function enterOverlayMode(element) {
        this.overlayModeElements_.push(element);
        this.element = element;
        this.disableTouchZoom();
        this.disableScroll();
      }
    }, {
      key: "leaveOverlayMode",
      value: function leaveOverlayMode(element) {
        if (!element || element && this.overlayModeElements_.indexOf(element) === 0) {
          this.overlayModeElements_ = [];
          this.resetScroll();
          this.restoreOriginalTouchZoom();
        }
      }
    }, {
      key: "disableScroll",
      value: function disableScroll() {
        var _this8 = this;
        var win = self;
        var requestedMarginRight;
        this.vsync_.measure(function() {
          var existingMargin = computedStyle(win, _this8.documentElement_).marginRight;
          var scrollbarWidth = getVerticalScrollbarWidth(self);
          requestedMarginRight = parseInt(existingMargin, 10) + scrollbarWidth;
        });
        this.vsync_.mutate(function() {
          setStyle(_this8.documentElement_, "margin-right", requestedMarginRight, "px");
          _this8.binding_.disableScroll();
        });
      }
    }, {
      key: "resetScroll",
      value: function resetScroll() {
        var _this9 = this;
        this.vsync_.mutate(function() {
          setStyle(_this9.documentElement_, "margin-right", "");
          _this9.binding_.resetScroll();
        });
      }
    }, {
      key: "resetTouchZoom",
      value: function resetTouchZoom() {
        var _this10 = this;
        var windowHeight = self.innerHeight;
        var documentHeight = this.documentElement_.clientHeight;
        if (windowHeight && documentHeight && windowHeight === documentHeight) {
          return;
        }
        if (this.disableTouchZoom()) {
          this.timer_.delay(function() {
            _this10.restoreOriginalTouchZoom();
          }, 50);
        }
      }
    }, {
      key: "disableTouchZoom",
      value: function disableTouchZoom() {
        var viewportMeta = this.getViewportMeta_();
        if (!viewportMeta) {
          return false;
        }
        var newValue = updateViewportMetaString(viewportMeta.content, {
          "maximum-scale": "1",
          "user-scalable": "no"
        });
        return this.setViewportMetaString_(newValue);
      }
    }, {
      key: "restoreOriginalTouchZoom",
      value: function restoreOriginalTouchZoom() {
        if (this.originalViewportMetaString_ !== void 0) {
          return this.setViewportMetaString_(this.originalViewportMetaString_);
        }
        return false;
      }
    }, {
      key: "handleIosScroll",
      value: function handleIosScroll() {
        var _this11 = this;
        if (!this.ios_ || !this.element) {
          return;
        }
        this.syncHeight_(this.element);
        var vm = this;
        this.onResize(function() {
          _this11.syncHeight_(vm.element);
        });
        this.element.addEventListener("touchmove", function(e) {
          e.stopPropagation();
          if (!findConditionParent(e.target, _this11.element, _this11.conditionFunc_.bind(_this11))) {
            _this11.preventScroll_(e);
          }
        }, {
          passive: false
        });
        this.globalDoc_.addEventListener("touchmove", this.preventScroll_, {
          passive: false
        });
      }
    }, {
      key: "conditionFunc_",
      value: function conditionFunc_(target) {
        var scrollHeight = target.scrollHeight;
        var clientHeight = target.clientHeight;
        var scrollWidth = target.scrollWidth;
        var clientWidth = target.clientWidth;
        return scrollHeight > clientHeight || scrollWidth > clientWidth;
      }
    }, {
      key: "restoreIosScroll",
      value: function restoreIosScroll() {
        if (!this.ios_) {
          return;
        }
        this.removeResize(this.syncHeight_);
        this.globalDoc_.removeEventListener("touchmove", this.preventScroll_);
      }
    }, {
      key: "preventScroll_",
      value: function preventScroll_(e) {
        e.preventDefault();
      }
    }, {
      key: "syncHeight_",
      value: function syncHeight_(element) {
        setStyle(element, "height", self.window.innerHeight + "px");
      }
    }, {
      key: "setViewportMetaString_",
      value: function setViewportMetaString_(viewportMetaString) {
        var viewportMeta = this.getViewportMeta_();
        if (viewportMeta && viewportMeta.content != viewportMetaString) {
          logger().fine(TAG_4, "changed viewport meta to:", viewportMetaString);
          viewportMeta.content = viewportMetaString;
          return true;
        }
        return false;
      }
    }, {
      key: "getViewportMeta_",
      value: function getViewportMeta_() {
        if (this.viewportMeta_ === void 0) {
          this.viewportMeta_ = this.globalDoc_.querySelector("meta[name=viewport]");
          if (this.viewportMeta_) {
            this.originalViewportMetaString_ = this.viewportMeta_.content;
          }
        }
        return this.viewportMeta_;
      }
    }, {
      key: "changed_",
      value: function changed_(relayoutAll, velocity) {
        var size = this.getSize();
        var scrollTop = this.getScrollTop();
        var scrollLeft = this.getScrollLeft();
        logger().fine(TAG_4, "changed event:", "relayoutAll=", relayoutAll, "top=", scrollTop, "left=", scrollLeft, "bottom=", scrollTop + size.height, "velocity=", velocity);
        this.changeObservable_.fire({
          relayoutAll,
          top: scrollTop,
          left: scrollLeft,
          width: size.width,
          height: size.height,
          velocity
        });
      }
    }, {
      key: "scroll_",
      value: function scroll_() {
        var _this12 = this;
        this.scrollCount_++;
        this.scrollLeft_ = this.binding_.getScrollLeft();
        var scrollHeight = this.binding_.getScrollHeight();
        var scrollTop = this.binding_.getScrollTop();
        if (scrollTop < 0) {
          return;
        }
        var preSHgt_ = this.scrollHeight_ || 0;
        var preSTop_ = this.scrollTop_ || 0;
        var isTrusted = scrollHeight === preSHgt_ || Math.abs(scrollHeight - preSHgt_) < 5 && Math.abs(scrollTop - preSTop_) > 10;
        var up = scrollTop - preSTop_ < 0;
        var down = scrollTop - preSTop_ > 0;
        this.scrollHeight_ = scrollHeight;
        this.scrollTop_ = scrollTop;
        if (!this.scrollTracking_) {
          this.scrollTracking_ = true;
          var now = Date.now();
          this.timer_.delay(function() {
            _this12.vsync_.measure(function() {
              _this12.throttledScroll_(now, scrollTop);
            });
          }, 36);
        }
        this.scrollObservable_.fire({
          isTrusted,
          up,
          down,
          scrollHeight,
          scrollTop
        });
      }
    }, {
      key: "throttledScroll_",
      value: function throttledScroll_(referenceTime, referenceTop) {
        var _this13 = this;
        this.scrollTop_ = this.binding_.getScrollTop();
        var newScrollTop = this.scrollTop_;
        var now = Date.now();
        var velocity = 0;
        if (now != referenceTime) {
          velocity = (newScrollTop - referenceTop) / (now - referenceTime);
        }
        logger().fine(TAG_4, "scroll: scrollTop=" + newScrollTop + "; velocity=" + velocity);
        if (Math.abs(velocity) < 0.03) {
          this.changed_(false, velocity);
          this.scrollTracking_ = false;
        } else {
          this.timer_.delay(function() {
            return _this13.vsync_.measure(_this13.throttledScroll_.bind(_this13, now, newScrollTop));
          }, 20);
        }
      }
    }, {
      key: "resize_",
      value: function resize_() {
        var oldSize = this.size_;
        this.size_ = null;
        var newSize = this.getSize();
        var widthChanged = !oldSize || oldSize.width != newSize.width;
        this.changed_(widthChanged, 0);
        var sizeChanged = widthChanged || oldSize.height != newSize.height;
        if (sizeChanged) {
          this.resizeObservable_.fire({
            relayoutAll: widthChanged,
            width: newSize.width,
            height: newSize.height
          });
        }
      }
    }]);
    return ViewportImpl2;
  }();
  function parseViewportMeta(content) {
    var params = Object.create(null);
    if (!content) {
      return params;
    }
    var pairs = content.split(/,|;/);
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];
      var split = pair.split("=");
      var name = split[0].trim();
      var value = split[1];
      value = (value || "").trim();
      if (name) {
        params[name] = value;
      }
    }
    return params;
  }
  function stringifyViewportMeta(params) {
    var content = "";
    for (var k in params) {
      if (content.length > 0) {
        content += ",";
      }
      if (params[k]) {
        content += k + "=" + params[k];
      } else {
        content += k;
      }
    }
    return content;
  }
  function updateViewportMetaString(currentValue, updateParams) {
    var params = parseViewportMeta(currentValue);
    var changed = false;
    for (var k in updateParams) {
      if (params[k] !== updateParams[k]) {
        changed = true;
        if (updateParams[k] !== void 0) {
          params[k] = updateParams[k];
        } else {
          delete params[k];
        }
      }
    }
    if (!changed) {
      return currentValue;
    }
    return stringifyViewportMeta(params);
  }
  function getDefaultScrollAnimationDuration(scrollTopA, scrollTopB, max) {
    if (max === void 0) {
      max = 500;
    }
    return Math.floor(clamp(0.65 * Math.abs(scrollTopA - scrollTopB), 0, max));
  }
  function createViewport() {
    var viewer = Services.viewerForDoc();
    var binding = new ViewportBindingNatural_();
    return new ViewportImpl(binding, viewer);
  }
  function getPosition(win, position, target) {
    if (!target) {
      return 0;
    }
    var _computedStyle = computedStyle(win, target), bottom = _computedStyle.bottom, height = _computedStyle.height, paddingBottom = _computedStyle.paddingBottom, paddingTop = _computedStyle.paddingTop, top = _computedStyle.top;
    if (position === "bottom") {
      return parseFloat(bottom) + parseFloat(height) - parseFloat(paddingTop);
    }
    return parseFloat(top) + parseFloat(height) - parseFloat(paddingBottom);
  }
  function installViewportServiceForDoc() {
    registerServiceBuilderForDoc("viewport", createViewport, true);
  }

  // src/utils/pass.js
  function _classCallCheck34(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties32(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass32(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties32(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties32(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var Pass = /* @__PURE__ */ function() {
    function Pass2(win, handler, opt_defaultDelay) {
      var _this = this;
      _classCallCheck34(this, Pass2);
      this.timer_ = Services.timerFor(win);
      this.handler_ = handler;
      this.defaultDelay_ = opt_defaultDelay || 0;
      this.scheduled_ = -1;
      this.nextTime_ = 0;
      this.running_ = false;
      this.boundPass_ = function() {
        _this.pass_();
      };
    }
    _createClass32(Pass2, [{
      key: "isPending",
      value: function isPending() {
        return this.scheduled_ != -1;
      }
    }, {
      key: "schedule",
      value: function schedule(opt_delay) {
        var delay = opt_delay || this.defaultDelay_;
        if (this.running_ && delay < 10) {
          delay = 10;
        }
        var nextTime = Date.now() + delay;
        if (!this.isPending() || nextTime - this.nextTime_ < -10) {
          this.cancel();
          this.nextTime_ = nextTime;
          this.scheduled_ = this.timer_.delay(this.boundPass_, delay);
          return true;
        }
        return false;
      }
    }, {
      key: "pass_",
      value: function pass_() {
        this.scheduled_ = -1;
        this.nextTime_ = 0;
        this.running_ = true;
        this.handler_();
        this.running_ = false;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        if (this.isPending()) {
          this.timer_.cancel(this.scheduled_);
          this.scheduled_ = -1;
        }
      }
    }]);
    return Pass2;
  }();

  // src/core/constants/visibility-state.js
  var VisibilityState = {
    VISIBLE: "visible",
    HIDDEN: "hidden"
  };

  // src/core/document-visibility.js
  function getDocumentVisibilityState(doc) {
    var visibilityStateProp = getVendorJsPropertyName(doc, "visibilityState", true);
    if (doc[visibilityStateProp]) {
      return doc[visibilityStateProp];
    }
    var hiddenProp = getVendorJsPropertyName(doc, "hidden", true);
    if (doc[hiddenProp]) {
      return doc[hiddenProp] ? VisibilityState.HIDDEN : VisibilityState.VISIBLE;
    }
    return VisibilityState.VISIBLE;
  }
  function isDocumentHidden(doc) {
    return getDocumentVisibilityState(doc) != VisibilityState.VISIBLE;
  }

  // src/service/vsync-impl.js
  function _classCallCheck35(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties33(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass33(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties33(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties33(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var FRAME_TIME = 16;
  var Vsync = /* @__PURE__ */ function() {
    function Vsync2(win) {
      _classCallCheck35(this, Vsync2);
      this.win = win;
      this.raf_ = this.getRaf_();
      this.tasks_ = [];
      this.nextTasks_ = [];
      this.states_ = [];
      this.nextStates_ = [];
      this.scheduled_ = false;
      this.nextFramePromise_ = null;
      this.nextFrameResolver_ = null;
      this.boundRunScheduledTasks_ = this.runScheduledTasks_.bind(this);
      this.invisiblePass_ = new Pass(this.win, this.boundRunScheduledTasks_, FRAME_TIME);
      this.backupPass_ = new Pass(this.win, this.boundRunScheduledTasks_, FRAME_TIME * 2.5);
    }
    _createClass33(Vsync2, [{
      key: "run",
      value: function run(task, opt_state) {
        this.tasks_.push(task);
        this.states_.push(opt_state || void 0);
        this.schedule_();
      }
    }, {
      key: "runPromise",
      value: function runPromise(task, opt_state) {
        this.run(task, opt_state);
        if (this.nextFramePromise_) {
          return this.nextFramePromise_;
        }
        var deferred = new Deferred();
        this.nextFrameResolver_ = deferred.resolve;
        return this.nextFramePromise_ = deferred.promise;
      }
    }, {
      key: "createTask",
      value: function createTask(task) {
        var _this = this;
        return function(opt_state) {
          _this.run(task, opt_state);
        };
      }
    }, {
      key: "mutate",
      value: function mutate(mutator) {
        this.run({
          measure: void 0,
          mutate: mutator
        });
      }
    }, {
      key: "mutatePromise",
      value: function mutatePromise(mutator) {
        return this.runPromise({
          measure: void 0,
          mutate: mutator
        });
      }
    }, {
      key: "measure",
      value: function measure(measurer) {
        this.run({
          measure: measurer,
          mutate: void 0
        });
      }
    }, {
      key: "measurePromise",
      value: function measurePromise(measurer) {
        var _this2 = this;
        return new Promise(function(resolve) {
          _this2.measure(function() {
            resolve(measurer());
          });
        });
      }
    }, {
      key: "canAnimate",
      value: function canAnimate() {
        return this.canAnimate_();
      }
    }, {
      key: "canAnimate_",
      value: function canAnimate_() {
        if (isDocumentHidden(this.win.document)) {
          return false;
        }
        return true;
      }
    }, {
      key: "runAnim",
      value: function runAnim(contextNode, task, opt_state) {
        if (!this.canAnimate_(contextNode)) {
          logger().warn("VSYNC", "Did not schedule a vsync request, because document was invisible");
          return false;
        }
        this.run(task, opt_state);
        return true;
      }
    }, {
      key: "createAnimTask",
      value: function createAnimTask(contextNode, task) {
        var _this3 = this;
        return function(opt_state) {
          return _this3.runAnim(contextNode, task, opt_state);
        };
      }
    }, {
      key: "runAnimMutateSeries",
      value: function runAnimMutateSeries(contextNode, mutator, opt_timeout) {
        var _this4 = this;
        if (!this.canAnimate_(contextNode)) {
          return Promise.reject("runAnimMutateSeries");
        }
        return new Promise(function(resolve, reject) {
          var startTime = Date.now();
          var prevTime = 0;
          var task = _this4.createAnimTask(contextNode, {
            mutate: function mutate(state) {
              var timeSinceStart = Date.now() - startTime;
              var res = mutator(timeSinceStart, timeSinceStart - prevTime, state);
              if (!res) {
                resolve();
              } else if (opt_timeout && timeSinceStart > opt_timeout) {
                reject(new Error("timeout"));
              } else {
                prevTime = timeSinceStart;
                task(state);
              }
            }
          });
          task({});
        });
      }
    }, {
      key: "schedule_",
      value: function schedule_() {
        if (this.scheduled_) {
          return;
        }
        this.scheduled_ = true;
        this.forceSchedule_();
      }
    }, {
      key: "forceSchedule_",
      value: function forceSchedule_() {
        if (this.canAnimate_()) {
          this.raf_(this.boundRunScheduledTasks_);
          this.backupPass_.schedule();
        } else {
          this.invisiblePass_.schedule();
        }
      }
    }, {
      key: "runScheduledTasks_",
      value: function runScheduledTasks_() {
        this.backupPass_.cancel();
        this.scheduled_ = false;
        var resolver = this.nextFrameResolver_, states = this.states_, tasks = this.tasks_;
        this.nextFrameResolver_ = null;
        this.nextFramePromise_ = null;
        this.tasks_ = this.nextTasks_;
        this.states_ = this.nextStates_;
        for (var i = 0; i < tasks.length; i++) {
          if (tasks[i].measure) {
            if (!callTask_(tasks[i].measure, states[i])) {
              tasks[i].mutate = void 0;
            }
          }
        }
        for (var _i = 0; _i < tasks.length; _i++) {
          if (tasks[_i].mutate) {
            callTask_(tasks[_i].mutate, states[_i]);
          }
        }
        this.nextTasks_ = tasks;
        this.nextStates_ = states;
        this.nextTasks_.length = 0;
        this.nextStates_.length = 0;
        if (resolver) {
          resolver();
        }
      }
    }, {
      key: "getRaf_",
      value: function getRaf_() {
        var _this5 = this;
        var raf = this.win.requestAnimationFrame || this.win.webkitRequestAnimationFrame;
        if (raf) {
          return raf.bind(this.win);
        }
        var lastTime = 0;
        return function(fn) {
          var now = Date.now();
          var timeToCall = Math.max(0, FRAME_TIME - (now - lastTime));
          lastTime = now + timeToCall;
          _this5.win.setTimeout(fn, timeToCall);
        };
      }
    }]);
    return Vsync2;
  }();
  function callTask_(callback, state) {
    assert(callback);
    try {
      var ret = callback(state);
      if (ret !== void 0) {
        logger().error("VSYNC", "callback returned a value but vsync cannot propogate it: %s", callback.toString());
      }
    } catch (e) {
      rethrowAsync(e);
      return false;
    }
    return true;
  }
  function installVsyncService(window2) {
    installTimerService(window2);
    registerServiceBuilder(window2, "vsync", Vsync);
  }

  // src/service/core-services.js
  function installBuiltinElements(win) {
    installImg(win);
    installLayout(win);
  }
  function installRuntimeServices(global) {
    installBatchedXhrService(global);
    installPlatformService(global);
    installTimerService(global);
    installVsyncService(global);
    installXhrService(global);
  }
  function installSpzDocServices() {
    installSpzDocServicesInternal();
  }
  function installSpzDocServicesInternal() {
    installUrlForDoc();
    installTemplatesServiceForDoc();
    installViewportServiceForDoc();
    installMutatorServiceForDoc();
    installActionServiceForDoc();
    installStandardActionsForDoc();
    installLocaleForDoc();
    installManagerService();
  }

  // src/polyfills/stubs/intersection-observer-stub.js
  function _createForOfIteratorHelperLoose5(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray5(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
  function _arrayLikeToArray5(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _extends4() {
    _extends4 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends4.apply(this, arguments);
  }
  function _classCallCheck36(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties34(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass34(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties34(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties34(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var UPGRADERS = "_upgraders";
  var STUB = "_stub";
  function shouldLoadPolyfill(win) {
    return !win.IntersectionObserver || !win.IntersectionObserverEntry || !!win.IntersectionObserver[STUB] || !supportsDocumentRoot(win) || isWebkit(win);
  }
  function isWebkit(win) {
    return /apple/i.test(win.navigator.vendor);
  }
  function supportsDocumentRoot(win) {
    try {
      new win.IntersectionObserver(function() {
      }, {
        root: win.document
      });
      return true;
    } catch (_unused) {
      return false;
    }
  }
  var IntersectionObserverStub = /* @__PURE__ */ function() {
    function IntersectionObserverStub2(callback, options) {
      _classCallCheck36(this, IntersectionObserverStub2);
      this.callback_ = callback;
      this.options_ = _extends4({
        root: null,
        rootMargin: "0px 0px 0px 0px"
      }, options);
      this.elements_ = [];
      this.inst_ = null;
      IntersectionObserverStub2[UPGRADERS].push(this.upgrade_.bind(this));
    }
    _createClass34(IntersectionObserverStub2, [{
      key: "root",
      get: function get() {
        if (this.inst_) {
          return this.inst_.root;
        }
        return this.options_.root || null;
      }
    }, {
      key: "rootMargin",
      get: function get() {
        if (this.inst_) {
          return this.inst_.rootMargin;
        }
        return this.options_.rootMargin;
      }
    }, {
      key: "thresholds",
      get: function get() {
        if (this.inst_) {
          return this.inst_.thresholds;
        }
        return [].concat(this.options_.threshold || 0);
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        if (this.inst_) {
          this.inst_.disconnect();
        } else {
          this.elements_.length = 0;
        }
      }
    }, {
      key: "takeRecords",
      value: function takeRecords() {
        if (this.inst_) {
          return this.inst_.takeRecords();
        }
        return [];
      }
    }, {
      key: "observe",
      value: function observe(target) {
        if (this.inst_) {
          this.inst_.observe(target);
        } else {
          if (this.elements_.indexOf(target) == -1) {
            this.elements_.push(target);
          }
        }
      }
    }, {
      key: "unobserve",
      value: function unobserve(target) {
        if (this.inst_) {
          this.inst_.unobserve(target);
        } else {
          var index = this.elements_.indexOf(target);
          if (index != -1) {
            this.elements_.splice(index, 1);
          }
        }
      }
    }, {
      key: "upgrade_",
      value: function upgrade_(Ctor) {
        var inst = new Ctor(this.callback_, this.options_);
        this.inst_ = inst;
        for (var _iterator = _createForOfIteratorHelperLoose5(this.elements_), _step; !(_step = _iterator()).done; ) {
          var e = _step.value;
          inst.observe(e);
        }
        this.elements_.length = 0;
      }
    }]);
    return IntersectionObserverStub2;
  }();
  IntersectionObserverStub[UPGRADERS] = [];

  // src/core/data-structures/priority-queue.js
  function _classCallCheck37(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties35(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass35(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties35(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties35(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var PriorityQueue = /* @__PURE__ */ function() {
    function PriorityQueue2() {
      _classCallCheck37(this, PriorityQueue2);
      this.queue_ = [];
    }
    _createClass35(PriorityQueue2, [{
      key: "peek",
      value: function peek() {
        var l = this.length;
        if (!l) {
          return null;
        }
        return this.queue_[l - 1].item;
      }
    }, {
      key: "enqueue",
      value: function enqueue(item, priority) {
        if (isNaN(priority)) {
          throw new Error("Priority must not be NaN.");
        }
        var i = this.binarySearch_(priority);
        this.queue_.splice(i, 0, {
          item,
          priority
        });
      }
    }, {
      key: "binarySearch_",
      value: function binarySearch_(target) {
        var i = -1;
        var lo = 0;
        var hi = this.length;
        while (lo <= hi) {
          i = Math.floor((lo + hi) / 2);
          if (i === this.length) {
            break;
          }
          if (this.queue_[i].priority < target) {
            lo = i + 1;
          } else if (i > 0 && this.queue_[i - 1].priority >= target) {
            hi = i - 1;
          } else {
            break;
          }
        }
        return i;
      }
    }, {
      key: "forEach",
      value: function forEach(callback) {
        var index = this.length;
        while (index--) {
          callback(this.queue_[index].item);
        }
      }
    }, {
      key: "dequeue",
      value: function dequeue() {
        if (!this.length) {
          return null;
        }
        return this.queue_.pop().item;
      }
    }, {
      key: "length",
      get: function get() {
        return this.queue_.length;
      }
    }]);
    return PriorityQueue2;
  }();

  // src/utils/chunk.js
  function _inherits6(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf6(subClass, superClass);
  }
  function _setPrototypeOf6(o, p) {
    _setPrototypeOf6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf6(o, p);
  }
  function _createSuper6(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct6();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf6(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf6(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn6(this, result);
    };
  }
  function _possibleConstructorReturn6(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized6(self2);
  }
  function _assertThisInitialized6(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct6() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf6(o) {
    _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf7(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf6(o);
  }
  function _classCallCheck38(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties36(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass36(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties36(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties36(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var TAG5 = "CHUNK";
  var deactivated = /nochunking=1/.test(self.location.hash);
  var allowLongTasks = false;
  var resolved2 = resolvedPromise();
  function chunkServiceForDoc() {
    registerServiceBuilderForDoc("chunk", Chunks);
    return getServiceForDoc("chunk");
  }
  function startupChunk(fn, opt_makesBodyVisible) {
    if (deactivated) {
      resolved2.then(fn);
      return;
    }
    var service = chunkServiceForDoc();
    service.runForStartup(fn);
    if (opt_makesBodyVisible) {
      service.runForStartup(function() {
        service.bodyIsVisible_ = true;
      });
    }
  }
  var TaskState = {
    NOT_RUN: "not_run",
    RUN: "run"
  };
  var Task = /* @__PURE__ */ function() {
    function Task2(fn) {
      _classCallCheck38(this, Task2);
      this.state = TaskState.NOT_RUN;
      this.fn_ = fn;
    }
    _createClass36(Task2, [{
      key: "runTask_",
      value: function runTask_(idleDeadline) {
        if (this.state == TaskState.RUN) {
          return;
        }
        this.state = TaskState.RUN;
        try {
          this.fn_(idleDeadline);
        } catch (e) {
          this.onTaskError_(e);
          throw e;
        }
      }
    }, {
      key: "getName_",
      value: function getName_() {
        return this.fn_.displayName || this.fn_.name;
      }
    }, {
      key: "onTaskError_",
      value: function onTaskError_(unusedError) {
      }
    }, {
      key: "immediateTriggerCondition_",
      value: function immediateTriggerCondition_() {
        return true;
      }
    }, {
      key: "useRequestIdleCallback_",
      value: function useRequestIdleCallback_() {
        return false;
      }
    }]);
    return Task2;
  }();
  var StartupTask = /* @__PURE__ */ function(_Task) {
    _inherits6(StartupTask2, _Task);
    var _super = _createSuper6(StartupTask2);
    function StartupTask2(fn, win, chunks) {
      var _this;
      _classCallCheck38(this, StartupTask2);
      _this = _super.call(this, fn);
      _this.chunks_ = chunks;
      return _this;
    }
    _createClass36(StartupTask2, [{
      key: "onTaskError_",
      value: function onTaskError_(unusedError) {
        makeBodyVisibleRecovery(self.document);
      }
    }, {
      key: "useRequestIdleCallback_",
      value: function useRequestIdleCallback_() {
        return this.chunks_.coreReady_;
      }
    }]);
    return StartupTask2;
  }(Task);
  var Chunks = /* @__PURE__ */ function() {
    function Chunks2() {
      var _this2 = this;
      _classCallCheck38(this, Chunks2);
      this.win_ = self;
      this.tasks_ = new PriorityQueue();
      this.boundExecute_ = this.execute_.bind(this);
      this.durationOfLastExecution_ = 0;
      this.supportsInputPending_ = !!(this.win_.navigator.scheduling && this.win_.navigator.scheduling.isInputPending);
      this.scheduledImmediateInvocation_ = false;
      this.bodyIsVisible_ = this.win_.document.documentElement.hasAttribute("i-spzhtml-no-boilerplate");
      this.win_.addEventListener("message", function(e) {
        if (getData(e) == "spz-macro-task") {
          _this2.execute_(null);
        }
      });
      this.coreReady_ = false;
      Services.viewerPromiseForDoc().then(function() {
        _this2.coreReady_ = true;
      });
    }
    _createClass36(Chunks2, [{
      key: "run",
      value: function run(fn, priority) {
        var t = new Task(fn);
        this.enqueueTask_(t, priority);
      }
    }, {
      key: "runForStartup",
      value: function runForStartup(fn) {
        var t = new StartupTask(fn, this.win_, this);
        this.enqueueTask_(t, Number.POSITIVE_INFINITY);
      }
    }, {
      key: "enqueueTask_",
      value: function enqueueTask_(task, priority) {
        this.tasks_.enqueue(task, priority);
        this.schedule_();
      }
    }, {
      key: "nextTask_",
      value: function nextTask_(opt_dequeue) {
        var t = this.tasks_.peek();
        while (t && t.state !== TaskState.NOT_RUN) {
          this.tasks_.dequeue();
          t = this.tasks_.peek();
        }
        if (t && opt_dequeue) {
          this.tasks_.dequeue();
        }
        return t;
      }
    }, {
      key: "execute_",
      value: function execute_(idleDeadline) {
        var _this3 = this;
        var t = this.nextTask_(true);
        if (!t) {
          this.scheduledImmediateInvocation_ = false;
          this.durationOfLastExecution_ = 0;
          return false;
        }
        var before;
        try {
          before = Date.now();
          t.runTask_(idleDeadline);
        } finally {
          resolved2.then().then().then().then().then().then().then().then().then(function() {
            _this3.scheduledImmediateInvocation_ = false;
            _this3.durationOfLastExecution_ += Date.now() - before;
            logger().fine(TAG5, t.getName_(), "Chunk duration", Date.now() - before, _this3.durationOfLastExecution_);
            _this3.schedule_();
          });
        }
        return true;
      }
    }, {
      key: "executeAsap_",
      value: function executeAsap_(idleDeadline) {
        var _this4 = this;
        if (!allowLongTasks && this.bodyIsVisible_ && (this.supportsInputPending_ ? this.win_.navigator.scheduling.isInputPending() : this.durationOfLastExecution_ > 5)) {
          this.durationOfLastExecution_ = 0;
          this.requestMacroTask_();
          return;
        }
        resolved2.then(function() {
          _this4.boundExecute_(idleDeadline);
        });
      }
    }, {
      key: "schedule_",
      value: function schedule_() {
        if (this.scheduledImmediateInvocation_) {
          return;
        }
        var nextTask = this.nextTask_();
        if (!nextTask) {
          return;
        }
        if (nextTask.immediateTriggerCondition_()) {
          this.scheduledImmediateInvocation_ = true;
          this.executeAsap_(null);
          return;
        }
        if (nextTask.useRequestIdleCallback_() && this.win_.requestIdleCallback) {
          onIdle(this.win_, 15, 2e3, this.boundExecute_);
          return;
        }
        this.requestMacroTask_();
      }
    }, {
      key: "requestMacroTask_",
      value: function requestMacroTask_() {
        this.win_.postMessage("spz-macro-task", "*");
      }
    }]);
    return Chunks2;
  }();
  function onIdle(win, minimumTimeRemaining, timeout, fn) {
    var startTime = Date.now();
    function rIC(info) {
      if (info.timeRemaining() < minimumTimeRemaining) {
        var remainingTimeout = timeout - (Date.now() - startTime);
        if (remainingTimeout <= 0 || info.didTimeout) {
          logger().fine(TAG5, "Timed out", timeout, info.didTimeout);
          fn(info);
        } else {
          logger().fine(TAG5, "Rescheduling with", remainingTimeout, info.timeRemaining());
          win.requestIdleCallback(rIC, {
            timeout: remainingTimeout
          });
        }
      } else {
        logger().fine(TAG5, "Running idle callback with ", minimumTimeRemaining);
        fn(info);
      }
    }
    win.requestIdleCallback(rIC, {
      timeout
    });
  }

  // src/core/dom/media.js
  function _classCallCheck39(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties37(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass37(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties37(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties37(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var MediaQueryProps = /* @__PURE__ */ function() {
    function MediaQueryProps2(win, callback) {
      _classCallCheck39(this, MediaQueryProps2);
      this.win_ = win;
      this.callback_ = callback;
      this.exprMap_ = {};
      this.valueMap_ = {};
      this.handlerRefs_ = new WeakMap();
    }
    _createClass37(MediaQueryProps2, [{
      key: "resolveMatchQuery",
      value: function resolveMatchQuery(expr) {
        if (!(expr in this.valueMap_)) {
          this.valueMap_[expr] = typeof expr === "string" && expr.includes("(") ? this.resolve_(expr) : expr;
        }
        return this.valueMap_[expr];
      }
    }, {
      key: "resolve_",
      value: function resolve_(expr) {
        var exprArr = this.exprMap_[expr];
        if (!exprArr) {
          exprArr = this.parseMediaQueryListExpr_(expr);
          this.exprMap_[expr] = exprArr;
          this.registerListeners_(exprArr, expr);
        }
        return this.resolveMediaQueryListExpr_(exprArr);
      }
    }, {
      key: "parseMediaQueryListExpr_",
      value: function parseMediaQueryListExpr_(exprString) {
        var _this = this;
        return exprString.split(",").map(function(part) {
          part = part.replace(/\s+/g, " ").trim();
          if (part.length == 0) {
            return;
          }
          var list = part.split(" ");
          var value = list.pop();
          if (!value) {
            return null;
          }
          var queryString = list.join(" ");
          var query2 = queryString ? _this.win_.matchMedia(queryString) : null;
          return {
            query: query2,
            value
          };
        }).filter(Boolean);
      }
    }, {
      key: "resolveMediaQueryListExpr_",
      value: function resolveMediaQueryListExpr_(expr) {
        var _expr$find;
        return (_expr$find = expr.find(function(_ref) {
          var query2 = _ref.query;
          return !query2 || query2.matches;
        })) == null ? void 0 : _expr$find.value;
      }
    }, {
      key: "registerListeners_",
      value: function registerListeners_(expr, exprString) {
        var _this2 = this;
        expr.forEach(function(_ref2) {
          var query2 = _ref2.query;
          if (!query2) {
            return;
          }
          var oldHandler = _this2.handlerRefs_.get(query2);
          if (oldHandler) {
            query2.removeEventListener("change", oldHandler);
          }
          var handler = function handler2(ev) {
            delete _this2.valueMap_[exprString];
            _this2.callback_ == null ? void 0 : _this2.callback_(ev);
          };
          query2.addEventListener("change", handler);
          _this2.handlerRefs_.set(query2, handler);
        });
      }
    }, {
      key: "mediaQueryAttribute",
      value: function mediaQueryAttribute(value) {
        var result = this.resolveMatchQuery(value);
        if (result === "false" || result === null) {
          return false;
        }
        if (result === "true" || result === "") {
          return true;
        }
        return result;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        var _this3 = this;
        Object.values(this.exprMap_).forEach(function(expr) {
          expr.forEach(function(_ref3) {
            var query2 = _ref3.query;
            if (!query2) {
              return;
            }
            var handler = _this3.handlerRefs_.get(query2);
            if (handler) {
              query2.removeEventListener("change", handler);
              _this3.handlerRefs_.delete(query2);
            }
          });
        });
        this.exprMap_ = {};
        this.valueMap_ = {};
      }
    }]);
    return MediaQueryProps2;
  }();

  // src/core/dom/resize-observer.js
  function createResizeObserver(callback) {
    if (typeof ResizeObserver === "function") {
      return new ResizeObserver(callback);
    }
    return {
      observe: function observe() {
      },
      unobserve: function unobserve() {
      },
      disconnect: function disconnect() {
      }
    };
  }

  // src/core/dom/viewport-observer.js
  function createViewportObserver(ioCallback2, win, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, root = _opts.root, rootMargin = _opts.rootMargin, threshold = _opts.threshold;
    return new win.IntersectionObserver(ioCallback2, {
      threshold,
      root,
      rootMargin
    });
  }
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();
  function observeIntersections(element, callback, opts) {
    var win = element.ownerDocument.defaultView;
    if (opts) {
      var viewportObserverNoCache = createViewportObserver(function(entries) {
        callback(entries[entries.length - 1]);
      }, win, opts);
      viewportObserverNoCache.observe(element);
      return function() {
        viewportObserverNoCache.unobserve(element);
      };
    }
    var viewportObserver = viewportObservers.get(win);
    if (!viewportObserver) {
      viewportObservers.set(win, viewportObserver = createViewportObserver(ioCallback, win));
    }
    var callbacks = viewportCallbacks.get(element);
    if (!callbacks) {
      callbacks = [];
      viewportCallbacks.set(element, callbacks);
    }
    callbacks.push(callback);
    viewportObserver.observe(element);
    return function() {
      unobserveIntersections(element, callback);
    };
  }
  function unobserveIntersections(element, callback) {
    var callbacks = viewportCallbacks.get(element);
    if (!callbacks) {
      return;
    }
    if (!removeItem(callbacks, callback)) {
      return;
    }
    if (callbacks.length) {
      return;
    }
    var win = element.ownerDocument.defaultView;
    var viewportObserver = viewportObservers.get(win);
    viewportObserver == null ? void 0 : viewportObserver.unobserve(element);
    viewportCallbacks.delete(element);
  }
  function ioCallback(entries) {
    var seen = new Set();
    for (var i = entries.length - 1; i >= 0; i--) {
      var entry = entries[i];
      var target = entry.target;
      if (seen.has(target)) {
        continue;
      }
      seen.add(target);
      var callbacks = viewportCallbacks.get(target);
      if (!callbacks) {
        continue;
      }
      for (var k = 0; k < callbacks.length; k++) {
        var callback = callbacks[k];
        callback(entry);
      }
    }
  }

  // src/spz-core.js
  var SPZCore2 = {};
  SPZCore2.Layout = Layout;
  SPZCore2.SpzEvents = SpzEvents;
  SPZCore2.isLayoutSizeDefined = isLayoutSizeDefined;
  SPZCore2.isLayoutSizeFixed = isLayoutSizeFixed;
  SPZCore2.isLayoutSizeLogic = isLayoutSizeLogic;
  SPZCore2.observeIntersections = observeIntersections;
  SPZCore2.createResizeObserver = createResizeObserver;
  SPZCore2.Dom = {
    tryFocus,
    closest,
    closestAncestorElementBySelector,
    removeElement,
    realChildElements,
    scopedQuerySelector,
    scopedQuerySelectorAll,
    removeChildren,
    toggleAttribute,
    isConnectedNode,
    dispatchCustomEvent,
    getStyle,
    setImportantStyles,
    setStyle,
    setStyles,
    computedStyle,
    toggle,
    htmlFor,
    isIframeVideoPlayerComponent,
    waitForChild,
    MediaQueryProps
  };
  SPZCore2.Types = {
    isArray,
    toArray,
    isEmptyObject,
    dict,
    getValueForExpr,
    hasOwn,
    throttle,
    debounce
  };
  SPZCore2.DS = {
    bezierCurve
  };
  SPZCore2.Curves = Curves;
  SPZCore2.Math = {
    clamp
  };
  var spz_core_default = SPZCore2;

  // src/spz-services.js
  var SPZServices2 = Services;
  var spz_services_default = SPZServices2;

  // src/spz-utils.js
  var SPZUtils = {
    isSpzElement
  };
  SPZUtils.Event = {
    create: createCustomEvent,
    listen,
    listenOnce,
    delegateListen
  };
  SPZUtils.Animation = Animation;
  SPZUtils.Transtion = {
    numeric,
    px: px2,
    setStyles: setStyles2
  };
  SPZUtils.Styles = {
    install: installStylesForDoc
  };
  SPZUtils.Urls = {
    addParamsToUrl,
    parseQueryString,
    addOrReplaceParams,
    removeFragment,
    removeSearch,
    isSpzElement
  };
  var spz_utils_default = SPZUtils;

  // src/runtime.js
  setReportError(reportErrorForWin.bind(null, self));
  var TAG6 = "runtime";
  function adoptShared(global, callback) {
    if (global.__SPZ_TAG) {
      return resolvedPromise();
    }
    global.__SPZ_TAG = true;
    var preregisteredExtensions = [];
    installExtensionsService(global);
    var extensions = Services.extensionsFor(global);
    installRuntimeServices(global);
    Object.assign(global.SPZ, {
      win: global,
      lang: self.document.documentElement.getAttribute("lang") || "en-US"
    });
    if (!getMode().minified) {
      global.SPZ.extension = function(unusedName, unusedVersion, installer) {
        installer(global.SPZ);
      };
    }
    installExtensionsDependency(global);
    global.SPZ.BaseElement = BaseElement;
    global.SPZ.registerElement = extensions.addElement.bind(extensions);
    global.SPZ.registerServiceForDoc = extensions.addService.bind(extensions);
    global.SPZ.whenDefined = function(spzElement) {
      var tagName = spzElement.tagName.toLowerCase();
      return spz_services_default.extensionsFor(global).installExtensionForDoc(tagName).then(function() {
        return global["customElements"].whenDefined(tagName);
      });
    };
    global.SPZ.whenApiDefined = function(spzElement) {
      return global.SPZ.whenDefined(spzElement).then(function() {
        return spzElement.getApi();
      });
    };
    global.SPZ.defineElement = function(name, toClass, version) {
      if (version === void 0) {
        version = "0.1";
      }
      if (!name.startsWith("spz-custom")) {
        return;
      }
      installExtension({
        n: name,
        ev: version,
        l: true,
        f: function f() {
          self.SPZ.registerElement(name, toClass);
        }
      });
    };
    var iniPromise = callback(global, extensions);
    function installExtension(fnOrStruct2) {
      var register = function register2() {
        iniPromise.then(function() {
          if (typeof fnOrStruct2 == "function") {
            fnOrStruct2(global.SPZ, global.SPZ._);
          } else {
            extensions.registerExtension({
              extensionId: fnOrStruct2.n,
              version: fnOrStruct2.ev,
              latest: fnOrStruct2.l,
              factory: fnOrStruct2.f,
              arg: global.SPZ,
              type: fnOrStruct2.t
            });
          }
        });
      };
      startRegisterOrChunk(global, fnOrStruct2, register);
    }
    for (var i = 0; i < preregisteredExtensions.length; i++) {
      var fnOrStruct = preregisteredExtensions[i];
      if (typeof fnOrStruct == "function" || fnOrStruct.p == "high") {
        try {
          installExtension(fnOrStruct);
        } catch (e) {
          logger().error(TAG6, "Extension failed: ", e, fnOrStruct.n);
        }
        preregisteredExtensions.splice(i--, 1);
      }
    }
    maybePumpEarlyFrame(global, function() {
      global.SPZ.push = function(fnOrStruct2) {
        installExtension(fnOrStruct2);
      };
      for (var _i = 0; _i < preregisteredExtensions.length; _i++) {
        var _fnOrStruct = preregisteredExtensions[_i];
        try {
          installExtension(_fnOrStruct);
        } catch (e) {
          logger().error(TAG6, "Extension failed: ", e, _fnOrStruct.n);
        }
      }
      preregisteredExtensions.length = 0;
    });
    if (!global.SPZ.push) {
      global.SPZ.push = preregisteredExtensions.push.bind(preregisteredExtensions);
    }
    if (Services.platformFor(global).isIos()) {
      setStyle(global.document.documentElement, "cursor", "pointer");
    }
    var extensionsFor = Services.extensionsFor(global);
    if (shouldLoadPolyfill(global)) {
      extensionsFor.preloadExtension("spz-intersection-observer-polyfill");
    }
    return iniPromise;
  }
  function startRegisterOrChunk(global, fnOrStruct, register) {
    if (typeof fnOrStruct == "function" || fnOrStruct.p == "high") {
      resolvedPromise().then(register);
    } else {
      register.displayName = fnOrStruct.n;
      startupChunk(register);
    }
  }
  function adopt(global) {
    return adoptShared(global, function(global2) {
      return waitForBodyOpenPromise(global2.document).then(function() {
        stubElementsForDoc();
      });
    });
  }
  function installExtensionsDependency(global) {
    global.SPZCore = spz_core_default;
    global.SPZUtils = spz_utils_default;
    global.SPZServices = spz_services_default;
  }
  function maybePumpEarlyFrame(win, cb) {
    if (!win.document.body) {
      cb();
      return;
    }
    Services.timerFor(win).delay(cb, 1);
  }

  // build/spzdoc.css.js
  var cssText = "html{overflow-x:hidden!important}html,html body{height:auto!important}html body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-spzhtml-doc{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-spzhtml-doc>body{overflow:visible!important;position:relative!important}.i-spzhtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}.i-spzhtml-carousel-scroll-disabled{-ms-touch-action:none;touch-action:none;-ms-touch-action:pan-y;touch-action:pan-y}spz-list [role=loading]:not([pagination]),spz-list [role=loading]:not([scroll]),spz-list [role=slot]:not(.i-spzhtml-list-slot),spz-pagination>[role=arrow]{display:none}spz-carousel{display:-ms-flexbox!important;display:flex!important}spz-img[layout=responsive][auto-fit]{width:100%}spz-accordion>section>:last-child{display:none!important}spz-accordion>section[expanded]>:last-child{display:block!important}spz-menu [spz-menu-root]{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}spz-carousel:not([dom-mounted]) .i-spzhtml-slides-container>:not(.i-spzhtml-slide-item-show),spz-carousel:not([dom-mounted]) [next],spz-carousel:not([dom-mounted]) [pre],spz-carousel:not([dom-mounted]):not([i-spzhtml-ssr])>*{display:none}spz-carousel .i-spzhtml-slides-container{z-index:1;box-sizing:content-box;transform:translate(0px)}spz-carousel .i-spzhtml-slide-item,spz-carousel .i-spzhtml-slides-container{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;transition-property:transform}spz-carousel .i-spzhtml-slide-item{-ms-flex-negative:0;flex-shrink:0}spz-carousel .i-spzhtml-slide-item>*{width:100%;overflow:hidden!important}spz-carousel[effect=fade] .i-spzhtml-slides-container .i-spzhtml-slide-item{opacity:0;display:none}spz-carousel[effect=fade] .i-spzhtml-slides-container .i-spzhtml-slide-item-show{opacity:1!important;display:-ms-flexbox;display:flex}.i-spzhtml-tab-panel:not([active]),spz-menu [spz-menu-submenu]{display:none}spz-menu>*{opacity:0;pointer-events:none}spz-menu[finish]>*{opacity:1!important;pointer-events:auto!important}spz-list[display-in-order] [role=listitem] spz-img img{opacity:0;transition:opacity .5s linear}spz-dropdown{display:none}spz-script{font-size:0}ljs-list [role=loading]:not([pagination]),ljs-list [role=loading]:not([scroll]),ljs-list [role=slot]:not(.i-spzhtml-list-slot),ljs-pagination>[role=arrow]{display:none}ljs-carousel{display:-ms-flexbox!important;display:flex!important}ljs-img[layout=responsive][auto-fit]{width:100%}ljs-accordion>section>:last-child{display:none!important}ljs-accordion>section[expanded]>:last-child{display:block!important}[layout=container]:not(.i-spzhtml-built){color:inherit!important}ljs-menu [spz-menu-root]{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}ljs-menu>*{opacity:0;pointer-events:none}ljs-menu[finish]>*{opacity:1!important;pointer-events:auto!important}ljs-list[display-in-order] [role=listitem] ljs-img img{opacity:0;transition:opacity .5s linear}ljs-script{font-size:0}ljs-img:not(.i-spzhtml-element)[i-spzhtml-ssr]>img.i-spzhtml-fill-content{display:block}ljs-img.i-spzhtml-ssr:not(.i-spzhtml-element)>[placeholder]{z-index:auto}ljs-carousel:not(.i-spzhtml-built) .i-spzhtml-slides-container>:not(.i-spzhtml-slide-item-show),ljs-carousel:not(.i-spzhtml-built) [next],ljs-carousel:not(.i-spzhtml-built) [pre],ljs-carousel:not(.i-spzhtml-built):not([i-spzhtml-ssr])>*{display:none}ljs-carousel .i-spzhtml-slides-container{z-index:1;box-sizing:content-box;transform:translate(0px)}ljs-carousel .i-spzhtml-slide-item,ljs-carousel .i-spzhtml-slides-container{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;transition-property:transform}ljs-carousel .i-spzhtml-slide-item{-ms-flex-negative:0;flex-shrink:0}ljs-carousel .i-spzhtml-slide-item>*{width:100%;overflow:hidden!important}ljs-carousel[effect=fade] .i-spzhtml-slides-container .i-spzhtml-slide-item{opacity:0;display:none}ljs-carousel[effect=fade] .i-spzhtml-slides-container .i-spzhtml-slide-item-show{opacity:1!important;display:-ms-flexbox;display:flex}ljs-menu [spz-menu-submenu],ljs-tabs:not([finish]) [role=tabpanel],spz-tabs:not([finish]) [role=tabpanel]{display:none}ljs-text,spz-text{visibility:hidden}\n/*# sourceURL=/css/spzdoc.css*/";

  // build/spzshared.css.js
  var cssText2 = "[hidden]{display:none!important}.i-spzhtml-element{display:inline-block}[layout=nodisplay]:not(.i-spzhtml-element){display:none!important}.i-spzhtml-layout-fixed,[layout=fixed][width][height]:not(.i-spzhtml-layout-fixed){display:inline-block;position:relative}.i-spzhtml-layout-responsive,[layout=responsive][width][height]:not(.i-spzhtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-spzhtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-spzhtml-layout-responsive){display:block;position:relative}.i-spzhtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-spzhtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}[layout=intrinsic][width][height].i-spzhtml-layout-intrinsic .i-spzhtml-fill-content{min-width:auto;width:auto}.i-spzhtml-layout-intrinsic .i-spzhtml-sizer{max-width:100%}.i-spzhtml-intrinsic-sizer{max-width:100%;display:block!important}.i-spzhtml-layout-container,.i-spzhtml-layout-fixed-height,.i-spzhtml-layout-logic,[layout=container],[layout=fixed-height][height]:not(.i-spzhtml-layout-fixed-height){display:block;position:relative}.i-spzhtml-layout-fill,.i-spzhtml-layout-fill.i-spzhtml-notbuilt,[layout=fill]:not(.i-spzhtml-layout-fill){display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}.i-spzhtml-layout-flex-item,[layout=flex-item]:not(.i-spzhtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-spzhtml-layout-size-defined{overflow:hidden!important}.i-spzhtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-spzhtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-spzhtml-sizer.i-spzhtml-disable-ar{display:none!important}}.i-spzhtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-spzhtml-layout-size-defined .i-spzhtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-spzhtml-replaced-content{padding:0!important;border:none!important}.i-spzhtml-unresolved{position:relative;overflow:hidden!important}.i-spzhtml-notbuilt,[layout]:not(.i-spzhtml-element):not([i-spzhtml-ssr]),[width][height][heights]:not([layout]):not(.i-spzhtml-element):not([i-spzhtml-ssr]),[width][height][sizes]:not(img):not([layout]):not(.i-spzhtml-element):not([i-spzhtml-ssr]){position:relative;overflow:hidden!important;color:transparent!important}.i-spzhtml-notbuilt:not(.i-spzhtml-layout-container):not([i-spzhtml-ssr])>*,[layout]:not([layout=container]):not(.i-spzhtml-element):not([i-spzhtml-ssr])>*,[width][height][heights]:not([layout]):not(.i-spzhtml-element):not([i-spzhtml-ssr])>*,[width][height][sizes]:not([layout]):not(.i-spzhtml-element):not([i-spzhtml-ssr])>*{display:none}[layout]:not([layout=container]):not(.i-spzhtml-element):not([i-spzhtml-ssr]),[layout]:not([layout=container]):not([manual]):not([i-spzhtml-ssr]).i-spzhtml-notbuilt,[width][height][heights]:not([layout]):not(.i-spzhtml-element):not([i-spzhtml-ssr]),[width][height][sizes]:not(img):not([layout]):not(.i-spzhtml-element):not([i-spzhtml-ssr]){color:transparent!important;line-height:0!important}spz-img:not(.i-spzhtml-element)[i-spzhtml-ssr]>img.i-spzhtml-fill-content{display:block}.i-spzhtml-ghost{visibility:hidden!important}.i-spzhtml-element>[placeholder],[layout]:not(.i-spzhtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-spzhtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-spzhtml-element)>[placeholder]{display:block;line-height:normal}.i-spzhtml-element>[placeholder].hidden,.i-spzhtml-element>[placeholder].spz-hidden{visibility:hidden}.i-spzhtml-layout-container>[placeholder].hidden,.i-spzhtml-layout-container>[placeholder].spz-hidden{display:none}.i-spzhtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}spz-img.i-spzhtml-ssr:not(.i-spzhtml-element)>[placeholder]{z-index:auto}.i-spzhtml-notbuilt>[placeholder]{display:block!important}template{display:none!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}[layout=intrinsic][i-spzhtml-unheight-layout] img{width:100%!important;height:auto!important;position:relative!important}\n/*# sourceURL=/css/spzshared.css*/";

  // src/spz.js
  var builtins = ["SPZ-IMG"];
  var CUSTOM_TAG = "SPZ-CUSTOM";
  var prefetchList = [];
  function bootstrap() {
    initDomObserve();
    startupChunk(function services() {
      installRuntimeServices(self);
      installSpzDocServices();
    });
    startupChunk(function adoptWindow() {
      adopt(self);
    });
    startupChunk(function builtins2() {
      installBuiltinElements(self);
    });
    startupChunk(function final() {
      makeBodyVisible(self.document);
    }, true);
  }
  function initSpzCdnInfo() {
    var url = cdnInfo.url;
    self.SPZ = url;
  }
  function initDomObserve() {
    var MutationObserver = self.MutationObserver || self.WebKitMutationObserver;
    var observer = new MutationObserver(function(mutationRecords) {
      var addNodeRecords = mutationRecords.reduce(function(pre, current) {
        return pre.concat.apply(pre, current.addedNodes);
      }, []);
      if (!addNodeRecords.length) {
        return;
      }
      loadPrefetch(addNodeRecords);
    });
    observer.observe(self.document.documentElement, {
      childList: true,
      subtree: true
    });
    initLoadSpz();
  }
  function loadPrefetch(addNodeRecords) {
    var _getAddSpzTagname = getAddSpzTagname(addNodeRecords), noDisplayList = _getAddSpzTagname.noDisplayList, spzList = _getAddSpzTagname.spzList, spzLogicList = _getAddSpzTagname.spzLogicList;
    if (spzList.length) {
      stubElementsForDoc(spzList);
    }
    initLogicLayout(spzLogicList);
    initFormObserve(addNodeRecords);
    initLayoutPrefetch(noDisplayList);
  }
  function initLoadSpz() {
    loadPrefetch(Array.from(self.document.querySelectorAll("[layout]")).concat(Array.from(self.document.querySelectorAll("form"))));
  }
  function initFormObserve(addNodeRecords) {
    var formList = [];
    var addForm_ = function addForm_2(ele) {
      if (ele.tagName === "FORM" && (ele.getAttribute("is") === "spz-form" || ele.hasAttribute("action-xhr"))) {
        formList.push(ele);
      }
    };
    addNodeRecords.forEach(function(node) {
      addForm_(node);
      var formChildElement = node.querySelectorAll && node.querySelectorAll("form");
      formChildElement == null ? void 0 : formChildElement.forEach(function(ele) {
        addForm_(ele);
      });
    });
    if (!formList.length) {
      return;
    }
    var observe = new IntersectionObserver(function(e) {
      var formService = getServiceForDoc("spz-form");
      var target = e.filter(function(item) {
        return item.isIntersecting;
      }).map(function(item) {
        return item.target;
      });
      if (target.length) {
        if (formService) {
          formService.installSubmissionHandlers(target);
        } else {
          var scriptElement = createExtensionScript(self, "spz-form", "0.1");
          self.document.head.appendChild(scriptElement);
        }
      }
    });
    formList.forEach(function(form) {
      return observe.observe(form);
    });
  }
  function getAddSpzTagname(addNodeRecords) {
    var spzList = [];
    var noDisplayList = [];
    var spzLogicList = [];
    var addSpz_ = function addSpz_2(node) {
      var tagName = node.tagName;
      if (tagName != null && tagName.startsWith(CUSTOM_TAG) || !(tagName != null && tagName.startsWith("SPZ-")) && !(tagName != null && tagName.startsWith("LJS-")) || builtins.includes(tagName)) {
        return;
      }
      if (isRegisterLjsImg(tagName)) {
        installImg(self, "ljs-img");
        setLjsExtension("SPZ-IMG", tagName);
        return;
      }
      if (isRegisterLjsLayout(tagName)) {
        installLayout(self, "ljs-layout");
        setLjsExtension("SPZ-LAYOUT", tagName);
        return;
      }
      var layout = node.getAttribute("layout");
      var isNoDisplay = layout !== Layout.NODISPLAY;
      var isLogic = layout === Layout.LOGIC;
      if (isLogic && !spzLogicList.includes(tagName)) {
        spzLogicList.push(tagName);
      } else if (isNoDisplay && !isLogic && !spzList.includes(tagName)) {
        spzList.push(tagName);
      } else if (!isNoDisplay && !noDisplayList.includes(tagName)) {
        noDisplayList.push(tagName);
      }
    };
    addNodeRecords.forEach(function(node) {
      addSpz_(node);
      var spzChildElement = node.querySelectorAll && node.querySelectorAll("[layout]");
      spzChildElement == null ? void 0 : spzChildElement.forEach(function(ele) {
        addSpz_(ele);
      });
    });
    return {
      spzList: spzList.map(function(tagName) {
        return {
          extensionId: tagName.toLowerCase()
        };
      }),
      spzLogicList,
      noDisplayList
    };
  }
  function initLayoutPrefetch(list) {
    if (!list.length) {
      return;
    }
    list.forEach(function(tagName) {
      if (prefetchList.includes(tagName)) {
        return;
      }
      var src = calculateExtensionScriptUrl(tagName.toLowerCase());
      var linkElement = self.document.createElement("link");
      linkElement.setAttribute("rel", "prefetch");
      linkElement.setAttribute("as", "script");
      linkElement.href = src;
      self.document.head.appendChild(linkElement);
      prefetchList.push(tagName);
    });
  }
  function initLogicLayout(list) {
    if (!list.length) {
      return;
    }
    list.forEach(function(tagName) {
      var scriptElement = createExtensionScript(self, tagName.toLocaleLowerCase(), "0.1");
      self.document.head.appendChild(scriptElement);
    });
  }
  function init() {
    initSpzCdnInfo();
    if (self.location) {
      self.location["originalHash"] = self.location.hash;
    }
    try {
      installErrorReporting(self);
    } catch (e) {
      makeBodyVisibleRecovery(self.document);
      throw e;
    }
    startupChunk(function initial() {
      installPlatformService(self);
      if (false) {
        bootstrap();
      } else {
        installStylesForDoc(cssText + cssText2, function() {
          return bootstrap();
        }, true, "spz-runtime");
      }
    });
    if (getMode().localDev) {
      self.document.documentElement.setAttribute("esm", false ? 1 : 0);
    }
    self.document.documentElement.setAttribute("spz-version", "1.0");
  }
  function isRegisterLjsImg(tagName) {
    return tagName === "LJS-IMG" && !getLjsExtension("SPZ-IMG");
  }
  function isRegisterLjsLayout(tagName) {
    return tagName === "LJS-LAYOUT" && !getLjsExtension("SPZ-LAYOUT");
  }
  function main() {
    if (self.__SPZ_TAG) {
      return;
    }
    init();
  }
  main();
})();
})({})}catch(e){setTimeout(function(){var s=document.body.style;s.opacity=1;s.visibility="visible";s.animation="none";s.WebkitAnimation="none;"},1000);throw e};
//# sourceMappingURL=spz.js.map
