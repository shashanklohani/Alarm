import React, { Component } from 'react';
import './App.css';
import Month from './Month.js';
import Year from './Year.js';
import Date from './Date.js';
import Time from './Time.js';
import Alarms from './Alarms';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [{ name: "Jan", selected: true, key: 1 },
      { name: "Feb", selected: false, key: 2 },
      { name: "Mar", selected: false, key: 3 },
      { name: "Apr", selected: false, key: 4 },
      { name: "May", selected: false, key: 5 },
      { name: "Jun", selected: false, key: 6 },
      { name: "Jul", selected: false, key: 7 },
      { name: "Aug", selected: false, key: 8 },
      { name: "Sep", selected: false, key: 9 },
      { name: "Oct", selected: false, key: 10 },
      { name: "Nov", selected: false, key: 11 },
      { name: "Dec", selected: false, key: 12 }],
      days: [],
      date: 1,
      month: "Jan",
      year: 1900,
      hour: 0,
      minute: 0,
      redirect: false,
      alarms: []
    }

    this.selectedMonth = this.selectedMonth.bind(this);
    this.increaseHour = this.increaseHour.bind(this);
    this.decreaseHour = this.decreaseHour.bind(this);
    this.increaseMinute = this.increaseMinute.bind(this);
    this.decreaseMinute = this.decreaseMinute.bind(this);
    this.createDates = this.createDates.bind(this);
    this.selectedDate = this.selectedDate.bind(this);
    this.setAlarm = this.setAlarm.bind(this);
    this.selectedYear = this.selectedYear.bind(this);
    this.setAnotherAlarm = this.setAnotherAlarm.bind(this);
  }

  componentWillMount() {
    this.selectedMonth("Jan");
  }

  increaseHour() {
    var hour = this.state.hour;
    if (hour === 23) {
      this.setState({ hour: 0 });
    }
    else {
      hour++
      this.setState({ hour: hour });
    }
  }

  decreaseHour() {
    var hour = this.state.hour;
    if (hour === 0) {
      this.setState({ hour: 23 });
    }
    else {
      hour--
      this.setState({ hour: hour });
    }
  }

  increaseMinute() {
    var minute = this.state.minute;
    if (minute === 59) {
      this.setState({ minute: 0 });
    }
    else {
      minute++
      this.setState({ minute: minute });
    }
  }

  decreaseMinute() {
    var minute = this.state.minute;
    if (minute === 0) {
      this.setState({ minute: 59 });
    }
    else {
      minute--
      this.setState({ minute: minute });
    }
  }

  createDates(val) {
    var days = [];

    for (var i = 1; i <= val; i++) {
      var newDate = {
        day: i,
        selected: false
      }
      days[i - 1] = newDate;
    }
    this.setState({ days: days });
    console.log(days);
  }

  selectedDate(index) {
    console.log("selected date:" + index);
    var date = index + 1;
    this.setState({ date: date });
    var days = this.state.days;
    days.map(function (item) {
      if (item.day === date) {
        item.selected = true;
      }
      else {
        item.selected = false;
      }
    });
    console.log(days);
  }

  selectedMonth(val) {
    console.log(val);

    var monthCopy = this.state.months;

    if (val === "Jan" || val === "Mar" || val === "May" || val === "July" || val === "Aug" || val === "Oct" || val === "Dec") {
      this.createDates(31);
      console.log("31");
    }

    if (val === "Apr" || val === "Jun" || val === "Sep" || val === "Nov") {
      this.createDates(30);
      console.log("30");
    }

    if (val === "Feb") {
      this.createDates(28);
      console.log("28");
    }

    monthCopy.map(function (item) {
      if (item.name === val) {
        item.selected = true;
      }
      else {
        item.selected = false;
      }
    });
    this.setState({ month: val });
  }

  selectedYear(val) {
    this.setState({ year: val });
  }

  setAlarm() {
    var alarms = this.state.alarms;
    let alarm = this.state.date + " " + this.state.month + " " + this.state.year + " " + this.state.hour + ":" + this.state.minute;

    alarms.push(alarm);

    this.setState({
      redirect: true,
      alarms: alarms
    });
  }

  setAnotherAlarm() {
    this.setState({
      redirect: false
    });
  }

  createAlarm(alarm, index) {
    var index = alarm + 1;
    var alarmName = "Alarm:";
    return <div key={index} className="alarm">{"Alarm At: " + alarm}</div>
  }

  render() {
    if (this.state.redirect) {
      let alarms = this.state.alarms;
      console.log(alarms);
      let listAlarms = alarms.map((alarm, index) => {
        return this.createAlarm(alarm, index);
      });

      return (
        <div className="alarms">
          {listAlarms}
          <button onClick={this.setAnotherAlarm}>Set Another Alarm</button>
        </div>);
    }

    else {
      return (
        <div className="App">
          <Year selectedYear={this.selectedYear} />
          <Month months={this.state.months} selectedMonth={this.selectedMonth} />
          <Date days={this.state.days} selectedDate={this.selectedDate} />
          <br />
          <Time decreaseMinute={this.decreaseMinute} increaseMinute={this.increaseMinute} decreaseHour={this.decreaseHour} increaseHour={this.increaseHour} hour={this.state.hour} minute={this.state.minute} />
          <br />
          <br />
          <button id="setAlarmBtn" onClick={this.setAlarm}>
            Set Alarm
          </button>
          <br />
          <br />
        </div>
      );
    }
  }
}

export default App;