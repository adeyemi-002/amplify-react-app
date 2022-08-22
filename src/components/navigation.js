import './navigation.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './home/home.js'
import Registration from './registration/registration'
import SignIn from './signin/signin'
import AdminLogin from './admin/admin-login'
import AdminConsole from './adminconsole/admin-console'
import UserDashboard from './userdashboard/userdashboard'
import AirplaneDashboard from './userdashboardairplane/userdashboard-airplane'
import BusDashboard from './userdashboardbus/userdashboard-bus'
import CarDashboard from './userdashboardcar/userdashboard-car'
import HouseDashboard from './userdashboardhouse/userdashboard-house'
import TrainDashboard from './userdashboardtrain/userdashboard-train'
import NavBar from './navbar'
import { Formik, Form, Field } from 'formik'

function Navigation() {
  const loggedIn = localStorage.getItem('id_token')

  return (
    <div>
      <Router basename='/' id='container'>
        <NavBar />
        <div id='links'>
          {loggedIn ? (
            <div>
              <Link to='/admin/admin-login.js' className='pages'>
                Admin
              </Link>
              <Link to='/userdashboard/user-dashboard.js' className='pages'>
                Userdashboard
              </Link>
            </div>
          ) : (
            <div>
              <Link to='/home/home.js' className='pages'>
                Home
              </Link>
              <Link to='/registration/registration.js' className='pages'>
                Registration
              </Link>
            </div>
          )}

          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home/home.js' element={<Home />} />
              <Route
                path='/registration/registration.js'
                element={<Registration />}
              />
              <Route path='/signin/signin.js' element={<SignIn />} />
              <Route path='/admin/admin-login.js' element={<AdminLogin />} />
              <Route
                path='/adminconsole/admin-console.js'
                element={<AdminConsole />}
              />
              <Route
                path='/userdashboard/user-dashboard.js'
                element={<UserDashboard />}
              />

              <Route
                path='/userdashboardairplane/user-dasboard-airplane.js'
                element={<AirplaneDashboard />}
              />
              <Route
                path='/userdashboardbus/user-dashboard-bus.js'
                element={<BusDashboard />}
              />
              <Route
                path='/userdashboardcar/user-dasboard-car.js'
                element={<CarDashboard />}
              />
              <Route
                path='/userdashboardhouse/user-dasboard-house.js'
                element={<HouseDashboard />}
              />
              <Route
                path='/userdashboardtrain/user-dasboard-train.js'
                element={<TrainDashboard />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default Navigation
