import React from 'react'
import img from '../../../images/sec1.jpeg';

export default function Section1() {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
            <div className="col-12 col-md-6">
                <img src={img} alt="" width="500px" />
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div>
              <h2>Post Your Jobs With Ease</h2>
                <h4>Easy three Step process</h4>
                <ol>
                    <li>Simple Free Sign Up</li>
                    <li>Post Your Job Details</li>
                    <li>View the Application from Freelancers</li>
                </ol>
                <p>Talk with them and hire Them For Your Works</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
