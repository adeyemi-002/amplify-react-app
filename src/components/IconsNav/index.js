import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const IconsNav = ({ active }) => {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    //localStorage.setItem('trainData', JSON.stringify(trainData))

    const travelData = {
      flight: JSON.parse(localStorage?.getItem('airplaneData')) ?? '0',
      bus: JSON.parse(localStorage?.getItem('busData')) ?? '0',
      car: JSON.parse(localStorage?.getItem('carData')) ?? '0',
      house: JSON.parse(localStorage?.getItem('houseData')) ?? '0',
      train: JSON.parse(localStorage?.getItem('trainData')) ?? '0',
      week: JSON.parse(localStorage?.getItem('week')) ?? '0',
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
        .finally(() => {
          localStorage?.removeItem('airplaneData')
          localStorage?.removeItem('busData')
          localStorage?.removeItem('carData')
          localStorage?.removeItem('houseData')
          localStorage?.removeItem('trainData')
          localStorage?.removeItem('week')
          navigate('/userdashboard/user-dashboard.js')
        })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div id='icons'>
        <Link to='/userdashboardhouse/user-dasboard-house.js' className='pages'>
          <i
            className={`fa fa-home ${
              active === 'house' ? 'active' : ''
            } iconcolore ifsize2`}
          />
        </Link>
        <Link to='/userdashboardcar/user-dasboard-car.js' className='pages'>
          <i
            className={`fa fa-car ${
              active === 'car' ? 'active' : ''
            } iconcolore ifsize2`}
          />
        </Link>
        <Link to='/userdashboardbus/user-dashboard-bus.js' className='pages'>
          <i
            className={`fa fa-bus ${
              active === 'bus' ? 'active' : ''
            } iconcolore ifsize2`}
          />
        </Link>
        <Link
          to='/userdashboardairplane/user-dasboard-airplane.js'
          className='pages'
        >
          <i
            className={`fa fa-plane ${
              active === 'air' ? 'active' : ''
            } iconcolore ifsize2`}
          />
        </Link>
        <Link to='/userdashboardtrain/user-dasboard-train.js' className='pages'>
          <i
            className={`fa fa-train ${
              active === 'train' ? 'active' : ''
            } iconcolore ifsize2`}
          />
        </Link>
      </div>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  )
}

export default IconsNav
