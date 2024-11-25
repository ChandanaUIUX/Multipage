import React from "react";
import { Component } from "react";
import './Acneskin.css';


class Acneskin extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <h6 className="color">CURATED AYURVEDIC RITUALS</h6>
                    <h4>Efficacious solutions for
                        <span>
                            <span className="dropdown dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Acne Prone Skin
                            </span>
                            <div className="dropdown-menu">
                                <p className="dropdown-item" >Acne Prone Skin</p>
                                <p className="dropdown-item" >Tan Removal</p>
                                <p className="dropdown-item" >Ageing Skin</p>
                                <p className="dropdown-item" >Dull & Dry Skin</p>
                                <p className="dropdown-item" >Dry Hair</p>
                                <p className="dropdown-item" >Frizzy Hair</p>
                                <p className="dropdown-item" >Hair Fall</p>
                                <p className="dropdown-item" >Oil Control</p>
                            </div>
                        </span>
                    </h4>
                </div>
                <div className="d-flex justify-content-center gap-3 ">

                    {/* image 1 */}

                    <div className="card" id="card" style={{ width: "18rem" }}>
                        <img src={require("../assests/images/bestsellerpic6.webp")} class="card-img-top p-3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Advanced Kumkumadi Hydra Radiant Facial Gel</h5><br />
                            <p className="card-text">Rs. 2,995.00<br />
                                MRP Inclusive of all taxes
                            </p>
                            <button href="#" className="btn" id="acnebtn">ADD TO CART</button>
                        </div>
                    </div>
                    {/* End imag-1 */}
                    {/* image-2 */}
                    <div className="card" id="card" style={{ width: "18rem" }}>
                        <img src={require("../assests/images/bestsellerpic2.webp")} class="card-img-top  p-3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Advanced Kumkumadi Refined Radiance Day Cream</h5>
                            <p className="card-text">Rs. 3,695.00<br />
                                MRP Inclusive of all taxes
                            </p>
                            <button href="#" className="btn" id="acnebtn">ADD TO CART</button>
                        </div>
                    </div>
                    {/* End image-2 */}
                    {/* image-3 */}
                    <div className="card" id="card" style={{ width: "18rem" }}>
                        <img src={require("../assests/images/bestsellerpic4.webp")} class="card-img-top  p-3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Advanced Kumkumadi Refined Radiance Night Cream</h5>
                            <p className="card-text">Rs. 3,945.00<br />
                                MRP Inclusive of all taxes
                            </p>
                            <button href="#" className="btn" id="acnebtn">ADD TO CART</button>
                        </div>
                    </div>
                    {/* End image-3 */}
                    {/* image-4 */}
                    <div className="card" id="card" style={{ width: "18rem" }}>
                        <img src={require("../assests/images/bestsellerpic3.webp")} class="card-img-top  p-3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Advanced Kumkumadi Youthful Radiance Facial Oil</h5>
                            <p className="card-text">Rs. 4,995.00<br />
                                MRP Inclusive of all taxes
                            </p>
                            <button href="#" className="btn " id="acnebtn">ADD TO CART</button>
                        </div>
                    </div>
                    {/* End image-4 */}
                    {/* image-5 */}
                    <div className="card" id="card" style={{ width: "18rem" }}>
                        <img src={require("../assests/images/bestsellerpic7.webp")} class="card-img-top  p-3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Hemp Repairing & Regenerating Youth Night Cream</h5>
                            <p className="card-text">
                                Rs. 2,895.00<br />
                                MRP Inclusive of all taxes
                            </p>
                            <button href="#" className="btn " id="acnebtn">ADD TO CAR</button>
                        </div>
                    </div>
                    {/* End image-5 */}
                </div>
            </div>
        );
    }
}



export default Acneskin;