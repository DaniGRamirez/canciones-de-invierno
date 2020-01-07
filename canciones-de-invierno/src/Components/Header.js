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
let minHeightToSticky = 1750;

let burguerMenu;
let headerNavs;

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {elementToDoScroll: ""};
    this.setElementScroll = this.setElementScroll.bind(this)
  }

    showSettings (event) {
        event.preventDefault();       
      }    

    componentDidMount(){

      header = document.getElementById("myHeader");         
      // sticky = header.offsetTop;     
      sticky = 50;     
      console.log(sticky); 
      window.addEventListener('scroll', this.CheckScroll, true);
      console.log("component did mount header");      
      console.log(this.props.history);
    }    
  
    scrollToElement(){
                   
        console.log(this.state);
        console.log("doing scroll");
        
        let scrollElement = document.getElementById(this.state.elementToDoScroll);
        console.log(scrollElement);
          if(scrollElement === null)
            return;

          console.log(document.getElementById("myHeader").offsetHeight);
          window.scroll({
            top:  scrollElement.offsetTop - document.getElementById("myHeader").offsetHeight, 
            left: 0, 
            behavior: 'smooth'
          });

          this.setState({elementToDoScroll: ""});      
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.CheckScroll);
    }

    componentDidUpdate(){
      console.log("Component did update");
      if(this.state.elementToDoScroll !== "")
      {
        console.log("Has to do scroll");
        this.scrollToElement();
      }
    }

    setElementScroll(elementID){
      console.log("Set state in header");
      this.setState({elementToDoScroll: elementID});
    }

     CheckScroll = () => {         
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");        
      } else {
        header.classList.remove("sticky");        
      }      
    }

  render(){   
    
    console.log(this.state.elementToDoScroll);
       
    if(this.props.isDesktop === false)     
    {
      burguerMenu =        
         <div className="headerBurguerContainer">
           <div className="headerImgContainer">
              <img id="imgHeaderLogo" src="https://media.graphcms.com/Kb7cWIlVSwiDvHvxqq9G"/>
           </div>
           <BurguerMenu setElementIDHeader = {this.setElementScroll}/>
         </div>;   
      headerNavs = "";
    }      
    else
    {

      headerNavs =                                                
      <div className="navs">                               
          <HeaderLink linkTo="/" elementIdScroll = {"Inicio"} setElementIDHeader = {this.setElementScroll}  text="Inicio"/>                  
          <HeaderLink linkTo="/" elementIdScroll={"Conciertos"} setElementIDHeader = {this.setElementScroll} text="Conciertos" />  
          <HeaderLink linkTo="/Artistas" text="Artistas" />  
          {/* <HeaderLink linkTo="/"  elementIdScroll={"Galeria"} setElementIDHeader = {this.setElementScroll}  text="Galeria" />                                             */}
          <HeaderLink linkTo="/"  elementIdScroll={"Ubicacion"} setElementIDHeader = {this.setElementScroll} text="Ubicacion" />  
          <HeaderLink linkTo="/"  elementIdScroll={"Contacto"} setElementIDHeader = {this.setElementScroll} text="Contacto" />  
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