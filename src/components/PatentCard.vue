<template>
    <v-card
            class="mx-auto"
            max-width="900"
            outlined
            style="padding: 5px"
    >
        <v-list-item three-line>
            <v-list-item-content>
                <div class="search-title">恶意软件检测</div>
                <a class="link">安移通网络公司 - 美国加利福尼亚州</a>
                <div class="author-text">拉梅什·阿德利</div>
                <div class="author-text">主分类号： G06F21/56(2006.01)I</div>
                <div class="author-text">分类号： G06F21/56(2006.01)I</div>
            </v-list-item-content>
            <div class="liter-date">2019-09-04</div>
            <div class="my-2" style="margin-left: 10px;margin-right: 30px">
                <v-btn small>审核</v-btn>
            </div>
            <div class="my-2" style="margin-right: 15px">
                <v-btn small>出售</v-btn>
            </div>
            <div>
                <v-icon medium class="mr-1" :color="collect_color" @click="collect">mdi-star</v-icon>
            </div>
        </v-list-item>
    </v-card>
</template>

<script>
    export default {
        name: "LiteratureCard",
        data: () => ({
            collect_color: '#ccc'
        }),
        methods: {
            collect: function () {
                this.collect_color = (this.collect_color == '#ccc') ? 'yellow' : '#ccc'
            }
        }
    }
</script>

<style scoped>
    .search-title{
        font-size: 17px;
    }
    .link{
        font-size: 14px;
        margin-top: 10px;
    }
    .author-text{
        font-size: 14px;
        color: gray;
    }
    .liter-date{
        margin-right: 20px;
        color: gray;
    }
    .ref{
        margin-right: 20px;
        width: 60px;
        height: 60px;
        background: #E8E8E8;
        text-align: center;
        font-size: 14px;
    }
</style>
