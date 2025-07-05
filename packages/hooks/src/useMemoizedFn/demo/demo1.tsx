import React, { useCallback, useState } from 'react'
import { useMemoizedFn } from '@changfeng/hooks'

export default () => {
  const [count, setCount] = useState(0)

  const callbackFn = useCallback(() => {
    console.log(count, 'useCallback count')
    alert(`call useCallback, count: ${count}`)
  }, [count])

  const memoizedFn = useMemoizedFn(() => {
    console.log(count, 'useMemoizedFn count')
    alert(`call useMemoizedFn, count: ${count}`)
  })

  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>count+1</button>
      </div>
      <div>
        <div>count: {count}</div>
        <div>
          <button onClick={callbackFn}>call useCallback</button>
        </div>
        <div>
          <button onClick={memoizedFn}>call useMemoizedFn</button>
        </div>
      </div>
    </div>
  )
}
