import React from 'react';
import { Component } from 'react';
import './Ingredient.css';


class Ingredient extends Component {
    render() {
        return (
            <div className='container-fluid '>
                <div className='container my-5'>
                    <h6 className=''>Truth starts here</h6>
                    <h4>Shop By Ingredients</h4>
                </div>
                <div className='row'>
                    <div className='col-lg-2 '>
                        <img className='rounded-circle img-fluid' src={require("../assests/images/ingredient1.webp")} alt="" />
                    </div>
                    <div className='col-lg-2'>
                        <img className='rounded-circle img-fluid'src={require("../assests/images/ingredient2.webp")} alt="" />
                    </div>
                    <div className='col-lg-2'>
                        <img className='rounded-circle img-fluid' src={require("../assests/images/ingredient3.webp")} alt="" />
                    </div>
                    <div className='col-lg-2'>
                        <img className='rounded-circle img-fluid' src={require("../assests/images/ingredient4.webp")} alt="" />
                    </div>
                    <div className='col-lg-2'>
                        <img className='rounded-circle img-fluid' src={require("../assests/images/ingredient5.webp")} alt="" />
                    </div>
                    <div className='col-lg-2'>
                        <img className='rounded-circle img-fluid' src={require("../assests/images/ingredient6.webp")} alt="" />
                    </div>
                    <div className='col-lg-2'>
                        <img className='rounded-circle img-fluid' src={require("../assests/images/ingredient7.webp")} alt="" />
                    </div>
                    <div className='col-lg-2'>
                        <img className='rounded-circle img-fluid' src={require("../assests/images/ingredient8.webp")} alt="" />
                    </div>
                    <div className='col-lg-2'>
                        <img className='rounded-circle img-fluid' src={require("../assests/images/ingredient9.webp")} alt="" />
                    </div>

                </div>

            </div >
        );
    }
}







export default Ingredient;