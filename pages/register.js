import React from 'react'

function Register() {
  return (
    <div className='full-screen flex-col align-items-center justify-content-center gap-1'>
        <p className="level-1 strong">Register</p>
        <form className='flex-col align-items-center justify-content-center gap-2'>
            <input type="text" className="box" placeholder='Username'/>
            <input type="password" className="box" placeholder='Password' />
            <input type="password" className="box" placeholder='Confirm Password' />
            <input type="email" className="box" placeholder='email' />
            <button className='custom-btn pointer'>Register</button>
        </form>
    </div>
  )
}

export default Register