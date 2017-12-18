<template>

<el-container>
        <el-aside width="200px">
            <img class="mylogo" src="../../img/logo.png" alt="">
            <!-- 使用了子组件 -->
            <asidecom></asidecom>
        </el-aside>
        <el-container>
            <el-header>
                  <!-- 使用了子组件 -->
                 <headercom></headercom>
            </el-header>

            <!-- 这一块是动态变化的, 将来通过子路由控制 -->
            <el-main>
                 <!-- 占位 -->
                 <router-view></router-view>


                 
            </el-main>
        </el-container>
    </el-container>


</template>

<script>
    //  引入子组件
     import AsideComponent from "./frame/Aside.vue";
     import HeaderComponent from "./frame/Header.vue";

    export default {
        // 给当前组件注册子组件
        components:{
            asidecom:AsideComponent,
            headercom:HeaderComponent
        }
        
    }
</script>

<style scoped lang='less'>
.el-container {
        height: 100%;
        

        // 左侧高度100%
        .el-aside {
            height: 100%;
            background-color: #267cb7;
            color: white;
            overflow-x: hidden; 
            padding-top: 15px;
            .mylogo{
                 margin-left: 9px;
            }
        }

        // 右侧头部
        .el-header {
            background-color: #176aa1;
            color:white;
            text-align: right;
            line-height: 60px;
        }

        // 右侧变化内容
        .el-main {
            background-color: rgb(240, 240, 240);
            color: #333;
         
        }
    }
</style>