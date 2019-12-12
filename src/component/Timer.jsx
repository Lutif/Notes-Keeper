import React from "react";
import ReactDOM from "react-dom";


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: "",
      duration: "duration",
      time: new Date().toLocaleTimeString()
    };
    this.intervalID = "";
    this.start = this.start.bind(this);
    this.tick = this.tick.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    console.log("in start");
    console.log(this.state.duration);
    this.setState({ startTime: new Date() });
    this.intervalID = setInterval(this.tick, 1000);
  }
  stop() {
    console.log("stop called");
    clearInterval(this.intervalID);
  }

  tick() {
    console.log("in tick");
    let diff = this.findDuration(this.state.startTime);
    console.log(diff);
    this.setState({ duration: diff });
  }

  findDuration(start) {
    console.log("in differece");
    let miliSeconds = new Date() - start;
    let hms = this.msToTime(miliSeconds);
    console.log(miliSeconds);
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

  render() {
    return (
      <div className="App">
        <h1>CLOCK</h1>
        <h2>{this.state.duration}</h2>
        <h3>{}</h3>
        <button onClick={this.start}> Start</button>
        <button onClick={this.stop}> stop</button>
      </div>
    );
  }
}

export default Timer;