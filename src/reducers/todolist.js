// Estado global da aplicação

const INITIAl_STATE = {
  tasksTodo: [],
  tasksDone: [],
};

const todolist = (state = INITIAl_STATE, action) => {
  switch (action.type) {
  case 'ADD_TASK':
    const newTask = {
      id: state.tasksTodo.length,
      textTask: action.payload,
    }
    return {
      ...state,
      tasksTodo: [...state.tasksTodo, newTask ]
    };

  case 'REMOVE_TASK':
    const newTasksTodo = state.tasksTodo.filter((task) => task.id != action.payload);
    return {
      ...state,
      tasksTodo: newTasksTodo,
    };

  case 'FINISH_TASK':
    const updateTasksTodo = state.tasksTodo.filter((task) => task.id != action.payload.id);
    return {
      tasksTodo: updateTasksTodo,
      tasksDone: [...state.tasksDone, action.payload]
    };

  case 'UPDATE_TASK':
    return state;

  default:
    return state;
  }
};

export default todolist;