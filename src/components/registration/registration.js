import { useState } from 'react'
import './registration.css'
import axios from 'axios'

function RegistrationForm() {
  const [inputs, setInputs] = useState({})

  function handleSubmit(event) {
    event.preventDefault()
    console.log(inputs)
    axios
      .post('/registration', inputs, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  return (
    <div id='container'>
      <form action='' onSubmit={handleSubmit} id='registration'>
        <div className='details'>
          <label htmlFor='username' className='col-leftr'>
            Username:
          </label>
          <input
            type='text'
            name='username'
            value={inputs.username || ''}
            onChange={handleChange}
            className='form-elect-input'
          />
          <br></br>
        </div>

        <div className='details'>
          <label htmlFor='email' className='col-leftr'>
            Email Address:
          </label>
          <input
            type='text'
            name='email'
            value={inputs.email || ''}
            onChange={handleChange}
            className='form-elect-input'
          />
          <br></br>
        </div>

        <div className='details'>
          <label htmlFor='phone' className='col-leftr'>
            Phone Number:
          </label>
          <input
            type='text'
            name='phone'
            value={inputs.phone || ''}
            onChange={handleChange}
            className='form-elect-input'
          />
          <br></br>
        </div>

        <div className='details'>
          <label htmlFor='password' className='col-leftr'>
            Password:
          </label>
          <input
            type='password'
            name='password'
            value={inputs.password || ''}
            onChange={handleChange}
            className='form-elect-input'
          />
          <br></br>
        </div>

        <div id='btn'>
          <button type='reset' id='cancel'>
            Cancel
          </button>
          <button type='submit' id='register'>
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
