<template>
  <div class="login">
    <!-- 这里差个logo -->
    <div class="login-logo">
      <img src="../assets/login-logo.png">
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
          <el-form-item>
            <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
          <!-- <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item prop="age">
            <el-input v-model.number="ruleForm.age" placeholder="年龄"></el-input>
          </el-form-item> -->
          <!-- 提交和重置的间距bug -->
          <el-form-item>
            <div class="login-button">
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      // var checkAge = (rule, value, callback) => {
      //   if (!value) {
      //     return callback(new Error('年龄不能为空'));
      //   }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error('请输入数字值'));
      //     } else {
      //       if (value < 18) {
      //         callback(new Error('必须年满18岁'));
      //       } else {
      //         callback();
      //       }
      //     }
      //   }, 1000);
      // };
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
          // if (this.ruleForm.checkPass !== '') {
          //   this.$refs.ruleForm.validateField('checkPass');
          // }
          callback();
        }
      };
      // var validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.ruleForm.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        ruleForm: {
          username:'',
          pass: '',

          // checkPass: '',
          // age: ''
        },
        rules: {
          username: [
            { validator: validateUser, trigger: 'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          // checkPass: [
          //   { validator: validatePass2, trigger: 'blur' }
          // ],
          // age: [
          //   { validator: checkAge, trigger: 'blur' }
          // ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .login{
    background-color: #409EFF;
    position:absolute;
    top:0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .login-logo{
    margin-top: 60px;
    /* margin-left: 45%; */
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
</style>
