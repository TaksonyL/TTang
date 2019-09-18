<template>
    <div class="good">
        <div class="goodInfo" v-if="goodInfoData.photo">
            <img :src="goodInfoData.photo[0].url" alt="">
            <div class="goodInfoContent">
                <h1 class="goodInfoTitle">{{goodInfoData.qunTitle}}</h1>
                <div class="goodInfoPrice">
                    <p class="goodInfoPriceO">原价￥{{goodInfoData.originPrice}}</p>
                    <p class="goodInfoPriceT">券后价:￥<span>{{ parseInt(goodInfoData.price) }}</span><span>{{ goodInfoData.price ? goodInfoData.price.toString().slice(-2) : '' }}</span><span>{{ goodInfoData.couponValue }}</span><span>{{ goodInfoData.saleNum > 10000? (goodInfoData.saleNum/10000).toFixed(1)+'万' : goodInfoData.saleNum}}人已买</span></p>
                </div>
                <p class="goodInfoDeadline">优惠有效期:{{ goodInfoData.expireDate }}</p>
                <button class="goodPurchase">领券购买</button>
            </div>
        </div>
        <div class="goodShop" v-if="goodInfoData.shop">
            <div class="goodShopWarp">
                <span></span>
                <span>卖家信息</span>
                <span></span>
            </div>
            <img :src="goodInfoData.shop.coverUrl" alt="">
            <p class="goodShopName">{{goodInfoData.shop.title}}</p>
            <ul class="goodShopInfo">
                <li><span>描述</span><span>{{goodInfoData.shop.itemScore}}</span></li>
                <li><span>服务</span><span>{{goodInfoData.shop.serviceScore}}</span></li>
                <li><span>物流</span><span>{{goodInfoData.shop.deliveryScore}}</span></li>
            </ul>
        </div>
        <div class="goodDetail">
            <img v-for="(item, index) in goodInfoData.descContentList" :key="index" :src="item.photo.url" alt="">
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name:'good',
    data(){
        return{
            goodInfoData:{}
        }
    },
    methods:{
        getGoodInfo(){
            var goodId = this.$route.query.id
            // console.log(this.$route.query)
            this.$axios.get('http://www.xmyxapp.com/api/detail',{params:{id:goodId}})
            .then((data)=>{
                this.goodInfoData = data.data.detail
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    created(){
        this.getGoodInfo()
    }
}
</script>

<style lang="less" scoped>
    *{margin: 0;padding: 0}
    .good{
        margin: 45px auto 0;
        width: 1200px;
        overflow: hidden;
    }
    .goodInfo{
        box-sizing: border-box;
        padding: 34px 25px;
        width: 915px;
        height: 350px;
        background-color: white;
        float: left;
        img{
            height: 282px;
            width: 282px;
            float: left;
        }
        .goodInfoContent{
            height: 282px;
            width: 535px;
            float: right;
            h1{
                font-size: 24px;
                color: #43240c;
                font-weight: 400;
            }
            .goodInfoPrice{
                width: 100%;
                background-color: #f5f5f5;
                box-sizing: border-box;
                padding: 12px 15px;
                position: relative;
                margin-top: 10px;
                .goodInfoPriceO{
                    font-size: 16px;
                    color: #b1a9a5;
                    text-decoration: line-through;
                }
                .goodInfoPriceT{
                    font-size: 20px;
                    color: #ff4653;
                    span:nth-child(1){
                        font-size: 40px;
                        font-weight: 600;
                    }
                    span:nth-child(2){
                        font-size: 28px;
                        font-weight: 600;
                    }
                    span:nth-child(3){
                        // display: inline-block;
                        font-size: 12px;
                        border: 1px solid #fa585b;
                        border-radius: 3px;
                        margin-left: 10px;
                    }
                    span:nth-child(4){
                        font-size: 16px;
                        color: #b1a9a5;
                        position: absolute;
                        bottom: 16px;
                        right: 15px;
                    }
                }
            }
            .goodInfoDeadline{
                font-size: 14px;
                color: #fa585a;
                text-align: right;
                margin: 30px 0 15px;
            }
            .goodPurchase{
                outline: none;
                font-size: 18px;
                background-color: #fa585a;
                color: #ffffff;
                border: none;
                width: 225px;
                height: 50px;
                float: right;
                cursor: pointer;
            }
        }
    }
    .goodShop{
        width: 275px;
        height: 350px;
        background-color: white;
        margin-left: 10px;
        box-sizing: border-box;
        float: left;
        border: 1px solid #fee44e;
        text-align: center;
        .goodShopWarp{
            width: 100%;
            height: 60px;
            background: linear-gradient(180deg,#fee44e,#ffffff 85%,#ffffff);
            line-height: 30px;
            span:nth-child(2){
                font-size: 14px;
                color: #43240c;
                line-height: 30px;
            }
            span:nth-child(1), span:nth-child(3){
                display: inline-block;
                height: 1px;
                width: 55px;
                background-color: #43240c;
                opacity: .2;
                line-height: 30px;
                vertical-align: middle;
            }
        }
        img{
            height: 150px;
        }
        .goodShopName{
            font-size: 18px;
            color: #43240c;
        }
        .goodShopInfo{
            list-style: none;
            margin: 15px auto 0;
            width: 150px;
            display: flex;
            justify-content: space-between;
            li{
                float: left;
                span{
                    display: block;
                    color: #fb9547;
                }
                span:nth-child(1){
                    font-size: 14px;
                    color: #b1a9a5;
                }
            }
        }
    }
    .goodDetail{
        width: 1200px;
        // height: 100px;
        background-color: white;
        margin: 10px 0 30px;
        float: left;
        overflow: hidden;
        img{
            width: 790px;
        }
    }
</style>
