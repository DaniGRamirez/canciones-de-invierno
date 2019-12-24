import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './Conciertos.css';
import {formatHtmlText} from '../../FormatHtmlParser'
import ConciertoItem from '../../Components/ConciertoItem'

class Conciertos extends Component {              
    
    render(){

        
        let { loading, error, } = this.props.data;
        
        if (error){
            
        }
        
        if(!loading){      
            console.log(this.props);
            // console.log(this.props.data);                                      
            return (    
                <div className="ConciertosContainer">
                    {/* <h1>Proximos conciertos</h1> */}
                   {this.props.data.conciertoes.map (concierto => (
                       <ConciertoItem key={concierto.id} conciertoData= {concierto} history={this.props.history} ></ConciertoItem>                        
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

export const conciertosInfo = gql`
    query test {
    conciertoes {      
        id
        titulo
        subtitulo
        fecha
        artista
        {
            id
            nombre
            foto
            {
                url                
            }
            descripcion
            {
                html
            }
        }
    }
}
`


export default graphql(conciertosInfo)(Conciertos)