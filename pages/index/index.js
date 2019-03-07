//index.js
//获取应用实例

const API = require('../../api/api')
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false, // loading
    userInfo: {},
    swiperCurrent: 0,
    selectCurrent: 0,
    activeCategoryId: 0,
    goods: [
            {
               "id":1,
               "pic": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C35060788FED27',
               "name":"测试1",
               "minPrice":90,
               "originalPrice":20    
            },
             {
                "id": 2,
                "pic": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C35060788FED27',
                "name": "测试1fsdtgrtyreytertertyfedfewf",
                "minPrice": 9000,
                "originalPrice": 20
            },
            {
                    "id": 3,
                    "pic": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C35060788FED27',
                    "name": "测试1",
                    "minPrice": 90,
                    "originalPrice": 20
            },
            {
                    "id": 4,
                    "pic": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C35060788FED27',
                    "name": "测试1fsdtgrtyreytertertyfedfewf",
                    "minPrice": 90,
                    "originalPrice": 20
            }

    ],
    hasNoCoupons: true,
    banners:[
            {
            "businessId":1,
             "picUrl":'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C35060788FED27'
            },
            {
               "businessId": 2,
                "picUrl": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C3500078E4EF80'      
            },
            {
                "businessId":3,
                "picUrl": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C3502079098AB5'
            }
            ]
  },
   swiperchange: function (e) {
        this.setData({
            swiperCurrent: e.detail.current
        })
  },
  onLoad: function () {
    var that = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    //获取banner
//     API.banners({
//       type: '1'
//     }).then(function(res) {
//       if (res.ret == 1) {
//         wx.showModal({
//           title: '提示',
//           content: 'banner获取错误',
//           showCancel: false
//         })
//       } else {
//         that.setData({
//           banners: res.data
//         });
//       }
//     }).catch(function(e) {
//       wx.showToast({
//         title: res.msg,
//         icon: 'none'
//       })
//     })


  },
  toDetailsTap(e){
        wx.navigateTo({
                url: "/pages/good-detail/good-detail?id=" + e.currentTarget.dataset.id
        })
   },
   toGoodList(e){
           wx.navigateTo({
                   url: "/pages/good-list/good-list" 
           })   
   }

})
