/*
 * title: 自定义序列化方法
 * desc: 普通的字符串 不需要使用JSON.stringify 进行序列化 ，
 */

import { useLocalStorageState } from 'changfeng-hooks'

export default () => {
  const [message, setMessage] = useLocalStorageState(
    'use-local-storage-state-demo3',
    {
      defaultValue: 'hello nn',
      serializer: (value) => value ?? '',
      deserializer: (value) => value,
    }
  )

  return (
    <>
      <input
        value={message || ''}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="button" onClick={() => setMessage('hello nn')}>
        reset
      </button>

      <button type="button" onClick={() => setMessage(undefined)}>
        clear
      </button>
    </>
  )
}
