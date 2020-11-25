import React from 'react';

import ReactEcharts from 'echarts-for-react';

import { useEChartsLegend } from './useEcharts';

type IDataItem = string | number;

/**
 * 数据源的数据结构
 */
export type IDataSource = {
  /** x */
  x: string | number,
  /** y */
  y: IDataItem | IDataItem[],

  /** 子结构 循环子结构无法构造，会出现循环地狱 */
  // children: IDataSource | IDataSource[];

  /** 扩展 */
  [key: string]: any,
};

/**
 * props
 */
export type IProps = {
  // 基础类型

  /** 测试数字 */
  testNum: number;

  /** 测试字符串 */
  testStr: string;

  /** 测试 null */
  testNull: null;

  /** 测试 undefined */
  testUnd: undefined;

  /** 测试 boolean */
  testBool: boolean;

  // 引用类型

  /** 测试数组 any */
  testArr: any[];

  /** 测试数组 number */
  testNumArr: number[];

  /** 测试数组 string */
  testStrArr: string[];

  /** 测试数组 boolean */
  testBoolArr: boolean[];

  /** 测试数组 混合 */
  testMixArr: (string | number | boolean)[];

  /** 测试单数对象的数据源 */
  testData: IDataSource,

  /** 测试固定对象 */
  testObj: { a?: string },

  /** 枚举，单数据或者多数据 */
  mode?: 'single' | 'mulit';

  /** 数据源的数据结构 */
  dataSource?: Array<IDataSource>;

  /** 扩展差异化 options 配置，按照echarts options 结构配置 */
  extraOptions?: object;

  /** 点击事件 */
  onClick: (a: string) => void;

  /** 复杂函数 */
  onClick2: (b: Array<IDataSource>) => IDataSource;
}

// 默认配置
const defaultOptions = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  series: {
    type: 'line',
  }
};

/**
 * 折线图组件
 */
const YLine = (props: IProps) => {
  const {
    mode = 'single',
    dataSource = [],
    legendLists = [],
    extraOptions = {}
  } = props;

  const isSingleFlag = mode === 'single';

  // legend
  const legendProps = !isSingleFlag ? useEChartsLegend({
    data: legendLists.map(el => ({
      name: el
    })),
  }) : {};

  /** 获取option函数 */
  const getOption = () => {
    // series
    const series = !isSingleFlag ? legendLists.map((el, idx) => ({
      type: 'line',
      name: el,
      data: dataSource.map(el => {
        if (!el.y[idx]) {
          alert('数据异常');
          return 0;
        }

        return el.y[idx];
      })
    })) : [{
      data: dataSource.map(el => el.y)
    }];

    // 数据相关性 options
    const dataOptions = {
      ...legendProps,
      xAxis: {
        data: dataSource.map(el => el.x),
      },
      series,
    };

    return Object.assign(defaultOptions, dataOptions, extraOptions);
  };

  console.log(getOption());

  return (
    <ReactEcharts option={getOption()} />
  );
};

// YLine.propTypes = {
//   /** 单数据或者多数据 */
//   mode: PropTypes.oneOf(['single', 'mulit']),
//   /** 数据源的数据结构 */
//   dataSource: PropTypes.arrayOf(IDataSourceProps),
//   /** legend，多数据的时候使用 */
//   legendLists: PropTypes.arrayOf(PropTypes.string),
//   /** 扩展差异化 options 配置，按照echarts options 结构配置 */
//   extraOptions: PropTypes.object,
//   /** 事件 */
//   onClick: PropTypes.func
// };

YLine.defaultProps = {
  testNum: 1,
  testStr: '1',
  testNull: null,
  testUnd: undefined,
  testBool: true,
  testArr: [1],
  testNumArr: [1],
  testStrArr: ['1'],
  testBoolArr: [true],
  testMixArr: [1, '1', true],
  testData: [],
  testObj: {},
  mode: 'single',
  dataSource: [],
  legendLists: [],
  extraOptions: {},
  onClick: () => {},
  onClick2: () => {},
}

export default YLine;