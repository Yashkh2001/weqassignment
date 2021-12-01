import React from 'react'

const About = () => {
    return (
        <div className='about'>
            <div className="about-content">
                
                <div className="content-text">
                    <h2> <span style={{fontWeight:"900"}}> Visual Positioning System </span> (VPS) <span style={{fontWeight:"900"}}>and</span> Obstacle Avoidance</h2>
                    <p style={{fontWeight:"900",marginTop:"3vh"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo ipsam veritatis enim eveniet libero sunt cumque <br />, ullam provident at! </p>
                    <p style={{fontWeight:"900",marginTop:"3vh"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur tenetur velit nam earum est cumque? Facere molestiae soluta laudantium autem corporis, voluptatibus alias vero repudiandae! Tempore earum molestias cum voluptatum!</p>
                    <button className='btn btn-dark'>READ MORE &gt;</button>
                </div>
                

            </div>

            <div className="about-cards">
                <div className="row cards">
                    <div className="col-lg-6 col-md-6 col-sm-3">
                        <div className="card card-red mt-4">
                            <i class="far fa-eye fa-2x"></i>
                            <h4>Navigation</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-3">
                        <div className="card mt-4 jj">
                            <i class="fas fa-map-marker-alt fa-2x"></i>
                            <h4>Distance</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-3">
                        <div className="card  mt-4">
                            <i class="fas fa-camera fa-2x"></i>
                            <h4>Panaroma</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-3">
                        <div className="card  mt-4">
                            <i class="fas fa-globe fa-2x"></i>
                            <h4>Positioning</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>

           
                </div> 
        </div>
    )
}

export default About
