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
        // this.props.elementScroll.scrollIntoView({block: "start", behavior: "smooth"});
      }      

  render(){   
    if(this.props.isDesktop === false)     
    {
       
    }      

      return(         
        <div onClick={this.ScrollToElement} className="bg-light-gray">  
            <a>{this.props.text}</a>
        </div>                     
          ); 
  }   
}

export default HeaderLink;