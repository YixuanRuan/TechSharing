<template>

    <v-card
            class="mx-auto"
            max-width="450"

            outlined
    >
        <div style="text-align: center" >
            <v-avatar size="200">
                <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"

                >
            </v-avatar>

        </div>
        <v-list-item three-line>

            <v-list-item-content>

                <v-list-item-title class="headline mb-1" style="text-align: center;">
                    Ishigawa Naomi</v-list-item-title>
                <v-list-item-subtitle class="subtitle-2"style="text-align: center;">
                    <v-avatar >
                        <v-icon>mdi-school</v-icon>
                    </v-avatar>
                    Beihang University</v-list-item-subtitle>
                <v-list-item-subtitle class="subtitle-1"style="text-align: center;">
                    <v-avatar >
                        <v-icon>mdi-account</v-icon>
                    </v-avatar>
                    Prof. , Institute of Softeware Chinese Academy of Science</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title  style=" font-size: 20px; font-family: 等线; font-weight: bold"   >研究领域</v-list-item-title>
            </v-list-item-content>

        </v-list-item>
        <div class="text-center">
            <v-chip
                    class="ma-2"
                    style="margin-left: 8px; margin-bottom: 8px"
                    v-for="(data, index) in sort_option"
            >
                {{data.tag}} {{data.num}}
            </v-chip>
        </div>
        <v-card-actions >

            <div style="width: 100%; text-align: center">
                <v-btn large color="primary" style="margin: auto">合作洽谈</v-btn>

            </div>

        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "aaa",

            name: "SortSelect",
            data: () => ({
                sort_option: [
                    {
                        tag: "软件",
                        color: '#ABABAB',
                        num:"15"
                    },
                    {
                        tag: "软件工程",
                        color: '#ABABAB',
                        num:"7"
                    },
                    {
                        tag: "计算机",
                        color: '#ABABAB',
                        num:"15"
                    },
                    {
                        tag: "下载数量",
                        color: '#ABABAB',
                        num:"15"
                    },
                    {
                        tag: "下载数量",
                        color: '#ABABAB',
                        num:"15"
                    },
                    {
                        tag: "下载数量",
                        color: '#ABABAB',
                        num:"15"
                    },
                ]
            }),
    }
</script>

<style scoped>
.text1111{
    font-size: 12px;
}
</style>