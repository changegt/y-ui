import React from 'react';
import { Button } from 'antd';

export interface IProps {
  /** 按钮名称 */
  text?: string;
  /** 子节点 */
  children?: React.ReactChild;
  mode?: 'primary' | 'danger'
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
  mode: 0,
}

export default YButton;