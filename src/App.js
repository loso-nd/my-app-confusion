//import logo from './logo.svg';
//import 'semantic/dist/semantic.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './components/shared/dishes';
import { Component } from 'react';

//Lifting the state of the dishes from {Menu} and imported the {DISHES} above to be made available below and other components. 

//In order to store the state we need to transform the functional component into a class component.

class App extends Component {
  constructor(props){
    super(props);
//dishes defined in the state is now avaiable as props to my menu component through props
      this.state = {
        dishes: DISHES
      };
  }

  render() {

    return (
      <div>
        <Navbar dark color="success">
          <div className="container">
            <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand> 
          </div>
        </Navbar>
{/* <!-- pass my state as props into the {Menu} --> */}
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
