<template>
  <v-app>
    <v-row align="center">
      <v-img src= "../img/full-logo.png" style="-webkit-box-align: center;max-width: 50%;margin:auto;margin-top: 10%" height="40vh">
      </v-img>
    </v-row>
    <v-row align="center">
      <v-col style="margin: auto;max-width: 500px;font-size: 40px;color: #03a9f4;">
        论文查新 IP查重 热点搜索
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col style="margin: auto;max-width: 160px;font-size: 30px;margin-top: 1%; font-weight: bold; color: #6B6B6B;">
        热门内容
      </v-col>
    </v-row>
    <v-row>
        <v-col style="margin: auto;max-width: 90px;margin-top: -20px">
            <v-icon medium class="mr-1" style="width: 50px;color: #ababab" size="50px">mdi-arrow-down</v-icon>
        </v-col>
    </v-row>
    <v-row>
      <v-col>
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
import SearchField from "../components/SearchField.vue"

export default {
  name: "home",
  mounted(){
    this.$store.dispatch('changetoken',localStorage.getItem('token'))
  },
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
    SearchField
  }
};
</script>
