<template>
  <div>
    <el-row>
      <el-button v-on:click="normal">默认按钮</el-button>
      <el-button type="primary" v-on:click="mainButton">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>

</template>

<script>
export default {
  name: "MyTest",
  methods: {
    normal() {
      console.log("normal")
      const msg = "Hello"
      console.log(msg)
      this.axios.post("http://localhost:8082/user/test", {"msg": msg})
    }
  }
}
</script>

<style scoped>

</style>