import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './Ubicacion.css';
import {formatHtmlText} from '../../FormatHtmlParser'
import Galeria from '../Galeria'
import SitioRecomendado from '../SitioRecomendado'

class Ubicacion extends Component {              
    
    render(){

        
        let { loading, error, } = this.props.data;
        
        if (error){
            
        }
        
        if(!loading){      
            console.log("Render Ubicacion");
            console.log(this.props.data);   

            return (                    
                <div className="ubicacionContainer">   
                    <h1>Ubicacion</h1>      
                    <div className="imgUbicacionBG">
                        <img src="https://media.graphcms.com/13HPVaRS5aG7t5wmMP4N"/>
                        <div className="descBGOverlay">
                            <div className="descContainer">{formatHtmlText(this.props.data.textoAsset.texto.html)}</div>
                        </div>
                    </div>                 
                    <Galeria key={this.props.data.galeriaFotos.id} galeriaData= {this.props.data.galeriaFotos}/>  
                    <h2>Sitios Recomendados</h2>      
                    <div className="sitiosContainer">
                        {this.props.data.sitioRecomendadoes.map (sitio => (                     
                                <SitioRecomendado key={sitio.id} sitioData= {sitio}/>                    
                            ))
                        } 
                    </div>
                </div>)                
        }

        return (
            <div className= "centerDiv">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>)

       
    }

}

export const ubicacionInfo = gql`
    query test {

    textoAsset(where: {id: "ck3inuj7dh27g0b32j4ouqr5b"}) {
    status
    updatedAt
    createdAt
    id
    nombre
    texto {
      raw
      html
    }
  }

  galeriaFotos(where: {id: "ck3ink00zh15t0b203zuu9h0a"}) {  
    id
    itemGaleria {   
      id    
      height
      width
      size
      mimeType
      url
    }
    titulo   
  }

  sitioRecomendadoes{
      nombre
      info{
        html
      }
      foto{
          width
          height
          url
      }
      direccion{
          latitude
          longitude
      }
      direccionCalle
  }
}
`


export default graphql(ubicacionInfo)(Ubicacion)