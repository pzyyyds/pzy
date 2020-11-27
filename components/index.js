import Vue from "Vue"
let obj = {

}
for(let i in obj){
    Vue.component(i,obj[i])
}