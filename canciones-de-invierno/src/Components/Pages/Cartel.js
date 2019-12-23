import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './Cartel.css';


class Cartel extends Component {              
    
    render(){                                                              
            return (    
                <div className="CartelContainer">
                  <img src='https://media.graphcms.com/fGEjip13Qemxoo1m8Qqh' id="imgCartel"/>
                </div>)
        }
              
    }

export default Cartel;