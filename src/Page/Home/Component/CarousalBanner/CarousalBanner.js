import React from 'react';
import { Component } from 'react';

class CarousalBanner extends Component {
    render() {
        return (
            <div >
                <div id="carouselExample" class="carousel slide">
                    <div className="carousel-inner">
                        <div class="carousel-item active">
                            <img className='img-fluid' src={require("../assests/images/nav banner1.webp")} class="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img className='img-fluid' src={require("../assests/images/nav banner2.webp")} class="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img className='img-fluid' src={require("../assests/images/nav banner3.webp")}class="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img className='img-fluid' src={require("../assests/images/nav banner4.webp")}class="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img className='img-fluid' src={require("../assests/images/nav banner5.webp")}class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}



export default CarousalBanner;