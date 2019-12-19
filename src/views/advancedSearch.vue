<template>
  <v-row>
    <SearchCard v-on:search="GetSearchInfo" />

    <div v-if="clicked" style="width: 100%">
      <div>
        <LiteratureCard
          :liter_id="data.liter_id"
          style="margin-top: 20px;"
          v-for="(data, index) in results"
          :key="index"
        />
      </div>

      <div class="text-center" style="margin-top: 50px;text-align: center">
        <v-pagination v-on:click="GetSearchInfo" v-model="page" :length="p_length"></v-pagination>
      </div>
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
    page: 1,
    p_length: 10,
    results: [],
    clicked: false,
    search_info: {}
  }),
  methods: {
    GetSearchInfo: function(clicked, search_info) {
      this.clicked = clicked;
      this.search_info = search_info;
      this.axios
        .post("http://114.115.151.96:8666/Posting/GetPostingsBySearchInfo", {
          SearchInfo: this.search_info,
          Page: this.page
        })
        .then(function(response) {
          console.log(response.body);
        })
        .catch(function(error) {
          this.state.search.dataShow = [{ tit: error }];
        });
    },
  },
  mounted() {
    this.$store.dispatch("changetoken", localStorage.getItem("token"));
    console.log(this.clicked);
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
