import React, { Component } from "react";
import axios from 'axios';

class Accueil extends Component {
    state = {
        data:[],
    };

    getData = function(){
        var baseUrl = 'http://localhost:3000';
        return axios.get(baseUrl+"/users")
        .then(function (response) {
            return response.data;
        });
    }

    // GET the data
    // Récupere les données des gens qui ont rempli le formulaire d'équipe
    // On récupère le nom le prenom l'@ mail et le projet proposé
    async componentDidMount(){
        const response = await fetch('http://localhost:3000/users');
        const json = await response.json();
        this.setState({data: json});
    }

    render() {   
        let currentComponent = this;
        console.log(currentComponent.state.data);        
        return (
            <div>
                <h4>Hackathon information</h4>
                <ul id="tab">
                    {currentComponent.state.data.map(item => {
                        return(<li>
                            {item.email}: {item.fname}
                            </li>)
                    })}
                </ul>
            </div>
        );        
    }
}

export default Accueil;
