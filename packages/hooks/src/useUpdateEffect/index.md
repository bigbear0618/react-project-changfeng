---
nav: 
    path: /hooks
---

# useUpdateEffect

`useUpdateEffect` 用法等同于 `useEffect` ，但是不会在首次渲染时执行，只会在依赖更新时执行。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx" />


## API 

API 与 React 中的 `useEffect` 保持一致。

```typescript
useUpdateEffect(effect: React.EffectCallback, deps?: React.DependencyList)
```