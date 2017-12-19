<template>
    <div>

        <!-- 面包屑导航=================================================================================== -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
           <el-breadcrumb-item @click='back' >返回上一层</el-breadcrumb-item>
           <el-breadcrumb-item>购物商城</el-breadcrumb-item>
           <el-breadcrumb-item>首页</el-breadcrumb-item>
           <el-breadcrumb-item>修改内容</el-breadcrumb-item>
         </el-breadcrumb>

         <div class="hr"></div>

        <!-- 表单===================================================================================   -->
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       
       <!-- 标题=================================================================================== -->
       <el-row>
           <el-col :span="12"><div class="grid-content bg-purple">
               <el-form-item label="内容标题" prop="title">
                 <el-input v-model="ruleForm.title"></el-input>
               </el-form-item>
              </div></el-col>
           <el-col :span="12"><div class="grid-content bg-purple">
               <el-form-item label="副标题" prop="sub_title">
                 <el-input v-model="ruleForm.sub_title"></el-input>
               </el-form-item>
               
            </div></el-col>
       </el-row>

       <!-- 所属类别=================================================================================== -->
       <el-row>
         <el-col :span="8"><div class="grid-content bg-purple">
                 <el-form-item label="所属类别" prop="category_id">
                   <el-select v-model="ruleForm.category_id" placeholder="请选择">
                     <!-- <el-option label="手机数码" value="151"></el-option>
                     <el-option label="影音娱乐" value="152"></el-option> -->
                        <el-option v-for="item in goodsCategory" 
                             :key="item.category_id" 
                             :label="item.title" 
                             :value="item.category_id">
                             <!-- 根据分类层级生成不同的空隙 -->
                            <span v-for="i in (item.class_layer-1)" :key='i'>&nbsp;</span>
                            <!-- 顶级分类没有空隙 -->
                            <span v-if='item.class_layer !=1'>|></span>
                            <!-- 显示文本 -->
                            <span>{{item.title}}</span>
                        </el-option>

                   </el-select>
                 </el-form-item>


             </div></el-col>
         <el-col :span="5"><div class="grid-content bg-purple">
                 <el-form-item label="是否发布" prop="status">
                    <!-- <el-switch  v-model="value2" active-color="#13ce66" on-text='是'> </el-switch> -->
                      <el-switch on-text="是" off-text="否" v-model="ruleForm.status"></el-switch>
                    <!-- <el-switch v-model="ruleForm.delivery">是</el-switch> -->
                 </el-form-item>
             </div></el-col>
         <el-col :span="11"><div class="grid-content bg-purple">

                 <el-form-item label="推荐类型">
                       <el-switch active-text="轮播图" v-model="ruleForm.is_slide"></el-switch>
                       <el-switch active-text="置顶" v-model="ruleForm.is_top"></el-switch>
                       <el-switch active-text="推荐" v-model="ruleForm.is_hot"></el-switch>
                 </el-form-item>   

            </div></el-col>
       </el-row>


       <!-- 封面=================================================================================== -->

       <el-row>
         <el-col :span="12"><div class="grid-content bg-purple">
                  <el-form-item label=" 上传封面" prop="nickname">              
                       <!-- <el-button size="small" type="primary" icon="el-icon-upload">上传</el-button> -->
                       
                        <el-upload
                           class="upload-demo"
                           :action='uploadImgUrl'
                           :file-list="ruleForm.imgList"
                           :on-success="uploadImgHandler"     
                           list-type="picture">
                           <el-button size="small" icon="el-icon-upload" type="primary">点击上传</el-button>
                         </el-upload>
                
                  </el-form-item>
             </div></el-col>


         <el-col :span="12"><div class="grid-content bg-purple">
                  <el-form-item label="上传附件" prop="nickname">              
                      <!-- <el-button size="small" type="primary" icon="el-icon-upload">上传</el-button> -->
                      <el-upload
                        class="upload-demo"
                        :action='uploadFileUrl'
                         :on-success="uploadFileHandler"
                         :limit="3"
                        :file-list="ruleForm.fileList">
                        <el-button size="small" icon="el-icon-upload" type="primary">点击上传</el-button>
                      </el-upload>
                  </el-form-item>
             </div></el-col>
       </el-row>


    <!-- 商品信息=================================================================================== -->
       <el-row>
         <el-col :span="6"><div class="grid-content bg-purple">
               <el-form-item label="商品货号" prop="goods_no">
                 <el-input v-model="ruleForm.goods_no"></el-input>
               </el-form-item>
             </div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple">
               <el-form-item label="库存数量" prop="stock_quantity">
                 <el-input v-model="ruleForm.stock_quantity"></el-input>
               </el-form-item>
             </div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple">
              <el-form-item label="市场价格" prop="market_price">
                 <el-input v-model="ruleForm.market_price"></el-input>
               </el-form-item>
             </div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple">
            <el-form-item label="销售价格 " prop="sell_price">
                 <el-input v-model="ruleForm.sell_price"></el-input>
               </el-form-item>
             </div></el-col>
       </el-row>

        <el-form-item label="内容摘要" prop="zhaiyao">
          <el-input type="textarea" v-model="ruleForm.zhaiyao"></el-input>
        </el-form-item>
 
       <!-- 富文本编辑器=================================================================================== -->
         <el-row>
           <el-col :span="24"><div class="grid-content bg-purple">
                 <el-form-item label="详细内容 " prop="content">
                       <quill-editor v-model="ruleForm.content" ref="myQuillEditor" >  </quill-editor>
                 </el-form-item>
               </div></el-col>
       
         </el-row>
        
        <br>
             
         <!-- <el-row>
           <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
         </el-row>
         -->

     <!-- 提交=================================================================================== -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
          <el-button type="warning" @click="back()">返回上一页</el-button>
        </el-form-item>
        
</el-form>





    </div>
</template>

<script>
  
//    导入表单组件
import {quillEditor} from "vue-quill-editor";

  export default {
       //   表单组件
       components: {
            quillEditor
          },
    data() {
      return {
        id: this.$route.params.id,
        goodsCategory:'',
        uploadImgUrl:this.$http.defaults.baseURL+ this.$api.atImg,
        uploadFileUrl:this.$http.defaults.baseURL+ this.$api.atFile,

        ruleForm: {   },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
          ],
          category_id:[
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          zhaiyao:[
            { required: true, message: '请输入摘要', trigger: 'blur' },
          ],
          content:[
            { required: true, message: '请输入内容', trigger: 'blur' },
          ]
        }
      };
    },
    methods: {
       //获取商品信息
       getGoods(){
             this.$http.get(this.$api.gsDetail + this.id)
                    .then(rsp => {
                       // 为了让select能够自动选取默认的值, 把category_id转换为number, 与分类列表的id数据类型一致
                       rsp.data.message.category_id = +rsp.data.message.category_id;
                      this.ruleForm = rsp.data.message;
                    }); //显示数据

       },
       // 获取商品分类信息, 获取分类的接口多个模块公用一个, 需要通过模块名称进行不同分类请求
       getGoodsCategory() {
           this.$http.get(this.$api.ctList + 'goods')
               .then(rsp => {
                   //获取商品所有的分类    并    显示
                   this.goodsCategory = rsp.data.message;
               });
       },
       // 修改商品信息, 记得后面加上商品ID参数
       modifyGoods() {
           this.$http.post(this.$api.gsEdit + this.id, this.ruleForm)
               .then(rsp => {
                 this.$alert(rsp.data.message)
                  this.$router.push('/admin/goods/content/list');
               });
       },
       // 封面上传成功, 要把服务端返回的url数据结果, 保存到form表单当中, 将来随着表单提交
       uploadImgHandler(data) {
          //  console.log(arguments);
           this.ruleForm.imgList = [ data ]; // 封面图只能有一张, 所以直接赋值一个新数组
       },  

       // 附件上传成功, 要把服务端返回的url数据结果, 保存到form表单当中, 将来随着表单提交
       uploadFileHandler(data) {
           this.ruleForm.fileList.push(data); // 附件允许多张, 所以每次push新的附件url
       },



      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

        
            this.modifyGoods();  //修改商品信息，并提交


          } else {
            this.$alert('修改错误！！！');
            // console.log('error submit!!');
            return false;
          }
        });
      },
      // 回到上一页
      back(){
        this.$router.go(-1);
      }
    },
    created(){

         this.getGoodsCategory();//获取所有分类
 
         this.getGoods();  //获取所有信息


    }

  }
</script>

<style scoped lang='less'>

       .hr {
         margin: 10px 0;
         border-top: 1px solid rgb(214, 211, 211);
         width: 100%;
       }


       .demo-ruleForm{
           border: 1px solid rgb(214, 211, 211);
           border-radius: 5px;
           padding: 10px;
       }




      

</style>