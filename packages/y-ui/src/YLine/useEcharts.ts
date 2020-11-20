type IColor = string;
type ILeft = 'left' | 'center' | 'right' | number;
type ITop = 'top' | 'middle' | 'bottom' | number;
type ILegendIcon = 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none' | string;

interface ITextStyle {
  // 颜色
  color?: IColor;
  // 字体样式
  fontStyle?: 'normal' | 'italic' | 'oblique';
  // 字体粗细
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  // 字体大小
  fontSize?: number;
  // 行高
  lineHeight?: number;
}

export interface IEChartsTitle {
  // 是否展示
  show?: boolean;
  // 主标题
  text?: string;
  // 主标题样式
  textStyle?: ITextStyle;
  // 副标题
  subtext?: string;
  // 副标题样式
  subtextStyle?: ITextStyle;
  // title 组件离容器左侧的距离
  left?: ILeft;
  // 文字垂直对齐
  top?: ITop;

  /* 自定义 props */

  [key: string]: any;
}

/**
 * ECharts title hooks
 * @param props IEChartsTitle
 */
export const useEChartsTitle = (props?: IEChartsTitle) => {
  // 默认属性配置
  const defaultTitle = {
    show: false,
    top: 'top',
    left: 'center',
    textStyle: {
      color: '#333',
      fontSize: 16,
    },
    subtextStyle: {
      color: '#999',
      fontSize: 12,
    },
  };

  const titleProps = {
    ...defaultTitle,
    ...props,
  };

  return {
    title: titleProps
  };
};

export interface IEChartsLegend {
  // 是否展示
  show?: boolean;
  // 图例类型 普通图例 | 可翻页图例
  type?: 'plain' | 'scroll';
  // 组件离容器左侧的距离
  left?: ILeft;
  // 文字垂直对齐
  top?: ITop;
  // 样式
  textStyle?: ITextStyle;
  // 图例朝向
  orient?: 'horizontal' | 'vertical';
  // 数据结构
  data: { name: string, icon?: ILegendIcon, textStyle?: ITextStyle }[]

  [key: string]: any;
}

/**
 * ECharts Legend hooks
 * @param props IEChartsLegend
 */
export const useEChartsLegend = (props?: IEChartsLegend) => {
  const defaultProps = {
    show: true,
    left: 'center',
    top: 'bottom',
    orient: 'horizontal',
    textStyle: {
      color: '#333',
      fontSize: 12,
    },
    data: [],
  };

  return {
    legend: {
      ...defaultProps,
      ...props,
    }
  }
};