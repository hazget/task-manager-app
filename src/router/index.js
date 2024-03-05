import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import TaskList from '../components/TaskList.vue';
import CreateTask from '../components/CreateTask.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/tasks', component: TaskList },
  { path: '/create-task', component: CreateTask }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;