import HomeView from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import LoginView from './components/Login.vue'
import AddView from './components/Add.vue'
import UpdateView from './components/Update.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes=[
    {
        name:"Home",
        component:HomeView,
        path:'/'
    },
    {
        name:"SignUp",
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:"Login",
        component:LoginView,
        path:'/login'
    },
    {
        name:"Add",
        component:AddView,
        path:'/add'
    },
    {
        name:"Update",
        component:UpdateView,
        path:'/update/:id'
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router