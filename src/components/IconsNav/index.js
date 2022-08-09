import { Link } from 'react-router-dom'
import axios from 'axios'

function handleSubmit(event) {
  event.preventDefault()
  //localStorage.setItem('trainData', JSON.stringify(trainData))

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
      .finally(() => {
        localStorage?.setItem('airplaneData', 0)
        localStorage?.setItem('busData', 0)
        localStorage?.setItem('carData', 0)
        localStorage?.setItem('houseData', 0)
        localStorage?.setItem('trainData', 0)
        localStorage?.setItem('week', 0)
      })
  } catch (error) {
    console.error(error)
  }
}

const IconsNav = ({ active }) => {
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
