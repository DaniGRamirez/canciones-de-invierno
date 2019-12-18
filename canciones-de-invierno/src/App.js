import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Inicio from './Components/Pages/Inicio'
import Conciertos from './Components/Pages/Conciertos'
import GaleriaMainPage from './Components/Pages/GaleriaMainPage'
import Ubicacion from './Components/Pages/Ubicacion'
import Contacto from './Components/Pages/Contacto'
import Footer from './Components/Pages/Footer'

import{
  BrowserRouter as Router,
  Route,  
} from "react-router-dom"

var buttonTop;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    
    this.updatePredicate = this.updatePredicate.bind(this);
    this.ScrollToTop = this.ScrollToTop.bind(this);
  }
  componentDidMount() {    
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);   
    window.addEventListener('scroll', this.CheckScroll, true);   
    buttonTop = document.getElementById("buttonGoTop");    
    this.CheckScroll();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
      window.removeEventListener('scroll', this.CheckScroll);
    }

  updatePredicate() {    
    this.setState({ isDesktop: window.innerWidth > 600 });
  }

  ScrollToTop = () => {   
    console.log("Scroll to top");
    window.scroll({
      top:  0, 
      left: 0, 
      behavior: 'smooth'
    });
    // this.props.elementScroll.scrollIntoView({block: "start", behavior: "smooth"});
  }      

  CheckScroll = () => {             
    if (window.pageYOffset > window.innerHeight/2) {
      buttonTop.classList.remove("nonVisible");        
    } else {
      buttonTop.classList.add("nonVisible");        
    }
  }

render(){

    return (
      <Router>
      <div className="AppContainer">
        <div className="ContentContainer">
          <Header isDesktop={this.state.isDesktop}/>     
          <div className="ContentPage">  
            <div id= "Inicio" className="section">
              <Inicio/>               
            </div>                         
            <div id= "Conciertos" className="section">
              <Conciertos/>               
            </div>                         
            <div id= "Galeria" className="section">
              <GaleriaMainPage/>
            </div> 
            <div id= "Ubicacion" className="section">
              <Ubicacion/>  
            </div> 
            <div id= "Contacto" className="section">
              <Contacto/>
            </div> 
          </div>        
        </div>
        <div id="buttonGoTop" onClick={this.ScrollToTop}>
          <img src="https://image.flaticon.com/icons/png/512/32/32195.png"/>
        </div>
        <Footer/>
      </div>
    </Router>     
    );
}
}

export default App;
