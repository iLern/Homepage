import Home from '../views/home.vue'
import Love from '../views/love.vue'
import ToolBox from '../views/tool-box.vue'
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', name: Home, component: Home},
    {path: '/love', name: Love, component: Love},
    {path: '/tool-box', name: ToolBox, component: ToolBox},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
