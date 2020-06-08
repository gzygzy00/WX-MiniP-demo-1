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
    curLang: {}
  },
  onLoad(options) {
    console.log('loading...');
    console.log(options)
    if (options.q) {
      this.setData({
        query: options.q
      })
    }
  },
  onShow() {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({
        'curLang': app.globalData.curLang
      })
      this.onConfirm()
    }
  },
  onReady() {},
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
    translate(this.data.query, app.globalData.curLang.lang).then((res) => {
      this.setData({
        result: res.trans_result
      })
      // 历史记录功能
      const history = wx.getStorageSync('history') || []
      history.unshift(this.data.result)
      console.log(history)
      history.length = history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
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