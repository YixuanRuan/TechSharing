<template>
  <v-row>
    <SearchCard v-on:search="GetSearchInfo" />
    <div v-if="!clicked">
      <LiteratureCard
        :liter_id="data.liter_id"
        style="margin-top: 20px;"
        v-for="(data, index) in results"
        :key="index"
      />
    </div>
  </v-row>
</template>

<script>
import NavBar from "../components/NavBar";
import SearchCard from "../components/SearchCard";
import LiteratureCard from "../components/LiteratureCard";

export default {
  name: "advancedSearch",
  components: { NavBar, SearchCard, LiteratureCard },
  data: () => ({
    results: [],
    clicked,
    search_info: {}
  }),
  methods: {
    GetSearchInfo: function(clicked, search_info) {
      this.clicked = clicked;
      this.search_info = this.search_info;
      this.axios
        .post("http://114.115.151.96:8666/Posting/GetPostingsBySearchInfo", {
          SearchInfo: this.search_info
        })
        .then(function(response) {
          console.log(response.body);
        })
        .catch(function(error) {
          this.state.search.dataShow = [{ tit: error }];
        });
    }
  },
  mounted(){
    this.$store.dispatch('changetoken',localStorage.getItem('token'))
  }
};
</script>

<style scoped>
.hello {
  font-size: 30px;
  color: gray;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: -10px;
}
</style>
