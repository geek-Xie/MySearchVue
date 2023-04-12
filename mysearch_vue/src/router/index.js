import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchArea from "@/views/SearchArea";
import PersonCenter from "@/views/PersonCenter";
import LoginForm from "@/views/LoginForm";
import RegisterForm from "@/views/RegisterForm";
import MyDou from "@/views/MyDou";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'SearchArea',
        component: SearchArea
    },
    {
        path: "/search",
        name: "SearchArea",
        component: SearchArea
    },
    {
        path: "/personal",
        name: "PersonCenter",
        component: PersonCenter
    },
    {
        path: "/personal/login",
        name: "LoginForm",
        component: LoginForm
    },
    {
        path: "/personal/register",
        name: "RegisterForm",
        component: RegisterForm
    },
    {
        path: "/mydou",
        name: "MyDou",
        component: MyDou
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = new VueRouter({
    routes
})

export default router
