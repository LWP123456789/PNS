// 该文件专门用于创建整个应用的路由器
import VueRouter  from "vue-router"
//引入组件
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import HomeResource from '../pages/HomeResource'
import Person from '../pages/Person'
import World from '../pages/World'

const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            name:'denglu',
            path:'/login',
            component:Login,
            meta:{title:'登录'}
        },
        {
            name:'zhuce',
            path:'/register',
            component:Register,
            meta:{title:'注册'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'ziyuan',
                    path:'resource',
                    component:HomeResource
                },
                {
                    name:'geren',
                    path:'person',
                    component:Person
                },
                {
                    name:'shijie',
                    path:'world',
                    component:World
                }
            ]
        }
    ]
})

export default router