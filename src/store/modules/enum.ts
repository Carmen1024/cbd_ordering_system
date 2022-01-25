import { bizDictRow } from '@/api/project/bizDict';

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
  options: Object
}
const state = () => ({
  options:{}
})

const getOptions = (state: enumState, key:String)=>{
 
  const params = {
    "eq": {
      "dict_type": 1,
      "dict_group": key
    }
  }
  console.log("============");
  return bizDictRow(params).then(res=>{
    //dict_val_int dict_val_str
    const data = res.data.map(item=>{
      return item.dict_val_int && {value:item.dict_val_int,label:item.dict_val_str}
    })
    console.log(data);
    console.log(state,state.value);
    state.options[key] = data;
    // Promise.resolve(data)
  })
}
// mutations
const mutations = {
  setOption(state: enumState, key:String) {
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
