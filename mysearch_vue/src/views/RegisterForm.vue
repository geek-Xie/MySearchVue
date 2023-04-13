<template>
    <el-row style="margin-top: 150px">
        <el-col :span="3">
            <h1></h1>
        </el-col>
        <el-col :span="15">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="Email: ">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="Name: ">
                    <el-input v-model="form.user_name"></el-input>
                </el-form-item>
                <el-form-item label="Password: ">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="Avatar">
                    <el-upload
                            class="upload-demo"
                            action="http://localhost:8082/personal/image/upload"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :on-success="handleSuccess"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList">
                        <el-button size="small" type="primary" style="margin-left: -100px">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip" style="margin-left: -100px">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item style="margin-left: -100px">
                    <el-button icon="el-icon-circle-plus-outline" type="success" @click="register" circle></el-button>
                    <!--        <el-button>取消</el-button>-->
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>

</template>

<script>

import router from "@/router";

export default {
    name: "RegisterForm",
    data() {
        return {
            fileList: [],
            form: {
                email: '',
                user_name: '',
                password: '',
                image_url: ''
            }
        }
    },
    methods: {
        register() {
            console.log('submit!');
            const register_form = {
                "user_email": this.form.email,
                "user_name": this.form.user_name,
                "user_password": this.form.password,
                "image_url": this.form.image_url
            }
            this.axios({
                method: "post",
                url: "http://localhost:8082/personal/register",
                data: {
                    "user_email": register_form.user_email,
                    "user_name": register_form.user_name,
                    "user_password": register_form.user_password,
                    "image_url": register_form.image_url
                }
            }).then(response => {
                if (response.data.code === "200") {
                    localStorage.setItem("user_email", response.data.data["user_email"])
                    localStorage.setItem("isLogin", "true")
                    router.replace("/")
                    router.go(0)
                } else {
                    console.log(response.msg)
                    location.reload()
                }
            })
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            console.log(fileList)
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        handleSuccess(res) {
            this.form.image_url = res.data["url"]
        }
    }
}

</script>

<style scoped>

</style>