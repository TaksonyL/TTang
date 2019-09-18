<template>
    <div class="homeGoods">
        <div class="homeGoodsTitle">
            <h3>小编精选</h3>
            <span>每日更新</span>
        </div>
        <ul class="homeGoodsItem">
            <li v-if="goodsList.list[index].type==1" v-for="(item, index) in goodsList.list" :key="index">
                <router-link tag="a" :to="{name:'good',query:{id:item.id}}"  target="_blank" style="text-decoration:none">
                    <img :src="goodsList.list[index].image" alt="">
                    <div class="GoodsIntro">
                        <p class="GoodsIntroTitle">{{goodsList.list[index].title}}</p>
                        <div class="GoodsIntroTag">
                            <span>淘宝</span>
                            <span v-if='goodsList.list[index].isFreePostage'>包邮</span>
                        </div>
                        <div class="GoodsIntroMsg">
                            <span>￥</span>
                            <span>{{ parseInt(goodsList.list[index].price) }}</span>
                            <span>{{ goodsList.list[index].price ? goodsList.list[index].price.toString().slice(-2) : '' }}</span>
                            <span>{{ goodsList.list[index].saleNum > 10000? (goodsList.list[index].saleNum/10000).toFixed(1)+'万' : goodsList.list[index].saleNum}}人已买</span>
                            <span>{{goodsList.list[index].couponValue}}</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <button class="homeGoodsLoad" @click='btnLoad()' v-if="goodsLoadBtn">查看更多</button>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name:'homeGoods',
    data(){
        return{
            goodsLoadBtn:true,
            goodsListPage:40,
            scrollLoadOk:true
        }
    },
    methods:{
        loadmore(value){
            this.scrollLoadOk = false
            this.$axios.get('http://www.xmyxapp.com/api/tab/1/feeds',{params:{start:value,sort:0}})
            .then((data)=>{
                var arr = data.data.list;
                for(var i in arr){
                    this.goodsList.list.push(arr[i])
                }
                this.scrollLoadOk = true
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        //按钮更新-------------------------------------------------
        btnLoad(){
            this.goodsLoadBtn = false;
            this.loadmore(20);
        },
        //下拉更新-------------------------------------------------
        scrollLoad(){
            var scrollTop = document.documentElement.scrollTop;
            var windowHeight = document.documentElement.offsetHeight;
            var scrollHeight = document.documentElement.clientHeight;
            if( scrollTop+scrollHeight+250>=windowHeight && !this.goodsLoadBtn ){
                if(this.scrollLoadOk){
                    Vue.nextTick(this.loadmore(this.goodsListPage))
                    this.goodsListPage = this.goodsListPage+20;
                }       
            }
            //回到顶部----------------------------------------------

        }
        
    },
    mounted(){
        window.addEventListener('scroll',this.scrollLoad)
    },
    props:['goodsList']
}
</script>

<style lang="less" scoped>
    *{margin: 0;padding: 0}
    .homeGoods{
        // background-color: red;
        .homeGoodsTitle{
            height: 57px;
            width: 1200px;
            margin: 10px auto 20px;
            background-color: white;
            line-height: 57px;
            h3{
                display: inline-block;
                margin: 0;
                font-size: 18px;
                color: #43240c;
                margin: 0 30px 0 50px;
            }
            span{
                font-size: 14px;
                color: #877a73;
            }
        }
        .homeGoodsItem{
            width: 1170px;
            list-style: none;
            margin: 0 auto;
            overflow: hidden;
            padding: 0 15px;
            justify-content: space-between;
            display: flex;
            flex-wrap: wrap;
            li{
                margin-bottom: 20px;
                cursor: pointer;
                border: none;
                &:hover{
                    box-shadow: 1px 1px 2px -1px rgba(0, 0, 0, .5);
                }
                img{
                    height: 276px;
                    width: 276px;
                }
                .GoodsIntro{
                    height: 123px;
                    width: 276px;
                    background-color: white;
                    margin-top: -5px;
                    box-sizing: border-box;
                    color: #877a73;
                    padding: 8px 18px;
                    p{
                        overflow: hidden;
                        text-overflow: ellipsis; 
                        white-space: nowrap;
                        font-size: 14px;
                    }
                    .GoodsIntroTag{
                        font-size: 14px;
                        margin: 17px 0 10px;
                        line-height: 20px;
                        span:first-child{
                            color: white;
                            background-color: #FF4400;
                            width: 40px;
                            height: 20px;
                            display: inline-block;
                            text-align: center;
                        }
                        span:nth-child(2){
                            float: right;
                            margin-right: 8px;
                        }
                    }
                    .GoodsIntroMsg{
                        color: #fa585a;
                        font-size: 12px;
                        position: relative;
                        span:nth-child(2){
                            font-size: 28px;
                        }
                        span:nth-child(3){
                            font-size: 18px;
                        }
                        span:nth-child(4){
                            font-size: 14px;
                            color: #877a73;
                        }
                        span:nth-child(5){
                            width: 50px;
                            height: 20px;
                            border: 1px solid #fa585a;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            display: block;
                            text-align: center;
                            line-height: 20px;
                        }
                    }
                }
            }
        }

        .homeGoodsLoad{
            width: 250px;
            height: 70px;
            font-size: 24px;
            color: #43240c;
            background-color: #fee44e;
            border-radius: 35px;
            border: none;
            margin: 130px auto 80px;
            display: block;
            cursor: pointer;
            outline: none;
        }
    }
</style>
