'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonPlaceholder = undefined;

var _Skeleton = require('./Skeleton');

Object.keys(_Skeleton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Skeleton[key];
    }
  });
});

var _SkeletonPlaceholder = require('./SkeletonPlaceholder');

var _SkeletonPlaceholder2 = _interopRequireDefault(_SkeletonPlaceholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SkeletonPlaceholder = _SkeletonPlaceholder2.default;