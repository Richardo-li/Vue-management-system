import Vue from "vue"; //引入vue.js 

import Appcomponent from "./component/App.vue"; //引入自己写好的组件


new Vue({
    el: '#app',
    render: function(c) { //渲染组件
        return c(Appcomponent);
    }
})