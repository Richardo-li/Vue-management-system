//导入第三方包
import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import './less/index.less';

//启动vue路由插件  (只要是vue插件，就要使用use启动，不是vue插件就不用)
Vue.use(VueRouter);

Vue.use(ElementUI);


//引入自己的包
import Appcomponent from "./component/App.vue"; //引入自己写好的根组件
import Routes from "./router/routes.js"; //该文件用来 配置路由

// 导入配置后的axios与api, 并注入到Vue原型中 将来在实例通过this.$http调用
import axios from "./js/axios_config";
import api from "./js/api_config.js";
Vue.prototype.$http = axios;
Vue.prototype.$api = api;



new Vue({
    el: '#app',
    render: function(c) { //渲染组件
        return c(Appcomponent);
    },
    router: new VueRouter(Routes)
})