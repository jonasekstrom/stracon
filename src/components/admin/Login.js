import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, logoutReset } from '../../features/auth/authSlice'
import Spinner from '../common/Spinner'


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/admin/dashboard')
    }

    dispatch(logoutReset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <div><Spinner/></div>
  }

  return (
    <>
      <section className='container text-center'>
      <div className="col">
        <h1>
          Logga in
        </h1>
        </div>
      </section>

      <section className='container my-5'>
      <div className="row justify-content-center">
      <div className="col-sm-6">
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Fyll i din e-post'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group my-2'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Fyll i ditt lösenord'
              onChange={onChange}
              required
            />
          </div>

          <div className='form-group text-center'>
            <button type='submit' className='btn btn-success btn-block'>
              Logga in
            </button>
          </div>
        </form>
        </div>
        </div>
      </section>
    </>
  )
}

export default Login