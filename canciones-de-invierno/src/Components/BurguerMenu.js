import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import './BurguerMenu.css';
import{ 
  Link
} from "react-router-dom"
import HeaderLink from './HeaderLink';

const logoInstagram = "https://image.flaticon.com/icons/png/512/1384/1384015.png";
const logoFacebook = "https://image.flaticon.com/icons/png/512/1384/1384005.png";

class BurguerMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }

    this.closeMenu = this.closeMenu.bind(this);    
  }

   // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
        console.log(state);
        console.log(document.querySelector(".testCross").style);
        let buttonCross = document.querySelector(".testCross");    
        let crossSpan = document.querySelector(".testCross span");
        console.log(document.querySelectorAll(".bm-cross"));
        let crossSpanBars = document.querySelectorAll(".bm-cross");
        if(state.isOpen === true)
        {
          document.querySelector(".bm-menu").style.overflow = "hidden";      
          Object.assign(buttonCross.style,
          {
            fontsize:"12px",
            right:"25px",
            width: "50px",
            height: "50px",
            top:"25px"
          }
          );

          Object.assign(crossSpan.style,
            {
             top:"0px",
             right:"50%"
            }
            );

            var index = 0, length = crossSpanBars.length;
            for ( ; index < length; index++) {
              Object.assign(crossSpanBars[index].style,
                {
                 height:"50px",
                 width :"7px"
                }
                );
            }
          
          document.querySelector(".navsBurger").style.display = "Flex";   
          document.body.style.overflow = 'hidden';
        }
        else
          document.body.style.overflow = 'unset';  
       this.setState({menuOpen: state.isOpen})        
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {    
    this.setState({menuOpen: false})         
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {   
    this.setState({menuOpen: !this.state.menuOpen})   
  }

    showSettings (event) {
        event.preventDefault();       
      }

  render(){
      return(         
        <div>           
            <Menu left width="100%" isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            crossButtonClassName={ "testCross" }>           
            <div className="navsBurger">           
              <HeaderLink linkTo="/" elementIdScroll = {"Inicio"} closeMenu={this.closeMenu} setElementIDHeader = {this.props.setElementIDHeader} text="Inicio"/>                  
              <HeaderLink linkTo="/" elementIdScroll={"Conciertos"} closeMenu={this.closeMenu} setElementIDHeader = {this.props.setElementIDHeader} text="Conciertos" />  
              <HeaderLink linkTo="/Artistas" elementIdScroll={"Artistas"} closeMenu={this.closeMenu} text="Artistas" />
              {/* <HeaderLink linkTo="/" elementIdScroll={"Galeria"} closeMenu={this.closeMenu} setElementIDHeader = {this.props.setElementIDHeader} text="Galeria" />                                             */}
              <HeaderLink linkTo="/" elementIdScroll={"Ubicacion"} closeMenu={this.closeMenu} setElementIDHeader = {this.props.setElementIDHeader} text="Ubicacion" />  
              <HeaderLink linkTo="/" elementIdScroll={"Contacto"} closeMenu={this.closeMenu} setElementIDHeader = {this.props.setElementIDHeader} text="Contacto" />
            </div>
            <div className="socialMediaIconsBurger">
              <a target="blank" onClick={() => this.closeMenu()} className="menu-item--small" href="https://www.instagram.com/cancionesdeinvierno/?hl=es">
                <img id="logoInsta" alt="logo" src = {logoInstagram}></img>
              </a>  
              <a target="blank" onClick={() => this.closeMenu()} className="menu-item--small" href="https://www.facebook.com/cancionesdeinvierno">
                <img id="logoFacebook" alt="logo" src = {logoFacebook}></img>
              </a>             
            </div>
            </Menu>
        </div>        
          ); 
  }   
}

export default BurguerMenu;