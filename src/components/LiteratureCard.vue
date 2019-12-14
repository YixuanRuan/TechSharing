<template>
    <v-card
            class="mx-auto"
            max-width="950"
            outlined
            style="padding: 5px"
    >
        <v-list-item three-line>
            <v-list-item-content>
                <div class="search-title">Simsax: A measure of project similarity based on symbolic approximation
                    method and software defect inflow</div>
                <a class="link">Information and Software Technology (Elsevierjournal)</a>
                <div class="author-text">Mirosław Ochodek;Miroslaw Staron;Wilhelm Meding</div>
            </v-list-item-content>
            <div class="liter-date">2019-09-04</div>
            <div class="ref">
                <p style="margin-top:7px">0</p>
                <p style="margin-top:-12px">被引</p>
            </div>
            <div class="ref">
                <p style="margin-top:7px">13</p>
                <p style="margin-top:-12px">下载</p>
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
        props:{
            liter_id: {
                default: ''
            }
        },
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
        margin-right: 12px;
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
