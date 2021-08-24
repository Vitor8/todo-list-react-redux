
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const removeTask = (task) => ({
  type: 'REMOVE_TASK',
  payload: task,
});

export const finishTask = (task) => ({
  type: 'FINISH_TASK',
  payload: task,
});

export const updateTask = (task) => ({
  type: 'UPDATE_TASK',
  payload: task,
});