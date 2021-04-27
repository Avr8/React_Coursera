import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component{

    constructor(props) {

        //props already available
        super(props);

        //state stores the properties related to the component which can be used later 
        this.state ={
            selectedDish: null
        }
    
    }

    onDishSelect(dish) {

        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {

        if(dish != null ){

            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>

                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        }

        else {
            return(
                <div></div>
            )
        }
    }

    render () {
        const menu = this.props.dishes.map((dish) => {

            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick = { () => this.onDishSelect(dish) }>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

    
            );
        });

        return( 
            <div className="container">
                <div className="row">
                    { menu }
                </div>

               <DishDetail dishdetail={this.state.selectedDish} />
                
            </div>
        );
    }
}

export default Menu;