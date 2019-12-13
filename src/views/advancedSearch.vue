<template>
    <v-row>
        <NavBar/>
        <SearchCard/>
        <SpecialBar/>
    </v-row>
</template>

<script>
    import NavBar from "../components/NavBar";
    import SearchCard from "../components/SearchCard"



    export default {
        name: "advancedSearch",
        components: {NavBar,
                    SearchCard,
        },
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
