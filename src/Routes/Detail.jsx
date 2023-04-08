import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  const {apiState, apiDispatch} = useContextGlobal()  
  useEffect(() =>{
    const fecthDoctor = async ()=>{
      let res = await fetch(url)
      let data = await res.json()
      apiDispatch({type: 'GET_DOCTOR', payload: data})
    }
    fecthDoctor()
  },[])
  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <div className='detailCard'>
      <table>
      <thead> 
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Webside</th>
      </tr>
      </thead>       
      <tbody>
      <tr>
        <td>{apiState.doctorDetail?.name}</td>
        <td>{apiState.doctorDetail?.email}</td>
        <td>{apiState.doctorDetail?.phone}</td>
        <td>{apiState.doctorDetail?.website}</td>
      </tr>
      </tbody>      
      </table>
      </div>       
    </>
  )
}

export default Detail