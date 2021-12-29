import { Router } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import * as storage from '@/utils/local-storage'
import { appStore } from '@/stores/app'
import Fetch from '@/services/fetch'
import { useFetch } from '@vueuse/core'
export default (router: Router) => {
  router.beforeEach((to, from, next) => {
    console.log(to)
    isLogin(to)
    NProgress.start()
    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}



const isLogin = async (to: any): Promise<boolean> =>{
    const app = appStore();
    const userInfo = app.userInfo;
    if(!to?.meta?.requiresAuth) return true;
    if(userInfo?.id) return true;
    const token =  storage._get('token');
    if(!token){
        //let res = aw
       // const { data } = useFetch('blog/artcile/list', { refetch: true }) 
         //Fetch.getFetch('/blog/article/list', {test: 2}, {mode: 'cors'});
         //headers:{'Content-Type': 'application/x-www-form-urlencoded'},
         const res = await Fetch.postFetch('/blog/system/menus', {test: 2}, { mode: 'cors'});
        console.log(res)
      }

    
    return false;
}



