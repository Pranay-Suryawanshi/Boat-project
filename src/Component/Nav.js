import React from 'react'
import boat from '../image/boat.svg'
import boat1 from '../image/boat1.webp'
import boat2 from '../image/boat131.webp'
import boat3 from '../image/boAt-181.webp'
import boat4 from '../image/boat-161.webp'
import boat5 from '../image/boat-115.webp'

export default function Nav(props) {
  return (
    <div>
        {
          <><nav class="navbar navbar-expand-lg bg-white border py-4">
          <div class="container-fluid ">
            <a class="navbar-brand px-5" href="#"><img src={boat} height={"35px"} /></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-divider"></a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">boAt Personalistion</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Gift with boAt</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Corporate orders</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Daily Deals</a></li>
                    <li><a class="dropdown-item" href="#">Do What FloAts Your boAt</a></li>
                    <li><a class="dropdown-divider"></a>Blogs</li>
                    <li><a class="dropdown-item" href="#">Earn ₹100</a></li>
                    <li><a class="dropdown-item" href="#">Careers</a></li>
                    <li><a class="dropdown-item" href="#">Social Responsibility</a></li>
                    <li><a class="dropdown-item" href="#">Store Locator</a></li>
                  </ul>
                </li>

              </ul>
              <form class="d-flex" role="search">
                <input type="search" class="rounded-pill"></input>


              </form>
            </div>
          </div>

        </nav>

        <section class="pt-5 abc">
            <div class="container-fluid col-ms-6">
              <div class="image-with-text-block__content content-box--text-center content-box--true text-container d-flex flex-wrap">
                <div class="image-with-text-block__text-container img-fluid col-lg-6 p-5">
                  <p class="display-1 border pt-5">
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

                <div class="col-lg-6  py-lg-3">
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
        </>

        
        }
    </div>
  )
}
