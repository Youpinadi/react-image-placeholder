'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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
        'vanilla-ice': 'http://nicenicejpg.com/' + w + '/' + h,
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
        'city': 'http://lorempixel.com/' + w + '/' + h + '/city',
        'unsplash': 'https://unsplash.it/' + w + '/' + h + '?random'

      };

      var src = undefined;
      if (this.props.text) {
        src = 'http://dummyimage.com/' + w + 'x' + h + '/000000/FFFFFF?text=' + this.props.text;
      } else if (types[this.props.type]) {
        src = types[this.props.type];
      } else {
        src = 'http://dummyimage.com/' + w + 'x' + h + '/000000/FFFFFF?text=' + this.props.type;
      }

      return _react2['default'].createElement('img', { src: src, width: w, height: h, style: { backgroundColor: '#000' } });
    }
  }]);

  return ImagePlaceholder;
})(_react.Component);

exports['default'] = ImagePlaceholder;

ImagePlaceholder.defaultProps = { width: 150, height: 150, type: 'nature' };
ImagePlaceholder.propTypes = {
  width: _react2['default'].PropTypes.number,
  height: _react2['default'].PropTypes.number,
  type: _react2['default'].PropTypes.string
};

var NicolasCage = (function (_ImagePlaceholder) {
  _inherits(NicolasCage, _ImagePlaceholder);

  function NicolasCage() {
    _classCallCheck(this, NicolasCage);

    _get(Object.getPrototypeOf(NicolasCage.prototype), 'constructor', this).apply(this, arguments);
  }

  return NicolasCage;
})(ImagePlaceholder);

exports.NicolasCage = NicolasCage;

NicolasCage.defaultProps = { type: 'nicolas-cage' };

var BillMurray = (function (_ImagePlaceholder2) {
  _inherits(BillMurray, _ImagePlaceholder2);

  function BillMurray() {
    _classCallCheck(this, BillMurray);

    _get(Object.getPrototypeOf(BillMurray.prototype), 'constructor', this).apply(this, arguments);
  }

  return BillMurray;
})(ImagePlaceholder);

exports.BillMurray = BillMurray;

BillMurray.defaultProps = { type: 'bill-murray' };

var StevenSeagal = (function (_ImagePlaceholder3) {
  _inherits(StevenSeagal, _ImagePlaceholder3);

  function StevenSeagal() {
    _classCallCheck(this, StevenSeagal);

    _get(Object.getPrototypeOf(StevenSeagal.prototype), 'constructor', this).apply(this, arguments);
  }

  return StevenSeagal;
})(ImagePlaceholder);

exports.StevenSeagal = StevenSeagal;

StevenSeagal.defaultProps = { type: 'steven-seagal' };

var TheHoff = (function (_ImagePlaceholder4) {
  _inherits(TheHoff, _ImagePlaceholder4);

  function TheHoff() {
    _classCallCheck(this, TheHoff);

    _get(Object.getPrototypeOf(TheHoff.prototype), 'constructor', this).apply(this, arguments);
  }

  return TheHoff;
})(ImagePlaceholder);

exports.TheHoff = TheHoff;

TheHoff.defaultProps = { type: 'the-hoff' };

var VanillaIce = (function (_ImagePlaceholder5) {
  _inherits(VanillaIce, _ImagePlaceholder5);

  function VanillaIce() {
    _classCallCheck(this, VanillaIce);

    _get(Object.getPrototypeOf(VanillaIce.prototype), 'constructor', this).apply(this, arguments);
  }

  return VanillaIce;
})(ImagePlaceholder);

exports.VanillaIce = VanillaIce;

VanillaIce.defaultProps = { type: 'vanilla-ice' };

