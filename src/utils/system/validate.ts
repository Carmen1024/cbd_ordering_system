// 高级校验

export const validatePhone = (rule: any, value: any, callback: any) => {
  if (value.length!=11) {
    callback(new Error('请填写11位手机号'))
  } else {
    const TEL_REGEXP = /^1\d{10}$/;
    if(!TEL_REGEXP.test(value)){
      callback(new Error('请填写正确的手机号'))
    }
    callback()
  }
}
export const validateEmail = (rule: any, value: any, callback: any) => {
  if (value!="") {
    var reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");
    if(!reg.test(value)){
      callback(new Error('请填写正确的邮箱'))
    }
    callback()
  }
}

//
export const isEmptyObj=(msg:string="不能为空")=>{
  return { required: true, message: msg, trigger: 'blur' }
}
export const isEmpty=(msg:string="不能为空")=>{
  return [isEmptyObj(msg)]
}

export const isPhone=(msg:string="请填写手机号")=>{
  return [
    { required: true, message: msg, trigger: 'blur' },
    { validator: validatePhone, trigger: 'blur' }
  ]
}
export const isEmail=()=>{
  return [
    { validator: validateEmail, trigger: 'blur' }
  ]
}