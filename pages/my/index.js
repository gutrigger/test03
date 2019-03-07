
const app = getApp()

Page({

        data: {
                userInfo: {},
                hasUserInfo: false,
                canIUse: wx.canIUse('button.open-type.getUserInfo')    
        },
        onLoad() {
                // 获取用户信息
                wx.getSetting({
                        success: res => {
                           console.log("2", res.authSetting['scope.userInfo'])
                                if (res.authSetting['scope.userInfo']) {
                                        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                                        wx.getUserInfo({
                                                success: res => {
                                                        // 可以将 res 发送给后台解码出 unionId
                                                      console.log("res",res)

                                                        app.globalData.userInfo = res.userInfo
                                                        this.setData({
                                                                userInfo: res.userInfo,
                                                                hasUserInfo: true
                                                        }) 

                                                        this.login()
                                                }
                                        })
                                }else{
                                
                                        this.showDialog()

                                }
                        }
                })
        
        },
        onShow() {
                
                
        },
        getUserInfo: function (e) {//button获取用户信息方法
                console.log("按钮1：", e)
                app.globalData.userInfo = e.detail.userInfo
                this.setData({
                        userInfo: e.detail.userInfo,
                        hasUserInfo: true
                })

                this.login()
               
        },
        onReady: function () {
                //获得dialog组件
                this.dialog = this.selectComponent("#dialog");
        },
        showDialog: function () {
                this.dialog.showDialog();
        },

        confirmEvent: function () {
                this.dialog.hideDialog();
        },

        bindGetUserInfo: function () {
                console.log("按钮2：")
                // 用户点击授权后，这里可以做一些登陆操作
                // this.login();
                wx.getUserInfo({
                        success: res => {
                                // 可以将 res 发送给后台解码出 unionId
                                console.log("按钮2：",res)
                                app.globalData.userInfo = res.userInfo
                                this.setData({
                                        userInfo: res.userInfo,
                                        hasUserInfo: true
                                }) 

                                this.login()
                        }
                })
        },
        login(){



        }


})