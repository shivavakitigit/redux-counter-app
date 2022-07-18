import React, { Component } from "react";
import { connect } from "react-redux";
import { TEST, MIN_COUNTER, RESET_COUNTER } from "../actionTypes";

class Practice extends Component {
  render() {
    return (
      <div>
        <h1>test counter : {this.props.keerthi}</h1>
      </div>
    );
  }
}
//connects component with redux store state
// const mapStateToProps = (state) => ({ count: state.counterApp.counter });
const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        keerthi: state.counterApp.name
    }
}
//connect function INJECTS dispatch function as a prop!!
export default connect(mapStateToProps)(Practice);
