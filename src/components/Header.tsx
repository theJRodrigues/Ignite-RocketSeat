import React from 'react'
import logo from '/assets/ignite-logo.svg'

const Header = () => {
  return (
    <header className='flex gap-2 w-full items-center justify-center p-2 bg-gray-600 font-bold text-gray-100 text-[2.5rem]'>
        <img src={logo} alt="" />
        <h1>Ignite Feed</h1>
    </header>
  )
}

export default Header