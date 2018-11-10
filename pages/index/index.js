// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   cardListType:"0",
   temData:[
    {
      id:1,
       url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540062814079&di=095150298b3db0bf2f0fa99358b4faf2&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201504%2F29%2F20150429092539_eMAfc.jpeg'
    },
     {
       id: 2,
       url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540062814079&di=a133774f704c0bf83800ffc0566e98b2&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1412%2F30%2Fc14%2F1304435_1419930565759_400x.jpg'
     },
     {
       id: 3,
       url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540062814076&di=f3440364e88ff81c3e2bf8b873bc6326&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F11%2F20140711153409_2Ti2K.thumb.700_0.jpeg'
     },{
        id: 4,
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540062814076&di=f3440364e88ff81c3e2bf8b873bc6326&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F11%2F20140711153409_2Ti2K.thumb.700_0.jpeg'
      } 
   ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  //前往名片模板頁
  goTemplagePage(){
    wx.navigateTo({
      url: '/pages/template/template1/template1',
    })
  },
  //切换顶部tab
  switchType(e){
    console.log(e)
    this.setData({
      cardListType: e.currentTarget.dataset.type
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