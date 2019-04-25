let vm = new Vue({
    el: '#app',
    data: {
        bannerPath: '',  //banner 圖的 Path
        types: '',  //商品類型
        list: '',  //商品資料
        choose: '全部' //選擇的類型
    },
    methods: {
        //取得 json 檔資料
        getJson() {
            fetch('DB.json')
            .then(res => res.json())
            .then(data => {
                this.bannerPath = data.bannerPath;
                this.types = data.types;
                this.list = data.list;
            });
        }
    },
    computed: {
        //篩選商品類型
        chooselist() {  
            if(this.choose !== '全部') {
                return this.list.filter(item => {
                    return item.type === this.choose;
                });
            } else {
                return this.list;
            }
        }
    },
    mounted() {
        this.getJson();  //vue的頁面元素都就續後就去向 json 檔拿資料
    }
});