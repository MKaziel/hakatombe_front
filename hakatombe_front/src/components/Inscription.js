import React from 'react';
import axios from 'axios';

const Inscription = () =>{  
    return(
            <div className="container">
                <form onSubmit={(e) => register(e)}>
                  <div className="form-group col-md-4">
                    <label htmlFor="InputFirsName">First name</label>
                    <input className="form-control" type="text" id="inputFname" placeholder="First name"/>
                  </div>
        
                  <div className="form-group col-md-4">
                    <label htmlFor="InputLastName">Last name</label>
                    <input className="form-control" type="text" id="inputLname" placeholder="Last name"/>
                  </div>
        
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">School</label>
                    <select id="inputLocation" class="form-control">
                    <option selected>Choose school</option>
                    <option>Paris</option>
                    <option>Saint-Quentin en Yvelines</option>
                    <option>Marne-la-Vallée</option>
                    </select>
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Team</label>
                    <select id="inputLocation" class="form-control">
                    <option selected>Choose a team</option>
                    <option>Les nulls</option>
                    <option>Les nous</option>
                    <option>Les vous</option>
                    </select>
                </div>
        
                 
        
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail">Email address</label>
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword"/>
                  </div>
        
                  <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
          );

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