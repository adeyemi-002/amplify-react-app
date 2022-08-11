import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './userdashboard-bus.css'
import IconsNav from '../IconsNav'

function BusDashboard() {
  const navigate = useNavigate()
  const [busData, setBusData] = useState()

  useEffect(() => {
    const busData = JSON.parse(localStorage?.getItem('busData'))
    if (busData) {
      setBusData(busData)
    }
  }, [])

  {
    /*function handleSubmit(event) {
    event.preventDefault()
    localStorage.setItem('busData', JSON.stringify(busData))
  }*/
  }

  function handleBack() {
    navigate('/userdashboardairplane/user-dasboard-airplane.js')
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    //setBusData((values) => ({ ...values, [name]: value }))
    setBusData(value)
    localStorage.setItem('busData', JSON.stringify(value || 0))
  }

  return (
    <div className='Usrb'>
      <div id='userbusdash'>
        <IconsNav active='bus' />

        <div id='datareg'>
          <form action='' id='powerdata'>
            <div id='elect'>
              <label htmlFor='elect' className=''>
                Distance Travelled
              </label>
              &nbsp;&nbsp;
              <input
                type='text'
                name='item'
                value={busData}
                onChange={handleChange}
                className='form-elect-input'
              />
              &nbsp;&nbsp;
              <label htmlFor='kwh' className=''>
                Km
              </label>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BusDashboard
