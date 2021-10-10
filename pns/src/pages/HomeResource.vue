<template>
    <div class="resource-main">
      <el-container>
            <!-- 在编程导航下的固定侧边导航栏 -->
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-s-home"></i>导航四</template>    
                    <el-menu-item-group>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>
                        <el-menu-item index="4-3">选项3</el-menu-item>
                    </el-menu-item-group>       
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-platform-eleme"></i>导航五</template>    
                    <el-menu-item-group>
                        <el-menu-item index="5-1">选项1</el-menu-item>
                        <el-menu-item index="5-2">选项2</el-menu-item>
                        <el-menu-item index="5-3">选项3</el-menu-item>
                        <el-menu-item index="5-4">选项4</el-menu-item>
                        <el-menu-item index="5-5">选项5</el-menu-item>
                    </el-menu-item-group>       
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title"><i class="el-icon-platform-eleme"></i>导航六</template>    
                    <el-menu-item-group>
                        <el-menu-item index="6-1">选项1</el-menu-item>
                        <el-menu-item index="6-2">选项2</el-menu-item>
                        <el-menu-item index="6-3">选项3</el-menu-item>
                        <el-menu-item index="6-4">选项4</el-menu-item>
                        <el-menu-item index="6-5">选项5</el-menu-item>
                    </el-menu-item-group>       
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title"><i class="el-icon-info"></i>导航七</template>    
                    <el-menu-item-group>
                        <el-menu-item index="7-1">选项1</el-menu-item>
                        <el-menu-item index="7-2">选项2</el-menu-item>
                        <el-menu-item index="7-3">选项3</el-menu-item>
                        <el-menu-item index="7-4">选项4</el-menu-item>
                        <el-menu-item index="7-5">选项5</el-menu-item>
                    </el-menu-item-group>       
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title"><i class="el-icon-edit-outline"></i>导航八</template>    
                    <el-menu-item-group>
                        <el-menu-item index="8-1">选项1</el-menu-item>
                        <el-menu-item index="8-2">选项2</el-menu-item>
                        <el-menu-item index="8-3">选项3</el-menu-item>
                        <el-menu-item index="8-4">选项4</el-menu-item>
                        <el-menu-item index="8-5">选项5</el-menu-item>
                    </el-menu-item-group>       
                </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name:'HomeResource'
    }
</script>

<style>
    .resource-main{
        position:absolute;
        top:0px;
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