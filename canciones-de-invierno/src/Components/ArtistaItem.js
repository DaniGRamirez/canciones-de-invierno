import React, {Component} from 'react';

import './ArtistaItem.css';
import {formatHtmlText} from '../FormatHtmlParser'

class ArtistaItem extends Component {

  render(){ 
                   
        // console.log(this.props.artistaData);
        return(         
            <div  className="artistaContainer">                
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