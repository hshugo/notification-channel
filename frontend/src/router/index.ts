import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import  HomeView  from "../views/HomeView.vue"
import  NotificationView  from "../views/NotificationView.vue"
import  LogView  from "../views/LogView.vue"

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/logs',
    name: 'Logs',
    component: LogView
  },
  {
    path: '/notification',
    name: 'Form',
    component: NotificationView
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;