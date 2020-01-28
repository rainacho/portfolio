import React from 'react';

const modal = (props) => {
    return (
            <div id={props.id} className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={props.imgSrc} alt="" />
                <div className="description-box">
                    <h4>Coffee Cup</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                </div>
                <div className="link-box">
                    <a href={props.link} target="_blank">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>    
    );
};

export default modal;