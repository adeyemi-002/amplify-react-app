import './userdashboard.css'
import chart from '../images/chart.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function UserDashboard() {
	const [isTenantAdmin, setIsTenantAdmin] = useState(false)
	const location = useLocation()

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
		// console.log(hash);
		// console.log(token);

		//    setIsTenantAdmin(true);
	}, [])

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
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>20</td>
								<td>10</td>
								<td>5</td>
								<td>50</td>
								<td>35</td>
							</tr>
							<tr>
								<td>2</td>
								<td>10</td>
								<td>15</td>
								<td>25</td>
								<td>50</td>
								<td>30</td>
							</tr>
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
