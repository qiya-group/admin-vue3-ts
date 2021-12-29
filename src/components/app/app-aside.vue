<template>

      <div class="app-aside" :class="{hide: isFlod}">
      <div class="app-logo">
        <img class="logo" src="../../assets/logo.png"/>
      </div>
      <div>
       
          <!-- <div v-for="(item,index) in menus" :key="index" >
            <dl v-if="item.children && item.children.length> 0">
                <dt>{{item.name}}</dt>
                <dd v-for="(_item, _idx) in item.children" :key="_idx">
                   <router-link  :to="_item.path">
                        <span>{{_item.name}}</span>
                    </router-link>
                </dd>
            </dl>
             <router-link v-else :to="item.path">
                <span>{{item.name}}</span>
             </router-link>
             
          </div> -->

        

        
          <el-menu
            :default-active="index"
            class="aside-menu"
            :collapse="isFlod"
            :collapse-transition="false"
          >
            <template v-for="(item,index) in menus" :key="index">
                <el-sub-menu :index="index+''" v-if="item.children && item.children.length> 0" >
                  <template #title>
                    <el-icon><Location /></el-icon>
                    <span >{{item.name}}</span>
                  </template>
                  <template v-for="(_item, _idx) in item.children" :key="_idx">
                      <!-- <router-link :to="_item.path"> -->
                        <el-menu-item :index="index+ '-'+ _idx"  @click="jumpPage(_item.path)">
                        <el-icon><icon-menu /></el-icon>
                        {{_item.name}}
                        </el-menu-item>
                        <!-- :class="getClassName(_item.path)" -->
                      <!-- </router-link> -->
                      
                  </template>
                </el-sub-menu>
             
                
                <router-link :to="item.path" v-else>
                  <el-menu-item  >
                    <el-icon><icon-menu /></el-icon>
                        <span v-if="!isFlod"> {{item.name}}</span>
                  </el-menu-item>
                </router-link>
              
              
            </template>
            
      
          </el-menu>
          
      </div>
    </div>


</template>
<script lang="ts" setup>
import { appStore } from '~/stores/app'
import { routes } from '~/router'
import { RouteRecordRaw, useRouter,useRoute  } from 'vue-router'
import { computed, watch} from 'vue'
import { Location, Menu as IconMenu } from '@element-plus/icons'
const menus = computed(() =>
  routes
    .filter((route: RouteRecordRaw) => {
      return route.meta && !route.meta.hide
    })
    .reverse().sort((r1: any, r2: any)=> r1.meta.weight - r2.meta.weight)
);
const route = useRoute();
const router = useRouter();
const link: any = computed(() => route.path)
const index = computed(()=>{
  let s: string = ''
  menus.value.forEach((v,index)=>{
    if(link.value.indexOf(v.path) != -1)
      s = index+ ''
    if(v.children){
      v.children.forEach((_val,_id)=>{
        if(link.value.indexOf(_val.path) != -1)
          s = s + '-'+ _id;
      })
    }
  })
  return s;
})


watch(link, (val)=>{
  
})


const store = appStore();
const isFlod = computed(()=> store.isFold);
const jumpPage = (path:string) =>{
  router.push(path)
}

const getClassName = (path: string) =>{
  

  if(link.value.indexOf(path) != -1) return 'is-active';
  return ''
}

</script>
<style lang="less">
.aside-menu {
  height: calc(~'100vh - 60px');
  width: 100%;
}
</style>