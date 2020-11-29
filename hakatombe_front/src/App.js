import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Inscription from "./components/Inscription";
import Formulaire from "./components/Formulaire" ;


class App extends Component {

    constructor(props) {
      super(props);
      this.state= {
        users: []
      }
    }

   /* componentDidMount(){
      fetch('http://localhost:3000/users%27)
      .then(response => response.json())
      /.then(res => {
          if(res && res.data) {
            console.log(res.data)
          }
      })
      response.then((res) => {
        console.log(res)
      })
    }*/

  render(){

    return(
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/Accueil" component={Accueil}/>
          <Route path="/Inscription" component={Inscription}/>
          <Route exact path="/" component={Formulaire}/>
        </div>

        <div>

        </div>
      </Router>
    );
  }


}

export default App;
