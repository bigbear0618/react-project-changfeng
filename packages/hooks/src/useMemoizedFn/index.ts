import { isDev, isFunction } from '../utils'
import { useCallback, useMemo, useRef } from 'react'

// 泛指任意函数类型
type noop = (this: any, ...args: any[]) => any

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>

function useMemoizedFn<T extends noop>(fn: T) {
  // 面试性能优化  优化技巧之一 usememo useCallback memo
  // 函数地址不会变化 state 最新值也会同步

  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useMemoizedFn expected a function, but got ${typeof fn}`)
    }
  }

  const fnRef = useRef<T>(fn)

  // 缓存函数的引用地址
  // setState 组件重新渲染 能够获取到最新的fn
  fnRef.current = useMemo(() => fn, [fn])

  // 缓存函数的引用地址 稳定引用
  const memoizedFn = useRef<PickFunction<T>>(null)

  if (!memoizedFn.current) {
    // 第一次渲染时，将fnRef.current赋值给memoizedFn.current
    memoizedFn.current = function (this, ...args) {
      // 执行最新的fn
      return fnRef.current.apply(this, args)
    }
  }

  return memoizedFn.current as T
}

export default useMemoizedFn
