'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('antd/es/button/style');
var _Button = _interopDefault(require('antd/es/button'));
var React = _interopDefault(require('react'));

/**
 * 按钮组件
 */
var YButton = function YButton(props) {
  return React.createElement(_Button, {
    type: "primary"
  }, props.children || props.text);
};

YButton.defaultProps = {
  text: '组件按钮',
  children: null
};

exports.YButton = YButton;
