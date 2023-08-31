import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Inputs from '../components/Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { Registration } from '../redux/actions/authActions'


const initialState = { Name: '', Email: '', Password: '', Confirm:  '' };


function Register() {
  
  const [form, setForm] = useState(initialState)
  const dispatch = useDispatch()
  const errors = useSelector(state => state.errors)
  const navigate = useNavigate()
  
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(Registration(form, navigate));
  }

 

  return (
    <div>
      <div className="container form-container">
        <div className="row justify-content-evenly mt-4">
          <div className="col-lg-6 col-md-12 mt-4">
            <div className="d-flex align-items-center mb-4">
              <i className="fa-solid fa-user-plus fa-lg" style={{color: "#070808"}}></i>
              <h2 className="fs-4" >Register</h2>
            </div>
            <div className="p-4">
              <form onSubmit={onSubmit}>
                <Inputs name="name" label={<label style={{ fontWeight: "bold" }}>Name</label>} type="text" icon="fas fa-user" onChangeHandler={onChangeHandler} errors={errors.name} />
                <Inputs name="email" label={<label style={{ fontWeight: "bold" }}>Email</label>} type="text" icon="fas fa-envelope" onChangeHandler={onChangeHandler} errors={errors.email} />
                <Inputs name="password" label={<label style={{ fontWeight: "bold" }}>Password</label>} type="password" icon="fas fa-lock" onChangeHandler={onChangeHandler} errors={errors.password} />
                <Inputs name="confirm" label={<label style={{ fontWeight: "bold" }}>Confirm</label>} type="password" icon="fas fa-lock" onChangeHandler={onChangeHandler} errors={errors.confirm} />

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
                <p className="mt-3 text-center login__register">Already have an account? <Link to="/login" className="text-black"> <span style={{ color: "rgb(23, 180, 146)",fontWeight: "bold" }}>Log in</span></Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
