 <template>
    <div class="login_main">
               
          <div class="login_logo">
              <img src="../../img/logo.png" alt="">
          </div>

            <!-- Form表单: 如果需要表单效验与重置功能, 需要设置model属性为整个表单数据 -->
            <el-form class="login_content_form" :model="user" 
                status-icon ref="ruleLoginForm" label-width="70px" label-position="left" >

                <!-- 用户名: 表单效验与重置, 需要设置prop属性为表单字段 -->
                <el-form-item label="用户名" prop="uname">
                    <!-- 用户名输入框: 这里的v-model记得关联表单字段 -->
                    <el-input type="password" v-model="user.uname" auto-complete="off"></el-input>
                </el-form-item>

                <!-- 密码: 表单效验与重置, 需要设置prop属性为表单字段 -->
                <el-form-item label="密码" prop="upwd">
                    <!-- 密码输入框: 这里的v-model记得关联表单字段 -->
                    <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
                </el-form-item>

                <!-- 按钮 -->
                <el-form-item>
                    <el-button type="primary" @click="login('ruleLoginForm')">提交</el-button>
                    <el-button @click="resetForm('ruleLoginForm')">重置</el-button>
                </el-form-item>
            </el-form>

    </div>
</template>

<script>
    export default {
       data(){
           return {
               user:{
                   uname:'',
                   upwd:''
               }
           }
       },
       methods:{

       }

        
    }
</script>

<style scoped lang='less'>
      .login_main{
          width: 400px;
          height: 300px;
          background: purple;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
         .login_logo{
               width: 100%;
               height: 42px;
               text-align: center;
               background: white;
         }
      }
      
          

</style>       
