import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="container">
        <form onSubmit={(e) => register(e)}>
          <div class="form-group col-md-4">
            <label for="InputFirsName">First name</label>
            <input class="form-control" type="text" id="inputFname" placeholder="First name"/>
          </div>

          <div class="form-group col-md-4">
            <label for="InputLastName">Last name</label>
            <input class="form-control" type="text" id="inputLname" placeholder="Last name"/>
          </div>

          <div class="form-group col-md-4">
            <label for="inputSchoolName">School name</label>
            <input class="form-control" type="text" id="inputSchool" placeholder="Last name"/>
          </div>

          <div class="form-group col-md-4">
            <label for="inputState">Location</label>
            <select id="inputLocation" class="form-control">
              <option selected>Choose location school</option>
              <option>Paris</option>
              <option>Saint-Quentin en Yvelines</option>
              <option>Marne-la-Vallée</option>
            </select>
          </div>

          <div class="form-group col-md-4">
            <label for="inputEmail">Email address</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"/>
            {/* <small id="emailHelp" class="form-text text-muted">Notice</small> */}
          </div>
          <div class="form-group col-md-4">
            <label for="inputPassword">Password</label>
            <input type="password" class="form-control" id="inputPassword"/>
          </div>

          <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
  );
}

function register(e){
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
}

export default App;
