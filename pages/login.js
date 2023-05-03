import { signIn } from 'next-auth/react'
import React, { useContext } from 'react'
import { useFormik } from 'formik'
import login_validate from '@/lib/validate'
import { useRouter } from 'next/router'
import RoleContext from './components/RoleContext'
import Link from 'next/link'

function Login() {
  const context = useContext(RoleContext)
  const router = useRouter()
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validate: login_validate,
    onSubmit
  })
  async function onSubmit(values){
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl:"/",
    })
    if(status.ok){
      router.push(status.url)
    }
  }
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
      <h1 className='login-logo logo heading'>Appetite<span>.</span></h1>
        <p className="level-1 strong">LOGIN</p>
        <form className='flex-col align-items-center justify-content-center gap-2' onSubmit={formik.handleSubmit}>
            <input
             className='box' 
             type="email" 
             name="email" 
             placeholder='email'
             {...formik.getFieldProps('email')}/>
             {formik.errors.email ? <span>{formik.errors.email}</span>:<></>}
            <input 
             className='box'
             type="password" 
             name="password" 
             placeholder='password'
             {...formik.getFieldProps('password')}/>
             {formik.errors.password ? <span>{formik.errors.password}</span>:<></>}
            <button className='login-btn custom-btn pointer' type='submit'>Login</button>
            <button className="login-btn custom-btn pointer white-btn" onClick={handleGoogleSignIn}>Login with Google</button>
            <p>Dont have an account? <Link href='register'>register</Link></p>
        </form>

    </div>
  )
}

export default Login