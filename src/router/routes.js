// 引入组件
import LoginComponent from "../component/login/Login.vue";
import AdminComponent from "../component/admin/Admin.vue";
import RegisterComponent from "../component/register/Register.vue";

import GoodsContentAdd from "../component/admin/goods/content/GoodsContentAdd.vue";
import GoodsContentEdit from "../component/admin/goods/content/GoodsContentEdit.vue";
import GoodsContentList from "../component/admin/goods/content/GoodsContentList.vue";

// 设置路由



// 设置用户页子路由
let AdminChildren = [
    { name: 'gca', path: 'goods/content/add', component: GoodsContentAdd },
    { name: 'gce', path: 'goods/content/edit/:id', component: GoodsContentEdit },
    { name: 'gcl', path: 'goods/content/list', component: GoodsContentList }
];


export default {
    routes: [
        { name: 'l', path: '/login', component: LoginComponent },
        { name: 'A', path: '/admin', component: AdminComponent, children: AdminChildren },
        { name: 'r', path: '/register', component: RegisterComponent }
    ]
}