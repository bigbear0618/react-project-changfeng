import React from 'react'
import { useToggle } from '@changfeng/hooks'

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle(
    'hello',
    'world'
  )

  return (
    <div>
      <p>Effects: {`${state}`}</p>

      <p>
        <button onClick={toggle} type="button">
          Toggle
        </button>
        <button onClick={() => set('hello')} style={{ margin: '0 8px' }}>
          set hello
        </button>
        <button onClick={setLeft} style={{ margin: '0 8px' }}>
          set Left
        </button>
        <button onClick={setRight}>set Right</button>
      </p>
    </div>
  )
}
