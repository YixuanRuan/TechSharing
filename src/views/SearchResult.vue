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
                    <SpecialBar :special_id="data._source.Id" :Realname="data._source.Realname" style="margin-top: 20px;" v-for="(data, index) in expert_results"
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

                <SearchHistory style="margin-top: 10px" v-if="this.$store.state.logined"/>
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
    import Event from '../assets/Bus'

    export default {
        name: "SearchResult",

        data () {
            return {
                testdata: 0,
                notuserpage:1,
                notuserp_length:20,
                userpage:1,
                userp_length:5,
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
                expert_results: [
                    {
                        _source: {
                            Id: 0
                        }
                    }
                ]
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
        watch: {
            userpage:function(val) {
                var that = this
                console.log("val-----------", val)
                var page_from = (val - 1) * this.userp_length
                var page_num = this.userp_length
                this.axios({
                    method: 'post',
                    url: that.$store.state.baseurl_es+'ss_expert/_search',
                    data: {
                        query:
                            {
                                match_all: {}
                            },
                        // from: (this.userpage - 1) * this.userp_length,
                        from: page_from,
                        size: page_num
                    },
                    headers:{
                        // Access-Control-Allow-Origin
                    },
                    crossDomain: true
                }).then(body => {
                    that.expert_results = body.data.hits.hits
                })
            },
        },
        created() {
            var that = this
            var page_from = (this.userpage - 1) * this.userp_length
            var page_num = this.userp_length
            // if(that.$store.state.keyword == 'everything' && that.chooseUser) {



            Event.$on('broSearch', function(message){
                console.log("keyword:", that.$store.state.baseurl_es)
                console.log("keyword:", that.$store.state.keyword)
                console.log("chooseUser:", that.chooseUser)
                if(that.chooseUser) {
                    if (that.$store.state.keyword == 'everything') {
                        that.userp_length = 5
                        this.axios({
                            method: 'post',
                            url: that.$store.state.baseurl_es + 'ss_expert/_search',
                            data: {
                                query:
                                    {
                                        match_all: {}
                                    },
                                // from: (this.userpage - 1) * this.userp_length,
                                from: page_from,
                                size: page_num
                            },
                            headers: {
                                // Access-Control-Allow-Origin
                            },
                            crossDomain: true
                        }).then(body => {
                            that.expert_results = body.data.hits.hits
                        })
                    }
                    else{
                        console.log("name: ======", that.$store.state.keyword)
                        that.userp_length = 1
                        this.axios({
                            method: 'post',
                            url: that.$store.state.baseurl_es + 'ss_expert/_search',
                            data: {
                                query:
                                    {
                                        match: {
                                            "Realname": that.$store.state.keyword
                                        }
                                    },
                                size: 1
                            },
                            headers: {
                                // Access-Control-Allow-Origin
                            },
                            crossDomain: true
                        }).then(body => {
                            that.expert_results = body.data.hits.hits
                            console.log(that.expert_results)
                        })
                    }
                }

            })
        }
    }
</script>

<style scoped>

</style>
