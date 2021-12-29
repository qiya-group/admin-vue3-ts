//

import { defineStore } from 'pinia'
const _state = {};
interface User {
    id: number;
    account: string;
    auth?: any[];
    [index: string | number | symbol ]: any;
}

interface AppState {
    rawItems: any[];
    userInfo: User | null;
    menus: any[];
    userStatus: string;
    isFold: boolean,
}
export const appStore =  defineStore('app',{
  state: () => ({
    rawItems: [],
    userInfo: null,
    menus: [],
    userStatus: '',
    isFold: false,
  } as AppState),
  getters: {
  },
  actions: {
    setUseInfo(info: any){
      this.userInfo = info;
    },
    setUserStatus(status: string) {
      this.userStatus = status;
    },

    toggleFlod(){
        this.isFold = !this.isFold;
    }

  },
})
