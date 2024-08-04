import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function SignUp() {
    let[Register,setRegister]=useState({
        uname:"",
        pass:"",
        nm:""
    })
    let[msg,setMsg]=useState("");

    const refreshData=()=>{
        setRegister({
        uname:"",
        pass:"",
        nm:""
        })
      setMsg("");
      }
      let[errors,seterrors]=useState({
        uname:"",
        pass:"",
        nm:""
      })
      const validForm=()=>{
        var isValid=true;
        var newErrors=({
        uname:"",
        pass:"",
        nm:""
        })
        if(Register.uname.trim().length<=4)
        {
            newErrors.uname="USERNAME MUST BE ATLIST 5 CHARACTER";
            isValid=false;
        }
        if(Register.pass.trim().length<=4)
            {
                newErrors.pass="PASSWORD MUST BE ATLIST 5 CHARACTER";
                isValid=false;
            }
            if(Register.nm.trim().length<=0)
                {
                    newErrors.nm="NAME MUST BE ATLIST 5 CHARACTER";
                    isValid=false;
                }
                seterrors(newErrors);
                return isValid;
      }
      const addData=()=>{
        axios.post("http://localhost:1004/register/add",Register)
        .then((res)=>{
            console.log(res.data);
            setRegister(res.data);
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOME THING WRONG ON ADDING DATA");
         })
      }
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>SIGNUP</h2>
      <marquee>DISCOUNT OFFER</marquee>
      <input type='text' placeholder='enter your username'  className='form-control' value={Register.uname}
       onChange={(event)=>{
         setRegister({
          ...Register,
          uname:event.target.value        
         })
      }}></input>
      <h3 style={{color:"red"}}>{errors.uname}</h3>
      <br></br><br></br>
      <input type='password' placeholder='enter your password'  className='form-control' value={Register.pass}
       onChange={(event)=>{
         setRegister({
          ...Register,
          pass:event.target.value        
         })
      }}></input>
      <h3 style={{color:"red"}}>{errors.pass}</h3>
      <br></br><br></br>
      <input type='text' placeholder='enter your name'  className='form-control' value={Register.nm}
       onChange={(event)=>{
         setRegister({
          ...Register,
          nm:event.target.value        
         })
      }}></input>
      <h3 style={{color:"red"}}>{errors.nm}</h3>
      <br></br><br></br>
      <button  className='btn btn-outline-primary'  onClick={()=>{
        if(validForm()===true){
            addData();
        }
      }}>SIGNUP</button>&nbsp;&nbsp;
      <button  className='btn btn-outline-primary' onClick={refreshData}>REFRESH</button>&nbsp;&nbsp;
      <h3>{msg}</h3>
    </div>
  )
}

export default SignUp
