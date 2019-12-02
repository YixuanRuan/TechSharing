<template>

    <v-row>
        <NavBar/>
        <v-col style="margin-top: 60px;">
             <v-card class="mx-auto"  outlined>
                <div style="text-align: left; margin-top: -100px; margin-left: 50px" >
                    <v-avatar size="200">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                    </v-avatar>
                    <v-avatar size="300">
                        <div class="hello">下午好，Ishigawa Naomi</div>
                    </v-avatar>
                </div>
                <v-list-item style="margin-top: -50px">
                    <v-list-item-content width="100px">
                        <v-list-item-subtitle class="subtitle-1" style="text-align: left;">
                            <v-avatar>
                                <v-icon>mdi-school</v-icon>
                            </v-avatar>Beihang University
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="subtitle-1" style="text-align: left;">
                            <v-avatar>
                                <v-icon>mdi-account</v-icon>
                            </v-avatar>Prof. , Institute of Softeware Chinese Academy of Science
                        </v-list-item-subtitle>
                        <v-list-item-subtitle style="text-align: left;">
                            <v-avatar>
                                <v-icon style="color: #18ff64">mdi-checkbox-marked-circle</v-icon>
                            </v-avatar>认证通过
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item >
                 <div style="width: 100%; text-align: left; margin-left: 30px;margin-top: -20px">
                     <v-btn
                             large
                             color="primary"
                             style="margin: auto; width: 150px; height: 30px; margin-top: 10px;"
                     >修改账号认证</v-btn>
                 </div>
                 <div style="font-size: 40px;margin-left: 20px;margin-top: 40px">
                     账号安全
                 </div>
                 <v-divider class="mx-4" width="500px"></v-divider>
                <v-card-action >
                    <div style="width: 100%; text-align: left; margin-top: 10px;margin-left: 20px">
                        <v-btn
                                class="ma-2"
                                color="grey"
                                style="margin: auto; width: 150px; height: 30px; margin-top: 10px; margin-bottom: 20px"
                        >绑定邮箱【已绑定】</v-btn>&nbsp
                        <v-btn
                                class="ma-2"
                                color="grey"
                                style="margin: auto; width: 150px; height: 30px; margin-top: 10px; margin-bottom: 20px"
                        >绑定手机【已绑定】</v-btn>
                        <v-btn
                                class="ma-2"
                                color="primary"
                                style="margin: auto; width: 150px; height: 30px; margin-top: 10px; margin-bottom: 20px"
                        >修改密码</v-btn>
                 </div>
                </v-card-action>

            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import NavBar from "../components/NavBar";
    export default {
        name: "aaa",
        components: {NavBar},
    };
</script>

<style scoped>
    .hello {
        font-size: 30px;
        color: gray;
        font-weight: bold;
        margin-top: 15px;
        margin-left: 20px;
        margin-bottom: -10px;
    }
</style>
