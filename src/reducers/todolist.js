// Estado global da aplicação

const INITIAl_STATE = {
  tasksTodo: [],
  tasksDone: [],
};

const todolist = (state = INITIAl_STATE, action) => {
  switch (action.type) {
  case 'ADD_TASK':
    return {
      ...state,
      tasksTodo: [...state.tasksTodo, action.payload ]
    };

  case 'REMOVE_TASK':
    return state;

  case 'FINISH_TASK':
    return state;

  case 'UPDATE_TASK':
    return state;

  default:
    return state;
  }
};

export default todolist;