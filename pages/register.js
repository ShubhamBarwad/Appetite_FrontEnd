import React from 'react'
import { useFormik } from 'formik'
import { validateRegister } from '@/lib/validate'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Register() {
  const router = useRouter()
  const formik = useFormik({
    initialValues:{
      username: '',
      email: '',
      password: '',
      cpassword: ''
    },
    validate: validateRegister,
    onSubmit
  })

  async function onSubmit(values){
    const options = {
      method:'POST',
      header: {'Content-Type':'application/json'},
      body: JSON.stringify(values)
    }

    await fetch('http://localhost:3000/api/auth/signup', options)
    .then(res=>res.json())
    .then((data)=>{
      if(data)router.push('http://localhost:3000')
    })
  }
  return (
    <div className='full-screen flex-col align-items-center justify-content-center gap-1'>
      <h1 className='login-logo logo heading'>Appetite<span>.</span></h1>
        <p className="level-1 strong">Register</p>
        <form className='flex-col align-items-center justify-content-center gap-2' onSubmit={formik.handleSubmit}>
            <input
             type="text" 
             className="box" 
             placeholder='Username'
             {...formik.getFieldProps('username')}/>
             {formik.errors.username ? <span>{formik.errors.username}</span>:<></>}
            <input 
             type="email" 
             className="box" 
             name="email" 
             placeholder='email'
             {...formik.getFieldProps('email')} />
             {formik.errors.email ? <span>{formik.errors.email}</span>:<></>}
            <input 
            type="password" 
            className="box" 
            placeholder='Password'
            {...formik.getFieldProps('password')} />
            {formik.errors.password ? <span>{formik.errors.password}</span>:<></>}
            <input type="password" 
            className="box" 
            placeholder='Confirm Password'
            {...formik.getFieldProps('cpassword')} />
            {formik.errors.cpassword ? <span>{formik.errors.cpassword}</span>:<></>}
            <p>Already a user?<Link href='login'>Log In</Link></p>
            <button className='custom-btn pointer' type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register