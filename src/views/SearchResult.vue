<template>
    <div>
        <v-row>
            <v-col style="margin-left: 30px;" >
                <SearchClass style="margin-top: 20px;" v-on:listenToMyBoy="listenToMyBoy"/>
                <div v-if="!chooseUser">
                    <LiteratureCard :liter_id="data.liter_id" style="margin-top: 20px;" v-for="(data, index) in results"
                                :key="index" />
                </div>

                <div v-else >
                    <SpecialBar :special_id="data.liter_id" style="margin-top: 20px;" v-for="(data, index) in results"
                                :key="index" />
                </div>
                <div class="text-center" STYLE="margin-top: 50px" v-if="!chooseUser">
                    <v-pagination
                            v-model="notuserpage"
                            :length= "notuserp_length"
                            :total-visible="12"
                    ></v-pagination>
                </div>
                <div class="text-center" STYLE="margin-top: 50px" v-else >
                    <v-pagination
                            v-model="userpage"
                            :length= "userp_length"
                            :total-visible="12"
                    ></v-pagination>
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
                notuserpage:3,
                notuserp_length:20,
                userpage:5,
                userp_length:10,
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
            this.axios({
                method: 'post',
                url: this.$store.state.baseurl_es+'ss_journal/_search',
                data: {
                    query:
                        {
                            match: {

                            }
                        },
                },
                crossDomain: true
            }).then(body => {
                console.log(body.data)
            })
        },
    }
</script>

<style scoped>

</style>
