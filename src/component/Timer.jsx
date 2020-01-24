import React from "react";
import '../CSS/styles.css';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: "",
      duration: "00:00:00",
    timed:true
    };
    this.intervalID = "";
    this.start = this.start.bind(this);
    this.tick = this.tick.bind(this);
    this.stop = this.stop.bind(this);
    this.toggle = this.toggle.bind(this);
    this.pause = this.pause.bind(this);
  }


    
  start() {
    if (!this.state.startTime) {
      this.setState({ startTime: new Date() });
      clearInterval(this.intervalID);//clearing previous intervalID incase already running clock
      this.intervalID = setInterval(this.tick, 1000);
    }
    else {
      const start = new Date() - this.state.startTime;
      this.setState({ startTime: start });
      this.intervalID = setInterval(this.tick, 1000);
    }
  }
  stop() {
    clearInterval(this.intervalID);
    this.setState({ duration: "00:00:00" });
    this.setState({ startTime: '' });
  }
  
  pause() {
    if (this.state.startTime) {
      clearInterval(this.intervalID);
      let pausetime = new Date() - this.state.startTime
      this.setState({ startTime: pausetime });
      console.log(pausetime);
    }
    
  }

  tick() {
    let diff = this.findDuration(this.state.startTime);
    this.setState({ duration: diff });
  }

  findDuration(start) {
    let miliSeconds = new Date() - start;
    let hms = this.msToTime(miliSeconds);
    return hms;
  }
  msToTime(ms) {
    let h, m, s;
    s = Math.floor((ms / 1000) % 60);
    m = Math.floor((ms / (1000 * 60)) % 60);
    h = Math.floor(ms / (1000 * 60 * 60));
    s = s < 10 ? "0" + s : s;
    m = m < 10 ? "0" + m :  m;
    h = h < 10 ? "0" + h : h;
    return h + ":" + m + ":" + s;
  }


    toggle() {
        this.setState({ timed: !this.state.timed });
  }
    render() {
    return (
        <div className="clockContainer">
        {/* <input className="btnClock" type='checkbox' onChange={this.toggle}  /> */}
            {this.state.timed && <div className='subContainer'>
                <p>{this.state.duration}</p>
          <button className="btnClock" onClick={this.start}><AlarmOnIcon /></button>
          <button className="btnClock" onClick={this.pause}><PauseCircleOutlineIcon /></button>
                <button className="btnClock" onClick={this.stop}><AlarmOffIcon/></button>
            </div>}
      </div>);
  }
}

export default Timer;