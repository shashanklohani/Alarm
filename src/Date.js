import React, { Component } from 'react';
import './Date.css';

class Date extends Component {
    constructor(props) {
        super(props);
    this.createDate = this.createDate.bind(this);
    this.selectDate = this.selectDate.bind(this);
    }

    selectDate(index){
        this.props.selectedDate(index);
        console.log("select date:" + index);
    }
        
    createDate(day,index) {
        return <div className="date" key={index} id={"date"+index} style={day.selected === false ? {background : "white"} : {background : "lightblue"}} className="date" value={index} onClick={()=>{this.selectDate(index)}}>{day.day}</div>
    }

    render() {
        var days = this.props.days;
        console.log(days);
        var listDate = days.map((day, index)=>{
            return this.createDate(day, index);
        });

        return (
            <div className="dateContainer">
            {listDate}
            </div>
        );
    }
}

export default Date;