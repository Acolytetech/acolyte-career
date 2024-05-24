import React from 'react'
import './Home.css'

import AOS from 'aos';

function Home() {
  return (
   <>
   {/* <div className="section1">
                <div className="form">
                    <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Safe home for every student</h1>
                    <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Find your perfect student accommodation, close to university & close to life</p>
                    <form action="" className="search" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div>
                            <button type="submit"><i className="fa-2x text-dark px-2 ms-1"></i></button>
                            <input type="search" placeholder="search by city" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="section2" data-aos="fade-up">
                <div className="sec1">
                    <img src="" alt="" style={{ transform: 'scale(1)' }} />
                    <div>
                        <h3>2Mn+</h3>
                        <h6>Beds</h6>
                    </div>
                </div>
                <div className="sec2">
                    <img src="image/properties.webp" alt="" style={{ transform: 'scale(0.5)' }} />
                    <div>
                        <h3>2Mn+</h3>
                        <h6>Properties</h6>
                    </div>
                </div>
                <div className="sec3">
                    <img src="image/mn-students.webp" alt="" style={{ transform: 'scale(0.5)' }} />
                    <div>
                        <h3>2Mn+</h3>
                        <h6>Student Assisted</h6>
                    </div>
                </div>
                <div className="sec4">
                    <img src="image/global-cities.webp" alt="" style={{ transform: 'scale(0.5)' }} />
                    <div>
                        <h3>2Mn+</h3>
                        <h6>Global Cities</h6>
                    </div>
                </div>
            </div>
            <div className="section3">
                <h2 style={{ marginLeft: '20px' }}>Let us find your perfect home!</h2>
                <div className="sec31">
                    <div className="sec311">
                        <img data-aos="zoom-in-down" src="image/search-compare.webp" alt="" />
                        <h5>Search - Compare - Relax</h5>
                        <p>Choose from 1.5 Mn 100% verified student rooms near the university & compare between the best options.</p>
                    </div>
                    <div className="sec311">
                        <img data-aos="zoom-in-down" src="image/easy-peasy.webp" alt="" />
                        <h5 style={{ marginTop: '10px' }}>Easy Peasy</h5>
                        <p>Choose from 1.5 Mn 100% verified student rooms near the university & compare between the best options.</p>
                    </div>
                    <div className="sec311">
                        <img data-aos="zoom-in-down" src="image/pricematch.webp" alt="" />
                        <h5 style={{ marginTop: '10px' }}>Price Match Guarantee</h5>
                        <p>Choose from 1.5 Mn 100% verified student rooms near the university & compare between the best options.</p>
                    </div>
                </div>
            </div>
            <div className="pic-ctn">
                <img src="https://picsum.photos/200/300?t=1" alt="" className="pic" />
                <img src="https://picsum.photos/200/300?t=2" alt="" className="pic" />
                <img src="https://picsum.photos/200/300?t=3" alt="" className="pic" />
                <img src="https://picsum.photos/200/300?t=4" alt="" className="pic" />
                <img src="https://picsum.photos/200/300?t=5" alt="" className="pic" />
            </div> */}
<header>
  <div className="container">
    <div className="row">
      <div className="col">
        <h1 data-aos={'fade-up'} data-aos-duration="3000"><span>acolyte</span> <br/> <span>technologies</span></h1>
        <p>
          Embrace the talent <span style={{ color: "aqua" }}>revolution</span> to remain <span
            style={{ color: "aqua" }}>relevant</span> in the future!
        </p>
      </div>
    </div>
  </div>
</header>

<div className="section2">
  <img src="image/Industrial Structure.webp" alt="" data-aos="fade-right" data-aos-duration="3000"/>
  <div className="ourvission">
    <h1 data-aos="fade-down" data-aos-duration="2000">Our Vision</h1>
    <p data-aos="fade-up">
      Creating value from data and relationships between objects helps us evaluate the use case and make
      digital solutions.
    </p>
  </div>
  <hr style={{ backgroundColor: "aliceblue", height: "2px", width: "90%" }}/>
  <div className="section3">
    <div className="ourvission">
      <h1 data-aos="fade-down" data-aos-duration="2000">Our Mission</h1>
      <p data-aos="fade-up">
        Creating value from data and relationships between objects helps us evaluate the use case and make
        digital solutions.
      </p>
    </div>
    <img src="https://i.pinimg.com/originals/92/0f/32/920f32f24b9514d46b0ef8ed20949130.gif" alt=""
      data-aos="fade-right" data-aos-duration="3000"/>
  </div>
</div>

<div className="ourventure">
  <center>
    <h1 style={{ color: "white", margin: 0, padding: 0, textTransform: "capitalize" }}>our venture</h1>
  </center>
  <div className="ourven">
    <div className="container">
      <div className="card" data-aos="fade-left" data-aos-duration="3000">
        <div className="face face1 ">
          <div className="content  ">
            <a href="#"><img src="image/project vala logo.png" alt="" style={{ transform: "scale(3)" }}/></a>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              ProjectVala is an online platform to order content for educational and professional needs.
            </p>
            <a href="#">Our Page</a>
          </div>
        </div>
      </div>
      <div className="card" data-aos="fade-up" data-aos-duration="3000">
        <div className="face face1">
          <div className="content w-100 text-center">
            <a href="#">
              <img src="image/logo-white.png" style={{ transform: "scale(3)" }}/>
            </a>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              Find the perfect freelancer for your business. People use zestur to turn their ideas into
              reality.
            </p>
            <a href="#">Our Page</a>
          </div>
        </div>
      </div>
      <div className="card" data-aos="fade-right" data-aos-duration="3000">
        <div className="face face1">
          <div className="content">
            <a href="#">
              <img src="image/startipflora.jpeg" style={{ transform: "scale(3)" }}/>
            </a>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              Find the perfect freelancer for your business. People use zestur to turn their ideas into
              reality.
            </p>
            <a href="#">Our Page</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


   </>
  )
}

export default Home
