---
nav: 
    path: /hooks
---

# useMemoizedFn

持久化 function 的 hook ，可以替代 useCallback 。

在某些场景下 使用usecallback 来记住一个函数 但是第二个参数deps变化时，会重新生成函数 导致函数地址发生变化

```js
const [state, setState] = useState('')

// state 变化时 func地址发省变化
const func = useCallback(() => {
    console.log(state)
}, [state])
```

使用useMemoizedFn 来代替 useCallback ，可以解决函数地址变化的问题。

```js
// 函数地址不会变化 state 最新值也会同步
const func = useMemoizedFn(() => {
    console.log(state) // 要保证state最新 
})
```

## 代码演示

### 基础用法

<code hideActions='"[CSB]"' src="./demo/demo1.tsx" />

### 对比 useCallback

<code hideActions='"[CSB]"' src="./demo/demo2.tsx" />

## API 
```typescript
const fn = useMemoizedFn(() => {})
```

### Result

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| fn | 持久化后的函数，引用地址永远不会变化 | `(...args: any[]) => any` |

### Params

| 参数| 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fn | 要持久化的函数 | `(...args: any[]) => any` | - |
