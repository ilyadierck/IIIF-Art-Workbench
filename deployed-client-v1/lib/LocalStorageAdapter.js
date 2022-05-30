"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** */
var LocalStorageAdapter = /*#__PURE__*/function () {
  /** */
  function LocalStorageAdapter(annotationPageId) {
    this.annotationPageId = annotationPageId;
  }
  /** */


  var _proto = LocalStorageAdapter.prototype;

  _proto.create =
  /*#__PURE__*/
  function () {
    var _create = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(annotation) {
      var emptyAnnoPage, annotationPage;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("create");
              emptyAnnoPage = {
                id: this.annotationPageId,
                items: [],
                type: 'AnnotationPage'
              };
              _context.next = 4;
              return this.all();

            case 4:
              _context.t0 = _context.sent;

              if (_context.t0) {
                _context.next = 7;
                break;
              }

              _context.t0 = emptyAnnoPage;

            case 7:
              annotationPage = _context.t0;
              annotationPage.items.push(annotation);
              localStorage.setItem(this.annotationPageId, JSON.stringify(annotationPage));
              console.log(annotationPage);
              return _context.abrupt("return", annotationPage);

            case 12:
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
      var annotationPage, currentIndex;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.all();

            case 2:
              annotationPage = _context2.sent;

              if (!annotationPage) {
                _context2.next = 8;
                break;
              }

              currentIndex = annotationPage.items.findIndex(function (item) {
                return item.id === annotation.id;
              });
              annotationPage.items.splice(currentIndex, 1, annotation);
              localStorage.setItem(this.annotationPageId, JSON.stringify(annotationPage));
              return _context2.abrupt("return", annotationPage);

            case 8:
              return _context2.abrupt("return", null);

            case 9:
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
      var annotationPage;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.all();

            case 2:
              annotationPage = _context3.sent;

              if (annotationPage) {
                annotationPage.items = annotationPage.items.filter(function (item) {
                  return item.id !== annoId;
                });
              }

              localStorage.setItem(this.annotationPageId, JSON.stringify(annotationPage));
              return _context3.abrupt("return", annotationPage);

            case 6:
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
      var annotationPage;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log("get");
              _context4.next = 3;
              return this.all();

            case 3:
              annotationPage = _context4.sent;

              if (!annotationPage) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", annotationPage.items.find(function (item) {
                return item.id === annoId;
              }));

            case 6:
              return _context4.abrupt("return", null);

            case 7:
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
              console.log("all");
              return _context5.abrupt("return", JSON.parse(localStorage.getItem(this.annotationPageId)));

            case 2:
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

  return LocalStorageAdapter;
}();

exports["default"] = LocalStorageAdapter;
module.exports = exports.default;