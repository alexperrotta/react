import React, { Component } from 'react';



class Poker extends Component {

    constructor() {
        super();
        this.state = {
            pokerHand: [
                {
    				suit: "Clubs",
    				number: 2
    			},
    			{
    				suit: "Hearts",
    				number: 7
    			}
            ]
        };
    }


    // add a random card to the hand
    addRandomCard() {
        // make a copy of the original poker hand, copies an array of objects
        let newPokerHand = this.state.pokerHand.map((card)=>{
            return {...card}
        });

        // can reference the suits by their index
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        newPokerHand.push({
            number: Math.ceil(Math.random()*13),
            suit: suits[Math.floor(Math.random()*4)]
        })

        this.setState({
            pokerHand: newPokerHand
        });   
    }



    changeToJokers() {
        // make a copy of the original poker hand, copies an array of objects
        let newPokerHand = this.state.pokerHand.map((card)=>{
            return {
                suit: 'joker',
                number: 'joker'
            }
        });

        // update the state
        this.setState({
            pokerHand: newPokerHand
        })
    }




    render() {
                
        return (
            <div> 
                {this.state.pokerHand.map((card)=>{
                    return <h1>{card.number} of {card.suit}</h1>
                })}
                <button onClick={this.addRandomCard.bind(this)}>Random Card</button>
                <button onClick={this.changeToJokers.bind(this)}>Change to Joker</button>
            </div>
        )
    }


}



export default Poker;