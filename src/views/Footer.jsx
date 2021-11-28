import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="foot1">
                <div className="left-section">
                    <div className="l-2">
                        <h3 style={{color:"#fff",fontWeight:"1000",position:'relative',left:"1.9rem",top:"15px"}}>SQUARE</h3>
                    </div>
                    <div className="social-icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-pinterest"></i>
                        <i class="fab fa-instagram"></i>
                    </div>

                </div>
                <div className="right-section">
                    <div className="contact">
                        <div className="services">
                            <h5>SERVICES</h5>
                             <a href='/' style={{marginTop:"1.3rem"}}>UI Kit</a>  
                             <a href='/'>Documentation</a>  
                             <a href='/'>Page builder</a>


                        </div>
                        <div className="company">
                            <h5>COMPANY</h5>
                             <a href='/' style={{marginTop:"1.3rem"}}>UI Kit</a>
                             <a href='/'>Contact Us</a>
                             <a href='/'>About us</a>

                        </div>
                        <div className="help">
                            <h5>HELP</h5>
                            <a href='/' style={{marginTop:"1.3rem"}}>FAQS</a>
                            <a href='/'>Pricing</a>
                            <a href='/'>Terms</a>

                        </div>

                    </div>

                </div>
            </div>

            <hr />
            <div className="foot2">
                <p>Privacy Policy | Cookie Policy</p>
                <p>Square, 2020 Webinning ltd</p>

            </div>
            
        </div>
    )
}

export default Footer
