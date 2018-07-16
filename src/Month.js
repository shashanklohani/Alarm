import React, { Component } from 'react';
import './App.css';

class Month extends Component {
    constructor(props) {
        super(props);
        this.createMonths = this.createMonths.bind(this);
        this.selectMonth = this.selectMonth.bind(this);
    }

    createMonths(month, index) {
        return <option key={index} value={month.name}>{month.name}</option>
    }

    selectMonth(event){
        console.log(event.target.value);
        this.props.selectedMonth(event.target.value);
    }

    render() {
        var months = this.props.months;
        
        var listMonths = months.map((month, index) => {
            return this.createMonths(month, index);
        });

        return (
            <div className="monthContainer">
                <select onChange={this.selectMonth}>
                    {listMonths}
                </select>
            </div>
        );
    }
}
export default Month;