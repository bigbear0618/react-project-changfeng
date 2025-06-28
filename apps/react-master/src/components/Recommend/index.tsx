import React, { useState } from 'react'
import { mockList } from '@/mock/mockList'

const RecommendData = ({ item }: { item: (typeof mockList)[0] }) => {
  const [selected, setSelected] = useState<boolean>(false)
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault()
    setSelected(!selected)
  }
  return (
    <div className="flex flex-col items-start p-4 border-t border-slate-300">
      {/* 标题部分 */}
      <div className="h-auto flex justify-start">
        <a href="" className="font-bold text-black text-lg leading-10">
          {item?.target?.question?.title || item?.target?.title}
        </a>
      </div>
      {/* 内容部分 */}
      {selected ? (
        <div dangerouslySetInnerHTML={{ __html: item?.target?.content }}></div>
      ) : (
        <a
          onClick={handleClick}
          className="cursor-pointer text-slate-800 hover:text-slate-500"
        >
          {item?.target?.excerpt}
          <span className="text-sm text-blue-500 hover:text-slate-500">
            阅读全文
          </span>
        </a>
      )}
      {/* 底部bar */}
      <div
        className={`flex bg-white w-full ${selected ? 'bottom-0 sticky' : ''}`}
      >
        <div className="h-10 rounded-sm bg-blue-100 text-blue-600 p-2 m-2 inline-flex items-center">
          <span className="inline-flex items-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              className="Zi Zi--TriangleUp VoteButton-TriangleUp mx-1"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M13.792 3.681c-.781-1.406-2.803-1.406-3.584 0l-7.79 14.023c-.76 1.367.228 3.046 1.791 3.046h15.582c1.563 0 2.55-1.68 1.791-3.046l-7.79-14.023Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            赞同
          </span>
        </div>
        {selected && (
          <div
            className="text-base text-gray-400 p-2 m-2 inline-flex cursor-pointer"
            onClick={handleClick}
          >
            <span>收起</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function RecommendList() {
  return (
    <div className="flex flex-col border-t">
      {mockList.map((item: unknown) => (
        <RecommendData key={item.id} item={item} />
      ))}
    </div>
  )
}
