import React from 'react'
import party from '../image/party.webp'
import party1 from '../image/Party1.webp'
import party2 from '../image/party2.webp'
import party3 from '../image/party3.webp'
import party4 from '../image/party4.webp'
export default function PartySpeakers() {
  return (
    <div>
        <section className="abd">
        <div className="container-fluid col-ms-6 ">
          <div className=" d-flex flex-wrap">

            <div className="col-sm-7 col-lg-6">
              <img src={party} className="img-fluid" />
            </div>

            <div className="col-sm-5 col-lg-6 pt-4">
              
              <p className="pt-5 d-flex flex-wrap justify-content-center pt-4">
              Party
              <span>
              <strong>Speakers</strong>
              </span>
              </p>
              <p className="d-flex justify-content-center">
                <h2>
                  Starting from ₹999*
                </h2>

              </p>
              <span className='d-flex justify-content-center'>
              <button className="bg-dark text-white py-1 mx-1 col-3 rounded-3"> Shop Products</button>
              </span>
            </div>
          </div>


        </div>



        <div>
          <h3 className="px-5">
            Best
            <strong>Sellers</strong>
          </h3>

          <div className="container-fludi mx-5">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card ">
                <img src={party1} className="card-img-top" alt="..."/>
                <button className="btn-second">Activity Tracker</button>
                <div className="card-body">
                  <b className="card-title">Storm</b>
                  <h6 className="card-title "><b>₹1,499</b>&nbsp;
                  <small className="text-body-secondary line-through">₹5990</small>
                  <span class="off m-0 pr-2"> 75% off</span>
                  </h6>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary bg-dark rounded-3 col-12">Add to Cart</a>
                </div>
              </div>

            </div>
            
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img src={party2}className="card-img-top" alt="..."/>
                <button className="btn-second">BT Calling</button>
                <div className="card-body">
                <b className="card-title">Wave Call</b>
                  <h6 className="card-title"><b>₹1,699</b>&nbsp;
                  <small className="text-body-secondary line-through">₹7,990</small>
                  <span class="off m-0 pr-2"> 79% off</span>                  
                  </h6>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary bg-dark rounded-3 col-12">Add To Cart</a>
                </div>
              </div>

            </div>
            
            
            <div className="col-lg-3 col-sm-6">
              <div className="card" >
                <img src={party3} className="card-img-top" alt="..."/>
                <button className="btn-second">Alexa Enabled</button>
                <div className="card-body">
                <b className="card-title">Xtend</b>
                  <h6 className="card-title"><b>₹1,899</b>&nbsp;
                  <small className="text-body-secondary line-through">₹2990</small>
                  <span class="off m-0 pr-2"> 76% off</span>                 
                   </h6>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary bg-dark rounded-3 col-12">Add To Cart</a>
                </div>
              </div>

            </div>
            
            
            <div className=" col-lg-3 col-sm-6">
              <div className="card">
                <img src={party4} className="card-img-top" alt="..."/>
                <button className="btn-second">Clear Calling</button>
                <div className="card-body">
                <b className="card-title">Airdopes 115</b>
                  <h6 className="card-title"><b>₹1,499</b>&nbsp;
                  <small className="text-body-secondary line-through">₹7,990</small>
                  <span class="off m-0 pr-2"> 81% off</span>                  
                  </h6>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary bg-dark rounded-3 col-12">Add To Cart</a>
                </div>
              </div>

            </div>
          </div>

            

            
        </div>
        </div>
      </section>
    </div>
  )
}
