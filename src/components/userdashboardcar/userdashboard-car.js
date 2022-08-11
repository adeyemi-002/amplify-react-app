import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './userdashboard-car.css'
import IconsNav from '../IconsNav'

function CarDashboard() {
  const navigate = useNavigate()
  const [carData, setCarData] = useState()

  {
    /*function handleSubmit(event) {
    event.preventDefault()
    localStorage.setItem('carData', JSON.stringify(carData))
    console.log(carData)
  }*/
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    //setCarData((values) => ({ ...values, [name]: value }))
    setCarData(value)
    localStorage.setItem('carData', JSON.stringify(value || 0))
  }

  function handleBack() {
    navigate('/userdashboardbus/user-dashboard-bus.js')
  }

  useEffect(() => {
    const carData = JSON.parse(localStorage?.getItem('carData'))
    console.log('td', carData)
    if (carData) {
      setCarData(carData)
    }
  }, [])

  return (
    <div className='Usrc'>
      <div id='usercardash'>
        <IconsNav active='car' />

        <div id='datareg'>
          <form action='' id='powerdata'>
            <div id='detailsbtnml'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label htmlFor='elect' className=''>
                Mileage
              </label>
              &nbsp;&nbsp;
              <input
                type='number'
                name='item'
                value={carData}
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

export default CarDashboard
