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
    categories: [],
    activeCategoryId: 0,
    goods: [],
    hasNoCoupons: true,
  },
  
  onLoad: function () {
    var that = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    //获取banner
    API.banners({
      type: '1'
    }).then(function(res) {
      if (res.ret == 1) {
        wx.showModal({
          title: '提示',
          content: 'banner获取错误',
          showCancel: false
        })
      } else {
        that.setData({
          banners: res.data
        });
      }
    }).catch(function(e) {
      wx.showToast({
        title: res.msg,
        icon: 'none'
      })
    })


  }

})
