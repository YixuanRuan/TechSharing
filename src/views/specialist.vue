<template>
  <v-app>
    <v-row style="width: 100%">
      <v-col cols="5" style="margin-left: 0px ">
        <SpecialistCard v-bind:name="name"  v-bind:school="school"  v-bind:institution="institution" sort_option="sort_options" ></SpecialistCard>>
      </v-col>
      <v-col cols="7" style="margin-left: -20px; margin-right: 10px">
        <v-row>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style=" font-size: 30px;margin-top: 10px;">发表文献</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div style="margin-top: 10px">
            <literature-card />
          </div>
          <div style="margin-top: 10px">
            <literature-card />
          </div>
        </v-row>
        <v-row>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style=" font-size: 30px;margin-top:10px;margin-bottom: 10px">合作专家</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div
            v-for="(data, index) in sort_options"
            :key="index"
            style="text-align: center; margin-right: 30px;"
          >
            <v-avatar color="indigo" size="60">
              <span class="white--text headline">60</span>
            </v-avatar>
            <div style="font-size: 15px; margin-top: 5px">{{data.tag}}</div>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
import SearchField from "../components/SearchField";
import SearchClass from "../components/SearchClass";
import LiteratureCard from "../components/LiteratureCard";
import SearchHistory from "../components/SearchHistory";
import SpecialistCard from "../components/SpecialistCard";
import PatentCard from "../components/PatentCard";
import axios from 'axios';
export default {

  created(){
    this.id = this.$route.params.specialistId
    this.convert();

  },
  methods:{
    convert: function () {
      axios.post('http://10.135.238.11:8080/api/paper/getExpert', {
        'id': this.id
      })
              .then(function (res) {
                console.log(res)
                this.name= res.data.Realname
              })
              .catch(function (err) {
                console.log(err)
              });
    }
  },
    mounted(){

    },
  components: {
    NavBar,
    SearchField,
    SearchClass,
    LiteratureCard,
    SearchHistory,
    SpecialistCard,
    PatentCard
  },

  data: () => ({
    name: "",
    id: "",
    school:"",
    institution:"",

    sort_options: [
      {
        tag: "软件",
        color: "#ABABAB",
        num: "15"
      },
      {
        tag: "软件工程",
        color: "#ABABAB",
        num: "7"
      },
      {
        tag: "计算机",
        color: "#ABABAB",
        num: "15"
      }
    ]
  })
};
</script>
