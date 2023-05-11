// index.js
// 获取应用实例
const app = getApp()


Page({
  data: {
    demo:[],
    demo2:[],
    latitude:null,
    longitude:null,
    latitude2:[],
    longitude2:[],
    productAll:'',
    jwdzh:[],
    index : [0,0],
    province: [],
    cityname:'',
    wzsize:'34',
    wzsize2:'30',
    wzcolor:'#ec8ff0',
    wzcolor2:'#000000'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '古着地图',
      path: '/index/index'
    }
  },
  onShareTimeline(res){
    console.log(res)
    return {
      title: '古着地图-实时查看全国古着店',
      path: '../index/index',
    }

  },
  onShow() {

  },
  onLoad() {
    var that=this
    var i=0
    var lat2=[]
    var lng2=[]
    var province=[]
    var j=0
    wx.request({
      url: 'https://whfisher.xyz/vintage/citys.php',
      success(e){
        while(e.data.citys[j]){
          province[j]=e.data.citys[j].city
          that.setData({
            province:province
          })
          j++
        }
        console.log('当前存在城市',that.data.province)
        wx.request({
          url: 'https://api.vvhan.com/api/getIpInfo?ip=',
          success(res){
            console.log(res.data.info.city)
            var city=res.data.info.city
            var city2=city.replace("市","")
            var province=that.data.province
            wx.setStorageSync('cityname', city2)
            if(province.indexOf(city2) == -1){
              console.log('不在武汉')
              wx.showModal({
                title: '提示',
                content:'您当前位置暂无收录店铺，已为您自动定位到武汉，如需修改定位请点击左上角>_<',
                showCancel:false
              })
              that.setData({
                cityname:'武汉'
              })
              wx.getLocation({
                type: 'gcj02',
                success: (res) => {
                  that.setData({
                    latitude:res.latitude,
                    longitude:res.longitude
                  })
                  wx.request({
                    url: 'https://whfisher.xyz/vintage/gzsjb2.php',
                    data:{
                      action:"read",
                      city:that.data.cityname
                    },
                    success(res){
                      var acc=res.data.uesrs
                      while(res.data.uesrs[i]){
                        var lat1=that.data.latitude
                        var lng1=that.data.longitude
                        lat2[i]=res.data.uesrs[i].lat2
                        lng2[i]=res.data.uesrs[i].lng2
                        const distance_new = that.GetDistance(lat1,lng1, lat2[i], lng2[i]);
                        if(distance_new >100){
                          acc[i].jl='>100'
                          that.setData({
                            demo:acc,
                          })
                        }else{
                          acc[i].jl=distance_new
                          that.setData({
                            demo:acc,
                          })
                        }
                          i++
                      }
                      console.log("新组合",that.data.demo)
                    }
                  })
                }
              })
              wx.setStorageSync('cityname', '武汉')
              var demo2 = JSON.parse(JSON.stringify(acc))
              that.setData({
                demo2:demo2
              })
              console.log('备用组合',that.data.demo2)
            }else{
              console.log("当前定位在武汉",province.indexOf('武汉'))
              wx.getLocation({
                type: 'gcj02',
                success: (res) => {
                  that.setData({
                    latitude:res.latitude,
                    longitude:res.longitude,
                    cityname:city2
                  })
                  wx.request({
                    url: 'https://whfisher.xyz/vintage/gzsjb2.php',
                    data:{
                      action:"read",
                      city:city2
                    },
                    success(res){
                      var acc=res.data.uesrs
                      while(res.data.uesrs[i]){
                        var lat1=that.data.latitude
                        var lng1=that.data.longitude
                        lat2[i]=res.data.uesrs[i].lat2
                        lng2[i]=res.data.uesrs[i].lng2
                        const distance_new = that.GetDistance(lat1,lng1, lat2[i], lng2[i]);
                        if(distance_new >100){
                          acc[i].jl='>100'
                          that.setData({
                            demo:acc,
                          })
                        }else{
                          acc[i].jl=distance_new
                          that.setData({
                            demo:acc,
                          })
                        }
                          i++
                      }
                      console.log("新组合",that.data.demo)
                      var demo2 = JSON.parse(JSON.stringify(acc))
                      that.setData({
                        demo2:demo2
                      })
                      console.log('备用组合',that.data.demo2)
                    }
                  })
                }
              })
              wx.setStorageSync('cityname', city2)
            }
            console.log("当前城市",city2)
            
          }
        })
      }
    })
    

  },

  xgdingwei:function(e){
    console.log('选择了',e.detail.value)
    var that=this
    var i=0
    var lat2=[]
    var lng2=[] 
    var city2=that.data.province[e.detail.value]
    that.setData({ 
      index:e.detail.value,
      cityname:city2 
    });
    wx.setStorageSync('cityname', city2)
    console.log("city2",city2)
    wx.request({
      url: 'https://whfisher.xyz/vintage/gzsjb2.php',
      data:{
        action:"read",
        city:city2
      },
      success(res){
        var acc=res.data.uesrs
                      while(res.data.uesrs[i]){
                        var lat1=that.data.latitude
                        var lng1=that.data.longitude
                        lat2[i]=res.data.uesrs[i].lat2
                        lng2[i]=res.data.uesrs[i].lng2
                        const distance_new = that.GetDistance(lat1,lng1, lat2[i], lng2[i]);
                        console.log("离店距离是：",distance_new)
                        if(distance_new >100){
                          acc[i].jl='>100'
                          that.setData({
                            demo:acc,
                          })
                        }else{
                          acc[i].jl=distance_new
                          that.setData({
                            demo:acc,
                          })
                        }
                          i++
                      }
                      console.log("新组合2",that.data.demo)
                       var demo2 = JSON.parse(JSON.stringify(acc))
                        that.setData({
                          demo2:demo2
                        })
                        console.log('demo2是',that.data.demo2)
      },
      fail(e){
        console.log("调用失败",e)
      }
    })
  },

  Rad:function(d){
    return d * Math.PI / 180.0;
  },

  GetDistance:function(lat1,lng1,lat2,lng2){
    var that=this
    var radLat1 = that.Rad(lat1);
    var radLat2 = that.Rad(lat2);
    var a = radLat1 - radLat2;
    var  b = that.Rad(lng1) - that.Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
    Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
    s = s *6378.137 ;// EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里
    s=s.toFixed(1);
    return s;
    },

  intostore:function(e){
    var that=this
    console.log('店铺id：',e.currentTarget.dataset.value)
    wx.navigateToMiniProgram({
      appId:e.currentTarget.dataset.value,
      success(){
        console.log('跳转成功')
      },
      fail(e){
        console.log('跳转失败')
      }
    })
  },

  zhbutton:function(e){
    var that=this
    var demo2=that.data.demo2
    var demo3 = JSON.parse(JSON.stringify(demo2))
    console.log('点击了综合',demo2)
    that.setData({
      wzcolor:'#ec8ff0',
      wzcolor2:'#000000',
      demo:demo3
    })

  },
  jlbutton:function(e){
    var that=this
    var demo=that.data.demo
    console.log('点击了距离')
    // 排序
    function compare(property) {
      return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      }
    }
    //打印看结果
    var demo3=demo.sort(compare("jl"))
    that.setData({
      wzcolor:'#000000',
      wzcolor2:'#ec8ff0',
      demo:demo3
    })
    console.log('距离最近组合',that.data.demo)
    console.log('原始备用组合',that.data.demo2)
  },
})
