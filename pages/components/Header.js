import React from 'react'

function Header() {
  return (
    <header className='flex-row align-items-center justify-content-between'>
        <h1 className='logo heading'>Appetite<span>.</span></h1>
        <div>
            <button className="custom-btn pointer">Login</button>
        </div>
    </header>
  )
}

export default Header