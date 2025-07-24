export const menus = [
  {
    title: '生命周期',
    children: ['useUnmount', 'useUnmountedRef'],
  },
  {
    title: '状态',
    children: [
      'useToggle',
      'useBoolean',
      'useGetState',
      'useLocalStorageState',
    ],
  },
  {
    title: 'Effect',
    children: ['useUpdateEffect'],
  },
  {
    title: 'DOM',
    children: ['useDocumentVisibility', 'useScroll', 'useEventListener'],
  },
  {
    title: '请求',
    children: [
      'useRequest/doc/index',
      'useRequest/doc/basic',
      'useRequest/doc/loadingDelay',
      'useRequest/doc/polling',
      'useRequest/doc/ready',
      'useRequest/doc/refreshDeps',
      'useRequest/doc/refreshOnWindowFocus',
      'useRequest/doc/debounce',
      'useRequest/doc/throttle',
      'useRequest/doc/cache',
      'useRequest/doc/retry',
    ],
  },
  {
    title: '进阶',
    children: ['useLatest', 'useMemoizedFn'],
  },
]
