import React, { Component } from 'react';

class Users extends Component {
   
    render() {
        return (
            <div style ={{border:"2px solid red", padding: "10px ", margin:"10px"}}>
                <h4>this is a {this.props.user.name}</h4>
                <button onClick = {() => this.props.handleAddToCard(this.props.user)}>Add to card</button>
            </div>
        );
    }
}

export default Users;