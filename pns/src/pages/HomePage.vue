<template>
  <div class="homepage-main">
    <!-- 实现一个轮播图 -->
    <div class="banner">
        <el-carousel :interval="4000" type="card" height="230px">
            <el-carousel-item v-for="item in imgList" :key="item.id">
                <img :src="item.idView" alt="lunbotu">
            </el-carousel-item>
        </el-carousel>
    </div>
  </div>
</template>

<script>
    export default {
        name:'HomePage',
        data() {
            return {
                imgList:[
                    {
                        id:0,
                        idView:require("../assets/眼镜男子.png")
                    },
                    {
                        id:1,
                        idView:require("../assets/资源.png")
                    },
                    {
                         id:2,
                         idView:require("../assets/avatar22.png")
                    },
                ]
            }
        },
        methods: {
            
        },  
    }
</script>

<style>
    .homepage-main{
        position:absolute;
        top:0px;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
    }
    .banner{
        position: relative;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 230px;
    }
</style>