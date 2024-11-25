import React from 'react';
import { Component } from 'react';
import Filter from '../../../../../Component/Filter/Filter';


class Toner extends Component {
    render() {
        return (
            <div className='container-fluid'>
                {<div className=''>
                    <img src={require("../../../../../assests/images/Toners/Banner.webp")} alt="" />
                </div>}
                <div className='container'>
                    <Filter />
                </div>
            </div>
        );
    }
}


export default Toner;