<template>
    <div class="search-container">
        <div class="search-field">
            <v-text-field
                    tile
                    outlined
                    placeholder="文献/专利/作者/领域 检索"
                    @keyup.enter="submit(keyword)"
                    v-model="keyword"
                    :value="keyword"
            >
<!--                <v-icon class="search-icon" slot="append">mdi-plus</v-icon>-->
<!--                <v-divider vertical=true slot="append" style="margin-left:10px; margin-right: -10px;"></v-divider>-->
                <v-icon class="search-icon" slot="append" @click="submit(keyword)">mdi-magnify</v-icon>
                <template v-slot:append-outer >
                    <v-btn elevation="0" color="primary" v-on="on" big  style="top: -8px; left: 8px;" offset-y @click="toAdvancedSearch(keyword)">
                        高级搜索
                    </v-btn>
                </template>
            </v-text-field>
        </div>
    </div>
</template>

<script>
    import Event from '../assets/Bus'
    export default {
        name: "SearchField",
        data () {
          return {
            keyword: ''
          }
        },
      methods: {
        submit: function (keyword) {
          if (keyword.length === 0) {
            keyword = 'everything'
          }
          this.$store.commit('handleKeyword', keyword);
          this.$router.push('/searchResult/')
            Event.$emit('broSearch', "Bro-------")
        },
        toAdvancedSearch: function (keyword) {
          if (keyword.length === 0) {
            keyword = 'everything'
          }
          this.$store.commit('handleKeyword', keyword);
          this.$router.push('/advancedSearch')
        },
      }
    }
</script>

<style scoped>
    .search-container{
        margin-top: -8px;
        height: 40px;
    }
    .search-field{
        width: 40%;
    }
    .search-icon{
        margin-left: 20px;
    }
</style>
