<template>
    <div>
        <el-avatar :src="image_url" style="margin-left: -240px"></el-avatar>
        <el-row>
            <el-col :span="3">
                <h1></h1>
            </el-col>
            <el-col :span="15">
                <h1>Dou</h1>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "MyDou",
    data() {
        return {
            "image_url": ""
        }
    },
    beforeCreate() {
        this.axios({
            method: "get",
            url: "http://localhost:8082/personal/image/" + localStorage.getItem("user_email")
        }).then(response => {
            this.image_url = response.data.data["url"]
        })
    }
}
</script>

<style scoped>

</style>