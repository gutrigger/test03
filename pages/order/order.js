// pages/order/order.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                statusType: [ "全部","待发货", "待收货", "已完成"],
                currentType: 0,
                tabClass: ["", "", "", ""]
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