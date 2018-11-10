// pages/template1/template1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSwiper:0
  },
  swiperSwich(e){
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.loadFontFace({
      family: 'template1',
      source: 'url("https://rizhaoren.rzw.com.cn/zbrz/attached/xcx/fangzheng.TTF")',
      success: wx.showToast({
        title: '字体加载成功',
      }),
      fail: function (res) {
       wx.showToast({
          title: '字体加载失败',
        })//  error

      },

      complete: function (res) {

        console.log(res);

      }
    })
  },
  goForm(){
    wx.navigateTo({
      url: '/pages/template/template1-form/template1-form',
    })
  },
  loadFont(){
    wx.loadFontFace({
      family: 'template1',
      source: 'url("https://image.mynicecard.com/xiaochengxu/font/CloudKaiTiGBK.TTF")',
      success: wx.showToast({
        title: '字体加载成功',
      }),
      fail: function (res) {
        wx.showToast({
          title: '字体加载失败',
        })//  error

      },

      complete: function (res) {

        console.log(res);

      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})