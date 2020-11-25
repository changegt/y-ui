const path = require('path')
const fs = require('fs-extra')
const reactDocs = require('react-docgen')
const prettier = require('prettier')

// 读取文件内容
const contentStr = fs.readFileSync(path.resolve('./src/YLine/index.tsx'), 'utf-8')
// 提取组件信息
const componentInfo = reactDocs.parse(contentStr)

// 生成markdown文档
fs.writeFileSync(path.resolve('./src/YLine/map.json'), JSON.stringify(componentInfo));

// 生成markdown文档
fs.writeFileSync(path.resolve('./src/YLine/index.md'), commentToMarkDown(componentInfo))

// 把react-docgen提取的信息转换成markdown格式
function commentToMarkDown(componentInfo) {
  let { props } = componentInfo
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
    enum: (type) => type.value ?
      type.value.map((item) => item.value.replace(/'/g, '')).join(' \\| ') : '',
    union: (type) => type.value ?
      type.value.map((item) => item.name).join(' \\| ') : '',
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
  { flowType = { name: '-' }, defaultValue = { value: '-' }, required, description }
) {
  return `| ${name} | ${getType(flowType)} | ${defaultValue.value.replace(
    /\|/g,
    '<span>|</span>'
  )} | ${required ? '✓' : '✗'} |  ${description || '-'} |
  `
}
