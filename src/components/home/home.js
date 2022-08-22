import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='Reg'>
      <div className='top'>
        <p>
          <strong className='header1'>
            Estimate your CO<sub>2</sub> Footprint
          </strong>
        </p>
        <div className='topsection'>
          <a href='https://reactjs.org'>
            <FontAwesomeIcon
              icon={faHeart}
              size='lg'
              className='topiconcolor'
            />
          </a>
          <div className='topfeature'>
            <p>
              <strong>Get Your Weekly Contributions</strong>
            </p>
            <p>
              See a record of all your C0<sub>2</sub> weekly contributions on a
              dashboard
            </p>
          </div>
        </div>
        <div className='topsection'>
          <a href='https://reactjs.org'>
            <FontAwesomeIcon icon={faHome} size='lg' className='topiconcolor' />
          </a>
          <div className='topfeature'>
            <p>
              <strong>Manage All Your Employees Accounts</strong>
            </p>
            <p>Admin portal that manages all your tenant accounts</p>
          </div>
        </div>
      </div>

      <div id='midnav'>
        <p className='text'>
          <strong>Let's Start !</strong>
        </p>
        <p className='text'>
          <strong>Register to Get Started</strong>
        </p>
        <button
          type='submit'
          onClick={() => navigate('/registration/registration.js')}
          id='register'
        >
          Register
        </button>
      </div>

      <div id='footer'>
        <div id='leftfooter'>
          <p class='love'>
            Made with{' '}
            <FontAwesomeIcon
              icon={faHeart}
              size='lg'
              className='topiconcolor'
            />{' '}
            by MHP
          </p>
        </div>

        <div id='rightfooter'>
          <a href='https://reactjs.org'>
            {/* <FontAwesomeIcon icon={falinkedin} size="lg"  className="topiconcolor" /> */}
          </a>
          <a href='https://reactjs.org'>
            {/* <FontAwesomeIcon icon={faTwitter} size="lg"  className="topiconcolor" /> */}{' '}
          </a>
          <a href='https://reactjs.org'>
            {/* <FontAwesomeIcon icon={faFacebook} size="lg"  className="topiconcolor" /> */}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
