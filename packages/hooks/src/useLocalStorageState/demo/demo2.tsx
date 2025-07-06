import { useLocalStorageState } from 'changfeng-hooks'

const defaultArray = ['a', 'b', 'c']

export default () => {
  const [message, setMessage] = useLocalStorageState(
    'use-local-storage-state-demo2',
    {
      defaultValue: defaultArray,
    }
  )

  return (
    <>
      <p>{message?.join(',')}</p>
      <button
        type="button"
        style={{ marginRight: 8 }}
        onClick={() =>
          setMessage([...message, Math.random().toString(36).slice(-1)])
        }
      >
        push random message
      </button>

      <button type="button" onClick={() => setMessage(defaultArray)}>
        reset
      </button>

      <button type="button" onClick={() => setMessage(undefined)}>
        clear
      </button>
    </>
  )
}
