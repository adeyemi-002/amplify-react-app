import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './userdashboard-house.css'



function HouseDashboard() {
	const navigate = useNavigate()
	const [houseData, setHouseData] = useState({})

	useEffect(() => {
		const houseData = JSON.parse(localStorage?.getItem('houseData'))
		console.log('td', houseData)
		if (houseData) {
			setHouseData(houseData)
		}
	}, [])

	function handleSubmit(event) {
		event.preventDefault()
		localStorage.setItem('houseData', JSON.stringify(houseData))
		console.log(houseData)
	}

	function handleChange(event) {
		const name = event.target.name
		const value = event.target.value
		setHouseData((values) => ({ ...values, [name]: value }))
	}

	function handleBack(event) {
		console.log('back')
		navigate('/userdashboardcar/user-dasboard-car.js')
	}

	return (
		<div className='Reg'>
			<div id='userhousedash'>
				<div id='icons'>
					<i className='fa fa-home active iconcolor fsizehh'></i>
					<i className='fa fa-car iconcolor fsizeh'></i>
					<i className='fa fa-bus iconcolor fsizeh'></i>
					<i className='fa fa-plane iconcolore fsizeh'></i>
					<i className='fa fa-train iconcolor fsizeh'></i>
				</div>

				<div id='datareg'>
					<form action='' onSubmit={handleSubmit} id='powerdata'>
						<div id='elect'>
							<label htmlFor='elect' className=''>
								Electricity:
							</label>
							&nbsp;&nbsp;
							<input
								type='number'
								name='elect'
								value={houseData.elect || ''}
								onChange={handleChange}
								className='form-elect-input'
							/>
							&nbsp;&nbsp;
							<label htmlFor='kwh' className=''>
								KWh at a factor of:
							</label>
							&nbsp;&nbsp;
							<input
								type='number'
								name='kwh'
								value={houseData.kwh || ''}
								onChange={handleChange}
								className='form-elect-input'
							/>
							&nbsp;&nbsp;
							<label htmlFor='kwh' className=''>
								KgC0<sub>2</sub>/KWh
							</label>
							<br></br>
						</div>

						<div className=''>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<label htmlFor='gas' className=''>
								Gas:
							</label>
							&nbsp;&nbsp;
							<input
								type='number'
								name='gas'
								value={houseData.gas || ''}
								onChange={handleChange}
								className='form-elect-input'
							/>
							<br></br>
						</div>

						<div id='btn'>
							<button type='reset' id='reset'>
								Cancel
							</button>
							<button type='submit' id='calc' onClick={() => handleBack()}>
								Back
							</button>
							<button type='submit' id='calc' onClick={(e) => handleSubmit(e)}>
								<Link to='/userdashboardtrain/user-dasboard-train.js'>
									Next
								</Link>
							</button>
						</div>
					</form>
				</div>

				<div id='winclose'>
					<button type='submit' name='close' id='btnclose'>
						<i className='fa fa-times-circle-o'></i>
					</button>
				</div>
			</div>
		</div>
	)
}

export default HouseDashboard
