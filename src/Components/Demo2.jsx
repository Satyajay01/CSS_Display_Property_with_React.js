import React from 'react'
import './Demo.css'

function Demo2() {

    function MyFun1() {
      const mybutton =document.querySelector(".box");
      mybutton.style.display="block";
    }

    function MyFun2() {
      const mybutton =document.querySelector(".box");
      mybutton.style.display="flex";
    }

  return (
    <>
         <button onClick={MyFun1} >MyButton block</button>
         <button onClick={MyFun2} >MyButton flex</button>

            <div className="box">

                <div className="child"></div>
                <div className="child"></div>
                <div className="child"></div>
            </div>
    </>
  )
}

export default Demo2