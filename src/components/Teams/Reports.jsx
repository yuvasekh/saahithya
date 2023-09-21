import React from 'react'
import { getreports,deleteFile} from '../services/api'
import { useEffect } from 'react'
import { Button, Table } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import './usersList.scss'
 const Reports = () => {                                                            
const [reports,setReports]=useState([])
const [headers,setHeaders]=useState([])
const navigate=useNavigate()
    useEffect(()=>
    {
        async function users()
        {
           var res= await getreports()
           console.log(res,"val")
           let head=Object.keys(res[0])
           head.push("Review the Book")
           head.push("Delelte")
           setHeaders(head)
           setReports(res)
           console.log(res,"names")
        }
        users()
    },[])
    function readPage(item) {
        console.log(item.FileId, "message");
        let file=item.FileId
        navigate("/read", { state: { myProp: file } });
      }
      async function deletebook(item)
      {
console.log(item)
await deleteFile(item)

      }
  return (
    <div className='listdata'>  
    <input type="text" id="nameSearch" placeholder="Search by Name">
        </input><table>
  <thead>
    <tr>
      {headers.length > 0 ? (
        headers.map((item, index) => (
          <th key={item}>{item}</th>
        ))
      ) : (
        <></>
      )}
    </tr>
  </thead>
  <tbody>
    {reports.length > 0 ? (
      reports.map((item, index) => (
        <tr key={item.Id}>
          {Object.entries(item).map(([key, value]) => (
            <><td key={key}>
            {value}
            </td>
            </>
            
       
          ))}
           <td><Button onClick={()=>{readPage(item)}}>Read</Button></td>
             <td><Button onClick={()=>{deletebook(item.FileId)}}>Delete</Button></td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={headers.length}>No data available</td>
      </tr>
    )}
  </tbody>
</table>
</div>
  )
}
export default Reports
