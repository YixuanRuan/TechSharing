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
        <v-pagination value="3" v-on:input="GetSearchInfo" v-model="page" :length="p_length"></v-pagination>
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
    search_info: [],
  }),
  methods: {
    GetSearchInfo: function(clicked, info) {
      // console.log('clicked');
      // console.log(this.page);
      //先把无关项置为空
      info.author_item = "";
      info.start_date = "";
      info.end_date = "";
      this.clicked = clicked;
      // this.search_info = search_info;
      
      // var match = {};
      // console.log(search_info);
      // console.log(search_info.length)
      for(var obj in info)
      {
        if(info[obj] != "")
        {
          //https://blog.csdn.net/xiaomanonyo/article/details/78642148 解决方法
          var a = {};
          a[obj] = info[obj];
          var b = {match:a};
          this.search_info.push(b);
        }
      }

      console.log(this.search_info);

      this.axios({
        method: 'post',
        url: this.$store.state.baseurl_es+'ss_lp/_search',
        data: {
          query:{
            bool:{
              should:this.search_info
              // should:[
              //   {match:{Fund:"浙江"}},
              //   {match:{Origin:"国家"}}
              // ]
            }
          }
        },
        headers:{

        },
        crossDomain: true
      }).then(body => {
          console.log(body.data)
      })
    },
  },
  mounted() {
    this.$store.dispatch("changetoken", localStorage.getItem("token"));
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
