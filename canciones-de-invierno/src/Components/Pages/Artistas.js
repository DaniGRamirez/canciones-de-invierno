import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './Artistas.css';
import ArtistaItem from '../ArtistaItem'


let header;
class Artistas extends Component {              
    
    componentDidMount() {    
        header = document.getElementById("myHeader");    
        header.classList.add("forcedArtista");              
    }

    componentWillUnmount() {
        header.classList.remove("forcedArtista");        
      }

    render(){                                                              
       
        let { loading, error, } = this.props.data;
        
        if (error){
            
        }
        
        if(!loading){      
            // console.log(this.props.data);                                      
            return (    
                <div className="ArtistasContainer">
                    {/* <h1>Proximos conciertos</h1> */}
                   {this.props.data.artistas.map (artista => (
                       <ArtistaItem history={this.props.history} key={artista.id} artistaData= {artista}></ArtistaItem>                         
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

    export const artistasInfo = gql`
    query artistas {
    artistas {      
        id
        nombre
        foto{url}
        descripcion{html}
    }
}
`

export default graphql(artistasInfo)(Artistas)