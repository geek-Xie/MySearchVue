<template>
    <div>
        <el-avatar :src="image_url" style="margin-left: -50px"></el-avatar>
        <el-row>
            <el-col :span="3">
                <el-button plain type="primary" style="margin-left: 40px" @click="addMovie"><i class="el-icon-plus"></i></el-button>
            </el-col>
            <div style="margin-top: 100px" class="block" v-for="(movie,index) in this.movie_list" :key="index">
                <el-col :span="4">
                    <el-image
                            style="width: 110px; height: 110px"
                            @click="showName(movie)"
                            :src=getPictureUrl(movie)
                            fit="fill"/>

                    <div class="namespace">
                        <a>{{ movie.movie_name }}</a><br>
                        <a style="">{{ movie.cast }}</a><br>
                        <a style="">评分： {{ movie.rating_num }}</a><br>
                        <!--                        评分:-->
                        <!--                        <el-rate-->
                        <!--                                v-model="movie.movieScore/2"-->
                        <!--                                allow-half-->
                        <!--                                disabled-->
                        <!--                        >-->
                        <!--                        </el-rate>-->
                        <!--                        <a style="color: crimson;font-size: larger">{{ movie.movieScore }}</a>-->
                        <!--                        <br>-->
                        <!--                        <a>参评人数：{{ movie.movieComentNum | filtername }}</a><br>-->
                        <!--                        <el-popover-->
                        <!--                                placement="top-start"-->
                        <!--                                title="简介"-->
                        <!--                                width="20"-->
                        <!--                                trigger="hover"-->
                        <!--                                :content="movie.movieDetail">-->
                        <!--                            <el-button slot="reference">详情</el-button>-->
                        <!--                        </el-popover>-->
                    </div>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>

import router from "@/router";

export default {
    name: "MyDou",
    data() {
        return {
            "image_url": "",
            "movie_list": []
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
            url: "http://localhost:8082/dou/all"
        }).then(response => {
            // this.movie_list = response.data.data["movieList"]
            this.movie_list = response.data.data["movies"]
        })
    },
    methods: {
        getPictureUrl(movie) {
            // 拼接图片缓存链接，防止403
            return "https://images.weserv.nl/?url=" + movie.picture_url
        },
        showName(movie) {
            console.log(movie.movie_name)
            console.log(movie.picture_url)
            console.log(movie.cast)
            console.log(movie.rating_num)
        },
        addMovie() {
            router.push("/mydou/add")
        }
    }
}
</script>

<style scoped>

</style>