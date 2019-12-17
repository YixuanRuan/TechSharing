<template>
<v-app>
    <v-row style="width: 100%">
        <v-col cols="2"></v-col>
        <v-col cols="3">
            <v-card>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1" style="text-align: left;">标签</v-list-item-title>
                        <v-list-item-subtitle class="subtitle-2" style="text-align: center;">
                            <Classification style="margin-top: 15px"/>
                        </v-list-item-subtitle>
                        <v-list-item-title class="headline mb-1" style="text-align: left;">作者</v-list-item-title>
                        <v-list-item-subtitle class="subtitle-1" style="text-align: center;">
                            <RelatedExpert style="margin-top: 15px"/>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-col>
        <v-col cols="6">
            <iframe :src="src" frameborder="0" style="width:100%; height: 100%;"></iframe>
        </v-col>
        <v-col cols="2"></v-col>
    </v-row>
</v-app>
</template>

<script>
import SpecialistCard from "../components/SpecialistCard";
import NavBar from "../components/NavBar";
import Classification from "../components/Classification";
import RelatedExpert from "../components/RelatedExpert";

export default {
    name: "PaperDisplay",
    data () {
    return {
      src: "http://nan.pdfdo.com/Download/121316130950/121316130950.html",
    }
    },
    components: {
    NavBar,
    SpecialistCard,
    Classification,
    RelatedExpert
    },
}


</script>

<style scoped>

</style>