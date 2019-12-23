import React, {Component} from 'react';

import './HeaderLink.css';

class HeaderLink extends Component {


    showSettings (event) {
        event.preventDefault();       
      }    


      ScrollToElement = () => {
        console.log(document.getElementById("myHeader").offsetHeight);
        window.scroll({
          top:  this.props.elementScroll.offsetTop - document.getElementById("myHeader").offsetHeight, 
          left: 0, 
          behavior: 'smooth'
        });
        
        if(this.props.closeMenu)   
        {
          this.props.closeMenu();
        }                       
        // this.props.elementScroll.scrollIntoView({block: "start", behavior: "smooth"});
      }      

  render(){   
    if(this.props.isDesktop === false)     
    {
       
    }      

      return(         
        <div onClick={this.ScrollToElement} className="linkHeader">  
            <a>{this.props.text}</a>
        </div>                     
          ); 
  }   
}

export default HeaderLink;