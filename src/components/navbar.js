import { Link } from 'react-router-dom'
import './navbar.css'

const handleclick = (e) => {
  e.preventDefault()
  console.log('redirect to AWS Cognito Ui')
  window.location.href =
    'https://mhp-co2-tracker.auth.eu-central-1.amazoncognito.com/login?client_id=3d63aajjll8vqcjh49f0uqn24s&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https%3A%2F%2Fmaster.d2ii4k9ar1ox2r.amplifyapp.com%2Fuserdashboard%2Fuser-dashboard.js%2F'
}

function NavBar() {
  return (
    <div id='topnav'>
      <button onClick={handleclick} to='/signin/signin.js' className='pages'>
        Sign In
      </button>
    </div>
  )
}

export default NavBar
