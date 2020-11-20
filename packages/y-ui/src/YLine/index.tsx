import React from 'react';

import ReactEcharts from 'echarts-for-react';

import { useEChartsLegend } from './useEcharts';

type IDataItem = string | number;

enum modeEnum {
  single = 'single',
  mulit = 'mulit',
};

// 数据源的数据结构
export type IDataSource = {
  x: string | number;
  y: IDataItem | IDataItem[];
  [key: string]: any;
};

interface IProps {
  // 单数据或者多数据
  mode: modeEnum;

  // 数据源的数据结构
  dataSource: IDataSource[];
  // legend，多数据的时候使用
  legendLists: string[];

  // 扩展差异化 options 配置，按照echarts options 结构配置
  extraOptions: any;
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
 *
 * @description
 *
 *    options 构成
 *    1. defaultOptions: 抽取共性属性，作为defaultProps封装，同时维护多套默认 defaultProps 用于同类型差异化风格的扩展
 *    2. dataOptions: 暴露差异化属性
 *    3. extraOptions: 同时保留扩展性
 */
export default (props: IProps) => {
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