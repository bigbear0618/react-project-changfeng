import { renderHook, act } from '@testing-library/react'

import useMemoizedFn from '../index'
import { useState } from 'react'

describe('useMemoizedFn', () => {
  const useTestHook = () => {
    const [count, setCount] = useState(0)
    const memoizedFn = useMemoizedFn(() => count)

    return { memoizedFn, increment: () => setCount((c) => c + 1) }
  }

  it('should return a memoized function', () => {
    const { result } = renderHook(() => useTestHook())
    expect(result.current.memoizedFn()).toBe(0)

    act(() => {
      result.current.increment()
    })

    expect(result.current.memoizedFn()).toBe(1)
  })
})
