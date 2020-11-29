import React from 'react';

class Formulaire extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            projet: ""       
        }
        this.handleChange = this.handleChange.bind(this)
    }

    async postToData(){
      try{
        let result = await fetch('http/localhost:3000/users', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            fname:"",
            lname:"",
            email: "",
            projet:""
          })
        });
        console.log(result)
      }catch(e){
        console.log(e)
      }
    }

    handleChange (e) {
        const info = e.target.info
        this.setState({
            [info]: e.target.value,
        })
    }
    sinscrire = event =>{
      event.preventDefault();
      this.setState({
        users: event.target.value
      })

    }

    


    render () {
        return <div>
            <div className="container">
                <form>
                  <div className="form-group col-md-4">
                    <label htmlFor="fname">Firt name</label>
                    <input className="form-control" type="text" id="inputFlname" placeholder="ex: Jean"  onChange={this.handleChange}/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="lname">Last name</label>
                    <input className="form-control" type="text" id="inputFlname" placeholder="ex: Duppont"  onChange={this.handleChange}/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="lname">Email</label>
                    <input className="form-control" type="text" id="inputFlname" placeholder="ex: Duppont@gmail.com"  onChange={this.handleChange}/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="lname">Project</label>
                    <textarea className="form-control" type="text" id="inputFlname"  onChange={this.handleChange}/>
                  </div>
        
                  <button type="submit" className="btn btn-primary" onClick={this.sinscrire}>Register</button>
                </form>
            </div>
        </div>
        }
}


export default Formulaire;
