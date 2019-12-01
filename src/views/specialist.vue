<template>

    <v-app>
        <NavBar />
        <v-container style="width: 100%">

            <v-row
                    style="width: 100%"
            >
                <v-col
                        cols="12"

                >

                </v-col>
            </v-row>

            <v-row
                    no-gutters
            >
                <v-col cols="5"
                >
                    <SpecialistCard />


                </v-col>

                <v-col cols="7"
                       style="margin-left: 10px; margin-right: -20px"
                >

                    <v-row>
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title  style=" font-size: 20px; font-family: 等线; font-weight: bold"   >研究领域</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <div ><literature-card/></div>
                        <div style="margin-top: 10px"><literature-card/></div>
                    </v-row>
                    <v-row>
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title  style=" font-size: 20px; font-family: 等线; font-weight: bold"   >申请专利</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <div style="margin-top: 10px"><PatentCard/></div></v-row>
                    <v-row>

                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title  style=" font-size: 20px; font-family: 等线; font-weight: bold"   >合作专家</v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>
                        <div v-for="(data, index) in sort_option" style="text-align: center;margin-left: 10px" >
                            <v-avatar color="indigo" size="36" >
                                <span class="white--text headline">36</span>
                            </v-avatar>

                            <div>{{data.tag}}</div>
                        </div>


                    </v-row>
                </v-col>

            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import HelloWorld from '../components/HelloWorld'
    import NavBar from "../components/NavBar"
    import SearchField from "../components/SearchField"
    import SearchClass from "../components/SearchClass"
    import LiteratureCard from "../components/LiteratureCard"
    import SearchHistory from "../components/SearchHistory"
    import SpecialistCard from "../components/SpecialistCard";
    import PatentCard from "../components/PatentCard";

    export default {
        name: 'App',

        components: {
            NavBar,
            HelloWorld,
            SearchField,
            SearchClass,
            LiteratureCard,
            SearchHistory,
            SpecialistCard,
            PatentCard
        },

        data: () => ({
            sort_option: [
                {
                    tag: "软件",
                    color: '#ABABAB',
                    num:"15"
                },
                {
                    tag: "软件工程",
                    color: '#ABABAB',
                    num:"7"
                },
                {
                    tag: "计算机",
                    color: '#ABABAB',
                    num:"15"
                },

            ]
        }),
    };
</script>
