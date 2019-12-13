<template>
    <div class="notice-container">
        <v-row class="page-title">
            <div >
                消息中心
            </div>
            <div class="apl-num">
                4 条新消息
            </div>
        </v-row>
        <v-divider style="margin: 10px 0 40px 0"></v-divider>
        <NoticeCard style="margin-bottom: 20px;" v-for="(data, index) in notices"
                        :key="index" />
        <div style="height: 100px"></div>
    </div>
</template>

<script>
    import NoticeCard from "../components/NoticeCard"
    export default {
        name: "UserNotice",
        components:{
            NoticeCard
        },
        data () {
            return {
                notices:[
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}

                ]
            }
        }
    }
</script>

<style scoped>
    .notice-container{
        background: white;
        margin: 0 320px 0 320px;
        padding-top: 50px;
        padding-left: 70px;
        padding-right: 70px;
    }
    .page-title{
        font-size: 44px;
        margin-bottom: 40px;
    }

    .apl-num{
        font-size: 24px;
        color: #07AAF4;
        margin-left: 25px;
        margin-top: 20px;
    }
</style>
