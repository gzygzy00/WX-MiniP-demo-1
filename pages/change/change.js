Page({
  data: {
    langList: [
      {lang: 'zh', name: '中文'},
      {lang: 'en', name: '英语', checked: 'true'},
      {lang: 'jp', name: '日语'},
      {lang: 'kor', name: '韩语'},
      {lang: 'fra', name: '法语'},
      {lang: 'spa', name: '西班牙语'},
    ]
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    // 当数组长度在循环过程中不会改变时，将数组长度用变量存储起来，这样会获得更好的效率
    const items = this.data.langList
    for (let i = 0, len = items.length; i < len; i++) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
  }
})