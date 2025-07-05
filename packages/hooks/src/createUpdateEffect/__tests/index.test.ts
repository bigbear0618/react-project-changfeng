import { renderHook } from '@testing-library/react'
import { act, useEffect, useLayoutEffect } from 'react'
import { createUpdateEffect } from '../index'

describe('createUpdateEffect', () => {
  it('should create a custom hook with useEffect', () => {
    const useUpdateEffect = createUpdateEffect(useEffect)

    let mountedState = 1

    const hook = renderHook(() => {
      useUpdateEffect(() => {
        mountedState++
      })
    })

    expect(mountedState).toBe(1)

    act(() => {
      hook.rerender()
    })

    expect(mountedState).toBe(2)
  })

  it('should create a custom hook with useLayoutEffect', () => {
    const useUpdateLayoutEffect = createUpdateEffect(useLayoutEffect)

    let mountedState = 1

    const hook = renderHook(() => {
      useUpdateLayoutEffect(() => {
        mountedState++
      }, [])
    })

    expect(mountedState).toBe(1)

    act(() => {
      hook.rerender()
    })

    expect(mountedState).toBe(2)
  })
})
