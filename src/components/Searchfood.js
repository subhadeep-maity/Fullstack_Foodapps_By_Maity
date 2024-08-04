import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Searchfood() {
  let[food,setFood]=useState({
    fid:"",
    fname:"",
    price:""
})
let[data,setData]=useState({
  fid:"",
  fname:"",
  price:""
})
const searchdata=(fid)=>{
  alert(fid);
  axios.get(`http://localhost:1004/food/fetch/${fid}`)
  .then((res)=>{
      console.log(res.data);
      //setFood(res.data);
      setData(res.data);
  })
  .catch((error)=>{
      console.log(error);
      alert("Something wrong on fetching data");
  })
}
  return (

    <div style={{marginLeft:"150px"}}>
      <h2>SEARCH FOOD BY FOODID</h2>
      <input type="text" className='form-control'  value={food.fid}
      onChange={(event)=>{
        setFood({...food,
            fid:event.target.value
        })
      }} placeholder="ENTER FOOD ID"></input><br></br><br></br>
      <button className='btn btn-outline-primary' style={{marginTop:"20px"}} 
      onClick={(fid)=>{
        searchdata(food.fid)
      }}>SEARCH </button>&nbsp; &nbsp;&nbsp;
      <br></br>
      <table className='table table-hover'>
       <thead>
        <td>FOOD ID</td>
        <td>FOOD NAME</td>
        <td>PRICE</td>
       </thead>
       <tbody>
        <tr>
          <td>{data.fid}</td>
          <td>{data.fname}</td>
          <td>{data.price}</td>
        </tr>
       </tbody>
      </table>
    
    </div>
  )
}

export default Searchfood
