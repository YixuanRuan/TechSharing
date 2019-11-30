<template>
    <div class="sort-container">
        <P class="sort-title">
            分类
        </P>
        <div class="my-2">
            <v-btn class="sort_option" :color="sort_option[index].color" elevation="0" @click="sortSelect(index, data.color)"
                   v-for="(data, index) in sort_option"
                   :key="index">
                <span style="color: white">{{data.title}}&nbsp&nbsp{{data.num}}</span>

            </v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Classification",
        data: () => ({
            sort_option: [
                {
                    title: "软件",
                    color: '#ABABAB',
                    num: 12
                },
                {
                    title: "软件工程",
                    color: '#ABABAB',
                    num: 18
                },
                {
                    title: "软件过程",
                    color: '#ABABAB',
                    num: 1
                },
                {
                    title: "软件工程应用",
                    color: '#ABABAB',
                    num: 39
                },
                {
                    title: "电动汽车仿真软件",
                    color: '#ABABAB',
                    num: 12
                },
            ]
        }),
        methods: {
            sortSelect: function(idx, btn_color) {
                console.log(this.sort_option[idx].color)
                this.sort_option[idx].color = (btn_color == '#ABABAB') ? 'blue' : '#ABABAB'
            }
        }
    }
</script>

<style scoped>
    .sort-container{
        padding: 20px;
        background: white;
        width: 95%;
    }
    .sort-title{
        font-size: 20px;
        color:black;
        margin-bottom: -10px;
    }
    .sort_option{
        margin-right: 15px;
        margin-top: 20px;
    }
    .down-icon{
        width: 8px;
        margin-left: 10px;
        margin-right: -5px;
    }
</style>
