import React from 'react'
import igniteLogo from '/assets/ignite-logo.svg'

const Header = () => {
  return (
    <header className='flex gap-2 w-full items-center justify-center p-2 bg-gray-600 font-bold text-gray-100 text-[2.5rem]'>
        <img src={igniteLogo} alt="ignite logo" className='size-4'/>
        <h1>Ignite Feed</h1>
    </header>
  )
}

export default Header