<template>
  <v-app>
    <SearchHistory />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import NavBar from "./components/NavBar"
import SearchField from "./components/SearchField"
import SearchClass from "./components/SearchClass"
import LiteratureCard from "./components/LiteratureCard"
import SearchHistory from "./components/SearchHistory"

export default {
  name: 'App',

  components: {
    NavBar,
    HelloWorld,
    SearchField,
    SearchClass,
    LiteratureCard,
    SearchHistory,

  },

  data: () => ({
    //
  }),
};
</script>
