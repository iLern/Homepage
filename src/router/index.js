import Home from '../views/Home.vue'
import Love from '../views/Love.vue'
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', name: Home, component: Home},
    {path: '/love', name: Love, component: Love},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
