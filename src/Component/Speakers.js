import React from 'react'
import speakers from '../image/Speakers.webp'
import speakers1 from '../image/speakers1.webp'
import speakers2 from '../image/speakers2.webp'
import speakers3 from '../image/speakers3.webp'
import speakers4 from '../image/speakers4.webp'

export default function Speakers() {
  return (
    <div>
        <section className="Speakers">
            <div className="container-fluid col-lx-6">
              <div className='row'>
                <div className="col-sm-6 pt-4 px-5">
                  <p className="pt-5 d-flex flex-wrap">
                    Wireless
                  
                  <span>
                    <strong>Speakers</strong>
                  </span>
                  </p>
                  <p className="sub_heading">
                    <h2>
                      Starting from ₹999*
                     </h2>

                  </p>
                </div>

                <div className="col-sm-6">
                <img src={speakers} className="img-fluid "/>
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
                <img src={speakers1} className="card-img-top" alt="..."/>
                <button className="btn-second">60 Hours Playback</button>
                <div className="card-body">
                  <b className="card-title">Airdopes 131</b>
                  <h6 className="card-title "><b>₹899</b>&nbsp;
                  <small className="text-body-secondary line-through">₹2999</small>
                  <span class="off m-0 pr-2"> 70% off</span>
                  </h6>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary bg-dark rounded-3 col-12">Add to Cart</a>
                </div>
              </div>

            </div>
            
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img src={speakers2}className="card-img-top" alt="..."/>
                <button className="btn-second">20 Hours Playback</button>
                <div className="card-body">
                <b className="card-title">Airdopes 181</b>
                  <h6 className="card-title"><b>₹1,099</b>&nbsp;
                  <small className="text-body-secondary line-through">₹2990</small>
                  <span class="off m-0 pr-2"> 71% off</span>
                  </h6>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary bg-dark rounded-3 col-12">Add To Cart</a>
                </div>
              </div>

            </div>
            
            
            <div className="col-lg-3 col-sm-6">
              <div className="card" >
                <img src={speakers3} className="card-img-top" alt="..."/>
                <button className="btn-second">40 Hours Playback</button>
                <div className="card-body">
                <b className="card-title">Airdopes 161</b>
                  <h6 className="card-title"><b>₹999</b>&nbsp;
                  <small className="text-body-secondary line-through">₹2490</small>
                  <span class="off m-0 pr-2"> 57% off</span>
                  </h6>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary bg-dark rounded-3 col-12">Add To Cart</a>
                </div>
              </div>

            </div>
            
            
            <div className=" col-lg-3 col-sm-6">
              <div className="card">
                <img src={speakers4} className="card-img-top" alt="..."/>
                <button className="btn-second">Clear Calling</button>
                <div className="card-body">
                <b className="card-title">Airdopes 115</b>
                  <h6 className="card-title"><b>₹1,299</b>&nbsp;
                  <small className="text-body-secondary line-through">₹2990</small>
                  <span class="off m-0 pr-2"> 60% off</span>
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
