<template>
  <v-app>
    <v-row>
      <v-col style="margin-left: 1px;">
        <LiteratureCard style="margin-top: 20px;" v-for="(data, index) in item"
                        :key="index" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
import SearchClass from "../components/SearchClass"
import LiteratureCard from "../components/LiteratureCard"

export default {
  name: "home",
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
    SearchClass,
    LiteratureCard,
  }
};
</script>
