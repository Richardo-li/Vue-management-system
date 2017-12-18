<template>

     
   <div class="aside">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#267cb7"
          text-color="#fff"
          active-text-color="#ffd04b">

          <!-- 导航列表: key属性用于for循环渲染时性能优化, index属性必须设为不一样的值, 这样才能一个一个展开 -->
          <el-submenu v-for="item in menuList" :key="item.title" :index="item.title" >
              <!-- 导航title -->
              <template slot="title" >
                   <span v-html="item.icon"></span>
                  <span>{{ item.title }}</span>
              </template>

              <!-- 导航item -->
              <el-menu-item v-for="subItem in item.children" :key="subItem.title" :index="subItem.title">
                  <!-- 每个子title都是一个a链接, 可以点击, 所以使用router-link, 记得设置to属性 -->
                  <router-link :to="subItem.path">{{ subItem.title }}</router-link>
              </el-menu-item>
          </el-submenu>

      </el-menu>
   </div>
   
</template>

<script>
    export default {
        data() {
            return {
                menuList: [
                    { title: '学生问题',icon:'<i class="el-icon-menu"></i>', children: 
                        [  
                            { title: '内容管理', path: '/' },
                            { title: '类别管理', path: '/' },
                            { title: '评论管理', path: '/'  }
                        ]
                    },
                    { title: '前端技术',icon:'<i class="el-icon-time"></i>', children: 
                        [  
                            { title: '内容管理', path: '/' },
                            { title: '类别管理', path: '/' },
                            { title: '评论管理', path: '/'  }
                        ] 
                    },
                    { title: '难点分析',icon:'<i class="el-icon-setting"></i>', children: 
                        [  
                            { title: '内容管理', path: '/' },
                            { title: '类别管理', path: '/' },
                            { title: '评论管理', path: '/'  }
                        ] 
                    },
                    { title: '资源管理',icon:'<i class="el-icon-upload"></i>', children: 
                        [  
                            { title: '内容管理', path: '/' },
                            { title: '类别管理', path: '/' },
                            { title: '评论管理', path: '/'  }
                        ] 
                    },
                    { title: '商品管理',icon:'<i class="el-icon-loading"></i>', children: 
                        [  
                            { title: '商品列表', path: '/admin/goods/content/list'},
                            { title: '添加商品', path: '/admin/goods/content/add' },
                            { title: '修改商品', path: '/admin/goods/content/edit'  }
                        ] 
                    },
                    { title: '订单管理',icon:'<i class="el-icon-star-on"></i>', children: 
                        [  
                            { title: '订单列表', path: '/' },
                        ] 
                    }
                ]
            }
        }


    }
</script>

<style scoped lang='less'>


    .aside {
        width: 201px;
        // height: 100%;
        .el-menu {
            // height: 100%;
            text-align: left;
        }
    }

    .el-submenu__title{
      width: 100%;
      border: 5px solid black;
    }




</style>