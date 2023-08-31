import React, { useEffect } from 'react'
import { GetProfiles } from '../redux/actions/profileActions'
import { useDispatch, useSelector } from 'react-redux'
import RowDetails from '../components/RowDetails'

function Admin() {
  const profiles = useSelector(state=> state.profiles);
  const dispatch= useDispatch();

  useEffect(() => {
    async function fetchData() {
      await dispatch(GetProfiles());
    }
    fetchData();
  }, [dispatch]);



  return (
    

<div className="container form-container">
        <div className="row justify-content-evenly mt-4">
           
           <div className="col-lg-12 col-md-12 mt-4">
               <div className="d-flex align-items-center mb-4">
                <i className="fa-solid fa-list-check" style={{color: "#000000;"}}></i> <h2 className="fs-4">Profiles List</h2>
               </div>

                <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                        <th scope="col">Bio</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        profiles.profiles.map(({_id, user, tel, country, city, bio })=>(
                          <RowDetails _id={_id} user={user} country={country} city={city} bio={bio} tel={tel} />

                        ))
                      }
                    </tbody>
                  </table>
            </div>
           </div>
       </div>      
  )
}

export default Admin
