<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons'
</script>
<style lang="less">
.app-operate {
    display: flex;
    align-items: center;
}
</style>
<template>
    <div class="app-operate">
         <img class="app-avator" src="../../assets/logo.png" />
        <el-dropdown >
           
            <span class="el-dropdown-link">
                Dropdown List
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>

            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
 
    
</template>