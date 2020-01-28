import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Portfolios from './components/portfolios/portfolios';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';

import './App.css';
import axios from './axios-contactInfo';

class App extends Component {
  
  formSubmitHandler = () => {
      console.log('excuted formSubmitHandler function');
      const contactInfo = {
          // name:this.state.name,
          // email:this.state.email,
          // subject:this.state.subject,
          // msg:this.state.msg
          name:'raina',
          email:'raina@test.co.kr',
          subject:'hello',
          msg:'I want to keep contact with you!'
      }
      axios.post('/contactInfo.json', contactInfo)
      .then(response => {
          alert('Sended Successfully!');
      })
      .catch(error => {
          console.log(error);
      });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolios />
        <ContactUs submit={this.formSubmitHandler}/>
        <Footer />
      </div>
    );
  }

};

export default App;

