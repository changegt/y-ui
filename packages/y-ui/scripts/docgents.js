const path = require('path');
const docgen = require("react-docgen-typescript");
const fs = require('fs');
const prettier = require('prettier');

const options = {
  savePropValueAsString: true,
  shouldExtractValuesFromUnion: true,
  shouldExtractLiteralValuesFromEnum: true,
  skipChildrenPropWithoutDoc: false,
  shouldExtractLiteralValuesFromEnum: true,
};

// Parse a file for docgen info
const componentInfo = docgen.parse(path.resolve('./src/YLine/index.tsx'), options);

// console.log(componentInfo.length);

// 生成markdown文档
fs.writeFileSync(path.resolve('./src/YLine/map.json'), JSON.stringify(componentInfo));

// 生成markdown文档
fs.writeFileSync(path.resolve('./src/YLine/index.md'), commentToMarkDown(componentInfo[0]))

// 把react-docgen提取的信息转换成markdown格式
function commentToMarkDown(componentStr) {
  let { props } = componentStr;
  // console.log(props);
  const markdownInfo = renderMarkDown(props)
  // 使用prettier美化格式
  const content = prettier.format(markdownInfo, {
    parser: 'markdown'
  })
  return content
}
function renderMarkDown(props) {
  return `## 参数 Props
  | 属性 |  类型 | 默认值 | 必填 | 描述 |
  | --- | --- | --- | --- | ---|
  ${Object.keys(props)
    .map((key) => renderProp(key, props[key]))
    .join('')}
  `
}

function getType(type) {
  const handler = {
    enum: (type) =>
      type.value.map((item) => item.value.replace(/'/g, '')).join(' \\| '),
    union: (type) => type.value.map((item) => item.name).join(' \\| ')
  }
  if (typeof handler[type.name] === 'function') {
    return handler[type.name](type).replace(/\|/g, '')
  } else {
    return type.name.replace(/\|/g, '')
  }
}

// 渲染1行属性
function renderProp(
  name,
  { type = { name: '-' }, defaultValue = { value: '-' }, required, description }
) {
  return `| ${name} | ${getType(type)} | ${defaultValue ? defaultValue.value.replace(
    /\|/g,
    '<span>|</span>'
  ) : String(defaultValue)} | ${required ? '✓' : '✗'} |  ${description || '-'} |
  `
}
