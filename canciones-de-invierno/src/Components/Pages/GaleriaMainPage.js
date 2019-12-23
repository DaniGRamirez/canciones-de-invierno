import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './GaleriaMainPage.css';
import {formatHtmlText} from '../../FormatHtmlParser'
import Galeria from '../Galeria'

class GaleriaMainPage extends Component {              
    
    render(){

        
        let { loading, error, } = this.props.data;
        
        if (error){
            
        }
        
        if(!loading){      
            // console.log("Render all galleries");
            // console.log(this.props.data);   

            return (    
                
                <div className="GaleriaMainPageContainer">                    
                    <h1>Galeria conciertos pasados</h1>
                    {this.props.data.conciertoes.map (concierto => (                     
                            <Galeria key={concierto.id} galeriaData= {concierto.galeriaFotos}/>                    
                        ))
                        }
                </div>)                
        }

        return (
            <div className= "centerDiv">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>)

       
    }

}

export const galeriaInfo = gql`
    query test {
    conciertoes {    
        id  
       galeriaFotos{
           id
           titulo
           itemGaleria{
               id
               fileName
               mimeType
               url
           }         
       }
    }
}
`


export default graphql(galeriaInfo)(GaleriaMainPage)