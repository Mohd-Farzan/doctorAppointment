import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/header'

function HomeLayout() {
  return  <div className=" flex min-h-screen w-full">
  <div className="flex flex-1 w-full flex-col">
    {/* <Header/> */}
    <main className=' p-2 md:p-4 w-screen bg-slate-100'>
      <Outlet/>
    </main>
</div>
</div>
}

export default HomeLayout