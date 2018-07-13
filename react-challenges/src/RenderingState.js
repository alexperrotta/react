import React, { Component } from 'react';

class RenderingState extends Component {
    
    constructor() {
        super();
        this.state = {
            cats: 5,
            dogs: 2
        }
    }

catOrDogPerson() {
    let numCats = this.state.cats;
    let numDogs = this.state.dogs;
    
    if (numCats > numDogs) {
        return 'cat';
    }
    else {
        return 'dog';
    }
}


    
    render() {
        return(
            <p>You have 5 cats and 2 dogs, therefore you are a {this.catOrDogPerson()} person.</p>
        );
    }
}


export default RenderingState;