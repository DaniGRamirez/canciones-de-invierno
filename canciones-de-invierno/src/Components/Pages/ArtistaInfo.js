import React, { Component } from 'react';
import { useRouteMatch } from "react-router";
import gql from 'graphql-tag'
import { graphql,Query } from 'react-apollo'
import Artistas from './Artistas';

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

class ArtistaInfo extends Component {


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
                    <div className="artistaInfoContent">  
                        <button onClick={()=> this.props.history.goBack()} >Volver</button>
                        <p>Aqui va descripcion del artista</p>
                        <p>{data.artista.nombre}</p>               
                    </div>                           
                );

            }}
        </Query>
    ) 
    }
}

export default ArtistaInfo;
