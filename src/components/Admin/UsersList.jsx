import React from 'react'
import { getallusers } from '../services/api'
import { useEffect } from 'react'
import { Table } from 'antd'
import './usersList.scss'
 const usersList = () => {

    useEffect(()=>
    {
        async function users()
        {
           var res= await getallusers()
           console.log(res,"names")
        }
        users()
    })
  
  return (
    <div className='listdata'>  
    <input type="text" id="nameSearch" placeholder="Search by Name">
        </input> <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Mobile Number</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            
            <td>John Doe</td>
            <td>
                    <select class="role-dropdown">
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Manager">Manager</option>
                        <option value="Other">Other</option>
                    </select>
                </td>
            <td>john@example.com</td>
            <td>123-456-7890</td>
        </tr>
      
      
    </tbody>
</table></div>
  )
}
export default usersList
