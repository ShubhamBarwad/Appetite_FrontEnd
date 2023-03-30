import React from 'react'

function Login() {
  return (
    <div className='full-screen flex-col align-items-center justify-content-center gap-1'>
        <p className="level-1 strong">LOGIN</p>
        <form className='flex-col align-items-center justify-content-center gap-2'>
            <input className='box' type="text" name="userName" placeholder='Username'/>
            <input className='box' type="password" name="userName" placeholder='password'/>
            <button className='custom-btn pointer'>Login</button>
        </form>

    </div>
  )
}

export default Login