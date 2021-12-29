<template>
    <ElButton>ewrwr</ElButton>
    <div class="test" >用户</div>
    <el-icon :size="20">
    <Edit></Edit>
  </el-icon>
</template>
<script lang="ts" setup>

import { Edit,FolderOpened } from '@element-plus/icons'
</script>
<style lang="less">

</style>
<route lang="yaml">
name: 用户
meta:
  requiresAuth: true
</route>