// pages/address/address.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                addressList: [
                        {
                                linkMan:"李四",
                                mobile:15689574589,
                                address:"江苏省南京市雨花台区铁心桥初二返回键地方返回的说法斯蒂芬古典风格频道覅建国后方大化工",
                                // isDefault:true
                        },
                        {
                                linkMan: "张三",
                                mobile: 15689574589,
                                address: "江苏省南京市雨花台区铁心桥初二返回键地方返回的说法斯蒂芬",
                                // isDefault: false
                        }

                ]
        },
        /**
         * 进入添加地址页面
         */
        addAddess: function () {
                wx.navigateTo({
                        url: "/pages/address-add/address-add"
                })
        },
        //进入编辑地址页面
        editAddess: function (e) {
                wx.navigateTo({
                        url: "/pages/address-add/address-add?id=" + e.currentTarget.dataset.id
                })
        },
        onShow: function () {
                // this.initShippingAddress();
        },
        // initShippingAddress: function () {
        //         var that = this;
        //         WXAPI.queryAddress(wx.getStorageSync('token')).then(function (res) {
        //                 if (res.code == 0) {
        //                         that.setData({
        //                                 addressList: res.data
        //                         });
        //                 } else if (res.code == 700) {
        //                         that.setData({
        //                                 addressList: null
        //                         });
        //                 }
        //         })
        // }

})