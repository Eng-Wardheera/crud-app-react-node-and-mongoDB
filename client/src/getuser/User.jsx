import React, { useEffect, useState } from 'react'
import "./user.css"
import axios from "axios"
import { Link } from 'react-router-dom';
const User = () => {

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try {

                const response = await axios.get("http://localhost:8000/api/")
                setUsers(response.data);
            } catch (error) {
                console.log("Error while fetching data", error)
            }
        }
        fetchData();
    }, [])

  return (
    <div className='userTable'>
        <Link to="/add-user" > <button type="button" class="btn btn-primary"><i class="fa-solid fa-user-plus"></i> Add User</button> </Link> 
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>S.No</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
           
            <tbody>
            {users.map((user, index)=>{
                return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td className='actionButtons'>  <Link to="/edit-user" type="button" class="btn btn-warning"> <i class="fa-solid fa-pen-to-square"></i> </Link><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
                )
            })}
                
            </tbody>
        </table>
    </div>
  )
}

export default User