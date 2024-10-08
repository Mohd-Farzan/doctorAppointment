import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/header'

function HomeLayout() {
  return  <div className=" flex min-h-screen w-full">
  <div className="flex flex-1 w-full flex-col">
    <Header/>
    <main className='flex-1 flex-col p/4 md:p-6 bg-amber-400'>
      <Outlet/>
    </main>
</div>
</div>
}

export default HomeLayout