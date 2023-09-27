import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWork, deleteWork } from './redux';
import './style.css';

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toDo: (todo) => { dispatch(addWork(todo)) },
    toDoDel: (id) => { dispatch(deleteWork(id)) }
  }
}
export class AddList extends Component {
  state = { toDo: "" }// yes being used only for typing
  render() {
    console.log("2. render inside AddList ");
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-5 offset-md-4'>
            <h2 className='text-info text-center display-4'>My ToDo</h2>
            <div className='forn-group'>
              <input type='text' value={this.state.toDo} placeholder='Plan task' className='form-control' onChange={(e) => this.setState({ toDo: e.target.value })} />
            </div><br />
            <button onClick={() => {"3. Button CLicked"; this.props.toDo(this.state.toDo); this.setState({ toDo: '' }) }} type='button' className='btn btn-primary'>Add ToDo</button><br /><br />
            <ol className='card'>
              {this.props.toDoList.map((user, index) => <li onDoubleClick={() => { " Delete form list"; this.props.toDoDel(index) }} key={index}>{user}</li>)}
            </ol>
            </div>
        </div>
      </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddList)