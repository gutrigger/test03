// pages/good-details/good-detail.js

var WxParse = require('../../wxParse/wxParse.js');
Page({

        data: {
           autoplay: true,
           interval: 3000,
           duration: 1000,
           goodsDetail: {
                   id:"fdkslf",
                   name:"如东狼山鸡肉质鲜嫩可口如东狼山鸡肉质鲜嫩可口 如东狼山鸡肉质鲜嫩可口",
                   pics:[{
                           pic:"http://hnf.uutele.com:28112/file/downLoad?ft=8&u=2&fid=J0000C350304C78F1F7"   
                        },
                        {
                                pic: "http://hnf.uutele.com:28112/file/downLoad?ft=8&u=2&fid=J0000C350204C78F1C6"
                        }, 
                        {
                                pic: "http://hnf.uutele.com:28112/file/downLoad?ft=8&u=2&fid=J0000C350204C78F1C6"
                        }],
                   price: 100,
                   originalPrice:2000,
                   pic: "http://hnf.uutele.com:28112/file/downLoad?ft=8&u=2&fid=J0000C350304C78F1F7"
                    },
                   swiperCurrent: 0,
                   shopNum:9,
                   hideShopPopup:true,
                   shopType:"addShopCar",
                buyNumber: 1,
                buyNumMin: 1,
                buyNumMax: 1000,
        },
        swiperchange: function (e) {
                //console.log(e.detail.current)
                this.setData({
                        swiperCurrent: e.detail.current
                })
        },
        /**
         * 商品参数详情
         */
        toMoreProductPram(e){
                wx.navigateTo({
                        url: "/pages/good-pram/good-pram?id=" + this.data.goodsDetail.id
                })

        },
        onLoad: function (e) {
                var that = this;
                var content = '<p>要过春节的时候，几年前去深圳打工的李老二回来了。以前在家里好吃懒做，混到四十多岁都没娶上老婆的李老二士别三日，当刮目相看。浑身西装革履不说，光那头发就梳得溜光水滑，苍蝇在上面都得翻上两个跟斗。↵　　↵　　听说李老二发了财，村长等一班人一窝蜂地涌到李老二家里看稀奇。李老二果然是发了，连说话都像有钱人一样拿腔作调地端着架子。↵　　↵　　村长看着李老二的派头，试探地问：“二兄弟，在外面混得不错，是坐飞机回来的吧？”李老二从口袋里摸出一盒写着英文的香烟，散了一圈后，很不屑地说：“村长不知道吗？911事件以后，大家都不愿意坐飞机了。我是坐火车卧铺回来的。春运嘛，安全第一，还是小心点好！”众人都伸了伸舌头，瞧人家，有钱得连飞机都不敢坐了。↵　　↵　　村西的石贵一向是个愣头青，他快人快语地说：“二叔，您出去才几年，就混成这样，看来，外面的机会很多啊！”李老二嘴一撇：“机会是多，但也不是人人都能把握的。”村长连声附合：“是啊，咱村里出去那么多人，还不是蛇皮袋拎出去，蛇皮袋又拎回来，连双新鞋都买不起。”↵　　↵　　村东的山海挠着头，憋了半天，终于谄媚地问：“二叔，告诉我们，你在外面做什么？过完年，咱们跟你走得了。”↵　　↵　　李老二似笑非笑：“我做的事，你们这班人一个都做不下来，吃得苦中苦，方为人上人。”见李老二卖关子，大家也不好再问，便东拉西扯起来。村长说：“二兄弟，听说南方那边人都讲究吃海里的东西，你习惯吗？”李老二打开床边的一个手提箱，取出几包黑不溜秋的干货来：“这是几包海鲜，大家都来尝一尝。”大家都上前扯一小条放在嘴里，石贵说：“怎么味道这么难闻，和我臭脚丫一个味。”村长将他一推，对李老二谄媚地一笑：“一边去，说你土吧，这味道一闻，就知道是正宗的海鲜。”李老二点点头，又说：“深圳是个移民城市，酒店多的是，不光是海鲜，什么东北菜，湘菜、川菜、广东菜，哪样我没吃过！”↵　　↵　　山海说：“二叔，你见过外国人吗？”李老二嘴又是一撇，从皮包里掏出一叠花花绿绿的纸片，说：“这些都是外币，你说我有没有见过外国人？”大家一片惊叹声，纷纷凑上前去看稀奇。↵　　↵　　村长心里犯嘀咕，李老二这家伙，准是发了，不然怎会连外币都有了。他既然喜欢显摆，这回怎么着也得拔他几根毛下来。想了想，他说：“二兄弟，你真是见过大世面了。这样吧，改天大家聚一聚，你给我们讲讲外面的世界，咱们也跟着见识一下，好不好？”村长一使眼色，大家都起哄起来。李老二明白村长的意思，很干脆地说：“可以，乡里乡亲的，吃餐饭没问题。这样吧，春节前三天，大家都有事，咱们就订在初四在县里的大富豪酒楼如何？”大家高兴地点头答应。↵　　↵↵↵　　转眼到了初四那天，李老二包了村里一辆车，带着村长等一行人来到大富豪酒楼。李老二出手豪爽，点了满满一大桌子菜。席间，大家纷纷上前敬酒恭维。李老二刚开始还有所顾忌，但后来禁不住众人的劝哄，连着几圈下来，脸先是通红，接着又是灰白，等出了酒楼，脸都有些发绿了。↵　　↵　　村长见李老二喝多了，便扶着他出来。一行人刚下酒楼的台阶，这时，迎面开过来一辆小轿车，车门一开，下来三个人，其中有两个居然是金发碧眼的外国人。大家正望着老外发呆，一直晕晕乎乎的李老二突然来了精神，他一把推开村长，挤眉弄眼地说：“哈哈，没想到这里也能遇到鬼佬，生意来了。”村长正迷惑不解的时候，李老二已经晃晃悠悠地迎上前去。只见他径自走到老外旁边，身子突然往下一躬，现出一付可怜相，双手作揖道：“行行好吧，给一点吧，给一点吧……”那神态，那动作，一看就是个专业的乞丐！</p><p><img src="http://hnf.uutele.com:28112/file/downLoad?u=2&fid=J809BCFB3d35C73B9CE&ft=1"/></p>';
                WxParse.wxParse('article', 'html', content, that, 5);
        }, 
        /**
         * 关闭规格选择弹出框
         */
        closePopupTap: function () {
                this.setData({
                        hideShopPopup: true
                })
        },
        /**
         * 打开加入购物车
         */
        toAddShopCar: function () {
                this.setData({
                        shopType: "addShopCar"
                })
                this.bindGuiGeTap();
        },
        /**
        * 规格选择弹出框
        */
        bindGuiGeTap: function () {
                this.setData({
                        hideShopPopup: false
                })
        },
        /**
         * 立即购买 规格选择弹出框
         */
        tobuy: function () {
                this.setData({
                        shopType: "tobuy"
                });
                this.bindGuiGeTap();
        },
        numJianTap: function () {
                if (this.data.buyNumber > this.data.buyNumMin) {
                        var currentNum = this.data.buyNumber;
                        currentNum--;
                        this.setData({
                                buyNumber: currentNum
                        })
                }
        },
        numJiaTap: function () {
                if (this.data.buyNumber < this.data.buyNumMax) {
                        var currentNum = this.data.buyNumber;
                        currentNum++;
                        this.setData({
                                buyNumber: currentNum
                        })
                }
        },
        buyNow(e){
                let that = this
                let shoptype = e.currentTarget.dataset.shoptype
                wx.navigateTo({
                        url: "/pages/order-topay/order-topay?orderType=" + shoptype
                })
        },
        addShopCar(e){

        },
        goShopCar(){

                wx.reLaunch({
                        url: "/pages/shop-cart/index"
                });
        }

       
})