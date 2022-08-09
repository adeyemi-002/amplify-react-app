import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './userdashboard-airplane.css'
import IconsNav from '../IconsNav'

function AirplaneDashboard() {
  const navigate = useNavigate()
  const [airplaneData, setAirplaneData] = useState({})

  useEffect(() => {
    const airplaneData = JSON.parse(localStorage?.getItem('airplaneData'))
    console.log('td', airplaneData)
    if (airplaneData) {
      setAirplaneData(airplaneData)
    }
  }, [])

  {
    /*function handleSubmit(event) {
  event.preventDefault()
  localStorage.setItem('airplaneData', JSON.stringify(airplaneData))
}*/
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setAirplaneData((values) => ({ ...values, [name]: value }))
    localStorage.setItem('airplaneData', JSON.stringify({ [name]: value || 0 }))
  }
  return (
    <div id='userplanedash'>
      <IconsNav active='air' />

      <div id='datareg'>
        <form action='' id='powerdata'>
          <div className='details'></div>

          <div className='details'>
            <label htmlFor='duration' className=''>
              Duration of Flight
            </label>
            &nbsp;
            <input
              type='number'
              name='item'
              value={airplaneData.item || ''}
              onChange={handleChange}
              className='form-input'
            />
            &nbsp;
            <label htmlFor='gas' className='' name='duration'>
              Hrs
            </label>
            <br></br>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AirplaneDashboard
