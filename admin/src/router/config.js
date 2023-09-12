import Center from '@/views/center/Center.vue'
import Home from '@/views/home/Home.vue'
import NewsAdd from '@/views/news-manage/NewsAdd.vue'
import NewsList from '@/views/news-manage/NewsList.vue'
import ProductAdd from '@/views/product-manage/ProductAdd.vue'
import ProductList from '@/views/product-manage/ProductList.vue'
import UserList from '@/views/user-manage/UserList.vue'
import UserAdd from '@/views/user-manage/UserAdd.vue'
const ruotes = [
    {
        path:'/index',
        component:Home
    },
    {
        path:'/center',
        component:Center
    },
    {
        path:'/news-manage/addnews',
        component:NewsAdd
    },
    {
        path:'/news-manage/newslist',
        component:NewsList
    },
    {
        path:'/product-manage/addproduct',
        component:ProductAdd
    },
    {
        path:'/product-manage/productlist',
        component:ProductList
    },
    {
        path:'/user-manage/adduser',
        component:UserList
    },
    {
        path:'/user-manage/userlist',
        component:UserAdd
    },
]

export default ruotes