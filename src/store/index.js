import { createStore } from 'vuex';

const store = createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, updatedTask) {
      state.tasks = state.tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }
});

export default store;