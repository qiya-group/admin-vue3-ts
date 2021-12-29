<script lang="ts" setup>

import { Fold } from '@element-plus/icons'
import {appStore} from '~/stores/app'


const store = appStore();

const toggle = ()=>{
  store.toggleFlod();
}

</script>

<template>
    <el-icon @click="toggle" :size="20" >
        <Fold></Fold> 
    </el-icon>
</template>
<style lang="less" scoped>
</style>
