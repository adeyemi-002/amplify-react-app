import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './userdashboard-train.css'
import axios from 'axios'
import IconsNav from '../IconsNav'

function TrainDashboard() {
  const navigate = useNavigate()
  const [trainData, setTrainData] = useState()

  {
    /*function handleSubmit(event) {
    event.preventDefault()
    localStorage.setItem('trainData', JSON.stringify(trainData))

    const travelData = {
      flight: JSON.parse(localStorage?.getItem('airplaneData')),
      bus: JSON.parse(localStorage?.getItem('busData')),
      car: JSON.parse(localStorage?.getItem('carData')),
      house: JSON.parse(localStorage?.getItem('houseData')),
      train: JSON.parse(localStorage?.getItem('trainData')),
      week: JSON.parse(localStorage?.getItem('week')),
    }
    console.log(travelData)

    try {
      axios
        .post(
          `https://gxktmecngi.execute-api.eu-central-1.amazonaws.com/dev/user/createfootprint`,
          travelData,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers':
                'Access-Control-Allow-Headers, Content-Type, Authorization',
              'Access-Control-Allow-Methods': '*',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('id_token')}`,
            },
          }
        )
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.error(err)
        })
    } catch (error) {
      console.error(error)
    }
  }*/
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    //setTrainData((values) => ({ ...values, [name]: value }))
    setTrainData(value)
    localStorage.setItem('trainData', JSON.stringify(value || 0))
  }

  useEffect(() => {
    const trainData = JSON.parse(localStorage?.getItem('trainData'))
    console.log('td', trainData)
    if (trainData) {
      setTrainData(trainData)
    }
  }, [])

  function handleBack(event) {
    navigate('/userdashboardhouse/user-dasboard-house.js')
  }

  return (
    <div className='Reg'>
      <div id='usertraindash'>
        <IconsNav active='train' />

        <div id='datareg'>
          <form action='' id='powerdata'>
            <div className='details'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label htmlFor='wood' className=''>
                Train:
              </label>
              &nbsp;&nbsp;
              <input
                type='number'
                name='item'
                value={trainData}
                onChange={handleChange}
                className='form-input'
              />
              &nbsp;
              <label htmlFor='wood' className='' name='wood'>
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

export default TrainDashboard
