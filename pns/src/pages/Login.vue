<template>
  <div class="login">
    <transition
        appear 
        name="animate__animated animate__bounce animate__delay-2s"
        enter-active-class="animate__backInDown"
    >
      <div class="login-frame">
        <!-- logo -->
        <div class="login-logo">
          <img src="../assets/眼镜男子.png">
        </div>
        <!-- 标题 -->
        <div class="login-title">
            <h1 align="center">PNS编程导航系统</h1>
        </div>
        <!-- 登陆架子 -->
        <div class="login-main">
          <div class="login-form">
            <!-- 表单 -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-form-item prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码" @keyup.enter.native="submitForm('ruleForm')"></el-input>
              </el-form-item>
              <el-form-item>
                <div class="login-button">
                  <el-button
                    type="primary" 
                    @click="submitForm('ruleForm')"
                  >
                    提交
                  </el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </div>
              </el-form-item>
              <div class="login-to-register">
                <span>没有账号?</span>
                <router-link to="/register">注册</router-link>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import 'animate.css'
  export default {
    name: 'Login',
    data() {
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }else{
          callback();
        } 
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username:'',
          pass: ''
        },
        rules: {
          username: [
            { validator: validateUser, trigger: 'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message:'登陆成功',
              type:'success',
            });
            this.$router.push({
              name:'zhuye',
              params:{
                ruleForm:this.ruleForm
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>

<style scoped>
  .login{
    background-color: #409EFF;
    position:absolute;
    top:0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
  }
  .login-logo{
    margin-top: 60px;
    text-align: center;
  }
  .login-title{
    font-size: 14px;
    margin-top: 20px;
  }
  .login-main{
    background-color: white;
    margin-top: 40px;
    margin-left: 35%;
    margin-right: 35%;
  }
  .login-form{
    padding: 10%;
  }
  .login-button{
    text-align: center;
  }
  .login-to-register{
    text-align: right;
  }
</style>
