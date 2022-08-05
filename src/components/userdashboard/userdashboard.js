import './userdashboard.css'
import chart from '../images/chart.png'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

function UserDashboard() {
  const [isTenantAdmin, setIsTenantAdmin] = useState(false)
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    console.log(location)
    const hash = location.hash
    const regex = /(?<=id_token=).*(?=&access_token)/g
    const match = hash.match(regex)
    let token
    if (match) {
      token = match[0]
      localStorage.setItem('id_token', token)
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
            Authorization: `Bearer ${token || localStorage.getItem(id_token)}`,
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
        <div id='icons'>
          <i className='fa fa-home fsizeh'></i>
          <i className='fa fa-car fsize'></i>
          <i className='fa fa-bus fsize'></i>
          <i className='fa fa-plane fsize'></i>
          <i className='fa fa-train fsize'></i>
        </div>
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
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? tableBody : <tr> No data available</tr>}
            </tbody>
          </table>
          {/* <img src={chart} alt='bar chart' /> */}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
        </div>
        <button>
          {' '}
          <Link to='/userdashboardairplane/user-dasboard-airplane.js'>
            Input Data
          </Link>
        </button>
      </div>
    </div>
  )
}

export default UserDashboard
