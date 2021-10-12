<template>
    <div class="world-main">
         <el-row style="height:100%;">
             <el-col :span="3" style="min-height:100%; background-color:#ffffff;">
                 <el-menu :default-active="activeIndex" style="min-height: 100%;" theme="white" router>
                     <el-menu-item index="/home/world/wish">
                         <span slot="title">心愿墙</span>
                     </el-menu-item>
                     <el-menu-item index="2">
                         <span slot="title">找伙伴</span>
                     </el-menu-item>
                     <el-menu-item index="3">
                         <span slot="title">讨论角</span>
                     </el-menu-item>
                     <el-menu-item index="4">
                         <span slot="title">激励榜</span>
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
        name:'world',
        data() {
            return {
                activeIndex:'/world',
            }
        },
    }
</script>

<style scoped>
    .world-main{
        position:absolute;
        top:0px;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
    }
</style>