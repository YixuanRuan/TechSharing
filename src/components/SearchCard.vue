<template>
  <div class="card">
    <v-card>
      <v-row>
        <v-col>
          <v-select :items="items" label="主题" solo></v-select>
        </v-col>
        <v-col>
          <v-text-field placeholder="请输入"></v-text-field>
        </v-col>
        <v-col>
          <v-select class="frequent" :items="frequent" label="词频" solo></v-select>
        </v-col>
        <v-col>
          <v-select class="relation" :items="relation" label="关系" solo></v-select>
        </v-col>
        <v-col>
          <v-text-field placeholder="请输入"></v-text-field>
        </v-col>
        <v-col>
          <v-select class="frequent" :items="frequent" label="词频" solo></v-select>
        </v-col>
        <v-col>
          <v-select class="frequent" :items="acurate" label="精确度" solo></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select :items="author" label="作者" solo></v-select>
        </v-col>
        <v-col>
          <v-text-field placeholder="中文名/英文名/拼音"></v-text-field>
        </v-col>
        <v-col>
          <v-select class="frequent" :items="acurate" label="精确度" solo></v-select>
        </v-col>

        <v-col>
          <v-text-field placeholder="全称/简称/曾用名" label="作者单位"></v-text-field>
        </v-col>
        <v-col>
          <v-select class="frequent" :items="acurate" label="精确度" solo></v-select>
        </v-col>
        <v-col></v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field placeholder="请输入" label="文献来源"></v-text-field>
        </v-col>
        <v-col>
          <v-select class="frequent" :items="acurate" label="精确度" solo></v-select>
        </v-col>
        <v-col>
          <v-text-field placeholder="请输入" label="支持基金"></v-text-field>
        </v-col>
        <v-col>
          <v-select class="frequent" :items="acurate" label="精确度" solo></v-select>
        </v-col>
        <v-col>
          <v-text-field placeholder="2018-1-1" label="开始日期"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field placeholder="2019-1-1" label="结束日期"></v-text-field>
        </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-checkbox v-model="checkbox" label="网络首发"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox v-model="checkbox" label="增强出版"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox v-model="checkbox" label="数据论文"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox v-model="checkbox" label="中英文扩展"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox v-model="checkbox" label="同义词扩展"></v-checkbox>
        </v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col>
          <div class="my-2">
            <v-btn large color="error">检索</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  data: () => ({
    items: ["主题", "关键字", "篇名", "摘要", "全文", "被引文献", "中图分类号"],
    frequent: ["2", "3", "4", "5", "6", "7", "8", "9"],
    relation: ["并含", "或含", "不含"],
    acurate: ["精确", "模糊"],
    author: ["作者", "第一作者", "通讯作者"]
  })
};
</script>

<style>
/* .v-select {
  width: 140px;
} */
.card {
  margin: 75px;
}
.v-text-field {
  height: 38px;
}
</style>