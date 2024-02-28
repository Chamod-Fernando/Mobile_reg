import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import Validation from './SignupValidation';
import axios from 'axios';


function Registration() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [error, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(error.name === "" && error.email === "" && error.password === "") {
            axios.post('http://localhost:3000/signup', values)
                .then(() => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    }

  return (
    <div>
      <div className='regcontent'>
      <form className='form' action="" onSubmit={handleSubmit}>
        <div>
            <h1>Registration</h1>
        </div>

        <div className='n'>
                <div>
                    <label htmlFor='name'>User Name</label>
                </div>
                <div>
                    <input className='inputbox' type='text' placeholder='Enter Name' name='name' value={values.name}
                    onChange={handleInput} />
                </div>
                <div>
                {error.name && <span className='nameVal'> {error.name}</span>}

                </div>
        </div>        
            <div className='e'>
                <div>
                    <label htmlFor='email'>Email</label>
                </div>
                <div>
                    <input className='inputbox' type='email' placeholder='Enter Email' name='email' value={values.email}
                    onChange={handleInput} />
                </div>
                <div>
                {error.email && <span className='emailVal'> {error.email}</span>}
                </div>
            </div>

            <div className='pass'>
                <div>
                    <label htmlFor='password'>Password</label>
                </div>
                <div>
                    <input className='inputbox' type='password' placeholder='Enter Password' name='password' value={values.password}
                    onChange={handleInput} />
                </div>
                <div>
                {error.password && <span className='passwordVal'> {error.password}</span>}

                </div>
            </div>

            <div>
                <button type='submit' className='btnReg' vlaue="Register">Register</button>
            </div>
            <div>
                <Link to="/"><h5>Back</h5></Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Registration
