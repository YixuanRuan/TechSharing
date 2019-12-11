<template>
<v-app>
    <NavBar />
    <v-row style="width: 100%">
        <v-col cols="2"></v-col>
        <v-col cols="2">
            <SpecialistCard />
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

export default {
    name: "PaperDisplay",
    data () {
    return {
      src: "http://q5.pdfdo.com/Download/121111221779/121111221779.html",
    }
    },
    components: {
    NavBar,
    SpecialistCard
    },
}


</script>

<style scoped>

</style>