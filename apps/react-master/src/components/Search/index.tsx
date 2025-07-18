import React from 'react'

export default function Search() {
  // 可以使用useLocalStorageState 用户搜索历史记录 渲染逻辑
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="搜索问题"
        name="search"
        className="w-96 h-8 border border-slate-200 px-4 bg-slate-50 rounded-full"
      />
      <button className="h-8 w-16  bg-blue-600 text-white rounded-full text-sm mx-4 hover:bg-blue-700 transition-all cursor-pointer">
        提问
      </button>
    </div>
  )
}
