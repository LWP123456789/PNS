<template>
  <div class="home">
      <!-- 全局菜单 -->
      <div class="menu-main">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="/home">
                <img src="../assets/分享.png" height="40" width="60">
                <span> 编程导航</span>
                
            </el-menu-item>
            <el-menu-item index="/home/resource"><i class="el-icon-s-grid"></i>资源</el-menu-item>
            <el-menu-item index="/home/world"><i class="el-icon-position"></i>世界</el-menu-item>
            <el-menu-item index="/home/person"><i class="el-icon-user"></i>个人</el-menu-item>
            <el-menu-item index="5"><i class=""></i><a href="https://www.baidu.com" target="_blank">站长相关</a></el-menu-item>
          </el-menu>
      </div>
      <div class="home-main">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
    export default {
        name:'Home',
        data() {
            return {
                activeIndex: '1',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
            console.log(key, keyPath);
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
</style>