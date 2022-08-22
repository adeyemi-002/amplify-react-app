import './userdashboard.css'
import chart from '../images/chart.png'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import IconsNav from '../IconsNav'

function UserDashboard() {
  const [isTenantAdmin, setIsTenantAdmin] = useState(false)
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [week, setWeek] = useState({})
  const navigate = useNavigate()

  function handleChange(event) {
    const value = event.target.value
    localStorage.setItem('week', JSON.stringify(value))
  }

  useEffect(() => {
    console.log(location)
    const hash = location.hash
    const regex = /(?<=id_token=).*(?=&access_token)/g
    const match = hash.match(regex)
    let token
    if (match) {
      token = match[0]
      localStorage.setItem('id_token', token)
      navigate('/userdashboard/user-dashboard.js')
      window.location.reload()
    }

    console.log('tok', token)
    setLoading(true)

    axios
      .get(
        `https://gxktmecngi.execute-api.eu-central-1.amazonaws.com/dev/user/getallfootprints`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
              'Access-Control-Allow-Headers, Content-Type, Authorization',
            'Access-Control-Allow-Methods': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
              token || localStorage.getItem('id_token')
            }`,
          },
        }
      )
      .then((response) => {
        console.log(response)
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })

    // console.log(hash);
    // console.log(token);

    //    setIsTenantAdmin(true);
  }, [])

  function handleDelete(d) {
    console.log(d, 'd')
    const url = `https://gxktmecngi.execute-api.eu-central-1.amazonaws.com/dev/user/deletefootprint/${d}`

    console.log(url, 'URL')

    axios
      .delete(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Access-Control-Allow-Headers, Content-Type, Authorization',
          'Access-Control-Allow-Methods': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('id_token')}`,
        },
      })
      .then((res) => {
        console.log(res)
        window.alert('deleted')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const tableBody = data?.map((d) =>
    loading ? (
      <tr>Loading Data...</tr>
    ) : (
      <tr key={d.week.S}>
        <td>{d.week.S}</td>
        <td>{d.flight.S}</td>
        <td>{d.Bus.S}</td>
        <td>{d.car.S}</td>
        <td>{d.house.S}</td>
        <td>{d.train.S}</td>
        <td>{d.totalFootprint.S}</td>
        <td>
          <i
            class='fa fa-trash'
            aria-hidden='true'
            onClick={() => handleDelete(d.week.S)}
          />
        </td>
      </tr>
    )
  )

  return (
    <div className='cover'>
      {isTenantAdmin && (
        <Link to='/admin/admin-login.js' className='btn-container'>
          Admin console
        </Link>
      )}

      <div id='userdash'>
        <IconsNav />
        <div id='imgdash'>
          <table>
            <thead>
              <tr>
                <th>Week</th>
                <th>Air</th>
                <th>Bus</th>
                <th>Car</th>
                <th>House</th>
                <th>Train</th>
                <th>TotalFootprint</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? tableBody : <tr> No data available</tr>}
            </tbody>
          </table>
          {/* <img src={chart} alt='bar chart' /> */}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
        </div>

        <div>
          <label htmlFor='week' className=''>
            Week
          </label>
          &nbsp; (WK-YYYY) &nbsp;
          <input
            type='text'
            name='week'
            value={week.week}
            onChange={handleChange}
            className='form-input'
          />
        </div>

        <button>
          {' '}
          <Link to='/userdashboardhouse/user-dasboard-house.js'>
            Input Data
          </Link>
        </button>
      </div>
    </div>
  )
}

export default UserDashboard
