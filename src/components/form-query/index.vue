<template>
    <el-form ref="form" :inline="true"  label-width="100px">
         <el-form-item label="Activity name">
             <el-input />
         </el-form-item>
         <el-form-item label="Activity name">
             <el-input />
         </el-form-item>
         <el-form-item label="Activity name">
             <el-input />
         </el-form-item>
          <el-form-item label="Activity name">
             <el-input />
         </el-form-item>
         <el-form-item label="Activity name">
             <el-input />
         </el-form-item>
         <el-form-item label="Activity name">
             <el-input />
         </el-form-item>
        
    </el-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
const models = reactive<{[index: string | number | symbol]: any}>({})
</script>
<style lang="less" scoped>

</style>
