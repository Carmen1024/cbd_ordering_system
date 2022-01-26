import { bizDictRow } from '@/api/project/bizDict';
import {reactive} from 'vue';

interface Option<T>  {
  name: keyof optionKey<T>
  value: optionValue<T>
}

type optionKey<T> = {
  [name in keyof T]: string
}

type optionValue<T> = {
  value: T[keyof T]
}
export interface enumState {
  // options: Object
}
const state = () => reactive({
  // options:{}
})

const getOptions = (state:object, key:string)=>{
 
  const params = {
    "eq": {
      "dict_type": 1,
      "dict_group": key
    }
  }
  console.log("============");
  bizDictRow(params).then(res=>{
    //dict_val_int dict_val_str
    const data = res.data.map(item=>{
      return item.dict_val_int && {value:item.dict_val_int,label:item.dict_val_str}
    })
    // console.log(data);
    // state[key] = data
    // Vue.set(state.options, key, data);
    // state.options.push({[key]:data})
    console.log(state,key,data);
    Object.defineProperty(state,key,data)
    // Promise.resolve(data)
  })
}
// mutations
const mutations = {
  setOption(state: object, key:string) {
    getOptions(state,key)
  }
}

// actions
const actions = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
