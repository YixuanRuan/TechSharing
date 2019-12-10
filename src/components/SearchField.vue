<template>
    <div class="search-container">
        <div class="search-field">
            <v-text-field
                    tile
                    outlined
                    placeholder="文献/专利/作者/领域 检索"
            >
                <v-icon class="search-icon" slot="append">mdi-plus</v-icon>
                <v-divider vertical=true slot="append" style="margin-left:10px; margin-right: -10px;"></v-divider>
                <v-icon class="search-icon" slot="append">mdi-magnify</v-icon>
                <template v-slot:append-outer >
                    <v-btn v-on="on" big  style="top: -8px; left: 8px;" offset-y to="advancedSearch">
                        高级搜索
                    </v-btn>
                </template>
            </v-text-field>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchField"
    }
</script>

<style scoped>
    .search-field{
        width: 40%;
    }
    .search-icon{
        margin-left: 20px;
    }
</style>
