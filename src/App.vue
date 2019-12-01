<template>
  <v-app>
    <div class="app-container">
      <SearchResult />
    </div>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";
import SearchField from "./components/SearchField";
import SearchClass from "./components/SearchClass";
import LiteratureCard from "./components/LiteratureCard";
import SearchHistory from "./components/SearchHistory";
import SortSelect from "./components/SortSelect";
import Classification from "./components/Classification";
import RelatedExpert from "./components/RelatedExpert";
import SearchResult from "./views/SearchResult";

export default {
  name: "App",

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
    SearchResult
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
.app-container {
  background: rgba(0, 159, 255, 0.03);
}
</style>
