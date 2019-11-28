import React, {Component} from 'react';


import{ 
    Link
  } from "react-router-dom"

import './HeaderLink';
import './Header.css';
import HeaderLink from './HeaderLink';

var header;
var sticky;

class Header extends Component {
    showSettings (event) {
        event.preventDefault();       
      }    

    componentDidMount(){
      header = document.getElementById("myHeader");
      console.log(header);
      sticky = header.offsetTop;      
      window.addEventListener('scroll', this.CheckScroll, true);
    }    
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.CheckScroll);
    }


     CheckScroll = () => {       
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");        
      } else {
        header.classList.remove("sticky");        
      }
    }

  render(){   
    if(this.props.isDesktop === false)     
    {
       
    }      

      return(         
        <div className= "header" id="myHeader">                                                
                <div className="navs">                               
                    <HeaderLink elementScroll = {document.getElementById("Inicio")}  text="Inicio"/>                  
                    <HeaderLink  elementScroll={document.getElementById("Conciertos")}  text="Conciertos" />  
                    <HeaderLink  elementScroll={document.getElementById("Galeria")}  text="Galeria" />                                            
                    <HeaderLink  elementScroll={document.getElementById("Ubicacion")}  text="Ubicacion" />  
                    <HeaderLink  elementScroll={document.getElementById("Contacto")}  text="Contacto" />  
                </div>           
            </div>                     
          ); 
  }   
}



export default Header;