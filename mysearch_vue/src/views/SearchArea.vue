<template>
    <div>
        <el-avatar :src="image_url" style="margin-left: -50px"></el-avatar>
        <el-row style="margin-top: 150px">
            <el-col :span="3">
                <h1></h1>
            </el-col>
            <el-col :span="15">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="Search:">
                        <el-input v-model="form.search_content" @keyup.e.enter.native="onSubmit"></el-input>
                    </el-form-item>
                    <!--        <el-form-item label="活动区域">-->
                    <!--          <el-select v-model="form.region" placeholder="请选择活动区域">-->
                    <!--            <el-option label="区域一" value="shanghai"></el-option>-->
                    <!--            <el-option label="区域二" value="beijing"></el-option>-->
                    <!--          </el-select>-->
                    <!--        </el-form-item>-->
                    <!--        <el-form-item label="活动时间">-->
                    <!--          <el-col :span="11">-->
                    <!--            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>-->
                    <!--          </el-col>-->
                    <!--          <el-col class="line" :span="2">-</el-col>-->
                    <!--          <el-col :span="11">-->
                    <!--            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>-->
                    <!--          </el-col>-->
                    <!--        </el-form-item>-->
                    <!--        <el-form-item label="即时配送">-->
                    <!--          <el-switch v-model="form.delivery"></el-switch>-->
                    <!--        </el-form-item>-->
                    <!--        <el-form-item label="活动性质">-->
                    <!--          <el-checkbox-group v-model="form.type">-->
                    <!--            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
                    <!--            <el-checkbox label="地推活动" name="type"></el-checkbox>-->
                    <!--            <el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
                    <!--            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
                    <!--          </el-checkbox-group>-->
                    <!--        </el-form-item>-->
                    <el-form-item label="Engine:">
                        <el-radio-group v-model="form.engine">
                            <el-radio label="Baidu"></el-radio>
                            <el-radio label="Google"></el-radio>
                            <el-radio label="Bing"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <!--        <el-form-item label="活动形式">-->
                    <!--          <el-input type="textarea" v-model="form.desc"></el-input>-->
                    <!--        </el-form-item>-->
                    <el-form-item>
                        <el-button icon="el-icon-search" type="primary" @click="onSubmit" circle></el-button>
                        <!--          <el-button>取消</el-button>-->
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="6">
                <h1></h1>
            </el-col>
        </el-row>
    </div>

</template>

<script>

export default {
    name: "SearchArea",
    data() {
        return {
            image_url: "http://localhost:8082/robot/robot.jpg",
            form: {
                search_content: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                engine: 'Baidu',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
            this.axios({
                method: "post",
                url: "http://localhost:8082/search/searching",
                data: {
                    "user_email": localStorage.getItem("user_email"),
                    "search_content": this.form.search_content,
                    "engine": this.form.engine,
                }
            }).then(response => {
                let reUrl = response.data.data.url
                window.open(reUrl, "_blank")
            })
        }
    },
    beforeCreate() {
        this.axios({
            method: "get",
            url: "http://localhost:8082/personal/image/" + localStorage.getItem("user_email")
        }).then(response => {
            if (response.data.data["url"] != null) {
                this.image_url = response.data.data["url"]
            }
        })
    }
}
</script>

<style scoped>

</style>