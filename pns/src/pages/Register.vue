<template>
  <div class="register">
    <!-- logo -->
    <div class="register-logo">
    <img src="../assets/login-logo.png">
    </div>
    <!-- 注册 -->
    <div class="register-main">
        <div class="register-form">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="register-button">
                        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="info" icon="el-icon-back" @click="backlogin()">返回登陆界面</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name:'Register',
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
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            };
            return {
                ruleForm: {
                    username:'',
                    pass: '',
                    checkPass: '',
                },
                rules: {
                    username: [
                        { validator: validateUser, trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }
            };
        },
         methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            message:'注册成功',
                            type:'success',
                        });
                        this.$router.go(-1)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            backlogin() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .register{
        background-color: #409EFF;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
    .register-logo{
        text-align: center;
        margin-top: 60px;
    }
      .register-main{
        text-align: center;
        background-color: white;
        margin-top: 40px;
        margin-left: 35%;
        margin-right: 35%;
    }
    .register-form{
        padding-top: 10%;
        padding-right: 20%;
        padding-bottom: 3%;
    }
    .register-button{
        text-align: center;
    }
</style>