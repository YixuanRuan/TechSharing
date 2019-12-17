<template>
  <div class="card">
    <v-card class="ca">
      <v-row>
        <v-col cols="2">
          <v-select :items="items" label="主题" solo v-model="item"></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field placeholder="请输入" v-model="item_info1"></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-select class="frequent" :items="frequent" label="词频" solo v-model="frequent1"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-select class="relation" :items="relation" label="关系" solo v-model="relation1"></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field placeholder="请输入" v-model="item_info2"></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-select class="frequent" :items="frequent" label="词频" solo v-model="frequent2"></v-select>
        </v-col>
        <v-col cols="2">
          <v-select class="frequent" :items="acurate" label="精确度" solo v-model="acurate1"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
           <v-select :items="author" label="作者" solo v-model="author_item"></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field placeholder="中文名/英文名/拼音" v-model="author_name"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-select class="frequent" :items="acurate" label="精确度" solo v-model="acurate2"></v-select>
        </v-col>
        <v-col></v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="6">
          <v-text-field placeholder="全称/简称/曾用名" label="作者单位" v-model="author_company"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-select class="frequent" :items="acurate" label="精确度" solo v-model="acurate3"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="6">
          <v-text-field placeholder="请输入" label="文献来源" v-model="literature_source"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-select class="frequent" :items="acurate" label="精确度" solo v-model="acurate4"></v-select>  
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="6">
          <v-text-field placeholder="请输入" label="支持基金" v-model="support_fund"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-select class="frequent" :items="acurate" label="精确度" solo v-model="acurate5"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="3">
          <v-text-field placeholder="2018-1-1" label="开始日期" v-model="start_date"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field placeholder="2019-1-1" label="结束日期" v-model="end_date"></v-text-field>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-checkbox v-model="label1" label="网络首发" value="网络首发"></v-checkbox>
        </v-col>
        <v-col>
         <v-checkbox v-model="label2" label="增强出版" value="增强出版"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox v-model="label3" label="数据论文" value="数据论文"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox v-model="label4" label="中英文扩展" value="中英文扩展"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox v-model="label5" label="同义词扩展" value="同义词扩展"></v-checkbox>
        </v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col>
          <div class="my-2">
            <v-btn large color="error" @click="search">检索</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "advancedSearch",
  data: () => ({
    items: ["主题", "关键字", "篇名", "摘要", "全文", "被引文献", "中图分类号"],
    frequent: ["2", "3", "4", "5", "6", "7", "8", "9"],
    relation: ["并含", "或含", "不含"],
    acurate: ["精确", "模糊"],
    author: ["作者", "第一作者", "通讯作者"],
    search_info:{
      items:"",
      items_info1:"",
      items_info2:"",
      frequent1: 0,
      frequent2: 0,
      relation1:"",
      relation2:"",
      acurate1:"",
      acurate2:"",
      acurate3:"",
      acurate4:"",
      acurate5:"",
      author_item:"",
      author_name:"",
      author_company:"",
      literature_source:"",
      support_fund:"",
      start_date:"",
      end_date:"",
      label1:"",
      label2:"",
      label3:"",
      label4:"",
      label5:"",
    }
  }),
  methods: {
    search: function(){
      //传数据给父组件
      var clicked = true;
      this.$emit('search',clicked,this.search_info)
    }
  }
};
</script>

<style>
.card {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top:10px;
}
.v-text-field {
  height: 38px;
}
.ca{
  padding: 25px;
}
</style>
