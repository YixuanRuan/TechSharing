<template>
    <v-row>
        <v-col >
            <v-card class="mx-auto"  outlined style="text-align: center;width: 1000px;height: 700px">
                <v-row>
                <div style="text-align: left" >
                        <div class="left">专家主页申请</div>
                </div>
                <div style="text-align: right" >
                    <v-btn to="paperDisplay">看pdf</v-btn>
                </div>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import NavBar from "../components/NavBar";
    export default {
        name: "Identification",
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    .left {
        font-size: 40px;
        color: gray;
        font-weight: bold;
        margin-top: 50px;
        margin-left: 40px;
        margin-bottom: -10px;
    }
    .right {
        font-size: 40px;
        color: gray;
        font-weight: bold;
        margin-top: 50px;
        margin-left: 400px;
        margin-bottom: -10px;
    }
</style>
