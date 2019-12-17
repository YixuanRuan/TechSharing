<template>
  <div>
    <div class="card">
      <!-- <v-card class="spe"> -->
      <div style="padding:25px;padding-left:40px; padding-right:40px;">
        <v-row>
          <v-col cols="4">
            <font class="display-1">专家主页申请</font>
          </v-col>
          <v-col cols="5"></v-col>
          <v-col cols="3">
            <div class="my-2">
              <v-btn depressed large color="primary" style="margin-right:10px;">通过</v-btn>
              <v-btn depressed large color="grey">驳回</v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-divider></v-divider>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">真实姓名:</font>
          <font class="headline">{{special_info.name}}</font>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">就职经历:</font>
        </v-row>
        <v-row class="row">
          <p>{{special_info.work_experience}}</p>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">教育经历:</font>
        </v-row>
        <v-row class="row">
          <p>{{special_info.edu_experience}}</p>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">个人简介:</font>
        </v-row>
        <v-row class="row">
          <p>{{special_info.introduction}}</p>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">联系方式:</font>
        </v-row>
        <v-row class="row">
          <p>{{special_info.contact}}</p>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">相关文献:</font>
        </v-row>
        <v-row class="row">
          <LiteratureCard style="width:1000px;"/>
        </v-row>
        <v-row class="row">
          <LiteratureCard style="width:1000px;"/>
        </v-row>
      </div>
      <!-- </v-card> -->
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import SpecialBar from "../components/SpecialBar";
import LiteratureCard from '../components/LiteratureCard.vue';


export default {
  name: "specialView",
  components: { NavBar, SpecialBar ,LiteratureCard},
  data:() => ({
    special_info:{
        name:"xxx",
        work_experience:"xxx",
        edu_experience:"xxx",
        introduction:"xxx",
        contact:"xxx",
        literature:"xxx",
    }
  }),
  mounted() {
            this.axios.post('http://114.115.151.96:8666/Posting/GetPostingsByTeamId', {
            teamId: this.$store.state.group.groupId
          })
            .then(function (response) {
              console.log('returned')
              console.log(response.data)
              that.selfComments = response.data
            })
            .catch(function (error) {
              this.state.search.dataShow = [ { tit: error } ]
            })
  }
};
</script>

<style scoped>
.card {
  width: 900px;
  margin: auto;
  margin-top:10px; 
  border:1px solid lightgray;
}
.spe {
  padding-top: 10px;
  margin: auto;
  height: 500px;
  width: 900px;
}
.v-row {
  margin: 10px;
}
.row{
    margin:10px;
}
</style>
