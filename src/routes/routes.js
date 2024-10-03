import Compras from "../components/Compras.vue"
import Ventas from "../components/Ventas.vue"
import Login from "../components/Login.vue"
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"


const routes = [
    {path:"/compras", component:Compras},
    {path:"/ventas", component:Ventas},
    {path:"/", component:Login}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})