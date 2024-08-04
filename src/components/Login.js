import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function Login() {
    let[Register,setRegister]=useState({
        uname:"",
        pass:""
       
    })
    
    let[msg,setMsg]=useState("");
    
    const refreshData=()=>{
        setRegister({
        uname:"",
        pass:""
       
        })
      setMsg("");
      }
      const fetchDeta=(uname,pass)=>{
        alert(uname);
        alert(pass);
        axios.get(`http://localhost:1004/register/login/${uname}/${pass}`)
        .then((res)=>{
            console.log(res.data);
            //setRegister(res.data);
            if(res.data==="LOGIN SUCCSSFULL")
            {
                navigate("/nav1");
            }
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOME THING WENT WRONG ON FETCHING DATA,PLEASE TRY AGAIN LETTER");
         })
      }
    var navigate=useNavigate();
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>LOGIN PAGE</h2>
      <input type='text' placeholder='enter your username'  className='form-control' value={Register.uname}
       onChange={(event)=>{
         setRegister({
          ...Register,
          uname:event.target.value        
         })
      }}></input>
      <br></br><br></br>
      <input type='password' placeholder='enter your password'  className='form-control' value={Register.pass}
       onChange={(event)=>{
         setRegister({
          ...Register,
          pass:event.target.value        
         })
      }}></input>
      <br></br><br></br>
      <button  className='btn btn-outline-primary' 
      onClick={(uname,pass)=>{
        fetchDeta(Register.uname,Register.pass);
    }}>LOGIN</button>&nbsp;&nbsp;
    
      <button  className='btn btn-outline-primary'onClick={refreshData}>REFRESH</button>&nbsp;&nbsp;
      <button  className='btn btn-outline-primary'onClick={()=>{
        navigate("/");
      }}>HOME PAGE</button>&nbsp;&nbsp;
      <br></br><br></br>
      <h2>{msg}</h2>
    </div>
  )
}

export default Login
