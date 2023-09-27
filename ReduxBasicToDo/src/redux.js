import { createStore } from 'redux';

const initialState = {
  toDoList: []
}

// action creater
export const addWork = (toDo) => {
  console.log("4. addWork action");
  return {
    type: "ADD_TODO",
    payLoad: toDo
  }
}
// action creater
export const deleteWork = (id) => {
  return {
    type: 'DEL_TODO',
    payLoad: id
  }
}

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': console.log("5. ADD_TODO"); return {
      toDoList: [...state.toDoList, action.payLoad] // returing obj
    }
    case 'DEL_TODO': return {
      toDoList: state.toDoList.filter((todo, index) => index != action.payLoad)
    }

    default: return state // if no action return initial state
  }
}

export const store = createStore(toDoReducer);
