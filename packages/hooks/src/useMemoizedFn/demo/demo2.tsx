import { useMemoizedFn } from '@changfeng/hooks'
import React, { useCallback, useRef, useState } from 'react'

export default () => {
  const [count, setCount] = useState(0)

  const callbackFn = useCallback(() => {
    alert(`call useCallback, count: ${count}`)
  }, [count])

  const memoizedFn = useMemoizedFn(() => {
    alert(`call useMemoizedFn, count: ${count}`)
  })

  return (
    <>
      <p>count: {count}</p>

      <button onClick={() => setCount((c) => c + 1)}>count+1</button>

      <div>
        <h3>component whit useMemoizedFn function</h3>
        <ExpensiveTree showCount={memoizedFn} />
      </div>

      <div>
        <h3>component whit useCallback function</h3>
        <ExpensiveTree showCount={callbackFn} />
      </div>
    </>
  )
}

// some expensive component with React.memo
const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {
  const renderCountRef = useRef(0)
  renderCountRef.current += 1

  return (
    <div>
      <p>Render Count: {renderCountRef.current}</p>
      <button type="button" onClick={showCount}>
        showParentCount
      </button>
    </div>
  )
})
