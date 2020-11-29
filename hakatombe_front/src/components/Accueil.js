import React, { Component } from "react";
import axios from 'axios';

class Accueil extends Component {
    static state = {
        post: {},
    }; 

    // GET the data
    // Récupere les données des gens qui ont rempli le formulaire d'équipe
    // On récupère le nom le prenom l'@ mail et le projet proposé
    componentDidMount() {
        var baseUrl = 'http://localhost:3000';
        let currentComponent = this;
        axios.get(baseUrl+"/users")
        .then(function (response) {
            currentComponent.setState({
                post: response,
            });
        });
    }

    render() {
        let array = null;
        console.log(this.state);
        if (array !== null){
            return (
                <div>
                    <h4>Hackamathon information</h4>
                    <ul>
                        {array.map(item => {return <li>{item}</li>;})}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <h4>Hackamathon information</h4>
                </div>
            );
        }
        
    }
}

export default Accueil;
