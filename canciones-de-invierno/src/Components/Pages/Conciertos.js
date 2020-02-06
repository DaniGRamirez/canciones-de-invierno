import React, {Component,useEffect} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './Conciertos.css';
import {formatHtmlText} from '../../FormatHtmlParser'
import ConciertoItem from '../../Components/ConciertoItem'
import ScriptTag from 'react-script-tag';

import Galeria from '../Galeria'

class Conciertos extends Component {              
             
    fisrtFunction()
    {
        // let _ntk = _ntk || [];   
        // _ntk.push({
        //     channel: 'canciones-de-invierno',
        //     content: 'canciones-de-invierno',
        //     type: 4,
        //     layout: 'widget',
        //     resizer: true,
        //     customCss: 'https://media.notikumi.com/css/widget/custom/canciones-de-invierno.css'
        // });
    }

    componentDidUpdate()
    {

        var nw = document.getElementById('widgetCompra'); 
        console.log(nw);
        // console.log(document.getElementsByClassName('ConciertosContainer')); 
        let parentToFix = document.getElementsByClassName('ConciertosContainer')[0];
        console.log(parentToFix);
        if(parentToFix != null)
        {
            parentToFix.insertBefore(nw, parentToFix.firstChild);            
        }
    
        console.log(document.getElementById('testID'));
    }
    
    moveWidget()
    {

    }

   

    render(){
    let scripts =  "<script type='text/javascript' class='___ntk-widget'>var _ntk = _ntk || [];_ntk.push({channel: 'canciones-de-invierno',content: 'canciones-de-invierno',type: 4,layout: 'widget',resizer: true,customCss: 'https://media.notikumi.com/css/widget/custom/canciones-de-invierno.css'});</script><script type='text/javascript'>(function () {var nw = document.createElement('script'); nw.type = 'text/javascript'; nw.async = true;nw.src = 'https://media.notikumi.com/js/widget/current/widget.min.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(nw, s);})();</script>"
       
        let { loading, error, } = this.props.data;
        
        if (error){
            
        }
        
        if(!loading){      
            console.log(this.props);
            this.moveWidget();
            // console.log(this.props.data);                                      
            return (    
                <div className="ConciertosContainer" id="testID">   
                    <h1>Próximos conciertos</h1>
                    {/* {formatHtmlText(scripts)} */}
                    {/* <ScriptTag type="text/javascript" class="___ntk-widget"/>    */}
                    {/* {this.fisrtFunction()}                                 */}
                    <div id='ConciertosIframe'/>  
                    {/* <h1>Proximos conciertos</h1> */}
                   {this.props.data.conciertoes.filter(concierto => concierto.pasado == false).map (concierto => (
                       <ConciertoItem key={concierto.id} conciertoData= {concierto} history={this.props.history} ></ConciertoItem>                        
                    ))
                    }

                    <h1> Crónicas conciertos</h1>
                    {this.props.data.conciertoes.filter(concierto => concierto.pasado == true).map (concierto => (
                       <div>
                            <ConciertoItem key={concierto.id} conciertoData= {concierto} history={this.props.history} ></ConciertoItem>                        
                            <div className ="galeriaConcierto">                                                   
                            <Galeria mostrarNombre="true" key={concierto.id} galeriaData= {concierto.galeriaFotos}/>                    
                            </div>
                        </div>

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
        pasado
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


export default graphql(conciertosInfo)(Conciertos)