
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const removeTask = (taskId) => ({
  type: 'REMOVE_TASK',
  payload: taskId,
});

export const finishTask = (task) => ({
  type: 'FINISH_TASK',
  payload: task,
});

export const prepareToUpdateTask = (task) => ({
  type: 'PREPARE_TO_UPDATE_TASK',
  payload: task,
});

export const updateTask = (task) => ({
  type: 'UPDATE_TASK',
  payload: task,
});