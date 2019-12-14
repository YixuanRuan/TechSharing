<template>
    <div>
        <v-row>
            <v-col style="margin-left: 30px;">
                <SearchClass style="margin-top: 20px"/>
                <LiteratureCard style="margin-top: 20px;" v-for="(data, index) in item"
                                :key="index" />
            </v-col>
            <v-col style="width: 27%; margin-left: 10px" >
                <SearchHistory style="margin-top: 10px"/>
                <SortSelect style="margin-top: 15px"/>
                <Classification style="margin-top: 15px"/>
                <RelatedExpert style="margin-top: 15px"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import HelloWorld from '../components/HelloWorld'
    import NavBar from "../components/NavBar"
    import SearchField from "../components/SearchField"
    import SearchClass from "../components/SearchClass"
    import LiteratureCard from "../components/LiteratureCard"
    import SearchHistory from "../components/SearchHistory"
    import SortSelect from "../components/SortSelect"
    import Classification from "../components/Classification"
    import RelatedExpert from "../components/RelatedExpert"

    export default {
        name: "SearchResult",
        data () {
            return {
                item: [
                    {},
                    {},
                    {},
                    {}
                ],
            }
        },
        components: {
            NavBar,
            HelloWorld,
            SearchField,
            SearchClass,
            LiteratureCard,
            SearchHistory,
            SortSelect,
            Classification,
            RelatedExpert

        },
    }
</script>

<style scoped>

</style>
