// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuaxin:'false',
    fenlei:['全部','连衣裙','半裙','吊带','西装','夹克','衬衫','短袖','卫衣','裤子','首饰','其他'],
    shop:'',
    demo2:'',
    qbcolor:'#ec8ff0',
    lyqcolor:'white',
    bqcolor:'white',
    ddcolor:'white',
    xzcolor:'white',
    jkcolor:'white',
    cscolor:'white',
    dxcolor:'white',
    wycolor:'white',
    kzcolor:'white',
    sscolor:'white',
    qtcolor:'white',
    sfyc:'none'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
 
  },
  fabu:function(e){
    console.log('点击了发布')
    wx.navigateTo({
      url: '../fabu/fabu',
      success(e){
        console.log(e)
      }
    })
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
    var i=0
    var j=0
    wx.request({
      url: 'https://whfisher.xyz/vintage/shophq.php',
      success(e){
        var acc=e.data.shop
        while(acc[i]){
        var shop =acc[i].image
        var shop2=shop.replace("[","")
        var shop3=shop2.replace("]","")
        var shop4=shop3.replace(/"/g,'')
        var shop5=shop4.split(',')
        acc[i].image=shop5
        acc[i].title=acc[i].content
        i++
        }
        that.setData({
          shop:acc,
        })
        var demo2 = JSON.parse(JSON.stringify(acc))
        that.setData({
          demo2:demo2,
        })
        wx.setStorageSync('shop', acc)
      }
    })
  },

  xzfl(e){
    console.log(e.target.dataset.value)
    var acc=e.target.dataset.value
    var that=this
    var shop2=that.data.demo2
    var shop3=[]
    var i=0
    if(acc=='连衣裙'){
      while(shop2[i]){
        if(shop2[i].fl=='连衣裙'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('连衣裙',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'#ec8ff0',
        bqcolor:'white',
        ddqcolor:'white',
        xzcolor:'white',
        jkcolor:'white',
        cscolor:'white',
        dxqcolor:'white',
        wyqcolor:'white',
        kzqcolor:'white',
        ssqcolor:'white',
        qtcolor:'white',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
    }else if(acc=='吊带'){
      while(shop2[i]){
        if(shop2[i].fl=='吊带'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('吊带',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'white',
        bqcolor:'white',
        ddcolor:'#ec8ff0',
        xzcolor:'white',
        jkcolor:'white',
        cscolor:'white',
        dxcolor:'white',
        wycolor:'white',
        kzcolor:'white',
        sscolor:'white',
        qtcolor:'white',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
      return
    }else if(acc=='半裙'){
      while(shop2[i]){
        if(shop2[i].fl=='半裙'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('半裙',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'white',
        bqcolor:'#ec8ff0',
        ddcolor:'white',
        xzcolor:'white',
        jkcolor:'white',
        cscolor:'white',
        dxcolor:'white',
        wycolor:'white',
        kzcolor:'white',
        sscolor:'white',
        qtcolor:'white',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
      return
    }else if(acc=='西装'){
      while(shop2[i]){
        if(shop2[i].fl=='西装'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('西装',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'white',
        bqcolor:'white',
        ddcolor:'white',
        xzcolor:'#ec8ff0',
        jkcolor:'white',
        cscolor:'white',
        dxcolor:'white',
        wycolor:'white',
        kzcolor:'white',
        sscolor:'white',
        qtcolor:'white',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
      return
    }else if(acc=='夹克'){
      while(shop2[i]){
        if(shop2[i].fl=='夹克'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('夹克',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'white',
        bqcolor:'white',
        ddcolor:'white',
        xzcolor:'white',
        jkcolor:'#ec8ff0',
        cscolor:'white',
        dxcolor:'white',
        wycolor:'white',
        kzcolor:'white',
        sscolor:'white',
        qtcolor:'white',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
      return
    }else if(acc=='衬衫'){
      while(shop2[i]){
        if(shop2[i].fl=='衬衫'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('衬衫',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'white',
        bqcolor:'white',
        ddcolor:'white',
        xzcolor:'white',
        jkcolor:'white',
        cscolor:'#ec8ff0',
        dxcolor:'white',
        wycolor:'white',
        kzcolor:'white',
        sscolor:'white',
        qtcolor:'white',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
    }else if(acc=='短袖'){
      while(shop2[i]){
        if(shop2[i].fl=='短袖'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('短袖',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'white',
        bqcolor:'white',
        ddcolor:'white',
        xzcolor:'white',
        jkcolor:'white',
        cscolor:'white',
        dxcolor:'#ec8ff0',
        wycolor:'white',
        kzcolor:'white',
        sscolor:'white',
        qtcolor:'white',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
    }else if(acc=='卫衣'){
      while(shop2[i]){
        if(shop2[i].fl=='卫衣'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('卫衣',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'white',
        bqcolor:'#white',
        ddcolor:'white',
        xzcolor:'white',
        jkcolor:'white',
        cscolor:'white',
        dxcolor:'white',
        wycolor:'#ec8ff0',
        kzcolor:'white',
        sscolor:'white',
        qtcolor:'white',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
    }else if(acc=='裤子'){
      while(shop2[i]){
        if(shop2[i].fl=='裤子'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('裤子',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'white',
        bqcolor:'white',
        ddcolor:'white',
        xzcolor:'white',
        jkcolor:'white',
        cscolor:'white',
        dxcolor:'white',
        wycolor:'white',
        kzcolor:'#ec8ff0',
        sscolor:'white',
        qtcolor:'white',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
    }else if(acc=='首饰'){
      while(shop2[i]){
        if(shop2[i].fl=='首饰'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('首饰',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'white',
        bqcolor:'white',
        ddcolor:'white',
        xzcolor:'white',
        jkcolor:'white',
        cscolor:'white',
        dxcolor:'white',
        wycolor:'white',
        kzcolor:'white',
        sscolor:'#ec8ff0',
        qtcolor:'white',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
    }else if(acc=='全部'){
      that.setData({
        shop:that.data.demo2,
        qbcolor:'#ec8ff0',
        lyqcolor:'white',
        bqcolor:'white',
        ddcolor:'white',
        xzcolor:'white',
        jkcolor:'white',
        cscolor:'white',
        dxcolor:'white',
        wycolor:'white',
        kzcolor:'white',
        sscolor:'white',
        qtcolor:'white',
        sfyc:'none'
      })
    }else if(acc=='其他'){
      while(shop2[i]){
        if(shop2[i].fl=='其他'){
          shop3.push(shop2[i])
        }
        i++
      }
      console.log('其他',shop3)
      that.setData({
        shop:shop3,
        qbcolor:'white',
        lyqcolor:'white',
        bqcolor:'white',
        ddcolor:'white',
        xzcolor:'white',
        jkcolor:'white',
        cscolor:'white',
        dxcolor:'white',
        wycolor:'white',
        kzcolor:'white',
        sscolor:'white',
        qtcolor:'#ec8ff0',
        sfyc:'none'
      })
      if(shop3==''){
        that.setData({
          sfyc:'block'
        })
      }
    }
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