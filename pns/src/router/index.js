// 该文件专门用于创建整个应用的路由器
import VueRouter  from "vue-router"
//引入组件
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import HomePage from '../pages/HomePage'
import HomeResource from '../pages/HomeResource'
import Person from '../pages/Person'
import World from '../pages/World'
import WishWall from '../pages/WishWall'
import PersonalData from '../pages/PersonalData'

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
                    name:'shouye',
                    path:'homepage',
                    component:HomePage
                },
                {
                    name:'ziyuan',
                    path:'resource',
                    component:HomeResource
                },
                {
                    name:'geren',
                    path:'person',
                    component:Person,
                    children:[
                        {
                            name:'gerenziliao',
                            path:'personaldata',
                            component:PersonalData
                        }
                    ]
                },
                {
                    name:'shijie',
                    path:'world',
                    component:World,
                    children:[
                        {
                            name:'xinyuanqiang',
                            path:'wish',
                            component:WishWall
                        }
                    ]
                }
            ]
        }
    ]
})


// router.beforeEach((to,from,next) => {
//     const token = localStorage.getItem('token')
//     //验证有无token
//     if(to.name !== 'denglu' && !token) next({ name : 'denglu'})
//     else next() //放心
// })

export default router