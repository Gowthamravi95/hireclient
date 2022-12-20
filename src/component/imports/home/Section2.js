import React from 'react'
import img from '../../../images/sec2.jpg';

export default function Section2() {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
               <div>
               <h2>Get Hired With Ease</h2>
                <h4>Easy three Step process</h4>
                <ol>
                    <li>Simple Free Sign Up</li>
                    <li>View The project works Uploaded by Hirer</li>
                    <li>Aplly to the project If skills matched</li>
                </ol>
                <p>Talk with them and Work for them and get Paid</p>
               </div>
            </div>
            <div className="col-12 col-md-6">
                <img src={img} alt="" width="500px" />
            </div>
            
        </div>
      </div>
    </div>
  )
}
