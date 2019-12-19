<template>
    <div class="related-expert-container">
        <P class="expert-title">
            相关专家
        </P>
        <v-row justify="center">
            <v-col class="expert-inf" v-for="(data, index) in experts"
                   :key="index" align-self="center" @click="">
                <v-row justify="start">
                    <v-img
                            class="expert-avatar"
                            :src= data.avatar
                            @click="goToSpecialist(data.specialistId)"
                    >
                    </v-img>
                </v-row>
                <v-row>
                    <v-col class="expert-name">{{data.name}}</v-col>
                </v-row>
            </v-col>
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
                        specialistId: 1,
                        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576648015327&di=d9d493095522c7f39f335a6237b46345&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Feda2ab968c9926f766c758bc04f98c5c5dc91a508af0-s4SKpZ_fw236'
                    },
                    {
                        name: "吕云翔",
                        specialistId: 1,
                        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576648015327&di=d9d493095522c7f39f335a6237b46345&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Feda2ab968c9926f766c758bc04f98c5c5dc91a508af0-s4SKpZ_fw236'
                    },
                    {
                        name: "陈忠智",
                        specialistId: 1,
                        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576648015327&di=d9d493095522c7f39f335a6237b46345&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Feda2ab968c9926f766c758bc04f98c5c5dc91a508af0-s4SKpZ_fw236'
                    },
                    {
                        name: "谭火彬",
                        specialistId: 1,
                        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576648015327&di=d9d493095522c7f39f335a6237b46345&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Feda2ab968c9926f766c758bc04f98c5c5dc91a508af0-s4SKpZ_fw236'
                    },
                ]
            }
        },
        methods: {
          goToSpecialist: function(id) {
            this.$router.push({ name: 'special', params: { specialistId : id }})
          }
        }

    }
</script>

<style scoped>
    .related-expert-container{
        background: white;
        width: 95%;
    }
    .expert-title{
        padding-top: 20px;
        padding-left: 20px;
        font-size: 20px;
        color:black;
    }
    .expert-avatar{
        border-radius: 50%;
        max-width: 50px;
        margin-left: 15px;
    }
    .expert-name{
        color: gray;
        width: 70px;
        font-size: 14px;
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .expert-inf{
        margin-left: 20px;
        margin-right: 20px;
        width: 70px;
    }
</style>
