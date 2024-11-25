import React from 'react';
import { Component } from 'react';
import "./Filter.css";




class Filter extends Component {
    render() {
        return (
            <div className='row p-3'>
                <div className='col-lg-10 ' >
                    <div className='scroll'>
                        <hr /><h4>FILTERS</h4><hr />
                        <p>SKIN CARE</p>
                        <p>HAIR CARE</p>
                        <p>BATH CARE</p>
                        <p>MAKEUP</p>
                        <p>VALUE SETS</p>
                        <p>GIFT SETS</p>


                        <hr /><h4>SHOP BY INGREDIENTS</h4><hr />
                        <p>HIBISCS</p>
                        <p>ALMOND OIL</p>
                        <p>ORGANIC GHEE</p>
                        <p>TURMERIC</p>
                        <p>INDIAN GOOSEBERRY</p>
                        <p>ALOE VERA</p>
                        <p>LICORICE</p>
                        <p>COCONUT</p>
                        <p>INDIAN LOTUS</p>
                        <p>CURRY LEAVES</p>
                        <p>SAFFRON</p>
                        <p>INDIAN ROSE</p>
                        <p>CHAMOMILE</p>
                        <p>HONEY</p>
                        <p>NEEM</p>
                        <p>APRICOT</p>

                    </div>
                </div>
            </div>

        );
    }
}




export default Filter;