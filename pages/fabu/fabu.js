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
    sqbaby2:[{tx:'https://s1.52poke.wiki/wiki/thumb/2/21/001Bulbasaur.png/300px-001Bulbasaur.png',name:'妙蛙种子'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/7/73/002Ivysaur.png/300px-002Ivysaur.png',name:'妙蛙草'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/a/ae/003Venusaur.png/300px-003Venusaur.png',name:'妙蛙花'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/7/73/004Charmander.png/300px-004Charmander.png',name:'小火龙'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/4a/005Charmeleon.png/300px-005Charmeleon.png',name:'火恐龙'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/7/7e/006Charizard.png/300px-006Charizard.png',name:'喷火龙'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/3/39/007Squirtle.png/300px-007Squirtle.png',name:'杰尼龟'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/0/0c/008Wartortle.png/300px-008Wartortle.png',name:'卡咪龟'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/0/02/009Blastoise.png/300px-009Blastoise.png',name:'水箭龟'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/5/5d/010Caterpie.png/300px-010Caterpie.png',name:'绿毛虫'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/c/cd/011Metapod.png/300px-011Metapod.png',name:'铁甲蛹'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/d/d1/012Butterfree.png/300px-012Butterfree.png',name:'巴大蝶'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/d/df/013Weedle.png/300px-013Weedle.png',name:'独角虫'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/f/f0/014Kakuna.png/300px-014Kakuna.png',name:'铁壳蛹'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/6/61/015Beedrill.png/300px-015Beedrill.png',name:'大针蜂'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/5/55/016Pidgey.png/300px-016Pidgey.png',name:'波波'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/7/7a/017Pidgeotto.png/300px-017Pidgeotto.png',name:'比比鸟'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/5/57/018Pidgeot.png/300px-018Pidgeot.png',name:'大比鸟'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/46/019Rattata.png/300px-019Rattata.png',name:'小拉达'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/f/f4/020Raticate.png/300px-020Raticate.png',name:'拉达'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/8/8b/021Spearow.png/300px-021Spearow.png',name:'烈雀'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/a/a0/022Fearow.png/300px-022Fearow.png',name:'大嘴雀'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/f/fa/023Ekans.png/300px-023Ekans.png',name:'阿柏蛇'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/c/cd/024Arbok.png/300px-024Arbok.png',name:'阿柏怪'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/0/0d/025Pikachu.png/260px-025Pikachu.png',name:'皮卡丘'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/8/88/026Raichu.png/300px-026Raichu.png',name:'雷丘'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/9e/027Sandshrew.png/300px-027Sandshrew.png',name:'穿山鼠'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/0/0b/028Sandslash.png/300px-028Sandslash.png',name:'穿山王'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/8/80/029Nidoran%E2%99%80.png/300px-029Nidoran%E2%99%80.png',name:'尼多兰'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/c/cd/030Nidorina.png/300px-030Nidorina.png',name:'尼多娜'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/b/bf/031Nidoqueen.png/300px-031Nidoqueen.png',name:'尼多后'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/0/02/032Nidoran%E2%99%82.png/300px-032Nidoran%E2%99%82.png',name:'尼多朗'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/9f/033Nidorino.png/300px-033Nidorino.png',name:'尼多力诺'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/c/c6/034Nidoking.png/300px-034Nidoking.png',name:'尼多王'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/f/f4/035Clefairy.png/300px-035Clefairy.png',name:'皮皮'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/a/a9/036Clefable.png/300px-036Clefable.png',name:'皮可西'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/6/60/037Vulpix.png/300px-037Vulpix.png',name:'六尾'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/0/05/038Ninetales.png/300px-038Ninetales.png',name:'九尾'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/3/3e/039Jigglypuff.png/300px-039Jigglypuff.png',name:'胖丁'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/92/040Wigglytuff.png/300px-040Wigglytuff.png',name:'胖可丁'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/d/da/041Zubat.png/300px-041Zubat.png',name:'超音蝠'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/0/0c/042Golbat.png/300px-042Golbat.png',name:'大嘴蝠'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/43/043Oddish.png/300px-043Oddish.png',name:'走路草'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/2/2a/044Gloom.png/300px-044Gloom.png',name:'臭臭花'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/6/6a/045Vileplume.png/300px-045Vileplume.png',name:'霸王花'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/d/d4/046Paras.png/300px-046Paras.png',name:'派拉斯'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/8/80/047Parasect.png/300px-047Parasect.png',name:'派拉斯特'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/a/ad/048Venonat.png/300px-048Venonat.png',name:'毛球'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/d/d3/049Venomoth.png/300px-049Venomoth.png',name:'摩鲁蛾'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/3/31/050Diglett.png/300px-050Diglett.png',name:'地鼠'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/e/e5/051Dugtrio.png/300px-051Dugtrio.png',name:'三地鼠'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/d/d6/052Meowth.png/300px-052Meowth.png',name:'喵喵'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/1/13/053Persian.png/300px-053Persian.png',name:'猫老大'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/5/53/054Psyduck.png/300px-054Psyduck.png',name:'可达鸭'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/f/fe/055Golduck.png/300px-055Golduck.png',name:'哥达鸭'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/41/056Mankey.png/300px-056Mankey.png',name:'猴怪'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/9a/057Primeape.png/300px-057Primeape.png',name:'火暴猴'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/3/3d/058Growlithe.png/300px-058Growlithe.png',name:'卡蒂狗'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/b/b8/059Arcanine.png/300px-059Arcanine.png',name:'风速狗'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/49/060Poliwag.png/300px-060Poliwag.png',name:'蚊香蝌蚪'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/a/a9/061Poliwhirl.png/300px-061Poliwhirl.png',name:'蚊香君'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/2/2d/062Poliwrath.png/300px-062Poliwrath.png',name:'蚊香泳士'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/6/62/063Abra.png/300px-063Abra.png',name:'凯西'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/97/064Kadabra.png/300px-064Kadabra.png',name:'勇基拉'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/c/cc/065Alakazam.png/300px-065Alakazam.png',name:'胡地'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/8/85/066Machop.png/300px-066Machop.png',name:'腕力'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/8/8e/067Machoke.png/300px-067Machoke.png',name:'豪力'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/8/8f/068Machamp.png/300px-068Machamp.png',name:'怪力'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/a/a2/069Bellsprout.png/300px-069Bellsprout.png',name:'喇叭芽'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/9f/070Weepinbell.png/300px-070Weepinbell.png',name:'口呆花'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/b/be/071Victreebel.png/300px-071Victreebel.png',name:'大食花'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/4e/072Tentacool.png/300px-072Tentacool.png',name:'玛瑙水母'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/f/f6/073Tentacruel.png/300px-073Tentacruel.png',name:'毒刺水母'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/98/074Geodude.png/300px-074Geodude.png',name:'小拳石'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/7/75/075Graveler.png/300px-075Graveler.png',name:'隆隆石'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/f/f2/076Golem.png/300px-076Golem.png',name:'隆隆岩'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/3/3b/077Ponyta.png/300px-077Ponyta.png',name:'小火马'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/3/3f/078Rapidash.png/300px-078Rapidash.png',name:'烈焰马'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/7/70/079Slowpoke.png/300px-079Slowpoke.png',name:'呆呆兽'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/8/80/080Slowbro.png/300px-080Slowbro.png',name:'呆壳兽'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/6/6c/081Magnemite.png/300px-081Magnemite.png',name:'小磁怪'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/7/72/082Magneton.png/300px-082Magneton.png',name:'三合一磁怪'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/f/f8/083Farfetch%27d.png/300px-083Farfetch%27d.png',name:'大葱鸭'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/5/54/084Doduo.png/300px-084Doduo.png',name:'嘟嘟'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/93/085Dodrio.png/300px-085Dodrio.png',name:'嘟嘟利'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/1/1f/086Seel.png/300px-086Seel.png',name:'小海狮'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/c/c7/087Dewgong.png/300px-087Dewgong.png',name:'白海狮'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/a/a0/088Grimer.png/300px-088Grimer.png',name:'臭泥'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/7/7c/089Muk.png/300px-089Muk.png',name:'臭臭泥'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/40/090Shellder.png/300px-090Shellder.png',name:'大舌贝'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/1/1d/091Cloyster.png/300px-091Cloyster.png',name:'刺甲贝'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/c/ca/092Gastly.png/300px-092Gastly.png',name:'鬼斯'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/6/62/093Haunter.png/300px-093Haunter.png',name:'鬼斯通'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/c/c6/094Gengar.png/300px-094Gengar.png',name:'耿鬼'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/9a/095Onix.png/300px-095Onix.png',name:'大岩蛇'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/3/3e/096Drowzee.png/300px-096Drowzee.png',name:'催眠貘'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/0/0a/097Hypno.png/300px-097Hypno.png',name:'引梦貘人'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/a/a7/098Krabby.png/300px-098Krabby.png',name:'大钳蟹'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/7/71/099Kingler.png/300px-099Kingler.png',name:'巨钳蟹'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/d/da/100Voltorb.png/300px-100Voltorb.png',name:'霹雳电球'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/8/84/101Electrode.png/300px-101Electrode.png',name:'顽皮雷弹'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/a/af/102Exeggcute.png/300px-102Exeggcute.png',name:'蛋蛋'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/2/24/103Exeggutor.png/300px-103Exeggutor.png',name:'椰蛋树'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/2/2a/104Cubone.png/300px-104Cubone.png',name:'卡拉卡拉'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/98/105Marowak.png/300px-105Marowak.png',name:'嘎啦嘎啦'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/3/32/106Hitmonlee.png/300px-106Hitmonlee.png',name:'飞腿郎'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/a/a3/107Hitmonchan.png/300px-107Hitmonchan.png',name:'快拳郎'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/0/00/108Lickitung.png/300px-108Lickitung.png',name:'大舌头'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/1/17/109Koffing.png/300px-109Koffing.png',name:'瓦斯弹'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/42/110Weezing.png/300px-110Weezing.png',name:'双弹瓦斯'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/9/9b/111Rhyhorn.png/300px-111Rhyhorn.png',name:'独角犀牛'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/47/112Rhydon.png/300px-112Rhydon.png',name:'钻角犀兽'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/c/cd/113Chansey.png/300px-113Chansey.png',name:'吉利蛋'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/3/3e/114Tangela.png/300px-114Tangela.png',name:'蔓藤怪'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/4e/115Kangaskhan.png/300px-115Kangaskhan.png',name:'袋兽'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/5/5a/116Horsea.png/300px-116Horsea.png',name:'墨海马'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/2/26/117Seadra.png/300px-117Seadra.png',name:'海刺龙'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/7/7b/118Goldeen.png/300px-118Goldeen.png',name:'角金鱼'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/6/6a/119Seaking.png/300px-119Seaking.png',name:'金鱼王'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/4/4f/120Staryu.png/300px-120Staryu.png',name:'海星星'},
    {tx:'https://s1.52poke.wiki/wiki/thumb/c/cd/121Starmie.png/300px-121Starmie.png',name:'宝石海星'},
    ],
    sqbaby:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that=this
    wx.request({
      url: 'https://whfisher.xyz/vintage/sqbb.php',
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
        url: 'https://whfisher.xyz/vintage/shophq.php',
        success(e){
          console.log('成功',e)
          var acc=e.data.shop.length+1
          while(imagezh[j]){
            wx.uploadFile({
              filePath: imagezh[j],
              name: 'file',
              url: 'https://whfisher.xyz/vintage/upshopimg.php',
              formData:{
                xh:acc+'.'+j,
                id:acc
              },
            })
            image[j]='https://whfisher.xyz/shop/'+acc+'.'+j+'.jpg?'+Math.random()/9999
            j++
          }
          wx.request({
            url: 'https://whfisher.xyz/vintage/shopsc.php',
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