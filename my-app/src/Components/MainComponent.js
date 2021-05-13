import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';


class Main extends Component {

  constructor(props) {
    super(props);

    //state stores the properties related to the component which can be used later 
    this.state = {
      dishes:DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS,
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish:dishId });
  // }

  render() {

    // Another Way to supply a component by explicitly declaring here
    // The first way is to pass it directly in the component as in Menu Component

    const HomePage = () => {

      return(
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    return (
      <div>
        <Header />

        {/* Switch to enclose all our routes into our main component */}

        <Switch> 
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes} /> } />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" /> 
        </Switch>
 
        <Footer />
      </div>
      
    );
  }

};

export default Main;
