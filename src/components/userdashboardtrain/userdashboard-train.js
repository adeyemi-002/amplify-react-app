import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './userdashboard-train.css'

function TrainDashboard() {
	const navigate = useNavigate()
	const [trainData, setTrainData] = useState({})

	function handleSubmit(event) {
		event.preventDefault()
		localStorage.setItem('trainData', JSON.stringify(trainData))

		const travelData = {
			air: JSON.parse(localStorage?.getItem('airplaneData')),
			bus: JSON.parse(localStorage?.getItem('busData')),
			car: JSON.parse(localStorage?.getItem('carData')),
			house: JSON.parse(localStorage?.getItem('houseData')),
			train: JSON.parse(localStorage?.getItem('trainData')),
		}
		console.log(travelData)
	}

	function handleChange(event) {
		const name = event.target.name
		const value = event.target.value
		setTrainData((values) => ({ ...values, [name]: value }))
	}

	useEffect(() => {
		const trainData = JSON.parse(localStorage?.getItem('trainData'))
		console.log('td', trainData)
		if (trainData) {
			setTrainData(trainData)
		}
	}, [])

	function handleBack(event) {
		navigate('/userdashboardhouse/user-dasboard-house.js')
	}

	return (
		<div className='Reg'>
			<div id='usertraindash'>
				<div id='icons'>
					<i className='fa fa-home iconcolor fsizetd'></i>
					<i className='fa fa-car iconcolor fsizet'></i>
					<i className='fa fa-bus iconcolor fsizet'></i>
					<i className='fa fa-plane iconcolore fsizet'></i>
					<i className='fa fa-train active iconcolor fsizet'></i>
				</div>

				<div id='datareg'>
					<form action='' onSubmit={handleSubmit} id='powerdata'>
						<div className='details'>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<label htmlFor='wood' className=''>
								Train:
							</label>
							&nbsp;&nbsp;
							<input
								type='number'
								name='wood'
								value={trainData.wood || ''}
								onChange={handleChange}
								className='form-input'
							/>
							&nbsp;
							<label htmlFor='wood' className='' name='wood'>
								Km
							</label>
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
								Calculate footprint
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

export default TrainDashboard
