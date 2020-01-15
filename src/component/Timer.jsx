import React from "react";
import '../CSS/styles.css';

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
  }


    
  start() {
      this.setState({ startTime: new Date() });
      clearInterval(this.intervalID);//clearing previous intervalID incase already running clock
    this.intervalID = setInterval(this.tick, 1000);
  }
  stop() {
    clearInterval(this.intervalID);
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
        console.log('render timer :', this.state.timed);
    return (
        <div className="clockContainer">
        <input className="btnClock" type='checkbox' onChange={this.toggle}  />
            {this.state.timed && <div className='subContainer'>
                <p>{this.state.duration}</p>
                <button className="btnClock" onClick={this.start}> +</button>
                <button className="btnClock" onClick={this.stop}> x</button>
            </div>}
      </div>);
  }
}

export default Timer;