import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import Validation from './LoginValidation';



function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
  return (
    <div className='page'>
      <div className='logcontent'>
        
        <form className='form' action="" onSubmit={handleSubmit}>
        <div>
            <h1>Login</h1>
        </div>
            <div className='e'>
                <div>
                    <label htmlFor='email'>email</label>
                </div>
                <div>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput} />
                    <div>
                        {errors.email && <span className='emailVal'> {errors.email}</span>}
                    </div>
                </div>
            </div>

            <div className='pass'>
                <div>
                    <label htmlFor='password'>password</label>
                </div>
                <div>
                    <input type='password' placeholder='Enter Password' name='password'
                    onChange={handleInput}/>
                    <div>
                        {errors.password && <span className='passwordVal'> {errors.password}</span>}
                    </div>
                </div>
            </div>

            <div>
                <button className='btnlog'>Log in</button>
            </div>

            <div>
                <p>I don't have an account</p>
            </div>

            <div className='btncreateacc'>
                <Link to="/registration"><h5>Create Account</h5></Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
