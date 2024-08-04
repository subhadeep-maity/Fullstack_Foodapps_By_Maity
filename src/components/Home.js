import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    var navigate=useNavigate();
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <img src='https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/68218/optimized_product_thumb_stage.jpg' 
      height="300px" width="300px" alt='NO IMAGE'/>
      <br></br><br></br>
      <button className='btn btn-outline-primary'onClick={()=>{
        navigate("/login");
      }}>LOGIN</button>&nbsp;&nbsp;
      <button className='btn btn-outline-primary' onClick={()=>{
        navigate("/signup");
      }}>SINUP</button>&nbsp;&nbsp;
    </div>
  )
}

export default Home
