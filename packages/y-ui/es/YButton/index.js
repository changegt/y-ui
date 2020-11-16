import "antd/es/button/style";
import _Button from "antd/es/button";
import React from 'react';

/**
 * 按钮组件
 */
var YButton = function YButton(props) {
  return /*#__PURE__*/React.createElement(_Button, {
    type: "primary"
  }, props.children || props.text);
};

YButton.defaultProps = {
  text: '组件按钮',
  children: null
};
export default YButton;