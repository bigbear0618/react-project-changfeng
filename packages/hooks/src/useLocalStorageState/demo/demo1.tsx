import { useLocalStorageState } from 'changfeng-hooks'

export default () => {
  const [message, setMessage] = useLocalStorageState(
    'use-local-storage-state',
    {
      defaultValue: 'hello changfeng-hooks',
    }
  )

  return (
    <>
      <input
        type="text"
        value={message || ''}
        placeholder="请输入"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="button" onClick={() => setMessage('hello changfeng-hooks')}>
        Reset
      </button>

      <button type="button" onClick={() => setMessage(undefined)}>
        清空
      </button>
    </>
  )
}
