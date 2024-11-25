import React from 'react';
import { Component } from 'react';
import './Footer.css';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";



class Footer extends Component {
    render() {
        return (
            <div className='container-fluid' id="footerbody">
                <div className='container '>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-6 align-items-start bg-white my-4'>
                            <div className='footerlogo my-3'>
                                <img className='w-50' src={require("../../assests/images/logo.avif")} alt="" />
                            </div>
                            <div className='footertext my-3'>
                                <p>Certified Natural Skin Care and Beauty Products made from Authentic Ayurvedic Recipes.</p>
                            </div>
                            <div className='footerlogo my-3'>
                                <img src={require("../../assests/images/footer.webp")} alt="" />
                            </div>
                            <button className='btn my-3' id="footerbtn">Email</button>
                        </div>
                        <div className='col-lg-2 col-sm-6 '>
                            <b className='text-white '>STORE LOCATOR</b>
                        </div>
                        <div className='col-lg-2 col-sm-6 text-white'>
                            <b>SOULTREE</b>
                            <p>ABOUT SOULTREE</p>
                            <p>SOULTREE BLOG</p>
                            <p>CORPORATE GIFITING</p>
                            <p>INGREDIENT</p>
                        </div>
                        <div className='col-lg-1 col-sm-6 text-white'>
                            <b>shop by</b><br />
                            <p>SKIN CARE</p>
                            <p>HAIR CARE</p>
                            <p>BATH CARE</p>
                            <p>MAKEUP</p>
                            <p>RITUALS</p>
                            <p> GIFTING</p>
                        </div>
                        <div className='col-lg-2 col-sm-6 text-white'>
                            <b>Customer service</b><br />
                            <p>FAQs</p>
                            <p>CONTACT US</p>
                            <p>SHIPPING AND RETURNS</p>
                            <p>TERMS OF SERVICE</p>
                            <p>PRIVACY POLICY</p>

                        </div>
                        <div className='col-lg-2 col-sm-6 text-white'>
                            <b>Reach out to us</b><br />
                            <p>For Customer Support,<br />
                                wecare@soultree.in
                            </p>
                            <p>For International Business,<br />
                                international@soultree.in
                            </p>
                            <p> --</p>
                            <p>SoulTree, 02, Forest Lane, Sultanpur, New Delhi - 110030</p>
                            <p> 011-42512157<br />
                                +91-9711386545 (Mon-Fri, 10:00 A.M - 5:30 P.M)
                            </p>


                            <b>SOCIAL MEDIA</b><br />
                            <div className='gap-4'><CiFacebook /><FaInstagram /><CiYoutube /><CiLinkedin /></div>
                        </div>
                    </div>
                    <p className='text-white'>
                        <div className='d-flex justify-content-center'>Made in India. Marketed by Vedicare Ayurveda Private Limited, 02, Forest Lane, Sultanpur, New Delhi - 110030 &<br /></div>
                        <p>Manufactured by Vedicare Ayurveda Private Limited, 3rd Floor, Plot No. 120,121,122, Ecotech Extension – 1, Greater Noida, Distt. Gautam Budh Nagar, Uttar Pradesh - 201308, India</p>
                    </p>

                </div>
            </div>
        );
    }
}






export default Footer;