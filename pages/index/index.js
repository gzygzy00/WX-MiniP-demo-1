//index.js
import {
  translate
} from "../../utils/api.js"
//获取应用实例
const app = getApp()

Page({
  data: {
    query: '',
    result: [],
    hideClearFont: true,
    curlang: {}
  },
  onInput(event) {
    const value = event.detail.value
    this.setData({
      query: value
    })
    if (value.length > 0) {
      this.setData({
        hideClearFont: false
      })
    } else {
      this.setData({
        hideClearFont: true
      })
    }
  },
  onConfirm() {
    if (!this.data.query) return
    translate(this.data.query).then((resolve) => {
      this.setData({
        result: resolve.trans_result
      })
    })
  },
  clearText() {
    this.setData({
      'query': '',
      'result': '',
      'hideClearFont': true
    })
  },


})