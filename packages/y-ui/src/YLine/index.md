## 参数 Props

| 属性         | 类型      | 默认值         | 必填 | 描述                                                   |
| ------------ | --------- | -------------- | ---- | ------------------------------------------------------ |
| testNum      | number    | 1              | ✗    | 测试数字                                               |
| testStr      | string    | '1'            | ✗    | 测试字符串                                             |
| testNull     | null      | null           | ✗    | 测试 null                                              |
| testUnd      | undefined | undefined      | ✗    | 测试 undefined                                         |
| testBool     | boolean   | true           | ✗    | 测试 boolean                                           |
| testArr      | Array     | [1]            | ✗    | 测试数组 any                                           |
| testNumArr   | Array     | [1]            | ✗    | 测试数组 number                                        |
| testStrArr   | Array     | ['1']          | ✗    | 测试数组 string                                        |
| testBoolArr  | Array     | [true]         | ✗    | 测试数组 boolean                                       |
| testMixArr   | Array     | [1, '1', true] | ✗    | 测试数组 混合                                          |
| testData     | signature | []             | ✗    | 测试单数对象的数据源                                   |
| testObj      | signature | {}             | ✗    | 测试固定对象                                           |
| mode         |           | 'single'       | ✗    | 枚举，单数据或者多数据                                 |
| dataSource   | Array     | []             | ✗    | 数据源的数据结构                                       |
| extraOptions | object    | {}             | ✗    | 扩展差异化 options 配置，按照 echarts options 结构配置 |
| onClick      | signature | () => {}       | ✗    | 点击事件                                               |
| onClick2     | signature | () => {}       | ✗    | 复杂函数                                               |
| legendLists  | -         | []             | ✗    | -                                                      |
