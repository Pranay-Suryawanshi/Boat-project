import React from 'react'
import headset from '../image/headphone.webp'
import headset1 from '../image/headset1.webp'
import headset2 from '../image/headset2.webp'
import headset3 from '../image/headset3.gif'
import headset4 from '../image/headset4.webp'


export default function () {
  return (
    <div>
         <section className=" head">
            <div className="container-fluid col-ms-6">
              <div className=" d-flex flex-wrap">
                <div className="image-with-text-block__text-container  col-lg-6 p-5">
                  <p className="pt-5">
                  
                  <br/>
                  <span>
                    <strong>Neckbands</strong>
                  </span>
                  </p>
                  <p className="sub_heading">
                    <h2>
                      Starting from ₹999*
                     </h2>

                  </p>
                </div>

                <div className="col-lg-6 ">
                <img src={headset} className="img-fluid "/>
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
                <img src={headset1} className="card-img-top" alt="..."/>
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
                <img src={headset2}className="card-img-top" alt="..."/>
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
                <img src={headset3} className="card-img-top" alt="..."/>
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
                <img src={headset4} className="card-img-top" alt="..."/>
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
