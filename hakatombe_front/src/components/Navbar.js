import  React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import { withStyles } from '@material-ui/core/styles'
//const classe = useStyle();


const Navbar = () => {



    return(
        <div>
            <a href="/">Accueil</a> 
            <a href="/Formulaire">Formulaire d'équipes</a>
            <a href="/Inscription">Page d'inscription</a>
        </div>
    )
}

/*const styles = {
    root: {
        value: 500,
    }
};*/

/*class Navbar extends React.Component{
    state = {
        value: 0,
    };

    handleChange =  (event, value) => {
        this.setState({ value });
    };
    render(){
        const {classe} = this.props;
        const {value} = this.state;

        return(
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                //className={classe.root}
            >
                <BottomNavigationAction><a href="/">Accueil</a></BottomNavigationAction>
                <BottomNavigationAction><a href="/Formulaire">Formulaire d'équipes</a></BottomNavigationAction>
                <BottomNavigationAction ><a href="/Inscription">Page d'inscription</a></BottomNavigationAction>

            </BottomNavigation> 

        );
    }
}
*/
export default Navbar;