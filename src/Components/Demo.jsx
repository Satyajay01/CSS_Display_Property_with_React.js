import React from 'react'
import './Demo.css'

function Demo() {

  return (
    <>
        <div className="main">
          
         <button onClick={()=> {const mybutton =document.querySelector(".box")
         
         mybutton.style.display="none";
        
        }} >MyButton</button>

            <div className="box"></div>

            
        </div>
    
    </>
  )
}

export default Demo