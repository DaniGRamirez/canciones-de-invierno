import React, {Component} from 'react';

import './ConciertoItem.css';
import {formatHtmlText} from '../FormatHtmlParser'
import ArtistaItem from "../Components/ArtistaItem"

class ConciertoItem extends Component {



  render(){ 
        
        let date = new Date(this.props.conciertoData.fecha); 
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };   
        let finalDate = date.toLocaleDateString("es-ES", options)           
        console.log(this.props);
        return(         
            <div  className="conciertoContent">                
                <div  className="conciertoData">    
                    <h1> {this.props.conciertoData.titulo} </h1>               
                    {/* <h2> {this.props.conciertoData.subtitulo} </h2>                */}
                </div> 
                <div className="todosArtistasContainer">
                {this.props.conciertoData.artista.map (artista => (
                       <ArtistaItem key={artista.id} artistaData= {artista}></ArtistaItem>                        
                    ))
                    }
                </div>
                {/* <div  className="artistaContent">                           
                    <div className="descripcionArtista">{formatHtmlText(this.props.conciertoData.artista[0].descripcion.html)}</div>       
                    <img width="100px" height="100px" src={this.props.conciertoData.artista[0].foto.url}/>           
                </div>                      */}
                <div className="compraParentContainer">
                    <div className="compraEntradasContainer">                
                        <div  className="fechaContent">    
                            <p> {finalDate} </p>
                        </div>    
                        <div className="buttonBuy">
                            <button> Comprar entradas</button>
                        </div>
                    </div>
                </div>
            </div>                     
            ); 
  }   
}

export default ConciertoItem;