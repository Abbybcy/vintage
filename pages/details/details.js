// pages/details/details.js
let videoAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop:'',
    sfyc:'none',
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(id) {
    var that=this
    console.log(id.id)
    wx.getStorage({
      key:'shop',
      success(e){
        console.log(e.data)
        var acc=e.data[id.id-1]
        that.setData({
          shop:acc
        })
        console.log('当前shop',that.data.shop)
      }
    })
    // that.onLaunch()
  },
  fanhui(e){
     wx.navigateBack({

     })
  },
  lxfs(e){
    var that=this
    that.setData({
      sfyc:'block'
    })
  },
  copy(e){
    var that=this
    wx.setClipboardData({
      data: that.data.shop.lxfs,
      success (res) {
        that.setData({
          sfyc:'none'
        })
      }
    })
  },
  fangda(e){
    var that=this
    console.log('点击了图片',e.currentTarget.dataset.value)
    var image=e.currentTarget.dataset.value
    wx.previewImage({
      urls: that.data.shop.image,
      current:image
    })
    
  },
  adload:function(){
    var that=this
    var count=that.data.count
    wx.getSystemInfo({
      success (res) {
        console.log(res.SDKVersion)
        if (wx.createRewardedVideoAd) {
          videoAd = wx.createRewardedVideoAd({
            adUnitId: 'adunit-2bbe76d10e0acf28',
          })
          videoAd.onLoad((e) => {
            console.log('成功函数',e)
          })
          videoAd.onError((err) => {
            console.log('失败函数',err)
          })
          videoAd.onClose((res) => {
            console.log('关闭广告时',res)
            count=count+1
            if(res.isEnded==true){
              that.setData({
                sfyc:'block',
                count:count
              })
              wx.setStorageSync('count', count)
              var time=new Date()
              time=time.getTime()
              wx.setStorageSync('time', time)
            }
          })
        }
      }
    })
  },

  adshow:function(){
    var that=this
    var count=that.data.count
    if(count<=2){
      that.adload()
      if (videoAd) {
        videoAd.show().catch(() => {
          // 失败重试
          videoAd.load()
            .then(() => videoAd.show())
            .catch(err => {
              console.log('激励视频 广告显示失败')
            })
        })
      }
    }else{
      that.setData({
        sfyc:'block'
      })
    }
    
    console.log('点击了广告')
  },
  adshows(e){
    var that=this
    that.setData({
      sfyc:'block'
    })
  },

  onLaunch: function() {
    // 获取激励视频广告位加载的次数
    var count=wx.getStorageSync('count')
    var that=this
    if(!count){
      console.log('没有count')
      wx.setStorageSync('count', 0)
    }
    wx.getStorage({
      key:'count',
      success(e){
        console.log(e.data)
        that.setData({
          count:e.data
        })
      }
    })
    var lastSaveTime = wx.getStorageSync('time');
    if (lastSaveTime) {
      // 计算最后一次保存时间晚上12点的时间戳
      var endTime = new Date(new Date(lastSaveTime).setHours(23, 59, 59, 999));

      // 当前时间戳
      var currentDate = new Date();
      var currentTime = currentDate.getTime();

      // 清空激励广告位观看次数
      if (currentTime > endTime) {
          wx.setStorage({
              key: 'count',
              data: 0,
          })
      }
  } 
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})