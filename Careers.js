import React from 'react'

import './Careers.css'
import careerbgimg from '../../../image/7e0e3e50-illustator.png'
import chair from '../../../image/large beautiful chair.png'
import coworker from '../../../image/greate coworker.png'
import location from '../../../image/easy location.png'
import eduimg from '../../../image/eduaction opportunity.png'
import imgsec1 from '../../../image/acolytegp1.jpeg'
import imgsec2 from '../../../image/acolytegp2.jpeg'
import imgsec3 from '../../../image/acolytegp3.jpeg'
import imgsec4 from '../../../image/acolytegp4.jpeg'


function Careers() {
    return (

        <>
            <div className="career1">

                <div className='careerblue'>
                    <h5>Join Us</h5>
                    <h1>our team</h1>
                    <p>Work at the most dynamic agency & unlock your true potential.</p>
                    <button>view opening</button>
                </div>
                <div className='careerwhite'>
                    <img src={careerbgimg} />
                </div>
            </div>
            <div id={'carouselExampleControls'} className="carousel slide mt-3 " data-bs-ride={"carousel"}>
                <h1 className='joinourteam' style={{color:"blue"}}>Are You Ready to <span className='jointext'>Join Our Team?</span> </h1>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgsec1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imgsec2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imgsec3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="facilities">
                <div className="faci-breif">
                    <div>
                        <img src={chair} alt="" />
                        <h2>Large Beautiful Office</h2>
                        <p>Enjoy a comfortable office environment with the most modern and stylish furnishing.</p>
                    </div>
                    <div>
                        <img src={coworker} alt="" />
                        <h2>Great Co-Workers</h2>
                        <p>Get resources for developing your skills and knowledge to kickstart your career.</p>
                    </div>
                    <div>
                        <img src={location} alt="" />
                        <h2>Easy Location</h2>
                        <p>Commute easily to work at your convenience and enjoy compensation for transport costs.</p>
                    </div>
                    <div>
                        <img src={eduimg} alt="" />
                        <h2>Education Opportunities</h2>
                        <p>Get resources for developing your skills and knowledge to kickstart your career.</p>
                    </div>
                    <div>
                        <img src={coworker} alt="" />
                        <h2>Great Co-Workers</h2>
                        <p>Get resources for developing your skills and knowledge to kickstart your career.</p>
                    </div>
                    <div>
                        <img src={location} alt="" />
                        <h2>Easy Location</h2>
                        <p>Commute easily to work at your convenience and enjoy compensation for transport costs.</p>
                    </div>

                </div>
                <div className="yourlife">
                    <h1><span style={{ color: 'rgb(9,9,153)' }}> Your Life At</span> <br /> Careerly</h1>
                    <p>
                        At Careerly we believe in working together and working hard. With over 800,000 happy clients, we are looking for dynamic and creative individuals who are willing to dedicate themselves to providing innovative products and services for our clients.
                        Besides getting the opportunity to unlock your true potential, at Careerly you can also network with some of the most talented people in the industry, go on annual picnics outside the country and enjoy many other benefits by working with us.
                    </p>
                </div>
            </div>
            
            
            
           




        </>
    )
}

export default Careers
