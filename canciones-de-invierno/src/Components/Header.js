import React, {Component} from 'react';


import{ 
    Link
  } from "react-router-dom"

import './HeaderLink';
import './Header.css';
import HeaderLink from './HeaderLink';
import BurguerMenu from './BurguerMenu';

var header;
var sticky;

let burguerMenu;
let headerNavs;

class Header extends Component {
    showSettings (event) {
        event.preventDefault();       
      }    

    componentDidMount(){
      header = document.getElementById("myHeader");         
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
      burguerMenu =        
         <div>
           <BurguerMenu/>
         </div>;   
      headerNavs = "";
    }      
    else
    {

      headerNavs =                                                
      <div className="navs">                               
          <HeaderLink elementScroll = {document.getElementById("Inicio")}  text="Inicio"/>                  
          <HeaderLink  elementScroll={document.getElementById("Conciertos")}  text="Conciertos" />  
          <HeaderLink  elementScroll={document.getElementById("Galeria")}  text="Galeria" />                                            
          <HeaderLink  elementScroll={document.getElementById("Ubicacion")}  text="Ubicacion" />  
          <HeaderLink  elementScroll={document.getElementById("Contacto")}  text="Contacto" />  
      </div>;
      burguerMenu = "";
    }

      return(         
        <div className= "header" id="myHeader">  
          {burguerMenu}
          {headerNavs}
        </div>
          ); 
  }   
}



export default Header;