import React from 'react'
import { DeleteProfile } from '../redux/actions/profileActions'
import { useDispatch } from 'react-redux'

function RowDetails({_id, user, tel, country, city, bio }) {
    const dispatch =  useDispatch   ()

    const DeleteHandler =(id)=>{
        dispatch(DeleteProfile(id))

    }
  return (
<tr>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.role}</td>
    <td>{tel}</td>
    <td>{country}</td>
    <td>{city}</td>
    <td>{bio}</td>
    <td><button className="btn btn-danger"> OnClick={()=>DeleteHandler(_id)}Delete</button></td>
</tr>
  )
}

export default RowDetails
