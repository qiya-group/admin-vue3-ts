<template>
<!-- <Query></Query> -->
    <TestQuery :options='options'></TestQuery>
</template>
<script lang="ts" setup>
// import Query from '@/components/form-query/index.vue'
import TestQuery from '@/components/form-query'

const options = [
    {type: 'input', prop: 'test', label: '测试', placeholder: 'werewwr'},
    {type: 'input', prop: 'at', label: 'at'},
    {type: 'radio', prop: 'ce', label: '车是', options:[{value: 1, label: '男'},{value: 2, label: '女'}], border: true},
    {type: 'checkbox', prop: 'eer', label: '车是', options:[{value: 1, label: '男'},{value: 2, label: '女'}], border: true, default: []}

]
</script>
<style>

</style>
<route lang="yaml">
name:  菜单管理
path: /components/menu
meta:
    title: 菜单管理
</route>
