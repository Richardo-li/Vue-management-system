<template>
    <div>
        <!-- 面包屑导航 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
           <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
           <el-breadcrumb-item>商品管理</el-breadcrumb-item>
           <el-breadcrumb-item>内容管理</el-breadcrumb-item>
           <el-breadcrumb-item>商品列表</el-breadcrumb-item>
         </el-breadcrumb>


         <div class="hr"></div>


        <el-row type="flex" class="row-bg box" justify="space-between">
         <el-col :span="6">
             <div class="grid-content bg-purple">
                     <el-button size="small" icon="el-icon-plus">新增</el-button>
                     <el-button size="small" icon="el-icon-check ">全选</el-button>
                     <el-button size="small" icon="el-icon-delete">删除</el-button>
             </div>
         </el-col>
         <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple">
              <!-- 右边搜索框 -->
              <div class="list_util_search">
                  <el-input size="small" placeholder="请输入内容" @change="getList" v-model='query.searchvalue' prefix-icon="el-icon-search"></el-input>
              </div>
             </div></el-col>
       </el-row>

        
       <!-- 表格: data属性为列表数据, 传入后会根据这个数据自动渲染 -->
       <el-table ref="multipleTable" :data="tableList" height="360" tooltip-effect="dark" style="width: 100%">
           <!-- 多选框列 -->
           <el-table-column type="selection"></el-table-column>

           <!-- 普通列: label用于设置表头, prop用于指定该列展示的字段名称 -->
           <el-table-column label="商品名称" prop="title"></el-table-column>
           <el-table-column width="100" label="所属类别" prop="categoryname"></el-table-column>
           <el-table-column width="100" label="库存" prop="stock_quantity"></el-table-column>
           <el-table-column width="100" label="市场价" prop="market_price"></el-table-column>
           <el-table-column width="100" label="销售价" prop="sell_price"></el-table-column>
           <!-- 普通列: label用于设置表头, 里面的template可以用于设定任意html结构 -->

               <!-- 在temoplate里面, 需要通过scope.row拿到每一行数据 -->
              <el-table-column width="100" label="状态">
                  <template slot-scope="scope">
                      <a href="">{{ scope.row.name }}</a>
                      <i :class="['el-icon-upload2', scope.row.is_top? 'active': '']"></i>
                      <i :class="['el-icon-upload', scope.row.is_hot? 'active': '']"></i>
                      <i :class="['el-icon-picture', scope.row.is_slide? 'active': '']"></i>
                  </template>
              </el-table-column>
              <el-table-column width="100" label="操作">
                  <template slot-scope="scope">
                      <a href="">修改</a>
                  </template>
              </el-table-column>

       </el-table>


     <!-- 分页 -->
     <div class="block">
       <el-pagination  @size-change="handleSizeChange"   @current-change="handleCurrentChange" :current-page="query.pageIndex"
         :page-sizes="[5, 10, 20, 40]"  :page-size="query.pageSize" 
         layout="total, sizes, prev, pager, next, jumper" :total="totalcount">
       </el-pagination>
     </div>

    </div>
</template>

<script>
export default {
       data(){
           return  {
               tableList:[
                     { date: 2017, name: '小美' },
                     { date: 2016, name: '美美' },
                     { date: 2015, name: '大美' }
               ],
               query:{
                   pageIndex: 1,
                   pageSize: 10,
                   searchvalue: ''
               },
               totalcount: 0
           }
       },
       methods:{
            getList(){
                 this.$http.get(this.$api.gsList, { params: this.query })
                       .then(rsp => {
                        //    console.log(rsp);
                           this.tableList=rsp.data.message;
                           this.totalcount=rsp.data.totalcount;
                       })
            },
            // 每页数量变化时触发    获取到 :page-sizes 中选中的值
            handleSizeChange(pageSize){
              console.log(pageSize);
              
              this.query.pageSize = pageSize;
              this.getList();
            },
            handleCurrentChange(pageIndex){
                 console.log(pageIndex);
                 this.query.pageIndex=pageIndex;
                 this.getList();
            }

       },
       created(){
              this.getList();

       }

};
</script>

<style scoped lang='less'>
       .hr {
         margin: 10px 0;
         border-top: 1px solid rgb(214, 211, 211);
         width: 100%;
       }
       
       .box {
         border: 1px solid rgb(214, 211, 211);
         padding: 10px;
         border-radius: 5px;
         margin-bottom: 10px;
       }
       
       .block{
           margin-top: 15px;
           padding:5px;
           background: white;
       }
</style>