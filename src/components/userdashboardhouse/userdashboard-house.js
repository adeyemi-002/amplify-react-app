import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './userdashboard-house.css'
import IconsNav from '../IconsNav'

function HouseDashboard() {
  const navigate = useNavigate()
  const [houseData, setHouseData] = useState({})

  useEffect(() => {
    const houseData = JSON.parse(localStorage?.getItem('houseData'))
    console.log('td', houseData)
    if (houseData) {
      setHouseData(houseData)
    }
  }, [])

  {
    /*function handleSubmit(event) {
    event.preventDefault()
    localStorage.setItem('houseData', JSON.stringify(houseData))
    console.log(houseData)
  }*/
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setHouseData((values) => ({ ...values, [name]: value }))
    localStorage.setItem('houseData', JSON.stringify({ [name]: value || 0 }))
  }

  function handleBack(event) {
    console.log('back')
    navigate('/userdashboardcar/user-dasboard-car.js')
  }

  return (
    <div className='Reg'>
      <div id='userhousedash'>
        <IconsNav active='house' />
        <div id='datareg'>
          <form action='' id='powerdata'>
            <div id='elect'>
              <label htmlFor='item' className=''>
                Electricity:
              </label>
              &nbsp;&nbsp;
              <input
                type='number'
                name='item'
                value={houseData.item || ''}
                onChange={handleChange}
                className='form-elect-input'
              />
              &nbsp;&nbsp;
              <label htmlFor='kwh' className=''>
                KWh at a factor of:
              </label>
              &nbsp;&nbsp;
              <input
                type='number'
                name='kwh'
                value={'0.38'}
                className='form-elect-input'
                readonly='readonly'
              />
              &nbsp;&nbsp;
              <label htmlFor='kwh' className=''>
                KgC0<sub>2</sub>/KWh
              </label>
              <br></br>
            </div>

            <div id='btn'>
              <button type='reset' id='reset'>
                Cancel
              </button>
              <button type='submit' id='calc' onClick={() => handleBack()}>
                Back
              </button>
              <button type='submit' id='calc'>
                <Link to='/userdashboardtrain/user-dasboard-train.js'>
                  Next
                </Link>
              </button>
            </div>
          </form>
        </div>

        <div id='winclose'>
          <button type='submit' name='close' id='btnclose'>
            <i className='fa fa-times-circle-o'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HouseDashboard
