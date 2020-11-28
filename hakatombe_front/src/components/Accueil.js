import React, { Component } from 'react';

class Accueil extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    // GET the data 
    // Récupere les données des gens qui ont rempli le formulaire d'équipe
    // On récupère le nom le prenom l'@ mail et le projet proposé
    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(res => {
            if(res && res.data) {
                this.setState({ users:[...this.state.users, ...res.data]})
            }
        })
    }

    renderUsers(){
      if(this.state.users.length <= 0 && this.state.users === "admin"){
        return <div>Loading..</div>
      }
      else{
        return this.state.users.map((val,key) => {
            return <div key={key}> {val.fname} | {val.lname} | {val.email} | {val.projet} </div>
        });
      }
    }

    render(){
        return(
            <div>
                <h4>Hackamathon information</h4>
                {this.renderUsers()}
            </div>
        );
    }




}

export default Accueil;