import React, { Component } from 'react';
import { useRouteMatch } from "react-router";
import gql from 'graphql-tag'
import { graphql,Query } from 'react-apollo'
import Artistas from './Artistas';
import {formatHtmlText} from '../../FormatHtmlParser'
import './ArtistaInfo.css';

export const artistaInfo = gql`
query artista ($id: ID){
    artista (where:{id: $id})
    {      
        id   
        nombre
        foto{url}
        descripcion{html}    
    }
}
`

let header;

class ArtistaInfo extends Component {
   
    componentDidMount() {    
        header = document.getElementById("myHeader");    
        header.classList.add("forcedArtista");              
    }

    componentWillUnmount() {
        header.classList.remove("forcedArtista");        
      }

render(){
      
    console.log(this.props.match.params.id);

    return(
        <Query query={artistaInfo} variables={{id:this.props.match.params.id}}>
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
                    <div className="artistaInfoContainer">  
                        <button id="buttonGoBack" onClick={()=> this.props.history.goBack()} >
                            <img src="https://image.flaticon.com/icons/png/512/32/32195.png"/>
                        </button>
                        <div className="artistaContent">
                            <div className="fotoNombreArtista">   
                                <div className="nombreContainer">
                                    <h2>{data.artista.nombre}</h2>
                                </div>
                                <img src={data.artista.foto.url}/>
                            </div>
                            <div className="descArtistaContainer">{formatHtmlText(data.artista.descripcion.html)}</div>                                                     
                        </div>
                    </div>                           
                );
            }}
        </Query>
    ) 
    }
}

export default ArtistaInfo;
