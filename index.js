'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ImagePlaceholder = (function (_Component) {
  _inherits(ImagePlaceholder, _Component);

  function ImagePlaceholder() {
    _classCallCheck(this, ImagePlaceholder);

    _get(Object.getPrototypeOf(ImagePlaceholder.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ImagePlaceholder, [{
    key: 'render',
    value: function render() {
      var rand = 150 + Math.round(Math.random() * 150);
      var w = this.props.width || rand;
      var h = this.props.height || rand;
      var types = {
        'nicolas-cage': 'http://www.placecage.com/' + w + '/' + h,
        'bill-murray': 'http://www.fillmurray.com/' + w + '/' + h,
        'steven-seagal': 'http://www.stevensegallery.com/' + w + '/' + h,
        'the-hoff': 'http://place-hoff.com/' + w + '/' + h,
        'ice-ice-baby': 'http://nicenicejpg.com/' + w + '/' + h,
        'bacon': 'http://baconmockup.com/' + w + '/' + h,
        'beard': 'http://placebeard.it/' + w + '/' + h,
        'beer': 'http://beerhold.it/' + w + '/' + h,

        'cats': 'http://lorempixel.com/' + w + '/' + h + '/cats',
        'nature': 'http://lorempixel.com/' + w + '/' + h + '/nature',
        'sports': 'http://lorempixel.com/' + w + '/' + h + '/sports',
        'food': 'http://lorempixel.com/' + w + '/' + h + '/food',
        'technics': 'http://lorempixel.com/' + w + '/' + h + '/technics',
        'people': 'http://lorempixel.com/' + w + '/' + h + '/people',
        'business': 'http://lorempixel.com/' + w + '/' + h + '/business',
        'city': 'http://lorempixel.com/' + w + '/' + h + '/city'
      };

      var src = undefined;
      if (this.props.text) {
        src = 'http://dummyimage.com/' + w + 'x' + h + '/000000/FFFFFF?text=' + this.props.text;
      } else if (types[this.props.type]) {
        src = types[this.props.type];
      } else {
        src = 'http://dummyimage.com/' + w + 'x' + h + '/000000/FFFFFF?text=' + this.props.type;
      }

      var props = {
        width: w,
        height: h,
        style: { backgroundColor: '#000' },
        src: src
      };

      return _react2['default'].createElement('img', props);
    }
  }]);

  return ImagePlaceholder;
})(_react.Component);

exports['default'] = ImagePlaceholder;

var NicolasCage = (function (_Component2) {
  _inherits(NicolasCage, _Component2);

  function NicolasCage() {
    _classCallCheck(this, NicolasCage);

    _get(Object.getPrototypeOf(NicolasCage.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(NicolasCage, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(ImagePlaceholder, _extends({ type: 'nicolas-cage' }, this.props));
    }
  }]);

  return NicolasCage;
})(_react.Component);

exports.NicolasCage = NicolasCage;

var BillMurray = (function (_Component3) {
  _inherits(BillMurray, _Component3);

  function BillMurray() {
    _classCallCheck(this, BillMurray);

    _get(Object.getPrototypeOf(BillMurray.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BillMurray, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(ImagePlaceholder, _extends({ type: 'bill-murray' }, this.props));
    }
  }]);

  return BillMurray;
})(_react.Component);

exports.BillMurray = BillMurray;

var StevenSeagal = (function (_Component4) {
  _inherits(StevenSeagal, _Component4);

  function StevenSeagal() {
    _classCallCheck(this, StevenSeagal);

    _get(Object.getPrototypeOf(StevenSeagal.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(StevenSeagal, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(ImagePlaceholder, _extends({ type: 'steven-seagal' }, this.props));
    }
  }]);

  return StevenSeagal;
})(_react.Component);

exports.StevenSeagal = StevenSeagal;

var TheHoff = (function (_Component5) {
  _inherits(TheHoff, _Component5);

  function TheHoff() {
    _classCallCheck(this, TheHoff);

    _get(Object.getPrototypeOf(TheHoff.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TheHoff, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(ImagePlaceholder, _extends({ type: 'the-hoff' }, this.props));
    }
  }]);

  return TheHoff;
})(_react.Component);

exports.TheHoff = TheHoff;

var IceIceBaby = (function (_Component6) {
  _inherits(IceIceBaby, _Component6);

  function IceIceBaby() {
    _classCallCheck(this, IceIceBaby);

    _get(Object.getPrototypeOf(IceIceBaby.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(IceIceBaby, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(ImagePlaceholder, _extends({ type: 'ice-ice-baby' }, this.props));
    }
  }]);

  return IceIceBaby;
})(_react.Component);

exports.IceIceBaby = IceIceBaby;

