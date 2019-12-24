import React, { Component } from 'react';
import Inicio from '../Pages/Inicio'
import Conciertos from '../Pages/Conciertos'
import GaleriaMainPage from '../Pages/GaleriaMainPage'
import Ubicacion from '../Pages/Ubicacion'
import Contacto from '../Pages/Contacto'
import { useRouteMatch } from "react-router";

class MainPage extends Component {


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
    );
}
}

export default MainPage;
