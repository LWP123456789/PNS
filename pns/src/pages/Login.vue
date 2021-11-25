<template>
  <div class="login">
    <transition
        appear 
        name="animate__animated animate__bounce animate__delay-2s"
        enter-active-class="animate__backInDown"
    >
          <el-card
            style="width: 500px;height: 350px;float: right;margin-right: 10%;margin-top: 14%"
            shadow="hover"
          >
            <el-tabs v-model="activeName">
                <el-tab-pane label="密码登录" name="first">
                    <el-form
                     ref="ruleForm" 
                     :model="ruleForm"
                     :rules="rules" 
                     label-width="50px"
                     style="margin-top: 30px"
                     @keyup.enter.native="submitForm('ruleForm')"
                    >
                        <el-form-item label="账号" prop="username">
                          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                          <el-input v-model="ruleForm.pass" placeholder="密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button 
                            type="primary"
                            style="width:400px"
                            @click="submitForm('ruleForm')"
                          >
                            登录
                          </el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
              <el-tab-pane label="验证登录" name="second">
                  <el-form
                     ref="emailForm" 
                     :model="emailForm"
                     :rules="rules2" 
                     label-width="60px"
                     style="margin-top: 30px"
                     @keyup.enter.native="submitForm('emailForm')"
                    >
                        <el-form-item label="邮箱" prop="email">
                          <el-input v-model="emailForm.email" placeholder="邮箱"></el-input>
                          <el-button type="primary"  style="margin-top: 5px" @click="getCode(emailForm.email)">获取验证码</el-button>
                        </el-form-item>
                        <el-form-item label="验证码" prop="code">
                          <el-input v-model="emailForm.code" placeholder="验证码">
                          </el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button 
                            type="primary"
                            style="width:400px"
                            @click="submitForm('emailForm')"
                          >
                            登录
                          </el-button>
                        </el-form-item>
                  </el-form>
              </el-tab-pane>
              <el-tab-pane label="注册账号" name="third">
                  <el-form
                     ref="registerForm" 
                     :model="registerForm"
                     :rules="rules3" 
                     label-width="60px"
                     style="margin-top: 30px"
                     @keyup.enter.native="register('registerForm')"
                    >
                        <el-form-item label="用户名" prop="username">
                          <el-input v-model="registerForm.username" placeholder="输入你要注册的用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                          <el-input v-model="registerForm.password" placeholder="输入你要注册的用户名">
                          </el-input>
                        </el-form-item>
                        <!-- 可增加确认密码的逻辑 -->
                        <el-form-item>
                          <el-button 
                            type="primary"
                            style="width:400px"
                            @click="register('registerForm')"
                          >
                            注册账号
                          </el-button>
                        </el-form-item>
                  </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
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
      var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else {
          callback();
        }
      };
      return {
        imgSrc: require('@/static/仰望星空.jpg'),
        activeName: 'first',
        isClick: false,
        ruleForm: {
          username:'',
          pass: ''
        },
        emailForm :{
          email: '',
          code: '',
        },
        registerForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { validator: validateUser, trigger: 'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        },
        rules2: {
          email: [
            { validator: validateEmail, trigger: 'blur'}
          ],
        },
        rules3: {
          username: [
            { validator: validateUser, trigger: 'blur'}
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
        },
      };
    },
    methods: {
      submitForm(formName) {
        // 表单验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 通过验证之后才请求登录接口
            this.$api.users
              .login(this.ruleForm)
              .then(({data}) => {
                const { accessToken } = data
                localStorage.setItem('token',accessToken)
                // this.$message({
                //   message:'登陆成功',
                //   type:'success',
                // });
                // this.$router.push({
                //   name:'shouye',
                //   params:{
                //     ruleForm:this.ruleForm
                //   }
                // })
                this.$message({
                  message:'登陆成功',
                  type:'success',
                });
              })
              .catch((err) => {
                this.$message.error(err.response.data.message)
              })
            
            this.$router.push({
              name:'shouye',
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
      getCode(email) {  
        // 判断输入的邮箱是否合法 1.后缀名是否合法 2.有没有漏到@符 3.邮箱是否存在等
        // axios请求到后端验证
        this.$api.users
          .getCode(email)
          .then(() => {

          })
          .catch(() => {
            
          })
        this.$message({
              message:'验证码已发送',
              type:'success',
            });
      },
      register(registerForm){
        this.$refs[registerForm].validate((valid) => {
          if(valid){
            // this.$message({
            //   message:'注册成功',
            //   type:'success',
            // })
            this.$api.users
              .register(registerForm)
              .then(() => {

              })
              .catch(() => {
                
              })
          }
        })
      },
    },
  }
</script>

<style scoped>
  .login{
    background: url("../static/street.jpg");
    position:absolute;
    top:0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background-size:100% 100%;
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
    float:right;
    margin-top: 10%;
    margin-right: 10%;
    background: white;
    height: 100px;
    width: 300px;
  }
  .login-button{
    text-align: center;
  }
  .login-to-register{
    text-align: right;
  }
  
</style>
