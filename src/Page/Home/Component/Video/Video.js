import React from 'react';
import { Component } from 'react';
import './Video.css';


class Video extends Component {
    render() {
        return (
            <div className='container my-5'>
                <div className='row align-items-center' >
                    <div className='col-lg-6 col-sm-6 p-5 my-4'>
                        <h4>A Potion of Radiance: The Symphony of Mogra Saffron</h4>
                        <p>
                            In the heart of nature, where Mogra flourishes, saffron unfolds its secrets,
                            each thread a promise nurturing the skin’s grace. This divine Kumkumadi blend,
                            gentle and true, revitalises the spirit and ignites a luminous hue. Embrace this
                            ritual of rejuvenation, radiant as the dawn, inviting you to bask in beauty untold.
                        </p>
                    </div>
                    <div className='col-lg-6 col-sm-6 p-5 my-4 '>
                        <iframe width="638" height="320" src="https://www.youtube.com/embed/q_m6iNkcf0Q"
                            title="Advanced Kumkumadi Range by SoulTree" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>


                    </div>
                </div>
            </div>
        );
    }
}




export default Video;