var rootDocment = 'https://api.mynicecard.com';//域名  
function req(url,method, data, cb) {
  wx.request({
    url: rootDocment + url,
    data: data,
    method: method,
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}
module.exports = {
  req: req
}  