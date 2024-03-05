<template>
  <form @submit.prevent="createTask">
    <input type="text" v-model="newTask.title" placeholder="Enter task title" required>
    <textarea v-model="newTask.description" placeholder="Enter task description"></textarea>
    <input type="date" v-model="newTask.dueDate">
    <select v-model="newTask.priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <button type="submit">Add Task</button>
  </form>
</template>

<script>
export default {
  name: 'TaskForm',
  data() {
    return {
      newTask: {
        title: '',
        description: '',
        dueDate: '',
        priority: 'low'
      }
    };
  },
  methods: {
    createTask() {
      this.$store.commit('addTask', { ...this.newTask, id: Date.now() });
      this.newTask = { title: '', description: '', dueDate: '', priority: 'low' };
    }
  }
}
</script>