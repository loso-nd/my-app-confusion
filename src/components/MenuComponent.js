import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
//stores properties that I want to use in this component, which is an arr of objs (R.C part 1)
        this.state ={
//clear out the state of dishes because it is availabe for use as props from the {App} (R.C part 2)
//Add a new state to keep track of when a selected is has been triggered from null to selected
            selectedDish: null
        }
    }

//handler function to handle my event to updated the state a selectedDish from null to displaying content on the DOM by using this.setState
    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }

    renderDish(dish) {
        if(dish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return <div>Nothing to see here!</div>
        }
    }

    render() {
//Defining a variable called menu that will map over the dishes arr and for each item it will layout each and every dish item. 
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
{/* Add e.listener, pass in the handler that will be responsible for what happens when this event is triggered. */}
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>

                </div>
            );
        });
// Use the js variable menu to return my constructed media list of items
//To display the selectedDish content, pass in the renderDish method and pass in the state as a param, so when the method is called it will return the dish in the form of a card that will be displayed beneath the list of cards.
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        )
    }
}

export default Menu;