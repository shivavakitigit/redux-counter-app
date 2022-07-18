import React, { Component } from "react";
import { connect } from "react-redux";
import { TEST, MIN_COUNTER, RESET_COUNTER } from "../actionTypes";

class Counter extends Component {
  add = () => {
    this.props.dispatch({ type: "HI_SUSNTH" });
  };

  less = () => {
    this.props.dispatch({ type: MIN_COUNTER });
  };

  reset = () => {
    this.props.dispatch({ type: RESET_COUNTER, payload: "hi" });
  };

  // disptch = () =>{
  //     previoudDataValue + curremtStateValue + type + payload
  // }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.add}
        >
          ADD +
        </button>
        <br></br>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={this.less}
        >
          SUBSTRACT -
        </button>
        <br></br>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={this.reset}
        >
          reset counter to 100
        </button>
        <br></br>
        <br></br>
        <h1>this is counter component {this.props.name}</h1>


        
      </div>
    );
  }
}
//connects component with redux store state
const mapStateToProps = (globalState) => ({
  count: globalState.counterApp.counter,
  name: globalState.counterApp.name,
  userSdata :globalState.counterApp.usersList
});

//connect function INJECTS dispatch function as a prop!!
export default connect(mapStateToProps)(Counter);
