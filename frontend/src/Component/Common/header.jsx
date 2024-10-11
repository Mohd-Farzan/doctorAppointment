import { navbarItems } from '@/config';
import React from 'react'
import { Link } from 'react-router-dom';

function NavbarItems() {
    return (
      <nav className="flex flex-col lg:mb-0 items-center gap-6 lg:flex-row">
        {navbarItems.map(navItem => (
          <Link className='text-sm font-bold' key={navItem.id} to={navItem.path}>
            {navItem.lable}
          </Link>
        ))}
      </nav>
    );
  }
function Header(){
    return (
    <header className="sticky top-0 z-40 w-full border-b bg-white-700">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="hidden lg:block">
            <NavbarItems/>
        </div>
      </div>
      </header>
    );
}

export default Header