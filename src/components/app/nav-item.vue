<script lang="ts" setup>
import { ArrowRight, ArrowDown } from '@element-plus/icons'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const matchedList = computed(() => route.matched)
const link = computed(() => route.path)
console.log(matchedList.value)
</script>
<style lang="less" scoped>
.header-nav {
   display: flex;
   a {
      color: #000;
   }
}
.active {
    color: #1890ff;
    background-color: #e6f7ff;
}

.breadcrumb {
  margin-left: 20px;
  line-height: unset;
}

.text-blod {
  font-weight: bold;
}
</style>
<template>
  <div class="header-nav">
    <fold-icon></fold-icon>
    <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb" >
      <el-breadcrumb-item v-for="(item,index) in matchedList" :key="index">
        <el-dropdown v-if="item.children && item.children.length > 0">
            <span class="el-dropdown-link">
              {{item.name}}
              <el-icon class="el-icon--right">
                <ArrowDown />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu >
        
                <router-link v-for="(_item,_idx) in item.children" :key="_idx" :to="_item.path" :class="{active: link.indexOf(_item.path) != -1 }">
                  <el-dropdown-item  :class="link.indexOf(_item.path) !=-1 ? 'active': ''" >
                    {{_item.name}}
                  </el-dropdown-item>
                 </router-link>
              </el-dropdown-menu>
            </template>
        </el-dropdown>
        <template v-else>
            <span class="text-blod">{{item.name}}</span>
          </template>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
 
  
</template>

