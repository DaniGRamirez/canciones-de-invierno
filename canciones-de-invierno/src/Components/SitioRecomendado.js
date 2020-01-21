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
         if(this.props.sitioData.status != 'ARCHIVED')
         {

            return(         
                <div  className="sitioContainer">                                               
                    <h4> {this.props.sitioData.nombre} </h4>               
                    <div className="iformacionSitio">{formatHtmlText(this.props.sitioData.info.html)}</div>
                    <p id="direccionTitulo">  <b>Dirección:</b> {this.props.sitioData.direccionCalle}</p>                   
                    <div className="imgContainer">
                        <img id="imgSitio" src={this.props.sitioData.foto.url}/>
                        <div className="butonMapsContainer">
                            <button onClick={this.openInNewTab}>                                         
                                <img id="imgMaps" src="https://image.flaticon.com/icons/svg/149/149442.svg" />
                            </button>
                        </div>
                    </div>       
                </div>
                ); 
         }
         else
         return "";
      }

  }   
}

export default SitioRecomendado;