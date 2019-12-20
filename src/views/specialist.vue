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
            <literature-card v-for="(data, index) in item1" v-bind:liter_title="data.liter_title"v-bind:liter_institution="data.liter_institution"v-bind:liter_author="data.liter_author" v-bind:liter_date="data.subtime"
                             :key="index" />
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
              <span class="white--text headline">{{data.index}}</span>
            </v-avatar>
            <div style="font-size: 15px; margin-top: 5px">{{data.name}}</div>
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
    console.log("id:",this.id)
  },
  methods:{
    convert: function () {
      axios.post(this.$store.state.baseurl+'api/paper/getExpert', {
        'id': this.id
      })
              .then(function (res) {
                console.log(res)
                this.name= res.data.Realname
                  this.school=res.data.School
                  this.institution=res.data.institution
                  this.field=res.data.field
              })
              .catch(function (err) {
                console.log(err)
              });
        this.axios({
            method: 'post',
            url: this.$store.state.baseurl+'api/paper/getRandPaper',
            headers: {
            },
            data: {
                id:this.id
            },
            crossDomain: true
        }).then(body => {
            console.log(body.data.data)
            for (let i=0;i<3;i++)
            {
                let arr={liter_title: body.data.data[i].Title,liter_institution:body.data.data[i].Origin,liter_author:body.data.data[i].Publisher,subtime:body.data.data[i].SubmitTime}
                this.item1.push(arr)
            }
        })
        this.axios({
            method: 'post',
            url: this.$store.state.baseurl+'api/paper/getRelatedExpert',
            headers: {
            },
            data: {
                id:this.id
            },
            crossDomain: true
        }).then(body => {
            console.log(body.data.data)
            for (let i=0;i<body.data.data.length;i++)
            {
                let arr={name:body.data.data[i].name,id:body.data.data[i].id}
                this.sort_options.push(arr)
            }
        })
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
      field:[],
      item1:[],
    name: "",
    id: "",
    school:"",
    institution:"",

    sort_options: []
  })
};
</script>
