import React, {Component} from 'react';

import './HeaderLink.css';
import {Link} from 'react-router-dom';
import ReactGA from 'react-ga';

class HeaderLink extends Component {


    showSettings (event) {
        event.preventDefault();       
      }    


      ScrollToElement = () => {

        console.log(document.getElementById(this.props.elementIdScroll))
        let scrollElement = document.getElementById(this.props.elementIdScroll);

        const page = '/' + this.props.text;
        const { location } = window;

        console.log(`${location.origin}${page}`);
        console.log(this.props.text);
        ReactGA.set({
          page,
          location: `${location.origin}${page}`,
          ...this.props.options
        });
        ReactGA.pageview(page);

        if(scrollElement === null)
        {
          console.log(this.props);
          if(this.props.setElementIDHeader)   
          {
            this.props.setElementIDHeader(this.props.elementIdScroll);
          }  

          if(this.props.closeMenu)   
          {
            this.props.closeMenu();
          }    

          return;
        }

        console.log(document.getElementById("myHeader").offsetHeight);
        window.scroll({
          top:  scrollElement.offsetTop - document.getElementById("myHeader").offsetHeight, 
          left: 0, 
          behavior: 'smooth'
        });
        
        if(this.props.closeMenu)   
        {
          this.props.closeMenu();
        }         
        
        if(this.props.setElementIDHeader)   
        {
          this.props.setElementIDHeader(this.props.elementIdScroll);
        }  
        // this.props.elementScroll.scrollIntoView({block: "start", behavior: "smooth"});
      }      

  render(){   
    console.log("ReRender Header");
    if(this.props.isDesktop === false)     
    {
       
    }      

      return(         
        <Link to={this.props.linkTo} onClick={this.ScrollToElement} className="linkHeader">  
            <span>{this.props.text}</span>
        </Link>                     
          ); 
  }   
}

export default HeaderLink;