import React from 'react';

class Formulaire extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            email: '',
            projet: ''        
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value,
        })
    }


    render () {
        return <div>
            <div className="container">
                <form>
                  <div className="form-group col-md-4">
                    <label htmlFor="fname">Firt name</label>
                    <input className="form-control" type="text" id="inputFlname" placeholder="ex: Jean" value={this.state.lname} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="lname">Last name</label>
                    <input className="form-control" type="text" id="inputFlname" placeholder="ex: Duppont" value={this.state.fname} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="lname">Email</label>
                    <input className="form-control" type="text" id="inputFlname" placeholder="ex: Duppont" value={this.state.email} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="lname">Project</label>
                    <textarea className="form-control" type="text" id="inputFlname" placeholder="ex: Duppont" value={this.state.projet} onChange={this.handleChange}/>
                  </div>
        
                  <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
            {JSON.stringify(this.state)}
        </div>
        }
}

export default Formulaire;
//ReactDOM.render(<Forumaile/>, document.querySelector('#Formulaire'))



/*<div className="container">
                <form>
                  <div className="form-group col-md-4">
                    <label htmlFor="InputFlName">Full name</label>
                    <input className="form-control" type="text" id="inputFlname" placeholder="ex: Jean Duppont"/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail">Email address</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="ex: jeanduppont@gmail.com"/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputProjet">Proposed project</label>
                    <textarea type="text" class="form-control" id="inputProjet"/>
                  </div>
        
                  <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>*/