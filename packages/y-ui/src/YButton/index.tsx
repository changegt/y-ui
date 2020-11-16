import React from 'react';
import { Button } from 'antd';

import PropTypes from 'prop-types';

type IChildren = React.ReactChild;

export interface IProps {
  /** 按钮名称 */
  text?: string;
  /** 子节点 */
  children?: IChildren;
}

/**
 * 按钮组件
 */
const YButton = (props: IProps) => {
  return (
    <Button type="primary">{ props.children || props.text }</Button>
  );
}

YButton.defaultProps = {
  text: '组件按钮',
  children: null,
}

export default YButton;