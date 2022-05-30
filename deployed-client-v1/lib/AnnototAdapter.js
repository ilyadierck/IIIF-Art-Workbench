"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/** */
var AnnototAdapter = /*#__PURE__*/function () {
  /** */
  function AnnototAdapter(canvasId, endpointUrl) {
    this.canvasId = canvasId;
    this.endpointUrl = endpointUrl;
  }
  /** */


  var _proto = AnnototAdapter.prototype;

  /** */
  _proto.create =
  /*#__PURE__*/
  function () {
    var _create = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(annotation) {
      var _this = this;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", fetch(this.endpointUrl, {
                body: JSON.stringify({
                  annotation: {
                    canvas: this.canvasId,
                    data: JSON.stringify(annotation),
                    uuid: annotation.id
                  }
                }),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              }).then(function (response) {
                return _this.all();
              })["catch"](function () {
                return _this.all();
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function create(_x) {
      return _create.apply(this, arguments);
    }

    return create;
  }()
  /** */
  ;

  _proto.update =
  /*#__PURE__*/
  function () {
    var _update = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(annotation) {
      var _this2 = this;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", fetch(this.endpointUrl + "/" + encodeURIComponent(annotation.id), {
                body: JSON.stringify({
                  annotation: {
                    data: JSON.stringify(annotation),
                    uuid: annotation.id
                  }
                }),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'PATCH'
              }).then(function (response) {
                return _this2.all();
              })["catch"](function () {
                return _this2.all();
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function update(_x2) {
      return _update.apply(this, arguments);
    }

    return update;
  }()
  /** */
  ;

  _proto["delete"] =
  /*#__PURE__*/
  function () {
    var _delete2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(annoId) {
      var _this3 = this;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", fetch(this.endpointUrl + "/" + encodeURIComponent(annoId), {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'DELETE'
              }).then(function (response) {
                return _this3.all();
              })["catch"](function () {
                return _this3.all();
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function _delete(_x3) {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }()
  /** */
  ;

  _proto.get =
  /*#__PURE__*/
  function () {
    var _get = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(annoId) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetch(this.endpointUrl + "/" + encodeURIComponent(annoId), {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                }
              });

            case 2:
              return _context4.abrupt("return", _context4.sent.json());

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function get(_x4) {
      return _get.apply(this, arguments);
    }

    return get;
  }()
  /** */
  ;

  _proto.all =
  /*#__PURE__*/
  function () {
    var _all = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return fetch(this.annotationPageId);

            case 2:
              return _context5.abrupt("return", _context5.sent.json());

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function all() {
      return _all.apply(this, arguments);
    }

    return all;
  }();

  _createClass(AnnototAdapter, [{
    key: "annotationPageId",
    get: function get() {
      return this.endpointUrl + "/pages?uri=" + this.canvasId;
    }
  }]);

  return AnnototAdapter;
}();

exports["default"] = AnnototAdapter;
module.exports = exports.default;