/**
 * @description: 视频主页
 * @author: black
 * @update:
 */
var app = new Vue({
    el: '#app',
    data: {
        coursesList: [{
                name: '全部',
                isSelect: true,
                type: 'all'
            },
            {
                name: '前端',
                isSelect: false,
                type: 'web'
            },
            {
                name: '运维',
                isSelect: false,
                type: 'oam'
            },
            {
                name: '网络运营',
                isSelect: false,
                type: 'op'
            },
            {
                name: '产品经理',
                isSelect: false,
                type: 'pm'
            },
            {
                name: 'IOS',
                isSelect: false,
                type: 'ios'
            },
            {
                name: 'Android',
                isSelect: false,
                type: 'android'
            },
            {
                name: 'python',
                isSelect: false,
                type: 'python'
            },
            {
                name: 'PHP',
                isSelect: false,
                type: 'php'
            },
            {
                name: '嵌入式',
                isSelect: false,
                type: 'qrsqd'
            },
            {
                name: '物联网',
                isSelect: false,
                type: 'iot'
            },
            {
                name: '平面设计',
                isSelect: false,
                type: 'gd'
            },
            {
                name: 'UI设计',
                isSelect: false,
                type: 'ui'
            },
            {
                name: '软件测试',
                isSelect: false,
                type: 'te'
            }
        ],
        courseType: 'all',
        listData: [],
        noData: false,
        showGoTop: false,
        pagination: {
            total: 0,
            limit: 10,
            current: 1
        }
    },
    created: function() {
        this.getCoursesList('1', this.pagination.limit, this.pagination.current)
    },
    mounted: function() {
        var self = this
        var scrollAction = { x: undefined, y: undefined }
        const scrollDom = document.querySelector("HTML")
        console.log(scrollDom.scrollTop)
        $(window).scroll(function() {
            if (typeof scrollAction.y === 'undefined') {
                scrollAction.y = scrollDom.scrollTop
            }
            var diffY = scrollAction.y - scrollDom.scrollTop
            scrollAction.y = scrollDom.scrollTop
            scrollDom.scrollTop > scrollDom.clientHeight / 3 ? self.showGoTop = true : self.showGoTop = false
            if ((scrollDom.scrollTop + 5 >= scrollDom.scrollHeight - scrollDom.clientHeight) && diffY < 0) {
                self.pagination.current++
                    self.getCoursesList('2', self.pagination.limit, self.pagination.current)
                document.body.style.height = scrollDom.scrollHeight + 20 + 'px';
            }
        })
    },
    methods: {
        // type = 1 赋值   type = 2  push
        getCoursesList: function(type, limit, current) {
            var self = this
            if (self.noData) {
                console.log('沒有更多数据了');
            } else {
                self.$http.get('http://140.143.163.52:8888/course/getList/'+current + '/' + limit+'?type='+self.courseType).then( function(res) {
                    var json = res.body
                    console.log(json);
                    if (json.length === 0) {
                        self.noData = true
                    }
                    if (type === '1') {
                        self.listData = json
                    } else {
                        for (var i = 0; i < json.length; i++) {
                            self.listData.push(json[i])
                        }
                    }
                }, function() {
                    alert('服务器繁忙，请稍后再试。');
                }, "GET");
            }
        },
        selectCourse: function(type) {
            this.courseType = type
            this.noData = false
            this.pagination.limit = 10
            this.pagination.current = 1
            this.coursesList.forEach(function(item, index, array) {
                if (type == item.type) {
                    item.isSelect = true
                } else {
                    item.isSelect = false
                }
            })
            this.getCoursesList('1', this.pagination.limit, this.pagination.current)
        },
        goTop: function() {
            scrollTo(0, 0)
        }
    }
})
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
})