import MD5 from "./md5.min.js"
// APP ID
const appid = "20190617000308307"
// 密钥
const key = "EVq_4lLkLo9KYRJBYoiM"
// 请求翻译query

// 翻译源语言
let from = "auto"
// 译文语言

function translate(query, to) {
  return new Promise((resolve, reject) => {
    // 随机数
    const salt = (new Date).getTime()
    const str1 = appid + query + salt + key
    const sign = MD5(str1)
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      method: 'GET',
      data: {
        q: query,
        appid,
        salt,
        from,
        to,
        sign
      },
      success(res) {
        console.log("成功");
        console.log(res.data);
        if (res.data && res.data.trans_result) {
          resolve(res.data)
        } else {
          reject("翻译失败")
          wx.showToast({
            title: '翻译失败',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail() {
        console.log("错误");
        wx.showToast({
          title: '网络错误',
          icon: 'none',
          duration: 2000
        })
      },
      complete() {
        console.log("结束");
      }
    })
  })
}

module.exports = {
  translate: translate
}