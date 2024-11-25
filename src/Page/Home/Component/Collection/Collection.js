import React from 'react';
import { Component } from 'react';
import './Collection.css';



class Collection extends Component {
    render() {
        return (
            <div className='container my-3'>
                <div className='container '>
                    <h6 id='spotlight'>IN THE SPOTLIGHT</h6>
                    <h4>New Collection</h4>
                </div>
                <div className='row d-flex justify-content-center  '>
                    <div className='col-lg-4 col-sm-6 '>
                        <img className='img-fluid' src={require("../assests/images/newcollection1.webp")} alt="" />
                    </div >
                    <div className='col-lg-4 col-sm-6'>
                        <img className='img-fluid' src={require("../assests/images/newcollection2.webp")} alt="" />
                    </div>
                    <div className='col-lg-4 col-sm-6'>
                        <img className='img-fluid' src={require("../assests/images/newcollection3.webp")} alt="" />
                    </div>

                </div>


                <hr className="hr"/><p className='d-flex justify-content-center' id ="ethos">OUR ETHOS</p><hr className="hr"/>

                {/* OUR ETHOS */}

                <div className='row '>

                    <div className='col-lg-3 col-sm-3 d-flex '>
                        <div className="img-fluid ">
                            <img src={require("../assests/images/ouretho.webp")} alt="" />
                        </div>
                        <p>Authentic <br />Ayurvedic<br /> Formulations</p>
                    </div>
                    <div className='col-lg-3 col-sm-3 d-flex justify-content-center'>
                        <div>
                            <img src={require("../assests/images/ouretho2.webp")} alt="" />
                        </div>
                        <p>Made with<br /> Organic<br /> Ingredients</p>
                    </div>
                    <div className='col-lg-3 col-sm-3 d-flex d-flex justify-content-end'>
                        <div>
                            <img src={require("../assests/images/ouretho3.webp")} alt="" />
                        </div>
                        <p>Fair Trade <br />Sourcing</p>
                    </div>
                    <div className='col-lg-3 col-sm-3 d-flex d-flex justify-content-end'>
                        <div>
                            <img src={require("../assests/images/ouretho4.webp")} alt="" />
                        </div>
                        <p>No Harsh<br /> Chemicals</p>
                    </div>

                </div>
                {/* END OUR ETHOS */}


                {/* MORE ABOUT */}

                <div className='container row'>
                    <div className='col-lg-6 col-sm-6'>
                        <img className='img-fluid' src={require("../assests/images/moreabout.webp")} alt="" />
                    </div>
                    <div className='col-lg-6 col-sm-6 p-5'>
                        <h3>Inspired by the Himalayas.
                            Enriched with honest ingredients.
                            Crafted the Ayurvedic way.
                        </h3>
                        <p>
                            In a world full of beauty quick fixes and chemically aided makeovers,
                            choose the path of nurture with nature.
                            From soil to shelf, and from skin to soul,
                            each product from SoulTree contributes to the Circle of Goodness.
                        </p>
                        <button className='btn' type="button" id="morebtn">MORE ABOUT US</button>
                    </div>
                </div>

                {/* END MORE ABOUT */}

            </div>
        );
    }
}








export default Collection;