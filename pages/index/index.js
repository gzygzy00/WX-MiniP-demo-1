//index.js
import {translate} from "../../utils/api.js"
//获取应用实例
const app = getApp()

Page({
  data: {
    query: '123',
  },
  clearText(){
    this.setData({query: ''})
    translate()
  },
  
})
