import React, {Component} from 'react';

import './ArtistaItem.css';
import {formatHtmlText} from '../FormatHtmlParser'

class ArtistaItem extends Component {

  constructor (props) {
    super(props)  
    this.navToArtista = this.navToArtista.bind(this);   
  }

  navToArtista(){
    console.log(`nav to artista ${this.props.artistaData.nombre}`);
    window.scroll({
      top:  0, 
      left: 0,       
    });
    this.props.history.push(`/Artistas/${this.props.artistaData.id}`)
  }

  render(){ 
                   
        // console.log(this.props.artistaData);
        return(         
            <div  className="artistaContainer" onClick={this.navToArtista}>                
              <div className="artistaContent">
                <img src={this.props.artistaData.foto.url} />   
                <div className="bgOverlay">
                    <div className="textOverlay">+ info</div>    
                </div>           
              </div>            
              <div className="nombreContainer">
                <h2>{this.props.artistaData.nombre}</h2>
              </div>
            </div>                     
            ); 
  }   
}

export default ArtistaItem;