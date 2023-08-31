import React, { useEffect, useState } from 'react'
import Inputs from '../components/Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { AddProfile, GetProfile } from "../redux/actions/profileActions";

function Profile() {

  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors);
  const profiles = useSelector(state => state.profiles);
  const[message, setMessage] = useState ("");
  const[show, setShow] = useState ("false");

  
  
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(AddProfile(form, setShow, setMessage));
  }

  useEffect(() => {
    async function fetchData() {
      await dispatch(GetProfile());
    }
    fetchData();

    if (profiles.profile) {
      setForm(profiles.profile);
    }
  }, [dispatch, profiles.profile]);


  return (
    <div>
      <div className="container form-container">
        {
          show ? (
            <div className="alert alert-success" role="alert" style={{display: show ? "block" : "none"}}>
              {message}
            </div>
          ): ""
        }
        <div className="row justify-content-evenly mt-4">
           
           <div className="col-lg-6 col-md-12 mt-4">
               <div className="d-flex align-items-center mb-4">
                    <i className="fa-solid fa-user" style={{color: "#050506;"}}></i> <h2 className="fs-4">Profile</h2>
               </div>
                   <form onSubmit={onSubmit}>

                   <Inputs name="tel" label={<label style={{ fontWeight: "bold" }}>Telephone</label>} value={form && form.tel ? form.tel : ""} type="text" icon="fa-solid fa-mobile-screen-button" onChangeHandler={onChangeHandler} errors={errors.tel}/>
                   <Inputs name="country"label={<label style={{ fontWeight: "bold" }}>Country</label>} value={form && form.country ? form.country: ""} type="text" icon="fa-solid fa-flag"onChangeHandler={onChangeHandler} errors={errors.country} />
                   <Inputs name="city" label={<label style={{ fontWeight: "bold" }}>City</label>} value={ form && form.city  ? form.city : ""} type="text" icon="fa-solid fa-earth-europe" onChangeHandler={onChangeHandler} errors={errors.city}/>
                   <Inputs name="address" label={<label style={{ fontWeight: "bold" }}>Address</label>} value={form && form.address ? form.address  : ""} type="text" icon="fa-solid fa-location-dot" onChangeHandler={onChangeHandler} errors={errors.address}/>
                   <Inputs name="postalcode" label={<label style={{ fontWeight: "bold" }}>PostalCode</label>} value={form && form.poastalcode ? form.postalcode  : ""} type="text" icon="fa-solid fa-signs-post" onChangeHandler={onChangeHandler} errors={errors.postalcode}/>
                   <Inputs name="bio" label={<label style={{ fontWeight: "bold" }}>Bio</label>} value={form && form.bio ? form.bio  : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.bio} />

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Update</button>
                </div>
                     </form>
            </div>
           </div>
       </div>
   </div>
      
  )
}

export default Profile