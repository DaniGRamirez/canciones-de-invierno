import React, {Component} from 'react';
import Slider from "react-slick";
import './Galeria.css';
import {formatHtmlText} from '../FormatHtmlParser'

class Galeria extends Component {

    
  renderGalleryItem(galeriaItem)
  {               
      if(galeriaItem.mimeType.includes("video"))
      {
        return(
        <div>
          {/* <video autoPlay playsInline muted loop id="myVideo">
              <source 
              src={galeriaItem.url} 
              type="video/mp4"/>

          </video>                */}
        </div>);        
      }
      else{
        return(
          <div>
             <img src={galeriaItem.url} width="100%"/>     
          </div>);      
      }
  }
  
      
  render(){                        
         
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,           
      arrows:false,     
    };

      if(this.props.galeriaData === null)
      {
        console.log("galeria data is null -> render void div");
        return (<div/>);
      }
      else
      {        
        // console.log(this.props);
        return(         
            <div  className="galeriaContent">                                               
                    {/* <h2> {this.props.galeriaData.titulo} </h2>     */}
                    <Slider {...settings}>                      
                      {this.props.galeriaData.itemGaleria.map (assetGallery => (                     
                            this.renderGalleryItem(assetGallery)                  
                      ))
                      }           
                    </Slider>           
            </div>
            ); 
      }

  }   
}

export default Galeria;