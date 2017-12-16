 <template>
    <div class="login_main">
               
          <div class="login_logo">
              <img src="../../img/logo.png" alt="">
          </div>

            <!-- Form表单: 如果需要表单效验与重置功能, 需要设置model属性为整个表单数据 -->
            <el-form class="login_content_form"  :model="user" :rules='loginRules' status-icon ref="LoginForm" label-width="70px" label-position="left" >

                <!-- 用户名: 表单效验与重置, 需要设置prop属性为表单字段 -->
                <el-form-item  label="用户名:" prop="uname">
                    <!-- 用户名输入框: 这里的v-model记得关联表单字段 -->
                    <el-input type="text" v-model="user.uname" auto-complete="off"></el-input>
                </el-form-item>

                <!-- 密码: 表单效验与重置, 需要设置prop属性为表单字段 -->
                <el-form-item label="密码:" prop="upwd">
                    <!-- 密码输入框: 这里的v-model记得关联表单字段 -->
                    <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
                </el-form-item>

                <!-- 按钮 -->
                <el-form-item>
                    <el-button type="primary" @click="login('LoginForm')">提交</el-button>
                     <el-button @click="resetForm('LoginForm')">重置</el-button>
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
               },
               loginRules:{
                  uname:[
                      {required:true,message:'请输入用户名',trigger:'blur'},
                      {pattern:/\w{4,8}/,message:'长度在4-8个字符，且只能为字母或数字',trigger:'blur'}
                  ],
                    upwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { pattern: /.{6,18}/, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                    ]
               }
           }
       },
       methods:{
            //登录
            login(formName){

                // 满足效验规则才会发送登陆请求
                this.$refs[formName].validate(result => {
                    if (result) {
                     this.$http.post(this.$api.login,this.user)
                               .then(rsp => {
                                   if(rsp.data.message.realname){
                                        alert(rsp.data.message.realname);
                                   }else{
                                       alert('用户名或密码错误！');
                                   }
                               })
                              .then(rsp => this.$router.push('/'));
                    }else {
                        return false;
                    }
                });
      



            },
            // 重置表单
            resetForm(formName) {
                //$refs[]  可以获取DOM对象
                this.$refs[formName].resetFields();
            }

       },
       created(){

            let _this=this;
            //按回车键登录
            document.onkeydown = function() {
                if (event.keyCode == 13) { //监听回车键
                   _this.login('LoginForm');
                }
            }



       }

        
    }
</script>

<style scoped lang='less'>

      .login_main{
          width: 400px;
          height: 250px;
          //background: purple;
          border: 2px solid #E5E5E5;
          border-radius: 5px;
          background:#2c79ba;
          padding: 15px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
         .login_logo{
               width: 100%;
               height: 42px;
               text-align: center;
               background: #2c79ba;
         }
         .login_content_form{
              margin-top: 10px; 
            .el-button{
                margin-left: 45px;
            }
            .el-form-item__label{ 
                color:white;   
            }
         }
        
      }
      
          

</style>       
