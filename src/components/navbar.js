import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'

function NavBar() {
  const navigate = useNavigate()
  const loggedIn = localStorage.getItem('loggedIn')
  console.log(loggedIn)

  const handleclick = (e) => {
    e.preventDefault()
    console.log('I will redirect to AWS Cognito')
    localStorage.setItem('loggedIn', true)

    window.location.href =
      'https://mhp-co2-tracker.auth.eu-central-1.amazoncognito.com/login?client_id=3d63aajjll8vqcjh49f0uqn24s&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https%3A%2F%2Fmaster.d2ii4k9ar1ox2r.amplifyapp.com%2Fuserdashboard%2Fuser-dashboard.js%2F'

    {
      /*navigate(
			'/home/home.js/#id_token=eyJraWQiOiJ3QXAxS29MdVh3RjMyQk9GOVdkQ0gyRUxtc2pWR25wTWpWMXFJZmN6VTZFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiNmNsRU1NUHZwU3FfREU2NVI4N1pHdyIsInN1YiI6IjM1ZDMwYmQ0LTNiY2YtNDAyZC04MGZlLWI3NWVkYTE4NTVhYSIsImNvZ25pdG86Z3JvdXBzIjpbImFjY2MwYmNlMTE2NjExZWQ5YjNhYWExMDJjMmE4ZGU2Il0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX0hva2V4bGNkUiIsImNvZ25pdG86dXNlcm5hbWUiOiJ0ZW5hbnQtYWRtaW4tYWNjYzBiY2UxMTY2MTFlZDliM2FhYTEwMmMyYThkZTYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkZW1vbGEwNyIsImN1c3RvbTp0ZW5hbnRJZCI6ImFjY2MwYmNlMTE2NjExZWQ5YjNhYWExMDJjMmE4ZGU2IiwiYXVkIjoiM2Q2M2FhampsbDh2cWNqaDQ5ZjB1cW4yNHMiLCJldmVudF9pZCI6IjQ0NmNiZjNlLTliMDItNDRhNi04OTBmLTk4NTZiYjcxOTIxMiIsImN1c3RvbTp1c2VyUm9sZSI6IlRlbmFudEFkbWluIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTkzMzY5MDksImV4cCI6MTY1OTM0MDUwOSwiaWF0IjoxNjU5MzM2OTA5LCJqdGkiOiIyNzM0MWI5OS02OTAyLTRmZDUtODk4YS1hMzlhMDI1MmZhOGUiLCJlbWFpbCI6ImRlbW9sYXNvYmFraUBnbWFpbC5jb20ifQ.CSdvNJk2qnQwCMeYpiwtCQA1rNSM7-gihDQmpCA9kntGupK3_vgLGYOC-nHpWxQIhuqD_f8FPuG0xJJbxHjQbqR7l38bxyAwBCZlNp6gqZHa54R8_iUn3bV84QPNDxeIsV2auR6v32A14_6Kj_qG1ZU1_wqCNBSubQR5CTtHWEQbFAcXJSxd0srw1VqXjQY2r1UGf5SfPFsbRfXC15MCNLvr84TowsIS3myD40M1WSFGttooSHI_Rsjr5zB1mbzU2PWmbhmQRBuC0IY-uf1XNiFV7iysvZj6xlQ3EcnKoC8NkY9hbobx-SJO_KUKMUfJzsb61wMr8c2iDvEx2Q7ngQ&access_token'
		)*/
    }
    window.location.reload()
  }

  function handleSignout(e) {
    e.preventDefault()
    console.log('signed out')
    localStorage.removeItem('id_token')
    navigate('/home/home.js')
    window.location.reload()
  }

  return (
    <div id='topnav'>
      {loggedIn ? (
        <button onClick={(e) => handleSignout(e)} className='pages'>
          Sign Out
        </button>
      ) : (
        <button
          onClick={(e) => handleclick(e)}
          to='/signin/signin.js'
          className='pages'
        >
          Sign In
        </button>
      )}
    </div>
  )
}

export default NavBar
