<template>
    <div>
        {{text}}
        <a class='s' href='javascript:;' @click='click()'>alert</a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                text: "测试"
            }
        },
        methods: {
            click() {
                alert ('测试alert')
            }
        }
    }
</script>
<style lang='scss'>
    @import './test';
    .s {
        display: flex;
    }
</style>