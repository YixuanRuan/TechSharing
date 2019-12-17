<template>
    <div>
        <v-row>
            <v-col style="margin-left: 30px;" >
                <SearchClass style="margin-top: 20px;" v-on:listenToMyBoy="listenToMyBoy"/>
                <div v-if="!chooseUser">
                    <LiteratureCard :liter_id="data.liter_id" style="margin-top: 20px;" v-for="(data, index) in results"
                                :key="index" />
                </div>
                <div v-else>
                    <SpecialBar :special_id="data.liter_id" style="margin-top: 20px;" v-for="(data, index) in results"
                                :key="index" />
                </div>
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
    import SpecialBar from "../components/SpecialBar"

    export default {
        name: "SearchResult",
        data () {
            return {
                chooseUser: false,
                results: [
                    {
                        liter_id: 1
                    },
                    {
                        liter_id: 2
                    },
                    {
                        liter_id: 3
                    },
                    {
                        liter_id: 4
                    }
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
            RelatedExpert,
            SpecialBar

        },
        methods: {
            listenToMyBoy: function (user_op) {
                // childValue就是子组件传过来的值
                this.chooseUser = user_op
            }
        },
        mounted(){
            this.$store.dispatch('changetoken',localStorage.getItem('token'))
        },
    }
</script>

<style scoped>

</style>
