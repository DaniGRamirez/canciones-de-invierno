import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Inicio from './Components/Pages/Inicio'
import Conciertos from './Components/Pages/Conciertos'
import Artistas, { artistasInfo } from './Components/Pages/Artistas'
import ArtistaInfo from "./Components/Pages/ArtistaInfo"
import GaleriaMainPage from './Components/Pages/GaleriaMainPage'
import Ubicacion from './Components/Pages/Ubicacion'
import Contacto from './Components/Pages/Contacto'
import Footer from './Components/Pages/Footer'


import MainPage from './Components/Pages/MainPage'

import{
  BrowserRouter as Router,
  Route, 
  Switch, 
} from "react-router-dom"

var buttonTop;

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
    this.setState({ isDesktop: window.innerWidth > 800 });
  }   
render(){

    return (
      <Router>
      <div className="AppContainer">
        <div className="ContentContainer">
            <Route>                                   
              <Header isDesktop={this.state.isDesktop}/>  
            </Route>
            <Route path="/" exact component={MainPage}/>                                   
            <Route path="/artistas" exact component={Artistas}/>                               
            <Route path="/artistas/:id" component={ArtistaInfo} />  
        </div>
        <Footer/>
      </div>   
      </Router>
    );
}
}

export default App;
