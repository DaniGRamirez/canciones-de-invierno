import React, {Component} from 'react';
import gql from 'graphql-tag'
import ReactDOM from 'react-dom';
import './Cartel.css';
import { graphql,Query } from 'react-apollo'
import {formatHtmlText} from '../../FormatHtmlParser'

export const textoCartel = gql`
query textoAsset {
  textoAsset(where: {id: "ck4voqxtoau0d0b733ada0x9y"}) {
    status
    updatedAt
    createdAt
    id
    nombre
    texto {
      raw
      html
    }
  }
}
`

class Cartel extends Component {              
    
    render(){           
      
      
      
            return (    
              <div>
                <div className="CartelContainer">
                  <img src='https://media.graphcms.com/KxVBNuCREujjaYiQBUJk' id="imgCartel"/>               

            

                <Query query={textoCartel} >
                {({data,error,loading}) => {

                    if(data)
                        console.log(data);

                    if(loading){
                        return (
                            <div className= "centerDiv">
                                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                            </div>)
                    }

                    if(error){
                        console.log(error);
                        return("Error");
                    }

                    return (            
                        <div className="descFestivalContainer">                      
                            <div className="descFestivalContent">{formatHtmlText(data.textoAsset.texto.html)}</div>                                                     
                        </div>                    
                    );
                }}
                </Query>
              </div>
            </div>)
        }
              
    }

export default Cartel;