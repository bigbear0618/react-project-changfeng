import { useState } from 'react'
import useMemoizedFn from '../useMemoizedFn'
import useUpdateEffect from '../useUpdateEffect'
import { isFunction, isUndefined } from '../utils'

export type SetState<S> = S | ((prevState: S) => S)
export interface Options<T> {
  defaultValue: T | (() => T)
  serializer?: (value: T) => string
  deserializer?: (value: string) => T
  onError?: (error: Error) => void
}

export function createUseStorageState(getStorage: () => Storage) {
  function useStorageState<T>(key: string, options: Options<T>) {
    // state  + storage

    let storage: Storage | undefined

    const { defaultValue, onError } = options

    try {
      storage = getStorage()
    } catch (error) {
      if (onError) {
        onError(error as Error)
      }
    }

    // 可以自定义序列化方法
    const serializer = (value: T) => {
      if (options.serializer) {
        return options.serializer(value)
      }
      return JSON.stringify(value)
    }

    // 可以自定义反序列化方法
    const deserializer = (value: string): T => {
      if (options.deserializer) {
        return options.deserializer(value)
      }
      return JSON.parse(value) as T
    }

    function getStoredValue() {
      const raw = storage?.getItem(key)
      if (raw) {
        return deserializer(raw)
      }

      if (isFunction(defaultValue)) {
        return defaultValue()
      }

      return defaultValue
    }

    const [state, setState] = useState(getStoredValue)

    useUpdateEffect(() => {
      setState(getStoredValue())
    }, [key])

    const updateState = (value?: SetState<T>) => {
      const currentState = isFunction(value) ? value(state) : value

      setState(currentState)

      if (isUndefined(currentState)) {
        storage?.removeItem(key)
      } else {
        try {
          storage?.setItem(key, serializer(currentState))
        } catch (error) {
          if (onError) {
            onError(error as Error)
          }
        }
      }
    }

    return [state, useMemoizedFn(updateState)] as const
  }
  return useStorageState
}
