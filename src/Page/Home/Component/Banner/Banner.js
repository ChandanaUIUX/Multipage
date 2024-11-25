import React from 'react';
import { Component } from 'react';
import "./Banner.css";


class Banner extends Component {
    render() {
        return (
            <div className='container my-5'>
                <div className='Bannerimg my-4'>
                    <img className='img-fluid' src={require("../assests/images/banner.png")} alt="" />
                </div>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='row'>
                            <div className='col-lg-2 col-sm-2'><img className='img-fluid' src={require("../assests/images/Fragrance-icon.webp")} alt="" /></div>
                            <div className='col-lg-6 col-sm-2'><p>No Synthetic<br />Fragrance</p></div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='row'>
                            <div className='col-lg-2 col-sm-2'><img src={require("../assests/images/crutely-free-icon.webp")} alt="" /></div>
                            <div className='col-lg-6 col-sm-2'><p>Cruelty free &  <br /> 100% vegetarian</p></div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='row'>
                            <div className='col-lg-2 col-sm-2'><img src={require("../assests/images/source-ingredienticon.webp")} alt="" /></div>
                            <div className='col-lg-6 col-sm-2'><p>Sustainably<br /> Sourced<br /> Ingredients</p></div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='row'>
                            <div className='col-lg-2 col-sm-2'><img src={require("../assests/images/paraban-freeicon.webp")} alt="" /></div>
                            <div className='col-lg-6 col-sm-2'><p>SLS/SLES Free and Paraben Free</p></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}




export default Banner;