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


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
    componentDidMount() {    
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);      
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }

  updatePredicate() {    
    this.setState({ isDesktop: window.innerWidth > 600 });
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
        <Footer/>
      </div>
    </Router>     
    );
}
}

export default App;
