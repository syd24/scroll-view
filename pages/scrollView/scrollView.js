Page({

  
  data: {
    status: '1',
    currentIndex: 0,//当前页面索引
    scrHeight: wx.getSystemInfoSync().windowHeight,
    scrollLeft: 0,
    
  },

  onLoad: function () {
    var dataArr = ["精选", "癌症自查", "心理", "健康", "趣味", "两性", "全部"];
    this.setData({
      dataArr: dataArr,
    })
  },

  // 切换选项按钮
  btnClick: function (event) {
    var currentID = event.currentTarget.dataset.id;
    this.setData({
      status: currentID + '',
      currentIndex: currentID - 1,
    })



    var width = 0;
   
    var that = this;
    var currentID = event.currentTarget.id;
    wx.createSelectorQuery().select('#' + currentID).boundingClientRect(function (rect) {
      width = rect.left
      that.setData({
        scrollLeft: width,
      })
    }).exec()



  },
  //滑动页面改变按钮状态
  changeIndex: function (event) {
    this.setData({
      status: event.detail.current + 1 + '',
    })

    var that = this;
    var currentID = 'id' + (event.detail.current + 1);
    wx.createSelectorQuery().select('#' + currentID).boundingClientRect(function (rect) {
      that.setData({
        scrollLeft: rect.left,
      })
    }).exec()


  },

  //选项卡点击事件
  checkHealthItem: function (event) {
   
  }
})
