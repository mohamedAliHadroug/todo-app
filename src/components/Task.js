import React, { Component } from "react";
import { connect } from "react-redux";
import { RemoveTask, EditTask, UpdateTask } from "../action/todoAction";

class Task extends Component {
 
    state = {
    disabled: true,
    description: this.props.todo.description,
    id: this.props.todo.id,
    isDone: this.props.todo.isDone
  };
  handleDisable = () => {
    if (!this.state.disabled) {
      this.props.edit(this.state);
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: !this.state.disabled });
    }
  };
  handleChange = (e) => {
    this.setState({
      description: e.target.value
    });
  };

  render() {
    return (
      <div style={{margin: '50px', fontSize:'20px'}}>
        <input
          onChange={this.handleChange}
          disabled={this.state.disabled ? true : false}
          type="text"
          value={this.state.description}
          className={this.state.isDone ? "todo" : null}
        />
        <button onClick={() =>{this.props.update(this.state.id)
        this.setState({isDone:! this.state.isDone})} }>
          {this.state.isDone ? "Done" : "Not"}
        </button>
        <button onClick={() => this.props.remove(this.state.id)}>Delete</button>
        <button onClick={this.handleDisable}>Edit</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  // the first "remove" is a props we will pass to the Task , the second one 'RemoveTask' is the one we have in our reducer

  return {
    remove: (description) => dispatch(RemoveTask(description)),
    edit: (description) => dispatch(EditTask(description)),
    update: (todo) => dispatch(UpdateTask(todo)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
