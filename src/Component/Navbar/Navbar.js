import React from 'react';
import { Component } from 'react';
import './Navbar.css';
import { FaTruck } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';




class Navbar extends Component {
    render() {
        return (
            <div className='container-fluid sticky-top'>
                <nav className="navbar navbar-expand-lg" id="navgradient">
                    <div className="container">

                        <div className="collapse navbar-collapse align-items-start" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <p className="nav-link text-light" aria-current="page" >Contact +91-9711386545</p>
                                </li>
                                <li className="nav-item">
                                    <p class="nav-link text-light" href="">Email ID wecare@soultree.in</p>
                                </li>
                            </ul>
                            <span className="navbar-text text-light">
                                <FaTruck />Track Order <FaLocationPin /> Store Locator
                            </span>
                        </div>
                    </div>
                </nav>

                <div className='bg-white'>
                    <div className="container ">
                        <div className="row align-items-center">

                            <div className=" col-lg-7 col-sm-4  d-flex justify-content-end" id="logo">
                                <ul className="navbar-nav  mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" ><img src={require("../../assests/images/logo.avif")} alt="" /></Link>
                                    </li>

                                </ul>
                            </div>
                            <form className="col-lg-5 col-sm-6 d-flex justify-content-center gap-3" role="search">
                                <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
                                <div className="w-100 ga-3" id="nav-icons">
                                    <RiAccountCircleFill />
                                    <IoCartOutline />
                                </div>

                            </form>
                        </div>
                    </div>


                    
                    <div className='contaniner'>
                        <div className='d-flex justify-content-center'>

                            {/* DROPDOWN-1 */}
                            <div className="dropdown">
                                <button className="btn   dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    SKIN CARE
                                </button>

                                <div className="dropdown-menu">
                                    <div className='d-flex gap-2 p-1'>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">BY CATEGORY</p><hr />
                                            <Link to="/Facewashpage"><div className='dropdown-item disabled'>FACE WASH AND CLEANSERS</div></Link>
                                            <Link to="/Toner"><div className='dropdown-item disabled'>TONER AND MISTS</div></Link>
                                            <Link to="/Oilfacepage"><div className='dropdown-item disabled'>OIL FACE AND SERUMS</div></Link>
                                            <div className='dropdown-item disabled'>FACE CREAMS AND MOISTURISERS</div>
                                            <div className='dropdown-item disabled'>FACE EXPOLIATORS AND MASKS</div>
                                            <div className='dropdown-item disabled'>LIP CARE</div>
                                            <div className='dropdown-item disabled'>FACIAL BALM</div>

                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">AYURVEDIC HEMP RANGE</p><hr />
                                            <Link to="/Ayurvedicrangepage"><img className='img-fluid' src={require("../../assests/images/newcollection2.webp")} alt="" /></Link>

                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">ADVANCED KUMKUMADI COLLECTIO</p><hr />
                                            <Link to="/Advanceimgpage"><img className='img-fluid' src={require("../../assests/images/newcollection1.webp")} alt="" /></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/*END DROPDOWN-1 */}
                            {/* DROPDOWN-2 */}
                            <div className="dropdown">
                                <button className="btn   dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    MAKEUP
                                </button>
                                <div className="dropdown-menu">
                                    <div className='d-flex gap-4 p-1'>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">EYES</p><hr />
                                            <Link to="Kajalpage"><div className='dropdown-item disabled'>KAJALS</div></Link>
                                            <Link to="Mascarapage"><div className='dropdown-item disabled'>MASCARAS</div></Link>
                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">LIPS</p><hr />
                                            <Link to="Lipstickpage"><div className='dropdown-item disabled'>LIPSTICKS</div></Link>
                                            <Link to ="Lipglossespage"><div className='dropdown-item disabled'>LIP GLOSSES</div></Link>
                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">FACE</p><hr />
                                            <Link to="Bbcream"><div className='dropdown-item disabled'>BB CREAM</div></Link>
                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">COMBOS</p><hr />
                                            <Link to ="Combopage"><img className='w-100' src={require("../../assests/images/navimg1.webp")} alt="" /></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/*END DROPDOWN-2 */}
                            {/* DROPDOWN-3 */}
                            <div className="dropdown">
                                <button className="btn   dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    HAIR CARE
                                </button>
                                <div className="dropdown-menu">
                                    <div className='d-flex gap-4 p-1'>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">BY CATEGORY</p><hr />
                                            <div className='dropdown-item disabled'>AYURVEDIC SHAMPOO</div>
                                            <div className='dropdown-item disabled'>AYURVEDIC CONDITIONER</div>
                                            <div className='dropdown-item disabled'>AYURVEDIC HAIR OIL</div>
                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">BY SCALP TYPE</p><hr />
                                            <div className='dropdown-item disabled'>NORMAL TO OIL</div>
                                            <div className='dropdown-item disabled'>DRYS</div>
                                            <div className='dropdown-item disabled'>ALL</div>
                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">BY CONCERN</p><hr />
                                            <div className='dropdown-item disabled'>HAIRFALL CONTROL</div>
                                            <div className='dropdown-item disabled'>DANDRUFF</div>
                                            <div className='dropdown-item disabled'>PRE-MATURE HAIR GREYING</div>
                                            <div className='dropdown-item disabled'>DULL HAIR</div>
                                            <div className='dropdown-item disabled'>FRIZZY HAIR</div>
                                            <div className='dropdown-item disabled'>SPLIT ENDS</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/*END DROPDOWN-3 */}
                            {/* DROPDOWN-4 */}
                            <div className="dropdown">
                                <button className="btn   dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    BODY CARE
                                </button>
                                <div className="dropdown-menu">
                                    <div className='d-flex gap-4 p-1'>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">BY CATEGORY</p><hr />
                                            <div className='dropdown-item disabled'>AYURVEDIC SHOWER GELS</div>
                                            <div className='dropdown-item disabled'>BODYCARE BOXES</div>
                                            <div className='dropdown-item disabled'>BODY OILS</div>
                                            <div className='dropdown-item disabled'>BODY CREAMS AND MOISTURISERS</div>
                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">BY SKIN TYPE</p><hr />
                                            <div className='dropdown-item disabled'>DRY AND DEHYDRATED</div>
                                            <div className='dropdown-item disabled'>INFLAMMATED</div>
                                            <div className='dropdown-item disabled'>SENSITIVE</div>
                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">BY CONCERN</p><hr />
                                            <div className='dropdown-item disabled'>BODY ACNE</div>
                                            <div className='dropdown-item disabled'>CRACKED HEELS</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/*END DROPDOWN-4 */}
                            {/* DROPDOWN-5 */}
                            <div className="dropdown">
                                <button className="btn   dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    GIFTING
                                </button>
                                <div className="dropdown-menu">
                                    <div className='d-flex gap-4 p-1'>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">OCCASSIONS</p><hr />
                                            <div className='dropdown-item disabled'>WEDDING</div>
                                            <div className='dropdown-item disabled'>PRE-WEDDING</div>
                                            <div className='dropdown-item disabled'>BIRTHDAY</div>
                                            <div className='dropdown-item disabled'>ANNIVERSARY</div>
                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">BY PRICE</p><hr />
                                            <div className='dropdown-item disabled'>GIFTS UNDER 3000</div>
                                            <div className='dropdown-item disabled'>GIFTS UNDER 5000</div>

                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">GIFT BOX STORY</p><hr />
                                            <div className='dropdown-item disabled'>AIPAN</div>
                                            <div className='dropdown-item disabled'>BISWAR</div>
                                            <div className='dropdown-item disabled'>FESTIVE</div>
                                            <div className='dropdown-item disabled'>GERUA</div>

                                        </div>
                                        <div className='navitems'>
                                            <p className="dropdown-item disabled">SELF LOVE</p>
                                            <p className="dropdown-item disabled">FOR HER</p>
                                            <p className="dropdown-item disabled">FOR HIM</p>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/*END DROPDOWN-5 */}
                            {/* DROPDOWN-5 */}
                            <div className="dropdown">
                                <button className="btn   " type='button'>
                                    SOULCIRCLE
                                </button>

                            </div>
                            {/*END DROPDOWN-5 */}






                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Navbar;