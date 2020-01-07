import React, { Component } from 'react';
import Inicio from '../Pages/Inicio'
import Conciertos from '../Pages/Conciertos'
import GaleriaMainPage from '../Pages/GaleriaMainPage'
import Ubicacion from '../Pages/Ubicacion'
import Contacto from '../Pages/Contacto'
import { useRouteMatch } from "react-router";
import './MainPage.css';

let buttonTop;

class MainPage extends Component {

    constructor(props) {
        super(props);                         
        this.ScrollToTop = this.ScrollToTop.bind(this);
      }

    componentDidMount() {                    
        window.addEventListener('scroll', this.CheckScroll, true);   
        buttonTop = document.getElementById("buttonGoTop");    
        this.CheckScroll();
    }    
    componentWillUnmount() {        
        window.removeEventListener('scroll', this.CheckScroll);
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
        if(buttonTop){

        if (window.pageYOffset > window.innerHeight/2) {
                buttonTop.classList.remove("nonVisible");        
            } else {
                buttonTop.classList.add("nonVisible");        
            }
        }
    }

    render(){

    console.log(this.props.history);
    console.log(this.props.match.params);
    return (            
        <div className="ContentPage">  
            <div id= "Inicio" className="section">
                <Inicio/>               
            </div>                         
            <div id= "Conciertos" className="section" >
                <Conciertos history={this.props.history}/>               
            </div>                         
            {/* <div id= "Galeria" className="section">
                <GaleriaMainPage/>
            </div>  */}
            <div id= "Ubicacion" className="section">
                <Ubicacion/>  
            </div> 
            <div id= "Contacto" className="section">
                <Contacto/>
            </div> 
            <div id="buttonGoTop" onClick={this.ScrollToTop}>
              <img src="https://image.flaticon.com/icons/png/512/32/32195.png"/>
            </div>
        </div>                           
    );
}
}

export default MainPage;
