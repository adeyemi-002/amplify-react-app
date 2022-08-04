import { Form, Formik, Field } from 'formik'
import { useState, useEffect } from 'react'
import './adminlogin.css'
import axios from 'axios'

function AdminLogin() {
  const [inputs, setInputs] = useState({})
  const [loading, setLoading] = useState(false)

  const [users, setUsers] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://gxktmecngi.execute-api.eu-central-1.amazonaws.com/dev/AdminUserManagement/getusers`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
              'Access-Control-Allow-Headers, Content-Type, Authorization',
            'Access-Control-Allow-Methods': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('id_token')}`,
          },
        }
      )
      .then((response) => {
        console.log(response)
        setUsers(response.users)
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
    userName: '',
    email: '',
    phone: '',
    userRole: '',
  }

  const tableBody = users?.map((d, i) =>
    loading ? (
      <tr>Loading Data...</tr>
    ) : (
      <tr key={i}>
        <td>{d.user_name}</td>
        <td>{d.email}</td>
        <td>{d.enabled.toString()}</td>
        <td>{d.user_role}</td>
        <td>
          <button type='reset' className='activate'>
            Activate
          </button>
        </td>
        <td>
          <button type='reset' className='activate'>
            Deactivate
          </button>
        </td>
      </tr>
    )
  )

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
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>email</th>
                <th>enabled</th>
                <th>userRole</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.length > 0 ? tableBody : <tr> No data available</tr>}
            </tbody>
          </table>

          <div id='btn'>
            <button onClick={() => setModalOpen(true)} id='btnreg'>
              Add New User
            </button>
          </div>

          {modalOpen && (
            <div id='modal'>
              <Formik
                initialValues={initialValues}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values)
                  axios.post(
                    `https://gxktmecngi.execute-api.eu-central-1.amazonaws.com/dev/AdminUserManagement/createuser`,
                    values,
                    {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                          'id_token'
                        )}`,
                      },
                    }
                  )
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
                          name='userName'
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
                        <Field type='select' name='userRole' as='select'>
                          <option value='TenantAdmin'>TenantAdmin</option>
                          <option value='TenantUser'>TenantUser</option>
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
