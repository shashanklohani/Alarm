import React, { Component } from 'react';
import './Time.css';

class Time extends Component {
    constructor(props) {
        super(props);

        this.increaseHour = this.increaseHour.bind(this);
        this.decreaseHour = this.decreaseHour.bind(this);
        this.increaseMinute = this.increaseMinute.bind(this);
        this.decreaseMinute = this.decreaseMinute.bind(this);
    }

    increaseHour(){
        this.props.increaseHour();        
    }

    decreaseHour(){
        this.props.decreaseHour();
    }

    increaseMinute(){
        this.props.increaseMinute();
    }

    decreaseMinute(){
        this.props.decreaseMinute();
    }

    render() {
        return (
            <div className="timeContainer">
            <div>
            <button onClick={this.increaseHour}>+</button>
            <div>{this.props.hour}</div>
            <button onClick={this.decreaseHour}>-</button>
            </div>
            <div>
            :
            </div>
            <div>
            <button onClick={this.increaseMinute}>+</button>
            <div>{this.props.minute}</div>
            <button onClick={this.decreaseMinute}>-</button>
            </div>
            </div>
        );
    }
}

export default Time;