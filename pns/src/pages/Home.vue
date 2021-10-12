<template>
  <div class="home">
      <!-- 全局菜单 -->
      <div class="menu-main">
          <el-row class="menu-main-navigation">
              <el-col :span="12">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                  <el-menu-item index="/home">
                      <img src="../assets/分享.png" height="40" width="60">
                      <span> 编程导航</span>
                  </el-menu-item>
                  <el-menu-item index="/home/resource"><i class="el-icon-s-grid"></i>资源</el-menu-item>
                  <el-menu-item index="/home/world"><i class="el-icon-position"></i>世界</el-menu-item>
                  <el-menu-item index="/home/person"><i class="el-icon-user"></i>个人</el-menu-item>
                  <el-menu-item index="5"><i class="el-icon-tableware"></i><a href="https://www.baidu.com" target="_blank">站长相关</a></el-menu-item>
                </el-menu>
              </el-col>
              <el-col :span="12">
                  <el-menu mode="horizontal">
                    <el-menu-item index="6">
                    <i class="el-icon-search"></i>
                    <el-select
                      v-model="value"
                      multiple
                      filterable
                      remote
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="remoteMethod"
                      :loading="loading"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-menu-item>
                  <el-menu-item>
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                  </el-menu-item>
                  </el-menu>
              </el-col>
          </el-row>
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
                circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                options:[],
                value:[],
                list:[],
                loading:false,
                states: ["Alabama", "Alaska", "Arizona",
                        "Arkansas", "California", "Colorado",
                        "Connecticut", "Delaware", "Florida",
                        "Georgia", "Hawaii", "Idaho", "Illinois",
                        "Indiana", "Iowa", "Kansas", "Kentucky",
                        "Louisiana", "Maine", "Maryland",
                        "Massachusetts", "Michigan", "Minnesota",
                        "Mississippi", "Missouri", "Montana",
                        "Nebraska", "Nevada", "New Hampshire",
                        "New Jersey", "New Mexico", "New York",
                        "North Carolina", "North Dakota", "Ohio",
                        "Oklahoma", "Oregon", "Pennsylvania",
                        "Rhode Island", "South Carolina",
                        "South Dakota", "Tennessee", "Texas",
                        "Utah", "Vermont", "Virginia",
                        "Washington", "West Virginia", "Wisconsin",
                        "Wyoming"]
            }
        },
        mounted() {
          this.list = this.states.map(item => {
            return { value: `value:${item}`,label:`label:${item}` };
          });
        },
        methods: {
            handleSelect(key, keyPath) {
            console.log(key, keyPath);
            },
            remoteMethod(query)  {
              if (query !== '') {
                this.loading = true;
                setTimeout(() => {
                  this.loading = false;
                  this.options = this.list.filter(item => {
                    return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                  })
                },200);
              }else{
                this.options = [];
              }
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
  .menu-main{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 61px;
    width: 100%;
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