// import React, { Component } from 'react';

// class Alarms extends Component {
//     constructor(props) {
//         super(props);
//     }

//     createAlarm(alarm, index){
//         return <div key={index}>{index + ":   " + alarm}</div>
//     }

//     render() {
//         let alarms = this.props.alarm;
//         let listAlarms =  alarms.map((alarm, index)=>{
//             return this.createAlarm(alarm, index);
//         });

//         return (
//             <div className="alarms">
//                 {listAlarms}
//                 <button onClick={}>Set Another Alarm</button>
//             </div>
//         );
//     }
// }

// export default Alarms;