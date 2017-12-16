import HomeComponent from "../component/home/Home.vue";
import LoginComponent from "../component/login/Login.vue";
import RegisterComponent from "../component/register/Register.vue";


// 引入组件

export default {
    routes: [
        { name: 'h', path: '/', component: HomeComponent },
        { name: 'l', path: '/login', component: LoginComponent },
        { name: 'r', path: '/register', component: RegisterComponent }
    ]
}