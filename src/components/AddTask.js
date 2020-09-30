import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { AddTask } from "../action/todoAction";
import "./add.css";

class AdTask extends Component {

  state = { description: "",
   isDone: false };
  handleChange = (e) => {
    this.setState({ description: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <input
          className="input_list"
          type="text"
          onChange={this.handleChange}
          placeholder="add your task"
          value={this.state.description}
        />
        <button
          className="butt_add"
          onClick={() => {
            this.props.add({ ...this.state, id: Math.random() });

            this.setState({ description: "" });
          }}
        >
          Add
        </button>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (description) => dispatch(AddTask(description)),
  };
};

export default connect(null, mapDispatchToProps)(AdTask);
