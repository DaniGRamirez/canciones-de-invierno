import React, {Component} from 'react';
import Slider from "react-slick";
import './Galeria.css';
import './Slick.css';
import {formatHtmlText} from '../FormatHtmlParser'

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" ,position:"absolute",right:"50px"}}
//       onClick={onClick}
//     />
//   );
// }

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
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,           
      arrows: true,    
      // nextArrow: <SampleNextArrow /> 
    };

    console.log(this.props.galeriaData);

    if(!this.props.galeriaData)
      return <div/>;

      let nombreGaleria = <h3 id="tituloGaleria">{this.props.galeriaData.titulo}</h3>;
      if(this.props.mostrarNombre === "false")
        nombreGaleria = "";


    let ordererdGaleria;
    if(this.props.galeriaData)
    {
      if(this.props.galeriaData.itemGaleria.length > 0)
      {  
         ordererdGaleria = this.props.galeriaData.itemGaleria
        .sort(function(a, b){      
          if (a.prioridadOrden > b.prioridadOrden) {        
            return 1;
          }
          if (a.prioridadOrden < b.prioridadOrden) {        
            return -1;
          }      
          return 0;
        })
      }      
    }

    console.log(ordererdGaleria);

      
      if(ordererdGaleria === null)
      {
        console.log("galeria data is null -> render void div");
        return (<div/>);

      }
      else
      {              
        return(         
            <div  className="galeriaContent">                                               
                    {/* <h2> {this.props.galeriaData.titulo} </h2>     */}
                    {nombreGaleria}
                    <Slider {...settings}>                      
                      {                       
                        ordererdGaleria.map (assetGallery => (                     
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