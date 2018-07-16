import React, { Component } from 'react';

class Year extends Component {
    constructor(props) {
        super(props);
        this.createYear = this.createYear.bind(this);
        this.selectYear = this.selectYear.bind(this);
    }

    createYear(index) {
        var year = 1900 + index;
        return <option key={index} value={year}>{year}</option>
    }

    selectYear(event){
        let year = event.target.value;
        this.props.selectedYear(year);
    }

    render() {
        var listYear =  Array.from(new Array(200),(val,index)=>this.createYear(index));

        return (
            <div className="monthContainer" onChange={this.selectYear}>
                <select>
                    {listYear}
                </select>
            </div>
        );
    }
}
export default Year;