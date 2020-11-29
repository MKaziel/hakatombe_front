import React, { Component } from 'react';

class Accueil extends Component{
   state = {
       post: {}
   }

    // GET the data 
    // Récupere les données des gens qui ont rempli le formulaire d'équipe
    // On récupère le nom le prenom l'@ mail et le projet proposé
    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(res => {
            setTimeout(() => {
                this.setState({post: result})
            }, 1500)
        })
    }

    

    render(){
        return(
            <div>
                <h4>Hackamathon information</h4>
                {this.state.post}
            </div>
        );
    }




}

export default Accueil;