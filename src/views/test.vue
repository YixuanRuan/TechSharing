<template>
    <div>
        <h1 style="margin: 40px">数据：</h1>

    </div>
</template>

<script>
    export default {
        name: "test",
        mounted() {
            console.log(this.$store.state.baseurl_es)
            this.axios({
                method: 'post',
                url: this.$store.state.baseurl_es+'ss_journal/_search',
                data: {
                    query:
                        {
                            match_all: {}
                        }
                },
                headers:{
                    // Access-Control-Allow-Origin
                },
                crossDomain: true
            }).then(body => {
                console.log(body.data)
            })
        }
    }
</script>

<style scoped>

</style>
