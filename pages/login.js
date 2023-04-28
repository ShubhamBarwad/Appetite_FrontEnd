import { signIn } from 'next-auth/react'
import React from 'react'

function Login() {

  // Google Login Handler
  async function handleGoogleSignIn(e){
    e.preventDefault()
    signIn('google', {callbackUrl: 'http://localhost:3000'})
  }
  async function handleGitSignIn(){
    signIn('github', {callbackUrl: 'http://localhost:3000'})
  }

  return (
    <div className='full-screen flex-col align-items-center justify-content-center gap-1'>
        <p className="level-1 strong">LOGIN</p>
        <form className='flex-col align-items-center justify-content-center gap-2'>
            <input className='box' type="text" name="userName" placeholder='Username'/>
            <input className='box' type="password" name="userName" placeholder='password'/>
            <button className='login-btn custom-btn pointer'>Login</button>
            <button className="login-btn custom-btn pointer white-btn" onClick={handleGoogleSignIn}>Login with Google</button>
            <button className="login-btn custom-btn pointer white-btn" onClick={handleGitSignIn}>Login with Github</button>
        </form>

    </div>
  )
}

export default Login