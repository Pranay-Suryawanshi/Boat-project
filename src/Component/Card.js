import React from 'react'

import boat1 from '../image/boat1.webp'
import boat2 from '../image/boat131.webp'
import boat3 from '../image/boAt-181.webp'
import boat4 from '../image/boat-161.webp'
import boat5 from '../image/boat-115.webp'
export default function Card(props) {
  return (
    <div>
        <section class="abd">
            <div class="container-fluid ">
              <div class=" d-flex flex-wrap">
                <div class="img-fluid col-sm-6 p-5">
                  <p class="display-1">
                    True Wireless
                  <br/>
                  <span>
                    <strong>Earbuds</strong>
                  </span>
                  </p>
                  <p class="sub_heading">
                    <h2>
                      Starting from ₹999*
                     </h2>

                  </p>
                </div>

                <div class="col-sm-6">
                <img src={boat1} height={"500px"} class="img-fluid"/>
               </div>
                
              </div>
              

            </div>
            
          

          <div>
        <h3 class="px-5">
            {props.best}
            <strong>{props.seller}</strong>
        </h3>
        
        <div class="container-fludi mx-5">
          <div class="row">
            <div class="col-sm-3">
              <div class="card ">
                <img src={boat2} class="card-img-top" alt="..."/>
                <button class="btn-second">60 Hours Playback</button>
                <div class="card-body">
                  <b class="card-title">Airdopes 131</b>
                  <h6 class="card-title "><b>₹899</b>&nbsp;
                  <small class="text-body-secondary">₹2999</small>
                  </h6>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary bg-dark rounded-3 col-12">Add to Cart</a>
                </div>
              </div>

            </div>
            
            <div class="col-sm-3">
              <div class="card">
                <img src={boat3}class="card-img-top" alt="..."/>
                <button class="btn-second">20 Hours Playback</button>
                <div class="card-body">
                <b class="card-title">Airdopes 181</b>
                  <h6 class="card-title"><b>₹1,099</b>&nbsp;
                  <small class="text-body-secondary">₹2990</small>
                  </h6>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary bg-dark rounded-3 col-12">Add To Cart</a>
                </div>
              </div>

            </div>
            
            
            <div class="col-sm-3">
              <div class="card" >
                <img src={boat4} class="card-img-top" alt="..."/>
                <button class="btn-second">40 Hours Playback</button>
                <div class="card-body">
                <b class="card-title">Airdopes 161</b>
                  <h6 class="card-title"><b>₹999</b>&nbsp;
                  <small class="text-body-secondary">₹2490</small>
                  </h6>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary bg-dark rounded-3 col-12">Add To Cart</a>
                </div>
              </div>

            </div>
            
            
            <div class=" col-sm-3">
              <div class="card">
                <img src={boat5} class="card-img-top" alt="..."/>
                <button class="btn-second">Clear Calling</button>
                <div class="card-body">
                <b class="card-title">Airdopes 115</b>
                  <h6 class="card-title"><b>₹1,299</b>&nbsp;
                  <small class="text-body-secondary">₹2990</small>
                  </h6>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary bg-dark rounded-3 col-12">Add To Cart</a>
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
