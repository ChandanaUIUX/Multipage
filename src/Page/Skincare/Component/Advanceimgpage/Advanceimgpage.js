import React from 'react';
import { Component } from 'react';
import Filter from '../../../../Component/Filter/Filter';




class Advanceimgpage extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className=''>
                    <img className='img-fluid' src={require("../../../../assests/images/Advance Kunkumadhi/Banner.webp")} alt="" />
                </div>
                <div className='container'>
                    <div className='row p-3'>

                        <div className='d-flex '>
                            <Filter />

                            <div className='col-lg-9'>
                                <div className='row  p-2'>
                                    <div className='col-lg-4 col-sm-3 '>
                                        <div class="card" style={{ width: '18rem' }}>
                                            <img className='img-fluid' src={require("../../../../assests/images/Advance Kunkumadhi/img1.webp")} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Advanced Kumkumadi Youthful Radiance Facial Oil</h5>
                                                <p class="card-text">Rs. 4,995.00<br />MRP Inclusive of all taxes</p>
                                                <button class="btn " id="facewashbutton">ADD TO CART</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-lg-4 col-sm-3'>
                                        <div class="card" style={{ width: '18rem' }}>
                                            <img className='img-fluid' src={require("../../../../assests/images/Advance Kunkumadhi/img2.webp")} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Advanced Kumkumadi Pore-Refining Cleansing Oil</h5>
                                                <p class="card-text">Rs. 1,695.00<br />MRP Inclusive of all taxes</p>
                                                <button class="btn " id="facewashbutton">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Advanceimgpage;