<template>
    <v-card
            class="mx-auto"
            max-width="800"
            outlined
            style="padding: 5px"
    >
        <v-list-item three-line>
            <v-list-item-content>
                <div class="um-name">用户名</div>
                <div class="um-from">北京航空航天大学 软件学院</div>
            </v-list-item-content>
            <div class="get-more-filed">
                <v-btn
                        large
                        tile
                        elevation="0"
                        color="#03A9F4"
                        class="get-more-btn"
                >查看详情</v-btn>
            </div>
            <div class="get-more-filed">
                <v-btn
                        large
                        tile
                        elevation="0"
                        color="#03A9F4"
                        class="get-more-btn"
                >修改信息</v-btn>
            </div>

        </v-list-item>
    </v-card>
</template>

<script>
    export default {
        name: "UserManageCard",
        data(){
          return{
              user_name:'',
              info:''
          }

        },
        props:{
            user_search_id: {
                default: ''
            }
        }
    }
</script>

<style scoped>
    .um-name{
        font-size: 19px;
    }
    .um-from{
        font-size: 15px;
        color: gray;
    }
    .um-date{
        margin-top: 40px;
        margin-right: 12px;
        color: gray;
    }
    .get-more-filed{
        margin-right: 20px;
        text-align: center;
        font-size: 14px;
    }
    .get-more-btn{
        color: white;
        margin: auto -10px auto 10px;
        width: 140px;
        height: 40px;
    }
</style>
