<template>
    <div>
        <!-- 下拉菜单: 通过command监听菜单点击事件, 事件回调里会收到被点击菜单的标识符 -->
        <el-dropdown @command="handleCommand">
            <!-- 菜单title -->
            <span class="el-dropdown-link">
                你好, {{ user.uname }}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>

            <!-- 菜单列表 -->
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item command="logout">注销登陆</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>      
</template>

<script>
    export default {
        data(){
            return {
                user:JSON.parse(localStorage.getItem('user')) || {}
            }
        },
        methods:{
           // 调用接口注销登陆, 成功后清除localStorage存储的用户信息, 然后再跳转到登陆页
            logout(){
                this.$http.get(this.$api.logout)
                    .then(rsp => {
                        localStorage.removeItem('user');
                        this.$router.push('/');
                    })
            },
            // 点击菜单时的处理函数
            handleCommand(command) {
                switch (command) {
                    case 'logout':
                        this.logout();
                        break;
                }
            }
        }
    }
</script>

<style scoped lang='less'>

.el-dropdown-link{
    color:white;
}

</style>