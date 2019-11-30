<template>
    <div class="related-expert-container">
        <P class="expert-title">
            相关专家
        </P>
        <v-row>
            <div class="expert-inf" v-for="(data, index) in experts"
                 :key="index">
                <v-img

                        class="expert-avatar"
                        :src= data.avatar
                >
                </v-img>
                <p class="expert-name">{{data.name}}</p>
            </div>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "RelatedExpert",
        data () {
            return {
                experts: [
                    {
                        name: "谭火彬",
                        avatar: 'http://img5.imgtn.bdimg.com/it/u=241355062,3935982685&fm=26&gp=0.jpg'
                    },
                    {
                        name: "吕云翔",
                        avatar: 'http://img3.imgtn.bdimg.com/it/u=442205842,1653747407&fm=26&gp=0.jpg'
                    },
                    {
                        name: "陈忠智",
                        avatar: 'http://img3.imgtn.bdimg.com/it/u=2229346952,2661940409&fm=26&gp=0.jpg'
                    },
                ]
            }
        },

    }
</script>

<style scoped>
    .related-expert-container{
        padding: 20px;
        background: white;
        width: 95%;
    }
    .expert-title{
        font-size: 20px;
        color:black;
    }
    .expert-avatar{
        border-radius: 50%;
        width: 50px;
    }
    .expert-name{
        color: gray;
        font-size: 14px;
        margin-top: 10px;
        margin-left: 3px;
    }
    .expert-inf{
        margin: 20px;
    }
</style>
