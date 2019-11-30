<template>
    <div class="container">
        <v-bottom-navigation
                v-model="bottomNav"
                class="btn-container"
                color="blue"
        >
            <v-btn value="recent" class="btn-class">
                <span style="font-size: 16px">文献</span>
            </v-btn>

            <v-btn value="favorites" class="btn-class">
                <span style="font-size: 16px">专利</span>
            </v-btn>

            <v-btn value="nearby" class="btn-class">
                <span style="font-size: 16px">作者</span>
            </v-btn>
            <div style="width: 650px"></div>
        </v-bottom-navigation>
    </div>
</template>

<script>
    export default {
        name: "SearchClass"
    }
</script>

<style scoped>
    .btn-container{
        padding-top: 12px;
    }
    .container{
        width: 65%;
    }
    .btn-class{
        margin-left: 20px;
    }

</style>
