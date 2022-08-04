import { Form, Formik, Field } from 'formik'
import { useState } from 'react'
import './adminlogin.css'

function AdminLogin() {
	const [inputs, setInputs] = useState({})

	const [users, setUsers] = useState([
		{
			name: 'Jim',
		},
		{
			name: 'Michael',
		},
		{
			name: 'Pamela',
		},
		{
			name: 'Kevin',
		},
	])
	function handleSubmit(event) {
		event.preventDefault()
		console.log(inputs)
	}

	function handleChange(event) {
		const name = event.target.name
		const value = event.target.value
		setInputs((values) => ({ ...values, [name]: value }))
	}

	const [modalOpen, setModalOpen] = useState(false)
	const initialValues = {
		username: '',
		email: '',
		phone: '',
		user_role: '',
	}

	return (
		<div className='Adm'>
			<div>
				{' '}
				<div id='search-details'>
					<h3 id='tenants'>List Of Tenant Users</h3>
					<form action='' onSubmit={handleSubmit} id=''>
						<input
							type='search'
							name='usearch'
							value={inputs.usearch || ''}
							onChange={handleChange}
							id='search'
							placeholder='search users by id'
						/>
						<button type='submit' name='usearch' id='btnsearch'>
							<i className='fa fa-search trashio'></i>
						</button>
					</form>
				</div>
				<br></br>
				<div id='container'>
					<form action='' onSubmit={handleSubmit} id=''>
						{users.map((user, index) => (
							<div className='details' key={index}>
								<input
									type='text'
									name='userone'
									value={user.name}
									onChange={handleChange}
									className='form-elect-inputa'
									placeholder='user_1'
								/>
								<button type='reset' className='activate'>
									Activate
								</button>
								<button type='reset' className='col-left'>
									Deactivate
								</button>
								<i className='fa fa-trash trashio'></i>
								<br></br>
							</div>
						))}

						<div id='btn'>
							<button onClick={() => setModalOpen(true)} id='btnreg'>
								Add New User
							</button>
						</div>
					</form>
					{modalOpen && (
						<div id='modal'>
							<Formik
								initialValues={initialValues}
								onSubmit={(values, { setSubmitting }) => {
									console.log(values)
									setTimeout(() => {
										// alert(JSON.stringify(values, null, 2));
										setSubmitting(false)
									}, 700)
									setModalOpen(false)
								}}
							>
								{({ values, isSubmitting }) => (
									<Form>
										<div className='form-container'>
											<div className='input-container'>
												<label htmlFor=''>Username</label>
												<Field
													name='username'
													type='text'
													placeholder='Username'
												/>
											</div>
											<div className='input-container'>
												<label htmlFor=''>Email</label>
												<Field name='email' type='email' placeholder='Email' />
											</div>
											<div className='input-container'>
												<label htmlFor=''>Phone</label>
												<Field
													name='phone'
													type='text'
													placeholder='Phone no.'
												/>
											</div>
											<div className='input-container'>
												<label htmlFor=''>User role</label>
												<Field type='select' name='user_role' as='select'>
													<option value='tenant-Admin'>TenantAdmin</option>
													<option value='tenant-User'>TenantUser</option>
												</Field>
											</div>
											<div id='btn-container'>
												<button type='submit' id='btn-submit'>
													Submit
												</button>
												<button type='submit' id='btn-cancel'>
													Cancel
												</button>
											</div>
										</div>
									</Form>
								)}
							</Formik>
						</div>
					)}
				</div>
			</div>
			{modalOpen && <div className='overlay'></div>}
		</div>
	)
}

export default AdminLogin
