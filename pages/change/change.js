const app = getApp()

Page({
  data: {
    curLang: {},
    langList: app.globalData.langList
  },
  onShow() {
    this.setData({
      curLang: app.globalData.curLang
    })
  },
  onTap(e) {
    // 获取 wxml 标签里的 data-
    const langObj = e.currentTarget.dataset
    this.setData({
      'curLang': langObj
    })
    wx.setStorageSync('curLang', langObj)
    app.globalData.curLang = langObj
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})