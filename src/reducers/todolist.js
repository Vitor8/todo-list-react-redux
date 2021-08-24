// Estado global da aplicação

const INITIAl_STATE = {
  tasksTodo: [],
  tasksDone: [],
  taskToUpdate: {},
  taskBeingUpdated: false,
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

  case 'PREPARE_TO_UPDATE_TASK':
    return {
      ...state,
      taskToUpdate: action.payload,
      taskBeingUpdated: true,
    }

  case 'UPDATE_TASK':
    const newObjectUpdatedTask = {
      id: action.payload.id,
      textTask: action.payload.textTask,
    }
    let positionToUpdate = null;
    state.tasksTodo.forEach((task, index) => {
      if (task.id === action.payload.id) {
        positionToUpdate = index;
      }
    })
    const tasksTodoUpdated = [...state.tasksTodo];
    tasksTodoUpdated[positionToUpdate] = newObjectUpdatedTask;
    return {
      ...state,
      tasksTodo: tasksTodoUpdated,
      taskToUpdate: {},
      taskBeingUpdated: false,
    }

  default:
    return state;
  }
};

export default todolist;