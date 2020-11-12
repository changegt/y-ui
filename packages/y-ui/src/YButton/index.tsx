import React from 'react';
import { Button } from 'antd';

import PropTypes from 'prop-types';

type IChildren = React.ReactChild;

export interface IProps {
  d: string[];
  e: object;

  /** 按钮名称 */
  text?: string;
  /** 子节点 */
  children?: IChildren;

  a?: '1' | '2';
  b?: number;
  c?: number[];
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
  a: '1',
  b: 1,
  c: [1],
  d: ['1'],
  e: {},
}

export default YButton;