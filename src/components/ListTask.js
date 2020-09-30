import React,{Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Task from './Task'



class ListTask extends Component{

   
    render(){
        return (
            <Fragment>
                {this.props.todos.map((el,index)=> <Task key={index} todo={el}  />)}
            </Fragment>
                )
            

    }

}

const mapStateToProps=(state)=>{
    return{
        todos : state.taskReducer
    }
}

export default connect(mapStateToProps)(ListTask)