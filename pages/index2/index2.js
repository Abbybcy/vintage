// pages/index2/index2.js
let videoAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bing2:'https://api.gmit.vip/Api/BingImg?format=image',
    bing:'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/7683fc8d7febc74625550ca601c76f92.png?x-oss-process=image%2fresize%2cm_lfit%2cw_960%2ch_540',
    wheath:[],
    mryj:'',
    liuyan:[],
    sfyc:'none',
    mrtx:'https://tse1-mm.cn.bing.net/th/id/OIP-C.CJ3bq9fXwhgPUrZJ55RbpwAAAA?w=168&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    content:'',
    shuaxin:'false',
    cityname:'',
    province: [],
    lyyc:'block',
    lyyc2:'none'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key:'cityname',
      success(e){
        console.log("获去到当前城市为",e.data)
        that.setData({
          cityname:e.data
        })
        var city2=e.data
        wx.request({
          url: 'url',
          success(e){
                          wx.request({
                    url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=81e7539d514f1b5c6f79ee0b4b1e9424&city='+city2,
                    success(res){
                      console.log("天气",res.data.lives[0])
                      that.setData({
                        wheath:res.data.lives[0]
                      })
                    }
                  })
                  wx.request({
                    url: 'url',
                    data:{
                      city:city2
                    },
                    success(res){
                      console.log("数据库留言：",res.data.lyb)
                      var lyb=res.data.lyb.reverse()
                      that.setData({
                        liuyan:res.data.lyb
                      })
                    },
                    
                  })
          }
        })
      }
    })

    wx.request({
      url: 'https://open.iciba.com/dsapi/',
      success(res){
        console.log(res.data.note)
        that.setData({
          mryj:res.data.note
        })
      }
    })
    // that.adload()
  },
  liuyan:function(res){
    var that=this
    if(that.data.lyyc2=='block'){
      wx.showModal({
        title: '温馨提示',
        content: '请先点击解锁留言',
        showCancel:false
      })
    }else{
      console.log("点击了留言按钮")
      that.setData({
      sfyc:'block'
    })
    }
  },
  hqtx:function(res){
    var that=this
    console.log("获取了头像",res)
    that.setData({
      mrtx:res.detail.avatarUrl
    })
},
  scbutton:function(res){
    var that=this
    console.log("点击了上传留言按钮")
    wx.request({
      url: 'url',
      success(res){
        console.log("数据库留言：",res.data.lyb)
        var lycd=res.data.lyb.length+1
        wx.uploadFile({
          filePath: that.data.mrtx,
          name: 'file',
          url: 'url',
          formData:{
            xh:lycd,
            city:that.data.cityname
          },
          success(res){
            if(that.data.content==''){
              that.setData({
                content:'打卡打卡~'
              })
              console.log('上传失败')
              wx.request({
                url: 'url',
                data:{
                  city:that.data.cityname,
                  tx:'url'+that.data.cityname+'lyb/'+lycd+'.jpg?'+Math.random()/9999,
                  xh:lycd,
                  content:that.data.content
                }
              })
              that.gbbutton()
              that.sxlyb()
            }else{
              wx.request({
                url: 'url',
                data:{
                  city:that.data.cityname,
                  tx:'url'+that.data.cityname+'lyb/'+lycd+'.jpg?'+Math.random()/9999,
                  xh:lycd,
                  content:that.data.content
                }
              })
              that.gbbutton()
              that.sxlyb()
              console.log('上传成功')
            }
          },
          fail(res){
            wx.showModal({
              title: '提示',
              content:'请先点击左边灰色图标设置头像',
              showCancel:false
            })
          }
        })
        that.setData({
          liuyan:res.data.lyb
        })
      }
    })
  },
  gbbutton:function(res){
    var that=this
    console.log("点击了关闭按钮")
    that.setData({
      sfyc:'none',
      content:''
    })
  },
  content:function(res){
    var that=this
    console.log(res.detail.value)
    that.setData({
      content:res.detail.value
    })

  },
  shuaxin:function(res){
    var that=this
    that._freshing = true
    setTimeout(() => {
      that.setData({
        shuaxin: false,
      })
      that._freshing = false
    }, 1000)
    that.sxlyb()
  },
  sxlyb:function(e){
    var that=this
    wx.request({
      url: 'url',
      data:{
        city:that.data.cityname
      },
      success(res){
        console.log("数据库留言：",res.data.lyb)
        var lyb=res.data.lyb.reverse()
        that.setData({
          liuyan:res.data.lyb
        })
      }
    })
  },

  adload:function(){
    var that=this
    wx.getSystemInfo({
      success (res) {
        console.log(res.SDKVersion)
        if (wx.createRewardedVideoAd) {
          videoAd = wx.createRewardedVideoAd({
            adUnitId: 'adunit-2bbe76d10e0acf28'
          })
          videoAd.onLoad(() => {})
          videoAd.onError((err) => {})
          videoAd.onClose((res) => {
            console.log('关闭广告时',res)
            if(res.isEnded==true){
              that.setData({
                lyyc:'block',
                lyyc2:'none'
              })
            }
          })
        }
      }
    })
  },

  adshow:function(){
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
    var that=this
    wx.getStorage({
      key:'cityname',
      success(e){
        console.log("获去到当前城市为",e.data)
        that.setData({
          cityname:e.data
        })
        var city2=e.data
        wx.request({
          url: 'url',
          success(e){
                          wx.request({
                    url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=81e7539d514f1b5c6f79ee0b4b1e9424&city='+city2,
                    success(res){
                      console.log("天气",res.data.lives[0])
                      that.setData({
                        wheath:res.data.lives[0]
                      })
                    }
                  })
                  wx.request({
                    url: 'url',
                    data:{
                      city:city2
                    },
                    success(res){
                      console.log("数据库留言：",res.data.lyb)
                      var lyb=res.data.lyb.reverse()
                      that.setData({
                        liuyan:res.data.lyb
                      })
                    },
                    
                  })
          }
        })
      }
    })

    wx.request({
      url: 'https://open.iciba.com/dsapi/',
      success(res){
        console.log(res.data.note)
        that.setData({
          mryj:res.data.note
        })
      }
    })
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
