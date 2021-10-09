<template>
  <div class="home">
      <div class="menu-main">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <img src="../assets/分享.png" height="40" width="60">
                <span> 编程导航</span>
                
            </el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            <el-submenu index="3">
                <template slot="title">我的工作台</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
                <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项1</el-menu-item>
                <el-menu-item index="3-4-2">选项2</el-menu-item>
                <el-menu-item index="3-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="4" disabled>消息中心</el-menu-item>
            <el-menu-item index="5"><a href="https://www.baidu.com" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
      </div>
      <div class="home-main">
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
      </div>
  </div>
</template>

<script>
    export default {
        name:'Home',
        data() {
            return {
                fullscreenLoading: false
            }
        },
        methods: {
            openFullScreen1() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                this.fullscreenLoading = false;
                }, 2000);
            },
            openFullScreen2() {
                const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                loading.close();
                }, 2000);
            }
        }
    }
</script>

<style scoped>
   .home{
    background-color: #eff1f3;
    position:absolute;
    top:0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
  }
  .home-main{
    position:absolute;
    top:61px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
  }
  .el-aside{
      text-align: center;
  }
  .el-header,.el-footer {
      line-height: 100px;
  }
  .el-main{
      line-height: 500px;
  }
</style>