import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: () => import("@/views/SignInView.vue"),
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: () => import("@/views/SignUpView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/ProfileView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/SettingsView.vue"),
    },
    {
      path: "/edit-article",
      name: "edit-article",
      component: () => import("@/views/EditArticleView.vue"),
    },
    {
      path: "/article",
      name: "article",
      component: () => import("@/views/ArticleView.vue"),
    },
  ],
});

export default router
