import React, { Component } from 'react';
import axios from 'axios';

class Inscription extends Component{  

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
      this.setState({users: event.target.value});
    }

    addToFormulaire = event =>{
      event.preventDefault();
      this.setState({
        users: event.target.value
      })

      axios.post('http://localhost:3000/users', {
          users: this.state.users
      })
      .then(response =>  {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
    }




        render(){
            return(
            <div className="container">
                <form>
                  <div className="form-group col-md-4">
                    <label htmlFor="InputFirsName">First name</label>
                    <input className="form-control" type="text" id="inputFname" placeholder="First name"  onChange={this.handleChange}/>
                  </div>
        
                  <div className="form-group col-md-4">
                    <label htmlFor="InputLastName">Last name</label>
                    <input className="form-control" type="text" id="inputLname" placeholder="Last name"  onChange={this.handleChange}/>
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"  onChange={this.handleChange}/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" onChange={this.handleChange}/>
                  </div>
        
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">School</label>
                    <select id="inputLocation" className="form-control"  onChange={this.handleChange}>
                    <option selected>Choose school</option>
                    <option>Paris</option>
                    <option>Saint-Quentin en Yvelines</option>
                    <option>Marne-la-Vallée</option>
                    </select>
                </div>

                <div className="form-group col-md-4" >
                    <label htmlFor="inputState">Team</label>
                    <select id="inputLocation" className="form-control" value={this.state.value} onChange={this.handleChange}>
                    <option selected>Choose a team</option>
                    <option>Team 1</option>
                    <option>Team 2</option>
                    <option>Team 3</option>
                    </select>
                </div>
        
                 
        
                  
        
                  <button type="submit" className="btn btn-primary" onClick={this.addToFormulaire}>Register</button>
                </form>
            </div>
            );
        }
        }

        /*function register(e){
            e.preventDefault();
            let request = {
              fname : document.getElementById('inputFname').value,
              lname : document.getElementById('inputLname').value,
              school : document.getElementById('inputSchool').value,
              location : document.getElementById('inputLocation').value,
              email : document.getElementById('exampleInputEmail1').value,
              password: document.getElementById('inputPassword').value
            }
          
            axios.post('http://localhost:3000/users/register', request)
            .then(resp => {
                alert(resp.data.message);
            })
            .catch(err => {
              console.log(err);
            })
  };*/

        
  

export default Inscription;


/*

<div className="form-group col-md-4">
<label htmlFor="inputSchoolName">School name</label>
<input className="form-control" type="text" id="inputSchool" placeholder="Last name"/>
</div>
*/