<template>
    <div class="nav-container">
        <v-row>
            <v-col cols="3">
                <v-img
                        class="logo"
                        src="../img/IntPro.png"
                >
                </v-img>
            </v-col>

            <v-col cols="7">
                <SearchField style="width: 1500px; margin-top: 10px; margin-left: 60px; margin-bottom: -20px;" />
            </v-col>
            <v-col cols="2">
                <v-row>
                    <v-col>
                        <div class="say-hi">下午好，Y</div>
                    </v-col>
                    <v-col>
                        <v-img
                                src="../img/avatar.jpeg"
                                class="avatar"
                        >
                        </v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import SearchField from "./SearchField";
    export default {
        name: "NavBar",
        components: {
            SearchField
        },
    }
</script>

<style scoped>
    .logo{
        margin-top: 15px;
        margin-left: 30px;
        margin-bottom: -20px;
        width: 200px;
    }
    .nav-container{
        background-color: white;
    }
    .avatar{
        width: 65px;
        border-radius: 50%;
        display: inline;
        float: right;
        margin-right: 30px;
        margin-top: -6px;
        margin-bottom: -10px;
    }
    .say-hi{
        font-size: 18px;
        color: gray;
        font-weight: bold;
        margin-top: 15px;
        margin-left: 20px;
        margin-bottom: -10px;
    }
</style>
