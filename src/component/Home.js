import React, { Component } from "react";
import Users from "./Users";

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            users : [],
            cart: []
        };
        this.handleAddToCard = this.handleAddToCard.bind(this)
    }
    
    handleAddToCard (user) {
        console.log("This is my state", this.state);
        const newCart = [...this.state.cart,user];
        this.setState({cart:newCart})
        console.log(user);
    }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
       this.setState({users:data})
      });
  }

  render() {
    return <div>
        <h2>total Users: {this.state.users.length}</h2>
        <h3>add users : {this.state.cart.length}</h3>
        {
            this.state.users.map(user => <Users user = {user} key = {user.id} handleAddToCard ={this.handleAddToCard}></Users>)
        }
    </div>;
  }
}

export default Home;
