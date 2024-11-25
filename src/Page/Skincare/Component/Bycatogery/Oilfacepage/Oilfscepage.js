import React from 'react';
import Filter from '../../../../../Component/Filter/Filter';


function Oilfacepage() {
    return(
    <div className='container-fluid'>
        <div className=''>
            <img src={require("../../../../../assests/images/oilfacepage/banner.webp")} alt="" />
        </div>
        <div className='container'>
            <div className='d-flex'>
                <div className=''>
                    <Filter />
                </div>
                {/* <div className='col-lg-9'>
                    <div className='row  p-2'>
                        <div className='col-lg-4 col-sm-3 '>
                            <div class="card" style={{ width: '18rem' }}>
                                <img className='img-fluid' src={require("")} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Advanced Kumkumadi Youthful Radiance Facial Oil</h5>
                                    <p class="card-text">Rs. 4,995.00<br />MRP Inclusive of all taxes</p>
                                    <button class="btn " id="facewashbutton">ADD TO CART</button>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 col-sm-3'>
                            <div class="card" style={{ width: '18rem' }}>
                                <img className='img-fluid' src={require("")} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Advanced Kumkumadi Pore-Refining Cleansing Oil</h5>
                                    <p class="card-text">Rs. 1,695.00<br />MRP Inclusive of all taxes</p>
                                    <button class="btn " id="facewashbutton">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 */}</div>
            {/* </div> */}
        </div>
    </div>
    );
}
export default Oilfacepage;