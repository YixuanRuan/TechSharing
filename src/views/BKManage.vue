<template>
    <div class="application-container">
        <p class="page-title">
            后台管理
        </p>
        <v-divider></v-divider>
        <v-row class="sub-title">
            <div >
                专家认证申请
            </div>
            <div class="apl-num">
                {{exp_app_num}} 条
            </div>
        </v-row>
        <Application :exp_app_id="data.exp_app_id" style="margin-top: 20px;" v-for="(data, index) in applications"
                        :key="index" />
        <v-divider style="margin: 60px 0 40px 0"></v-divider>

        <v-row class="sub-title">
            <div >
                专家主页修改申请
            </div>
            <div class="apl-num">
                {{exp_edit_num}} 条
            </div>
        </v-row>
        <Application :exp_app_id="data.home_edit_id" style="margin-top: 20px;" v-for="(data, index) in homepageEdit"
                     :key="index" />
        <v-divider style="margin: 60px 0 40px 0"></v-divider>
        <v-row class="sub-title">
            <div >
                用户管理
            </div>
        </v-row>
        <v-row>
            <input type="text" placeholder="输入用户名" class="input-field" v-model="user_name">
            <v-btn
                    tile
                    elevation="0"
                    color="#03A9F4"
                    class="user-btn"
            >搜索用户</v-btn>
            <div class="user-match-text">匹配到 {{user_search_num}} 个结果</div>
        </v-row>

        <UserManageCard :user_search_id="data.user_search_id" style="margin-bottom: 20px;" v-for="(data, index) in users"
                     :key="index" />
        <v-divider style="margin: 40px 0 40px 0"></v-divider>
        <v-row class="sub-title">
            <div >
                热点管理
            </div>
        </v-row>
        <v-row>
            <input type="text" placeholder="输入热点字段" class="input-field" v-model="hot_text">
            <v-btn
                tile
                elevation="0"
                color="#03A9F4"
                class="user-btn"
            >添加热点</v-btn>
            <div style="width:0.5px"></div>
            <v-btn
                    tile
                    elevation="0"
                    color="#03A9F4"
                    class="user-btn"
            >撤下热点</v-btn>
        </v-row>
        <v-row style="margin-top: -45px">
            <input type="text" placeholder="输入热点指数" class="input-field" v-model="hot_index">
            <v-btn
                    tile
                    elevation="0"
                    color="#03A9F4"
                    class="hot-btn"
            >修改热点指数</v-btn>
        </v-row>
    </div>
</template>

<script>
    import Application from "../components/Application"
    import UserManageCard from "../components/UserManageCard";
    export default {
        name: "BKManage",
        components: {
            UserManageCard,
            Application
        },
        data () {
            return {
                applications: [
                    {
                        exp_app_id: 1
                    },
                    {
                        exp_app_id: 2
                    },
                    {
                        exp_app_id: 3
                    },
                    {
                        exp_app_id: 4
                    }
                ],
                homepageEdit: [
                    {
                        home_edit_id: 1
                    },
                    {
                        home_edit_id: 2
                    },
                ],
                users: [
                    {
                        user_search_id: 1
                    }
                ],
                exp_app_num: 4,
                exp_edit_num: 2,
                user_search_num: 1,
                user_name: '',
                hot_text:'',
                hot_index:'',
            }
        },
        mounted () {
            var that = this
            this.axios({
                method: 'post',
                url: this.$store.state.baseurl+'/api/admin/findAllTodo',
                headers: {
                    token: this.$store.state.token
                },
                data: {

                },
                crossDomain: true
            }).then(body => {
                console.log(this.$store.state.token)
                console.log(body.data)
            })
        }
    }

</script>

<style scoped>
    .application-container{
        background: white;
        margin: 0 320px 0 320px;
        padding-top: 50px;
        padding-left: 70px;
        padding-right: 70px;
    }
    input{
        outline-style: none ;
        border: 1px solid #ccc;
        padding: 14px 14px;
        width: 400px;
        height: 36px;
        font-size: 16px;
        margin: 30px 0px 30px 15px;
    }
    .page-title{
        font-size: 44px;
        margin-bottom: 40px;
    }

    .sub-title{
        color: #aaaaaa;
        font-size: 32px;
        margin-top: 40px;
    }

    .apl-num{
        font-size: 24px;
        color: #07AAF4;
        margin-left: 25px;
        margin-top: 10px;
    }

    .user-btn{
        color: white;
        height: 32px;
        width: 120px;
        margin-top: 30px;
    }
    .hot-btn{
        color: white;
        height: 32px;
        width: 150px;
        margin-top: 30px;
    }
    .user-match-text{
        color: #aaaaaa;
        margin-left: 50px;
        margin-top: 35px;
    }
</style>
