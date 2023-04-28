<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
           :collapse="isCollapse">
    <!--    <el-submenu index="1">-->
    <!--      <template slot="title">-->
    <!--        <i class="el-icon-search"></i>-->
    <!--        <span slot="title">MySearch</span>-->
    <!--      </template>-->
    <!--      <el-menu-item-group>-->
    <!--        <span slot="title">分组一</span>-->
    <!--        <el-menu-item index="1-1">选项1</el-menu-item>-->
    <!--        <el-menu-item index="1-2">选项2</el-menu-item>-->
    <!--      </el-menu-item-group>-->
    <!--      <el-menu-item-group title="分组2">-->
    <!--        <el-menu-item index="1-3">选项3</el-menu-item>-->
    <!--      </el-menu-item-group>-->
    <!--      <el-submenu index="1-4">-->
    <!--        <span slot="title">选项4</span>-->
    <!--        <el-menu-item index="1-4-1">选项1</el-menu-item>-->
    <!--      </el-submenu>-->
    <!--    </el-submenu>-->
    <el-menu-item index="1" v-on:click="jumpToSearch">
      <i class="el-icon-search"></i>
      <span slot="title">My Search</span>
    </el-menu-item>
    <el-menu-item index="2" v-on:click="jumpToMyDou">
      <i class="el-icon-menu"></i>
      <span slot="title">My Dou</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">Not For Now</span>
    </el-menu-item>
    <el-menu-item index="4" v-on:click="jumpToPersonCenter">
      <i v-if="isLogin" class="el-icon-user-solid"></i>
      <i v-if="!isLogin" class="el-icon-user"></i>
      <span slot="title">Person Center</span>
    </el-menu-item>
  </el-menu>

</template>

<script>

import router from "@/router";

export default {
  name: "NavMenu",
  data() {
    return {
      isLogin: localStorage.getItem("isLogin"),
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    jumpToPersonCenter() {
      if (!this.isLogin) {
        router.push("/personal/login")
      } else {
        router.push("/personal")
      }
    },
    jumpToSearch() {
      router.push("/search")
    },
    jumpToMyDou() {
      router.push("/mydou")
    }
  }
}
</script>

<style scoped>

</style>