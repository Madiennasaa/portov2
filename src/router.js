import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Portfolio from "./views/Portfolio.vue";
import CaseStudy from "./views/CaseStudy.vue";
import CV from "./views/CV.vue";
import Products from "./views/Products.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/portfolio/:slug", component: CaseStudy },
    { path: "/products", component: Products },
    { path: "/resume", component: CV },
    { path: "/cv", redirect: "/resume" },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved;
    if (to.hash) return { el: to.hash, top: 96, behavior: "smooth" };
    return { top: 0 };
  },
});
