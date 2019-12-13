<template>
  <div class="specialbar">
    <v-card class="spe">
      <v-row>
        <v-col cols="1">
          <v-avatar color="teal" size="62">
            <span class="white--text headline">T</span>
          </v-avatar>
        </v-col>
        <v-col cols="3" style="margin:10px;">
          <v-row>
            <font class="headline">人名</font>
          </v-row>
          <v-row>
            <font class="body-1" style="padding-top:5px;">中国科学院 - 计算所</font>
          </v-row>
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="2">
          <v-card class="relative" outlined="disabled">
            <v-row>
              <div style="margin:auto;padding:10px;">3</div>
            </v-row>
            <v-row>
              <div style="margin:auto;">相关文献</div>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="1" style="padding:auto;">
          <div class="fav">
            <v-btn color="primary">收藏</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import SearchField from "./SearchField";
export default {
  name: "SpecialBar",
  components: {
    SearchField
  }
};
</script>

<style>
.specialbar {
  /* margin-left: 75px; */
  /* margin-right: 75px; */
  /* margin-top: 10px; */
  width: 1000px;
}

.spe {
  padding: 15px;
}
.relative{
  height: 80px;
}

.fav{
    padding-top:20px;
}


</style>
