import { createMemoryHistory, createRouter } from "vue-router";

import MainView from "./views/MainView.vue";

const routes = [{ path: "/", component: MainView, name: "main" }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
