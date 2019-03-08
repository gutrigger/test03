// pages/order/order.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                statusType: [ "全部","待发货", "待收货", "已完成"],
                currentType: 0,
                tabClass: ["", "", "", ""],
                orderList:[
                        {
                               
                                remark:"fdsfigjdsogihsdofgh",
                                totalNum:1,
                                amountReal:100,
                                goodList:[
                                        {
                                                name: "测试单工服粉红色的佛大富豪搜gfghowisjhfpejtfwer和佛山接佛挡杀佛",
                                                pic: "http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C3500078E4EF80",
                                                onePrice:180,
                                                num:3
                                        },
                                        {
                                                name: "测试单工服粉红",
                                                pic: "http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C3500078E4EF80",
                                                onePrice: 180,
                                                num: 3
                                        }
                                ]
                                
                                
                        }

                ],
              
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                if (options && options.type) {
                        this.setData({
                                currentType: options.type
                        });
                }
        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {
                
        },
        statusTap: function (e) {
                const curType = e.currentTarget.dataset.index;
                
                this.data.currentType = curType
                this.setData({
                        currentType: curType
                });
                this.onShow();
        },
      
})