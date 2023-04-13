<template>
    <div>
        <el-avatar :src="image_url" style="margin-left: -240px"></el-avatar>
        <!--        <el-row style="margin-top: 200px">-->
        <!--            <el-col :span="11">-->
        <!--                <el-table-->
        <!--                        :data="tableData"-->
        <!--                        height="550"-->
        <!--                        stripe-->
        <!--                        style="width: 100%">-->
        <!--                    <el-table-column-->
        <!--                            prop="search_date"-->
        <!--                            label="搜索时间"-->
        <!--                            width="180">-->
        <!--                    </el-table-column>-->
        <!--                    <el-table-column-->
        <!--                            prop="search_content"-->
        <!--                            label="搜索关键字"-->
        <!--                            width="180">-->
        <!--                    </el-table-column>-->
        <!--                    <el-table-column-->
        <!--                            prop="return_url"-->
        <!--                            label="链接地址">-->
        <!--                    </el-table-column>-->
        <!--                </el-table>-->
        <!--            </el-col>-->
        <!--            <el-col :span="11"></el-col>-->
        <!--        </el-row>-->
    </div>

</template>

<script>

export default {
    name: "PersonCenter",
    components: {},
    data() {
        return {
            image_url: "",
            tableData: [
                //   search_datetime: '',
                //   search_content: '',
                //   return_url: ''
                // }, {
                //   search_datetime: '2016-05-04',
                //   search_content: '王小虎',
                //   return_url: '上海市普陀区金沙江路 1517 弄'
                // }, {
                //   search_datetime: '2016-05-01',
                //   search_content: '王小虎',
                //   return_url: '上海市普陀区金沙江路 1519 弄'
                // }, {
                //   search_datetime: '2016-05-03',
                //   search_content: '王小虎',
                //   return_url: '上海市普陀区金沙江路 1516 弄'
            ]
        }
    },
    beforeCreate() {
        this.axios({
            method: "get",
            url: "http://localhost:8082/personal/image/" + localStorage.getItem("user_email")
        }).then(response => {
            this.image_url = response.data.data["url"]
        })
        this.axios({
            method: "get",
            url: "http://localhost:8082/personal/history/" + localStorage.getItem("user_email"),
        }).then(response => {
            const tableList = response.data.data.data
            for (let i = 0; i < tableList.length; i++) {
                let json_date = new Date(tableList[i]["search_date"]).toJSON()
                tableList[i]["search_date"] = new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
            }
            this.tableData = tableList
        })
    }
}
</script>

<style scoped>

</style>