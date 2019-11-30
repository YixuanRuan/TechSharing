<template>
    <div class="search-container">
        <div class="search-field">
            <v-text-field
                    tile
                    outlined
                    placeholder="                                           文献/专利/作者/领域 检索"
            >
                <v-icon class="search-icon" slot="append">mdi-plus</v-icon>
                <v-divider vertical=true slot="append" style="margin-left:10px; margin-right: -10px;"></v-divider>
                <v-icon class="search-icon" slot="append">mdi-magnify</v-icon>
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
