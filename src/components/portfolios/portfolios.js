import React, { Component } from 'react';
import Portfolio from './portfolio/portfolio';
import Modal from './modal/modal';

const portfolios = [
    {modalNum:'#modal-01',imgSrc:'images/portfolio/ilumina_logo.jpg', title:'Ilumina', categories:'Web Development'},
    {modalNum:'#modal-02',imgSrc:'images/portfolio/pepsi_logo.jpg', title:'Pepsi Contest', categories:'Web Development'},
    {modalNum:'#modal-03',imgSrc:'images/portfolio/rogers_logo.jpg', title:'Conference Site', categories:'Web Development'},
    {modalNum:'#modal-04',imgSrc:'images/portfolio/bt-logo.jpg', title:'Pepsi Sales Competition', categories:'Web Development'},
    {modalNum:'#modal-05',imgSrc:'images/portfolio/farmerboy.jpg', title:'Coffee', categories:'Illustration'},
    {modalNum:'#modal-06',imgSrc:'images/portfolio/girl.jpg', title:'Coffee', categories:'Illustration'},
    {modalNum:'#modal-07',imgSrc:'images/portfolio/origami.jpg', title:'Coffee', categories:'Illustration'},
    {modalNum:'#modal-08',imgSrc:'images/portfolio/retrocam.jpg', title:'Coffee', categories:'Illustration'},
]

const modals = [
    {id:'modal-01',imgSrc:'images/portfolio/modals/m-coffee.jpg', link:'http://rainadesign.co/ilumina.html'},
    {id:'modal-02',imgSrc:'images/portfolio/modals/m-console.jpg', link:'http://rainadesign.co/pepsi.html'},
    {id:'modal-03',imgSrc:'images/portfolio/modals/m-coffee.jpg', link:'http://rainadesign.co/conference.html'},
    {id:'modal-04',imgSrc:'images/portfolio/modals/m-coffee.jpg', link:'http://rainadesign.co/btcup.html'},
    {id:'modal-05',imgSrc:'images/portfolio/modals/m-coffee.jpg', link:'http://www.behance.net'},
    {id:'modal-06',imgSrc:'images/portfolio/modals/m-coffee.jpg', link:'http://www.behance.net'},
    {id:'modal-07',imgSrc:'images/portfolio/modals/m-coffee.jpg', link:'http://www.behance.net'},
    {id:'modal-08',imgSrc:'images/portfolio/modals/m-coffee.jpg', link:'http://www.behance.net'},
]

class Portfolios extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Works.</h1>
                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {portfolios.map(item => {
                                    return (
                                        <Portfolio key={item.modalNum} modalNum ={item.modalNum} imgSrc={item.imgSrc} title={item.title} categories={item.categories}/>
                                    );
                                })}
                            </div> 
                        </div>
                        {/* modal-wrapper */}
                        {modals.map(modal => {
                            return (
                                <Modal key={modal.id} id={modal.id} imgSrc={modal.imgSrc} link={modal.link} />
                            )
                        })} 
                    </div> 
                </section>
            </React.Fragment>
        );
    }

}

export default Portfolios;