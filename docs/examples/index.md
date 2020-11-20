---
title: 组件
legacy: /docs
toc: menu
order: 2
---

## 基础组件

### YButton

```jsx
import React from 'react';
import { YButton } from '../../packages/y-ui/src/index.ts';

export default () => <YButton />;
```

### YLine

```jsx
import React from 'react';
import { YLine } from '../../packages/y-ui/src/index.ts';

// const dataSource = [
//   { x: '2020-01', y: 1000 },
//   { x: '2020-02', y: 1100 },
//   { x: '2020-03', y: 900 },
//   { x: '2020-04', y: 800 },
//   { x: '2020-05', y: 1300 },
//   { x: '2020-06', y: 1100 },
// ];

const dataSource = [
  { x: '2020-01', y: [1000, 900] },
  { x: '2020-02', y: [1100, 1200] },
  { x: '2020-03', y: [900, 1000] },
  { x: '2020-04', y: [800, 1800] },
  { x: '2020-05', y: [1300, 1200] },
  { x: '2020-06', y: [1100, 1000] },
];
const legendLists = ['A', 'B'];

export default () => (
  <YLine
    mode="mulit"
    dataSource={dataSource}
    legendLists={legendLists}
  />
);
```
