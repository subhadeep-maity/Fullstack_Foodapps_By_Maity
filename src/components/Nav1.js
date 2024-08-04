import React from 'react'
import "./Nav1.css"
function Nav1() {
  return (
    <div className='nav-main'>
        {/* <h2>MAIN CONTAINER</h2> */}
      <div className='nav-left'>
      <h2>MY FIRST FOOD APPS</h2>
      </div>
      <div className='nav-right'>
      <a href='/food'>FOOD</a>
      <a href='/contact'>CONTACT US</a>
      
      </div>
    </div>
    
  )
}

export default Nav1
