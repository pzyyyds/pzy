import axios from "axios"
import qs from "qs"
let baseUrl = "/api"
// 响应拦截
axios.interceptors.response.use(res=>{
console.group("======本次请求的路径："+ res.config.url)
console.log(res)
console.groupEnd("请求结束")
return res
})
/* ===================Menu菜单管理===================== */
// 添加
export const reqMenuAdd = (form) => {
    return axios({
      url: baseUrl + "/api/menuadd",
      method: "post",
      data: qs.stringify(form)
    })
  }
  // menu列表
  export const reqMenuList = ()=>{
    return axios({
      url: baseUrl + "/api/menulist",
      method: "get",
      params:{
        istree:true
      }
    })
  }
  // 删除
  export const reqMenuDel = (id)=>{
    return axios({
      url: baseUrl+"/api/menudelete",
      method:"post",
      data:qs.stringify({id:id})
    })
  }
  // 获取一条数据
  export const reqMenuOne = (id)=>{
    return axios({
      url:baseUrl+"/api/menuinfo",
      method:"get",
      params:{
        id:id
      }
    })
  }
  // 修改数据
  export const reqMenuUpdate = (form)=>{
    return axios({
      url:baseUrl+"/api/menuedit",
      method:"POST",
      data:qs.stringify(form)
    })
  }
  
  /* ===================role角色管理===================== */
  // 添加
  export const reqRoleAdd = (form) => {
    return axios({
      url: baseUrl + "/api/roleadd",
      method: "post",
      data: qs.stringify(form)
    })
  }
  // 列表
  export const reqRoleList = ()=>{
    return axios({
      url: baseUrl + "/api/rolelist",
      method: "get"
    })
  }
  // 删除
  export const reqRoleDel = (id)=>{
    return axios({
      url: baseUrl+"/api/roledelete",
      method:"post",
      data:qs.stringify({id:id})
    })
  }
  // 获取一条数据
  export const reqRoleOne = (id)=>{
    return axios({
      url:baseUrl+"/api/roleinfo",
      method:"get",
      params:{
        id:id
      }
    })
  }
  // 修改
  export const reqRoleUpdate = (form)=>{
    return axios({
      url:baseUrl+"/api/roleedit",
      method:"POST",
      data:qs.stringify(form)
    })
  }
  
  /* ===================manage管理员管理===================== */
  // 添加
  export const reqManageAdd = (form) => {
    return axios({
      url: baseUrl + "/api/useradd",
      method: "post",
      data: qs.stringify(form)
    })
  }
  // 管理员总数（用于分页）
  export const reqManageCount = () => {
    return axios({
      url: baseUrl + "/api/usercount",
      method: "get",
    })
  }
  // 管理员列表(用于分页)
  export const reqManageList = (params)=>{
    return axios({
      url: baseUrl + "/api/userlist",
      method: "get",
      params:params
    })
  }
  // 删除
  export const reqManageDel = (uid)=>{
    return axios({
      url: baseUrl+"/api/userdelete",
      method:"post",
      data:qs.stringify({uid:uid})
    })
  }
  // 获取一条数据
  export const reqManageOne = (uid)=>{
    return axios({
      url:baseUrl+"/api/userinfo",
      method:"get",
      params:{
        uid:uid
      }
    })
  }
  // 修改数据
  export const reqManageUpdate = (form)=>{
    return axios({
      url:baseUrl+"/api/useredit",
      method:"POST",
      data:qs.stringify(form)
    })
  }