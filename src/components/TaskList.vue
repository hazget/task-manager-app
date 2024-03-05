<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center">
    <div class="bg-white p-8 rounded-4xl shadow-lg w-full md:w-144 mx-4 mt-8">
      <h2 class="text-2xl font-serif mb-4 text-center">Task List</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id" class="bg-white border rounded-4xl p-4 mb-4 shadow-lg">
          <input v-model="task.title" @blur="updateTask(task)" class="w-full py-2 px-3 border rounded-lg mb-2">
          <button @click="deleteTask(task.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
            Delete
          </button>
        </li>
      </ul>
      <router-link to="/create-task" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full md:w-128 text-center">
        Create Task
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    deleteTask(id) {
      this.$store.commit('deleteTask', id);
    },
    updateTask(task) {
      this.$store.commit('updateTask', task);
    }
  }
}
</script>