import React from 'react';
import bannerImg from '../../../images/banner.webp'

export default function Banner() {
  return (
    <div>
      <section className='banner'>
        <div className="container banner-inner " >
            <div className="row my-auto ">
                <div className="col-xl-5 col-md-6 col-sm- col-12  ">
                    <p>Best Choice</p>
                    <h1>Hire is the best platform for Hiring Freelancer</h1>
                    <br />
                    <h4>Get Your Projects Done by connecting with the freelancer all over the World</h4>
                    <br />
                    <button type="button" className="btn btn-primary">Get Started by SignUp</button>
                </div>
            </div>
            
        </div>
      </section>
    </div>
  )
}
