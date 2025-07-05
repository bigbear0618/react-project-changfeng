import { useEffect, useLayoutEffect, useRef } from 'react'

type EffectHookType = typeof useEffect | typeof useLayoutEffect

export const createUpdateEffect: (
  effectHook: EffectHookType
) => EffectHookType = (hook) => (effect, deps) => {
  //  首次不执行 依赖更新的时候执行effect 的hook
  // useEffect  useLayoutEffect

  const isMounted = useRef(false)

  hook(() => {
    // 组件卸载时 isMounted 设置false 防止内存泄漏
    return () => {
      isMounted.current = false
    }
  }, [])

  hook(() => {
    if (!isMounted.current) {
      isMounted.current = true
    } else {
      // 依赖发生变化
      return effect()
    }
  }, deps)
}

export default createUpdateEffect
