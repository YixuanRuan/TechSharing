<template>
  <v-app>
    <v-row align="center">
      <v-img src= "../img/full-logo.png" style="-webkit-box-align: center;max-width: 50%;margin:auto;">
      </v-img>
    </v-row>
    <v-row align="center">
      <v-col style="margin: auto;max-width: 500px;font-size: 40px;color: #03a9f4;margin-top: -15%">
        论文查新 IP查重 热点搜索
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col style="margin: auto;max-width: 200px;font-size: 40px;margin-top: 50px">
        热门内容
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
