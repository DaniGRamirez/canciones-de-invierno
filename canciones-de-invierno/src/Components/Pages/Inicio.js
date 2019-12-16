import React, { Component } from "react";
import Slider from "react-slick";
import "./Inicio.css"; 
import Cartel from "../Pages/Cartel"



export default class Inicio extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      speed: 5000,            
      arrows:false,
      fade:true
    };
    return (
      <div>      
        <Cartel/>
        {/* <Slider {...settings}>
          <div>
           <img src="https://www.terranostrum.es/images/content/full/paseo-arenas-san-pedro-1.jpg"></img>           
          </div>   
          <div>
           <img src="https://www.terranostrum.es/images/content/full/paseo-arenas-san-pedro-2.jpg"></img>           
          </div>     
          <div>
           <img src="https://www.terranostrum.es/images/content/full/paseo-arenas-san-pedro-15.jpg"></img>           
          </div>           
        </Slider> */}
      </div>
    );
  }
}