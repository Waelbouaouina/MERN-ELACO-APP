import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Inputs from '../components/Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction } from '../redux/actions/authActions'

function Login() {    
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const errors = useSelector(state => state.errors)
  const navigate = useNavigate()


  const onChangeHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (event)=>{
    event.preventDefault();
    dispatch(LoginAction(form, navigate))

  }
    return (
        <div>
            <div className="container form-container">
                <div className="row justify-content-evenly mt-4">
                    <div className="col-lg-6 col-md-12 mt-4">
                        <div className="d-flex align-items-center mb-4">
                            <i className="fas fa-sign-in-alt fa-lg" style={{ color: "#070808" }}></i> <h2 className="fs-4">Login</h2>
                        </div>
                        <form onSubmit={onSubmit}> 
                            <Inputs name="email " label={<label style={{ fontWeight: "bold" }}>Email</label>} type="text" icon="fas fa-envelope" onChangeHandler={onChangeHandler} errors={errors.email} />
                            <Inputs name="password " label={<label style={{ fontWeight: "bold" }}>Password</label>} type="password" icon="fas fa-lock" onChangeHandler={onChangeHandler} errors={errors.password} />
                            {console.log(onSubmit)}
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <p className="mt-3 text-center text-black">Don't have an account? <Link to="/register" className="text-black"><span style={{ color: "rgb(23, 180, 146)", fontWeight: "bold" }}>Register</span></ Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login