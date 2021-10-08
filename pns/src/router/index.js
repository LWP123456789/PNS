// 该文件专门用于创建整个应用的路由器
import VueRouter  from "vue-router"
//引入组件
import Login from '../pages/Login'

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
        }
    ]
})

export default router