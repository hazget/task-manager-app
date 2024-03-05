<template>
  <div class="bg-blue-50 min-h-screen flex flex-col items-center justify-center">
    <div class="bg-white p-8 rounded-4xl shadow-lg w-full md:w-144 mx-4">
      <h2 class="text-3xl font-serif mb-4 text-center">Task Manager App</h2>
      <router-link to="/tasks" class="bg-blue-500 hover:bg-blue-700 text-white font-sans font-bold py-2 px-4 rounded w-full md:w-128 text-center">
        View Tasks
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>