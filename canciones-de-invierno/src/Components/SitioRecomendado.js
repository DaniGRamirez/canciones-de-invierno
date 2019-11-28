import React, {Component} from 'react';

import './SitioRecomendado.css';
import {formatHtmlText} from '../FormatHtmlParser'

class SitioRecomendado extends Component {
              
    constructor(props)
    {
        super(props);
        this.openInNewTab = this.openInNewTab.bind(this);
    }
    openInNewTab(url) {
        var win = window.open("https://www.google.com/maps/search/" + this.props.sitioData.direccion.latitude + "," +this.props.sitioData.direccion.longitude, '_blank');
        win.focus();
      }

  render(){                        
         
      if(this.props.sitioData === null)
      {
        console.log("sitio data is null -> render void div");
        return (<div/>);
      }
      else
      {        
        console.log(this.props);
        return(         
            <div  className="sitioContainer">                                               
                <h4> {this.props.sitioData.nombre} </h4>               
                <div>{formatHtmlText(this.props.sitioData.info.html)}</div>
                <img id="imgSitio" src={this.props.sitioData.foto.url}/>
                <div className="direccionContainer">
                    <p> <b>Dirección:</b> {this.props.sitioData.direccionCalle}</p>                   
                    <button onClick={this.openInNewTab}>    
                        <p>Como llegar</p>                   
                        <img src="https://image.flaticon.com/icons/svg/149/149442.svg" height="50px"/>
                    </button>
                </div>       
            </div>
            ); 
      }

  }   
}

export default SitioRecomendado;