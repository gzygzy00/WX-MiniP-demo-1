Page({
  data: {
    items: [
      {value: 'zh', name: '中文'},
      {value: 'en', name: '英语', checked: 'true'},
      {value: 'jp', name: '日语'},
      {value: 'kor', name: '韩语'},
      {value: 'fra', name: '法语'},
      {value: 'spa', name: '西班牙语'},
    ]
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    // 当数组长度在循环过程中不会改变时，我们应将数组长度用变量存储起来，这样会获得更好的效率
    const items = this.data.items
    for (let i = 0, len = items.length; i < len; i++) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
  }
})