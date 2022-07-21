import { Component } from "react";

class ClockClass extends Component {
  constructor(props) {
    super(props);
    //define the state property of this class that is an object containing a value key initialized to new Date()
    this.state = { date: new Date() };
  }

  //lifecycle method that runs after the first mount, i.e. first render
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //lifecycle method that runs when the component updates
  componentDidUpdate() {
    console.log("updates");
  }

  //lifecycle method that runs when the component is about to be unmounted
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //custom method defined by me
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <>
        <span>Class clock</span>

        {/* <h2 onClick={() => this.tick()}> */}
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <hr />
      </>
    );
  }
}

export default ClockClass;
