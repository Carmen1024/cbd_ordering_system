export interface baseInterface{
    f_name: string,
    f_path: string,
    f_must_enable?: boolean,  //是否验证必填项
    f_must?: object,
    f_should_enable?: boolean, //是否过滤可选项
    f_should?: object,
    f_tacit_enable?: boolean,   //是否填入默认值
    f_tacit?: object,
    f_ext_enable?: boolean,     //是否填入扩展值
    f_ext?: object,
    f_res_enable?: boolean,   //是否过滤返回值
    f_res?: object,
    f_mq_enable?: boolean,  //是否发送异步消息
    f_mq?:object,
}