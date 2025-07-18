// 导航组件
import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  BellIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
} from '@heroicons/react/24/solid'

import { router } from '../../router'
import { NavLink } from 'react-router-dom'
import Search from '../Search'
import { PureTab } from '../../pages/home/Tabs'

const Logo = () => {
  return (
    <div className="px-2">
      <svg
        viewBox="0 0 64 30"
        fill="#1772F6"
        width="64"
        height="30"
        className="css-1hlrcxk"
      >
        <path d="M29.05 4.582H16.733V25.94h3.018l.403 2.572 4.081-2.572h4.815V4.582zm-5.207 18.69l-2.396 1.509-.235-1.508h-1.724V7.233h6.78v16.04h-2.425zM14.46 14.191H9.982c0-.471.033-.954.039-1.458v-5.5h5.106V5.935a1.352 1.352 0 0 0-.404-.957 1.378 1.378 0 0 0-.968-.396H5.783c.028-.088.056-.177.084-.255.274-.82 1.153-3.326 1.153-3.326a4.262 4.262 0 0 0-2.413.698c-.57.4-.912.682-1.371 1.946-.532 1.453-.997 2.856-1.31 3.693C1.444 8.674.28 11.025.28 11.025a5.85 5.85 0 0 0 2.52-.61c1.119-.593 1.679-1.502 2.054-2.883l.09-.3h2.334v5.5c0 .5-.045.982-.073 1.46h-4.12c-.71 0-1.39.278-1.893.775a2.638 2.638 0 0 0-.783 1.874h6.527a17.717 17.717 0 0 1-.778 3.649 16.796 16.796 0 0 1-3.012 5.273A33.104 33.104 0 0 1 0 28.74s3.13 1.175 5.425-.954c1.388-1.292 2.631-3.814 3.23-5.727a28.09 28.09 0 0 0 1.12-5.229h5.967v-1.37a1.254 1.254 0 0 0-.373-.899 1.279 1.279 0 0 0-.909-.37z"></path>
        <path d="M11.27 19.675l-2.312 1.491 5.038 7.458a6.905 6.905 0 0 0 .672-2.218 3.15 3.15 0 0 0-.28-2.168l-3.118-4.563zM51.449 15.195V5.842c4.181-.205 7.988-.405 9.438-.483l.851-.05c.387-.399.885-2.395.689-3.021-.073-.25-.213-.666-.638-.555a33.279 33.279 0 0 1-4.277.727c-2.766.321-3.97.404-7.804.682-6.718.487-12.709.72-12.709.72a2.518 2.518 0 0 0 .788 1.834 2.567 2.567 0 0 0 1.883.706c2.278-.095 5.598-.25 8.996-.41v9.203h-12.78c0 .703.281 1.377.783 1.874a2.69 2.69 0 0 0 1.892.777h10.105v7.075c0 .887-.464 1.192-1.231 1.214h-3.92a4.15 4.15 0 0 0 .837 1.544 4.2 4.2 0 0 0 1.403 1.067 6.215 6.215 0 0 0 2.71.277c1.36-.066 2.967-.826 2.967-3.57v-7.607h11.28c.342 0 .67-.135.91-.374.242-.239.378-.563.378-.902v-1.375H51.449z"></path>
        <path d="M42.614 8.873a2.304 2.304 0 0 0-1.508-.926 2.334 2.334 0 0 0-1.727.405l-.376.272 4.255 5.85 2.24-1.62-2.884-3.98zM57.35 8.68l-3.125 4.097 2.24 1.663 4.517-5.927-.375-.277a2.32 2.32 0 0 0-1.722-.452 2.327 2.327 0 0 0-1.536.896z"></path>
      </svg>
    </div>
  )
}

const Menu = () => {
  const navigation = useLocation()
  console.log(navigation)

  const getParentPath = () => {
    let pathRes

    router.forEach((item) => {
      ;(item.children || []).forEach((subItem) => {
        if (subItem.path && navigation.pathname.includes(subItem.path)) {
          pathRes = item.path
        }
      })
    })

    return pathRes
  }

  return (
    <div className="">
      {router.map((item) => (
        <NavLink
          key={item?.path}
          to={item.path || ''}
          className={({ isActive }) => {
            return (
              'hover:text-black mx-4 h-full py-3 transition-all ' +
              (isActive || getParentPath() === item.path
                ? 'text-black border-blue-600 border-b-4 '
                : 'text-slate-500')
            )
          }}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  )
}

const MenuAlarm = () => {
  return (
    <div className="flex mr-10 gap-6">
      <div className="flex flex-col justify-center items-center">
        <BellIcon className="h-5 w-5 text-slate-400 fill-slate-400" />
        <span className="text-slate-400 text-xs">消息</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ChatBubbleLeftRightIcon className="h-5 w-5 text-slate-400 fill-slate-400" />
        <span className="text-slate-400 text-xs">私信</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <UserIcon className="h-5 w-5 text-slate-400 fill-slate-400" />
        <span className="text-slate-400 text-xs">创作中心</span>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=32738c0c"
          alt=""
          className="w-7  h-7 rounded-full"
        />
      </div>
    </div>
  )
}

export default function Navigation({ hide }: { hide: boolean }) {
  return (
    <div className="bg-white w-screen shadow h-13 overflow-hidden top-0 box-border sticky">
      <div className="max-w-7xl mx-auto min-w-6xl my-0 flex justify-center">
        <div
          className={
            'w-full flex  flex-col items-center justify-between min-w-max relative transition-all duration-300 ' +
            (hide ? 'top-0' : '-top-13')
          }
        >
          <div className="w-full h-13 flex justify-between items-center">
            <div className="flex items-center">
              <Logo />
              <Menu />
            </div>
            <Search />
            <MenuAlarm />
          </div>
          <div className="w-full h-13 flex justify-between items-center min-w-max">
            <div className="flex items-center">
              <Logo />
              <PureTab />
            </div>
            <Search />
          </div>
        </div>
      </div>
    </div>
  )
}
