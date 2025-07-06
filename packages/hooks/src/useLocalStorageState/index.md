---
nav: 
    path: /hooks
---

# useLocalStorageState

`useLocalStorageState` 用法等同于 `useState` ，但是会在本地存储中保存状态，以便在下次渲染时恢复状态。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx" />

<code hideActions='["CSB"]' src="./demo/demo2.tsx" />

<code hideActions='["CSB"]' src="./demo/demo3.tsx" />

## API

API 与 React 中的 `useState` 保持一致。

```typescript

type SetState<S> = S | ((prevState: S) => S);

interface Options<T> {
    defaultValue: T | (() => T);
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
    onError?: (error: Error) => void;
}

const [state, setState] = useLocalStorageState('key', {
    serializer: JSON.stringify,
    deserializer: JSON.parse,
    onError: console.error,
})
```

### Result

| 参数 | 说明  | 类型 | 默认值 |
| --- | --- | --- | --- |
| state | 状态值 本地`localStorage`的值 | T |  |
| setState | 更新状态值的函数 设置`localStorage`的值 | `(value?: SetState<T>) => void` |  |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 初始值 | `T \| (() => T)` |  |
| serializer | 序列化函数 | `(value: T) => string` | `JSON.stringify` |
| deserializer | 反序列化函数 | `(value: string) => T` | `JSON.parse` |
| onError | 错误处理函数 | `(error: Error) => void` |  |

## 备注
useLocalStorageState 在往 localStorage 中写入值时，会调用 serializer 函数进行序列化。

在从 localStorage 中读取值时，会调用 deserializer 函数进行反序列化。

如果 serializer 或 deserializer 函数抛出错误，会调用 onError 函数进行错误处理。
