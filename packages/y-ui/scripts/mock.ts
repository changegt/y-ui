const fs = require('fs');
const path = require('path');
const jsonObj = require('../src/YLine/map.json');

const { props } = jsonObj;

// map
const baseType = ['string', 'number', 'boolean', 'undefined', 'null'];

function propsParse(flowType) {
  const { name, type, value, signature, elements = [] } = flowType;

  if (!name) {
    return '';
  }

  const targetName = name.toLowerCase();

  // 基础类型处理 || 普通对象，无内部子元素的定义
  if (
    baseType.includes(targetName) ||
    targetName === 'object'
  ) {
    return targetName;
  }

  // 自定义枚举字面量
  if (targetName === 'literal') {
    return value;
  }

  // 自定义引用
  if (targetName === 'signature') {
    if (type === 'function') {
      // 函数
      return type;
    } else if (type === 'object') {
      // 自定义对象
      const { properties = [] } = signature;
      const output = {};

      properties.forEach(el => {
        const curKey = typeof el.key === 'object' ? el.key.name : el.key;
        const curValue = typeof el.value === 'object' ? propsParse(el.value) : el.value;

        output[curKey] = curValue;
      });

      return output;
    }
  }

  // 数组 || 枚举 union
  if (['array', 'union'].includes(targetName)) {
    const output = [];

    elements.forEach((el) => {
      output.push(propsParse(el))
    });

    return output;
  }

  return targetName;
}

const map = {};
Object.keys(props).forEach(el => {
  const key = el;
  const value = props[el];

  map[key] = propsParse(value.flowType || {});
})

fs.writeFileSync(path.resolve('./src/YLine/mockMap.json'), JSON.stringify(map));

/* mockJSON => mockData */
const mockJSON = fs.readFileSync(path.resolve('./src/YLine/mockMap.json'), 'utf-8');
const typeMockMap = {
  number: 1,
  string: '1',
  boolean: true,
  null: '',
  undefined: '',
}
const target = mockJSONFunc(JSON.parse(mockJSON));

function mockJSONFunc(mockJSONObj) {
  Object.keys(mockJSONObj).forEach(el => {
    mockJSONObj[el] = mockJsonToData(mockJSONObj[el]);
  });

  return mockJSONObj;
}

function mockJsonToData(mockJsonVal) {
  // 基础类型
  if (baseType.includes(mockJsonVal)) {
    return typeMockMap[mockJsonVal];
  }

  if (mockJsonVal instanceof Array) {
    // 数组
    mockJsonVal.forEach(ele => {
      mockJsonToData(ele)
    });
  } else if (mockJsonVal instanceof Object){
    // 对象
    mockJSONFunc(mockJsonVal);
  }

  return mockJsonVal;
}

fs.writeFileSync(path.resolve('./src/YLine/mockDataMap.json'), JSON.stringify(target));
