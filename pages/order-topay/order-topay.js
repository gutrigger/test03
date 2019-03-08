const app = getApp()
const WXAPI = require('../../api/api')

Page({
        data: {
                
                goodsList: [
                        {
                                pic:"http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C3500078E4EF80",
                                name:"测试商品1测试商品1测试商品1测试商品1测试商品1",
                                price: 30.01,
                                number:1 
                        },
                        {
                                pic: "http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C3500078E4EF80",
                                name: "测试商品1测试商品1测试商品1",
                                price: 30.00,
                                number: 2
                        },
                        {
                                pic: "http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C3500078E4EF80",
                                name: "测试商品1",
                                price: 30.00,
                                number: 3
                        }
                ],
                isNeedLogistics: 1, // 是否需要物流信息
                allGoodsPrice: 1000,
                yunPrice: 10,
                allGoodsAndYunPrice: 1000,
                orderType: "buyNowInfo", //订单类型，购物车下单或立即支付下单，默认是购物车，
                hasNoCoupons: false,
                coupons: [],
                curAddressData:{
                        linkMan:"李四",
                        mobile:1234165787,
                        address:"发动开发和山东我哈佛熟地黄防勾丝东方国际噢ID撒s 黄防勾丝东方国际"
                },
                youhuijine: 100, //优惠券金额
                curCoupon: true // 当前选择使用的优惠券
        },
        addAddress: function () {
                wx.navigateTo({
                        url: "/pages/address-add/address-add"
                })
        },
        selectAddress: function () {
                wx.navigateTo({
                        url: "/pages/address/address"
                })
        },
        
})