import React, { Component } from "react";
import axios from 'axios';

class Accueil extends Component {
    state = [];

    constructor(props){
        super(props);
        this.state = {
            post: {},
        };
    }    

    // GET the data
    // Récupere les données des gens qui ont rempli le formulaire d'équipe
    // On récupère le nom le prenom l'@ mail et le projet proposé
    componentDidMount() {
        var baseUrl = 'http://localhost:3000';
        var otherurl='https://jsonplaceholder.typicode.com/users'
        axios.get(otherurl)
        .then(function (response) {
            this.setState({
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
        }
        
    }
}

export default Accueil;
