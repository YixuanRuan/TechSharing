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
          <font class="headline">xxx</font>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">就职经历:</font>
        </v-row>
        <v-row class="row">
          <p>xxx</p>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">教育经历:</font>
        </v-row>
        <v-row class="row">
          <p>一个学校 2013-2017</p>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">个人简介:</font>
        </v-row>
        <v-row class="row">
          <p>xxx</p>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">联系方式:</font>
        </v-row>
        <v-row class="row">
          <p>xxx</p>
        </v-row>
        <v-row class="row">
          <font class="headline" color="grey">相关文献:</font>
        </v-row>
        <v-row class="row">
          <SpecialBar />
        </v-row>
        <v-row style="margin-top:10px;">
          <SpecialBar />
        </v-row>
      </div>
      <!-- </v-card> -->
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import SpecialBar from "../components/SpecialBar";

export default {
  name: "specialView",
  components: { NavBar, SpecialBar }
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
