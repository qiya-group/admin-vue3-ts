<template>
    {{`<el-icon size="20" color="red">
      <edit></edit>
    </el-icon>`}}
    <el-icon size="20" color="red">
      <edit></edit>
    </el-icon>
    
    <span @click="jump">
      跳转到表单demo
    </span>

    <div>
      <el-input v-model="name"></el-input>
      <l-context class="arr" :name="name"></l-context>
    </div>
   

</template>
<script lang="ts" setup>
import LContext from '~/components/l-context'
import { Edit} from '@element-plus/icons'
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const name = ref('')
const router = useRouter();
const jump = ()=>{
  router.push('/components/form')
}
</script>

<route lang="yaml">
name:  图标
path: /components/icon
meta:
  requiresAuth: true
</route>