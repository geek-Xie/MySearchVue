<template>
  <el-row style="margin-top: 150px">
    <el-col :span="3">
      <h1></h1>
    </el-col>
    <el-col :span="15">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="Email: ">
          <el-input v-model="form.email" @keyup.enter.native="login"></el-input>
        </el-form-item>
        <el-form-item label="Password: ">
          <el-input v-model="form.password" type="password" @keyup.enter.native="login"></el-input>
        </el-form-item>
        <!--      <el-form-item label="活动区域">-->
        <!--        <el-select v-model="form.region" placeholder="请选择活动区域">-->
        <!--          <el-option label="区域一" value="shanghai"></el-option>-->
        <!--          <el-option label="区域二" value="beijing"></el-option>-->
        <!--        </el-select>-->
        <!--      </el-form-item>-->
        <!--      <el-form-item label="活动时间">-->
        <!--        <el-col :span="11">-->
        <!--          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>-->
        <!--        </el-col>-->
        <!--        <el-col class="line" :span="2">-</el-col>-->
        <!--        <el-col :span="11">-->
        <!--          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>-->
        <!--        </el-col>-->
        <!--      </el-form-item>-->
        <!--      <el-form-item label="RememberMe">-->
        <!--        <el-switch v-model="form.delivery"></el-switch>-->
        <!--      </el-form-item>-->
        <!--      <el-form-item label="活动性质">-->
        <!--        <el-checkbox-group v-model="form.type">-->
        <!--          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
        <!--          <el-checkbox label="地推活动" name="type"></el-checkbox>-->
        <!--          <el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
        <!--          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
        <!--        </el-checkbox-group>-->
        <!--      </el-form-item>-->
        <!--      <el-form-item label="特殊资源">-->
        <!--        <el-radio-group v-model="form.resource">-->
        <!--          <el-radio label="线上品牌商赞助"></el-radio>-->
        <!--          <el-radio label="线下场地免费"></el-radio>-->
        <!--        </el-radio-group>-->
        <!--      </el-form-item>-->
        <!--      <el-form-item label="活动形式">-->
        <!--        <el-input type="textarea" v-model="form.desc"></el-input>-->
        <!--      </el-form-item>-->
        <el-form-item style="margin-left: -100px">
          <el-button icon="el-icon-check" type="primary" @click="login" @keyup.enter.native="login" circle></el-button>
          <el-button icon="el-icon-circle-plus-outline" type="danger" @click="register" circle style="margin-left: 50px"></el-button>
          <!--        <el-button>取消</el-button>-->
        </el-form-item>

      </el-form>
    </el-col>
    <el-col :span="6">
      <h1></h1>
    </el-col>
  </el-row>

</template>

<script>


import router from "@/router";

export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        email: '',
        password: '',
        // delivery: true,
        // region: '',
        // date1: '',
        // date2: '',
        // type: [],
        // resource: '',
        // desc: ''
      }
    }
  },
  methods: {
    register() {
      router.push("/personal/register")
    },
    login() {
      console.log('submit!');
      const login_form = {
        "user_email": this.form.email,
        "user_password": this.form.password
      }
      this.axios({
        method: "post",
        url: "http://localhost:8082/personal/login",
        data: {
          "user_email": login_form.user_email,
          "user_password": login_form.user_password
        }
      }).then(response => {
        if (response.data.code === "200") {
          localStorage.setItem("isLogin", "true")
          localStorage.setItem("user_email", login_form.user_email)
          console.log(response.data.data["user_name"])
          router.replace("/")
          router.go(0)
        } else if (response.data.code === "401") {
          this.$alert("Unknown User", "Tips", {
            confirmButtonText: "Confirm",
            callback: () => {
              location.reload()
            }
          })
        } else if (response.data.code === "402") {
          this.$alert("Wrong Password", "Tips", {
            confirmButtonText: "Confirm",
            callback: () => {
              location.reload()
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>