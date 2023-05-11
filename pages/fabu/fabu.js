// pages/fabu/fabu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    math:'',
    content:'',
    mathcolor:'rgb(156, 156, 156)',
    sfyc:'block',
    sfyc2:'none',
    imagezh:'',
    height:'200',
    clothes:['连衣裙','半裙','吊带','西装','夹克','衬衫','短袖','卫衣','裤子','首饰','其他'],
    xzfl:'选择分类',
    jg:'',
    lxfs:'',
    mrtx:'https://tse1-mm.cn.bing.net/th/id/OIP-C.CJ3bq9fXwhgPUrZJ55RbpwAAAA?w=168&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    sqbaby:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that=this
    wx.request({
      url: 'url',
      success(e){
        console.log(e.data.uesrs)
        that.setData({
          sqbaby:e.data.uesrs
        })
      }
    })
  },

  quxiao(e){
    console.log('点击了取消')
    wx.navigateBack()
  },
  shuru(e){
    var that=this
    var acc=e.detail.value
    console.log(e.detail.value)
      that.setData({
        math:acc.length,
        content:acc
      })
  },
  tjtp(e){
    var that=this
    var imagezh=[]
    var i=0
    wx.chooseMedia({
      count:'3',
      mediaType:['image'],
      sourceType:['album', 'camera'],
      camera:'back',
      success(e){
        console.log('选择成功',e)
        while(e.tempFiles[i]){
          imagezh[i]=e.tempFiles[i].tempFilePath
          that.setData({
            sfyc:'none',
            sfyc2:'block',
            imagezh:imagezh,
            height:'185'
          })
          i++
        }
        console.log(that.data.imagezh)
      }
    })
  },
  fdtp(e){
    var that=this
    console.log('点击了图片',e.currentTarget.dataset.value)
    var image=e.currentTarget.dataset.value
    wx.previewImage({
      urls: that.data.imagezh,
      current:image
    })
  },
  srjg(e){
    var that=this
    console.log(e.detail.value)
    that.setData({
      jg:e.detail.value
    })
  },
  xzfl(e){
    var that=this
    var clothes=that.data.clothes 
    var i=e.detail.value
    console.log(e)
    that.setData({
      xzfl:clothes[i]
    })
  },
  lxfsinput(e){
    var that=this
    console.log(e.detail.value)
    that.setData({
      lxfs:e.detail.value
    })
  },
  fabu(e){
    var that=this
    var i=''
    var j=0
    var imagezh=that.data.imagezh
    var image=[]
    var arr=that.data.sqbaby.length-1
    if(that.data.imagezh==''){
      wx.showToast({
        title: '请先选择图片',
        icon:'error'
      })
    }else if(that.data.jg==''){
      wx.showToast({
        title: '请先输入价格',
        icon:'error'
      })
    }else if(that.data.xzfl=='选择分类'){
      wx.showToast({
        title: '请先选择分类',
        icon:'error'
      })
    }else if(that.data.lxfs==''){
      wx.showToast({
        title: '请输入联系方式',
        icon:'error'
      })
    }else{
      console.log('发布成功')
      // i=Math.random()*121
      i=Math.floor(Math.random()*(arr-0) + 0)
      console.log('随机数是',that.data.sqbaby[i].tx,that.data.sqbaby[i].name)
      wx.request({
        url: 'url',
        success(e){
          console.log('成功',e)
          var acc=e.data.shop.length+1
          while(imagezh[j]){
            wx.uploadFile({
              filePath: imagezh[j],
              name: 'file',
              url: 'url',
              formData:{
                xh:acc+'.'+j,
                id:acc
              },
            })
            image[j]='url'+acc+'.'+j+'.jpg?'+Math.random()/9999
            j++
          }
          wx.request({
            url: 'url',
            data:{
              id:acc,
              tx:that.data.sqbaby[i].tx,
              name:that.data.sqbaby[i].name,
              content:that.data.content,
              fl:that.data.xzfl,
              image:image,
              jg:that.data.jg,
              lxfs:that.data.lxfs
            },
            success(e){
              console.log('上传完成')
              console.log('上传文字为',that.data.content)
              wx.showToast({
                title: '发布成功',
                icon:'success',
              })
              wx.navigateBack({
                delta:1
              })
            }
          })
        }
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
