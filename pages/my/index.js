
const app = getApp()

Page({

        data: {
                userInfo: {},
                hasUserInfo: false,
                canIUse: wx.canIUse('button.open-type.getUserInfo')    
        },
        onLoad() {

        
        },
        onShow() {
                
                
        },
        getUserInfo: function (e) {//button获取用户信息方法
                console.log("按钮：", e)
                app.globalData.userInfo = e.detail.userInfo
                this.setData({
                        userInfo: e.detail.userInfo,
                        hasUserInfo: true
                })
        }

})