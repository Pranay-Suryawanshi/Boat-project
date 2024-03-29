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
          <><nav className="navbar navbar-expand-lg bg-white border py-4">
          <div className="container-fluid">
            <a className="navbar-brand px-5" href="#"><img src={boat} height={"35px"} /></a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-divider"></a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">boAt Personalistion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Gift with boAt</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Corporate orders</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Daily Deals</a></li>
                    <li><a className="dropdown-item" href="#">Do What FloAts Your boAt</a></li>
                    <li><a className="dropdown-item" href="#">Blogs</a></li>
                    <li><a className="dropdown-item" href="#">Earn ₹100</a></li>
                    <li><a className="dropdown-item" href="#">Careers</a></li>
                    <li><a className="dropdown-item" href="#">Social Responsibility</a></li>
                    <li><a className="dropdown-item" href="#">Store Locator</a></li>
                  </ul>
                </li>

              </ul>
              <form className="d-flex" role="search">
                <input type="search" className="rounded-pill"></input>


              </form>
            </div>
          </div>

        </nav>

        <section className="pt-5 abc">
            <div className="container-fluid col-ms-6">
              <div className=" d-flex flex-wrap">
                <div className="image-with-text-block__text-container  col-lg-6 p-5">
                  <p className="pt-5">
                    True Wireless
                  <br/>
                  <span>
                    <strong>Earbuds</strong>
                  </span>
                  </p>
                  <p className="sub_heading">
                    <h2>
                      Starting from ₹999*
                     </h2>

                  </p>
                </div>

                <div className="col-lg-6  py-lg-3">
                <img src={boat1} className="img-fluid "/>
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
                <img src={boat2} className="card-img-top" alt="..."/>
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
                <img src={boat3}className="card-img-top" alt="..."/>
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
                <img src={boat4} className="card-img-top" alt="..."/>
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
                <img src={boat5} className="card-img-top" alt="..."/>
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
        </>

        
        }
    </div>
  )
}
