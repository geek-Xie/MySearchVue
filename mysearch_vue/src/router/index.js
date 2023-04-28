import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchArea from "@/views/SearchArea";
import PersonCenter from "@/views/PersonCenter";
import LoginForm from "@/views/LoginForm";
import RegisterForm from "@/views/RegisterForm";
import MyDou from "@/views/MyDou";
import AddMovie from "@/views/AddMovie.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/search"
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
    },
    {
        path: "/mydou/add",
        name: "AddMovie",
        component: AddMovie
    }

]

const router = new VueRouter({
    routes
})

export default router
