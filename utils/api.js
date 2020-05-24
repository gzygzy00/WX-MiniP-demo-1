import MD5 from "./md5.min.js"
// APP ID
const appid = "20190617000308307"
// 密钥
const key = "EVq_4lLkLo9KYRJBYoiM"
// 随机数
const salt = (new Date).getTime()
// 请求翻译query
let query = "apple\norange"
// 翻译源语言
let from = "en"
// 译文语言
let to = "zh"
const str1 = appid + query + salt + key
const sign = MD5(str1)

function translate() {
  return new Promise((resolve, reject) => {
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
      },
      fail() {
        console.log("错误");
      },
      complete() {
        console.log("结束");
      }
    })

  })
}

wx.request({
  url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
})

module.exports = {
  translate: translate
}