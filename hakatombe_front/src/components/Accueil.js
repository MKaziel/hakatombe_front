import React, { Component } from "react";
import axios from "axios";

class Accueil extends Component {
    state = {
        dataProject: [],
        dataTeam: [],
    };

    getDataProject = function () {
        var baseUrl = "http://localhost:3000";
        return axios.get(baseUrl + "/project").then(function (response) {
            return response.data;
        });
    };

    // GET the data
    // Récupere les données des gens qui ont rempli le formulaire d'équipe
    // On récupère le nom le prenom l'@ mail et le projet proposé
    async componentDidMount() {
        const response_one = await fetch("http://localhost:3000/project");
        const json_one = await response_one.json();
        this.setState({ dataProject: json_one });

        const response_two = await fetch("http://localhost:3000/teams");
        const json_two = await response_two.json();
        this.setState({ dataTeam: json_two });
    }

    searchTeamofProject(teams_liste, id_team_search){
        return teams_liste.map((el)=>{
            if(el._id === id_team_search){
                return el.name;
            }
        });
    }

    render() {
        let currentComponent = this;
        console.log(currentComponent.state);
        return (
            <div>
                <h4>Hackathon information</h4>
                <ul id="tab1">
                    {currentComponent.state.dataProject.map((item) => {
                        return (
                            <li>
                                <h5>{item.name}:</h5>
                                <p>{item.description}</p>
                                <label>Réaliser par : {this.searchTeamofProject(currentComponent.state.dataTeam, item.team_id)}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Accueil;
