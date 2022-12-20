import React from 'react'
import LogoutButton from '../imports/client/LogoutButton'
import {CgProfile} from "react-icons/cg"



export default function Client() {
  return (
    <div>
       <div>
      <nav>
        <div className="container">
            <div className="row p-2">
                <div className=" col-xl-9 col-md-8 col-sm-6 col-3">
                    <div className="logo  ">Hire</div>
                  
                </div>
                <div className="col-xl-3 col-md-4  col-sm-6 col-9 d-flex justify-content-end align-items-center ">
                <LogoutButton/>
                <CgProfile className='profile'/>

                </div>
            </div>
        </div>
      </nav>
    </div>
    </div>
  )
}
