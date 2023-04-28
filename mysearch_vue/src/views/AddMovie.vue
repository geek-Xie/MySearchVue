<template>
    <div>
        <el-avatar :src="image_url" style="margin-left: -50px"></el-avatar>
        <el-row>
            <el-col :span="3">
                <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="searchMovie"></el-input>
            </el-col>
            <div style="margin-top: 100px" class="block" v-for="(movie,index) in this.movie_list" :key="index">
                <el-col :span="4">
                    <el-image
                            style="width: 110px; height: 110px"
                            @click="addMovie(movie)"
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
    name: "AddMovie",
    data() {
        return {
            image_url: "",
            input: "",
            movie_list: []
        }
    },
    beforeCreate() {
        this.axios({
            method: "get",
            url: "http://localhost:8082/personal/image/" + localStorage.getItem("user_email")
        }).then(response => {
            this.image_url = response.data.data["url"]
        })
    },
    methods: {
        searchMovie() {
            this.axios({
                method: "get",
                url: "http://localhost:8082/dou/add/" + this.input
            }).then(response => {
                this.movie_list = response.data.data["movieList"]
            })
        },
        getPictureUrl(movie) {
            // 拼接图片缓存链接，防止403
            return "https://images.weserv.nl/?url=" + movie.picture_url
        },
        addMovie(movie) {
            this.axios({
                method: "post",
                url: "http://localhost:8082/dou/add/",
                data: {
                    "movie_name": movie.movie_name,
                    "cast": movie.cast,
                    "picture_url": movie.picture_url,
                    "rating_num": movie.rating_num
                }
            })
            console.log("add")
            router.push("/mydou")
        }
    }
}
</script>

<style scoped>

</style>