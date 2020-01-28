import React from 'react';

const portfolio = (props) => {
    return (
        <React.Fragment>
             <div className="columns portfolio-item">
                <div className="item-wrap">
                <a href = {props.modalNum}>
                    <img alt="" src={props.imgSrc} />
                    <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h5>{props.title}</h5>
                        <p>{props.categories}</p>
                    </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                </a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default portfolio;