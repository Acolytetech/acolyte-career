import React from 'react'

import './Footer.css'

function Footer() {
  return (
    
    <footer className="site-footer">
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                    Accommodation is a crucial aspect of travel, offering temporary lodging for travelers. Options range from hotels and bed-and-breakfasts to hostels, campsites, and Airbnb rentals. Each type of accommodation caters to different preferences and budgets, providing a place to rest and recharge during adventures.
                </p>
            </div>
            <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                    <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                    <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                    <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                    <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                    <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                    <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                </ul>
            </div>
            <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                    <li><a href="http://scanfcode.com/about/">About Us</a></li>
                    <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                    <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                    <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                </ul>
            </div>
        </div>
        <hr />
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                    <a href="#">Scanfcode</a>.
                </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
