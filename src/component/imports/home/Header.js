import React,{useState} from 'react'
import {BrowserRouter,routes,route} from 'react-router-dom';
import Loginbutton from './Loginbutton';
import Signupbutton from './Signupbutton';


export default function Header() {
   
  return (
    <div>
      <nav>
        <div className="container">
            <div className="row p-2">
                <div className=" col-xl-9 col-md-8 col-sm-6 col-3">
                    <div className="logo  ">Hire</div>
                </div>
                <div className="col-xl-3 col-md-4  col-sm-6 col-9 d-flex justify-content-end align-items-center ">
                <Signupbutton/>
                 <Loginbutton/>

                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}
