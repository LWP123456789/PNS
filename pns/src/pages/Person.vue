<template>
  <div class="person-main">
      <el-row style="height:100%;">
             <el-col :span="3" style="min-height:100%; background-color:#ffffff;">
                 <el-menu :default-active="activeIndex" style="min-height: 100%;" theme="white" router>
                     <el-menu-item index="/home/person/personalData">
                         <span slot="title">个人资料</span>
                     </el-menu-item>
                     <el-menu-item index="2">
                         <span slot="title">我的收藏</span>
                     </el-menu-item>
                     <el-menu-item index="3">
                         <span slot="title">推荐记录</span>
                     </el-menu-item>
                     <el-menu-item index="4">
                         <span slot="title">消息通知</span>
                     </el-menu-item>
                     <el-menu-item index="5">
                         <span slot="title">我的心愿</span>
                     </el-menu-item>
                     <el-menu-item index="6">
                         <span slot="title">邀请好友</span>
                     </el-menu-item>
                     <el-menu-item index="7">
                         <span slot="title">积分记录</span>
                     </el-menu-item>
                 </el-menu>
             </el-col>
             <el-col :span="21" style="height:100%;overflow: auto;">
                 <router-view></router-view>
             </el-col>
         </el-row>
  </div>
</template>

<script>
    export default {
        name:'Person',
        data() {
            return {
                activeIndex:"/home/person"
            }
        },
    }
</script>

<style scoped>
    .person-main{
        position:absolute;
        top:0px;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
    }
</style>