
const app = getApp()
const WXAPI = require('../../api/api')
Page({
        data: {
                statusType: ["价格", "销量", "上架时间"],
                currentType: 0,
                tabClass: ["arrow-up", "arrow-up", ""],
                goods: [
                        {
                                "id": 1,
                                "pic": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C35060788FED27',
                                "name": "测试1",
                                "minPrice": 90,
                                "originalPrice": 20
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
                        },
                        {
                                "id": 5,
                                "pic": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C35060788FED27',
                                "name": "测试1",
                                "minPrice": 90,
                                "originalPrice": 20
                        },
                        {
                                "id": 6,
                                "pic": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C35060788FED27',
                                "name": "测试1fsdtgrtyreytertertyfedfewf",
                                "minPrice": 9000,
                                "originalPrice": 20
                        },
                        {
                                "id": 7,
                                "pic": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C35060788FED27',
                                "name": "测试1",
                                "minPrice": 90,
                                "originalPrice": 20
                        },
                        {
                                "id": 8,
                                "pic": 'http://hnf.uutele.com:28112/file/downLoad?ft=1&u=2&fid=J0000C35060788FED27',
                                "name": "测试1fsdtgrtyreytertertyfedfewf",
                                "minPrice": 90,
                                "originalPrice": 20
                        }

                ],
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