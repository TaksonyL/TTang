<template>
    <div class="homeContent">
        <ul class="homeNav">
            <li @mouseover="homeNavList(index)"  @mouseout="homeNavNum=''" v-for="(item, index) in homeNavData" :key='index'>
                <img :src="item.url" alt="">
                <span>{{item.name}}</span>
                <div   v-if="homeNavNum == index+1" class="homeNavList">{{item.intro}}</div>
            </li>
        </ul>

        <div class="banner">
            <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide swiper-no-swiping" v-for='(item, index) in swiperSlides' :key='index'><img :src="item.imageUrl"/></div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
                <!-- If we need navigation buttons -->
        	    <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
                <!-- If we need scrollbar -->
                <!-- <div class="swiper-scrollbar"></div> -->
            </div>
        </div>
        <div  v-if='homeData.gridsV2' class="homeBlockRight">
            <h3>{{homeData.gridsV2[0].title}}</h3>
            <span></span>
            <img :src="homeData.gridsV2[0].imageUrl" alt="">
        </div>
        <div  v-if='homeData.gridsV2' class="homeBlockBottom">
            <div>
                <h3>{{homeData.gridsV2[5].title}}</h3>
                <p>{{homeData.gridsV2[5].text}}</p>
                <span>Go</span>
                <img :src="homeData.gridsV2[5].imageUrl" alt="">
            </div>
            <div>
                <h3>{{homeData.gridsV2[3].title}}</h3>
                <p>{{homeData.gridsV2[3].text}}</p>
                <span>Go</span>
                <img :src="homeData.gridsV2[3].imageUrl" alt="">
            </div>
            <div>
                <p>扫码下载APP</p>
                <p>发现跟多惊喜</p>
                <img src="../../../static/images/QRcode.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import Vue from 'vue';

export default {
    name:'homeContent',
    data(){
        return{
            homeNavData:[
                {name:'女装/女鞋',url:'../../../static/images/homeNav-icon1.png',intro:'女装/女鞋女装/女鞋女装/女鞋女装/女鞋女装/女鞋'},
                {name:'男装/男鞋',url:'../../../static/images/homeNav-icon2.png',intro:'男装/男鞋男装/男鞋男装/男鞋男装/男鞋男装/男鞋'},
                {name:'美妆/个护',url:'../../../static/images/homeNav-icon3.png',intro:'美妆/个护美妆/个护美妆/个护美妆/个护美妆/个护'},
                {name:'配饰/箱包',url:'../../../static/images/homeNav-icon4.png',intro:'配饰/箱包配饰/箱包配饰/箱包配饰/箱包配饰/箱包'},
                {name:'零食王国',url:'../../../static/images/homeNav-icon5.png',intro:'零食王国零食王国零食王国零食王国零食王国零食王国'},
                {name:'母婴用品',url:'../../../static/images/homeNav-icon6.png',intro:'母婴用品母婴用品母婴用品母婴用品母婴用品母婴用品'},
                {name:'手机/数码',url:'../../../static/images/homeNav-icon7.png',intro:'手机/数码手机/数码手机/数码手机/数码手机/数码'},
                {name:'内衣袜子',url:'../../../static/images/homeNav-icon8.png',intro:'内衣袜子内衣袜子内衣袜子内衣袜子内衣袜子内衣袜子'},
                {name:'文娱/家居',url:'../../../static/images/homeNav-icon9.png',intro:'文娱/家居文娱/家居文娱/家居文娱/家居文娱/家居'}
            ],
            // swiperSlides: ['../../../static/images/banner1.jpeg','../../../static/images/banner2.jpeg', '../../../static/images/banner3.jpeg'],
            swiperSlides:[],
            homeData:[],
            homeNavNum:'',
        }
    },
    methods:{
        emitEvent(){
            this.$emit('toGoodsList',this.homeData.items)
        },

        homeNavList(index){
            this.homeNavNum = index+1;
            this.homeNavNum1 = 0;
        },

        //轮播图---------------------------------------------------------------------
        getBanner(){
            this.$axios.get('http://www.xmyxapp.com/api/tab/1',{params:{start:0}})
            .then((data)=>{
                this.swiperSlides = data.data.banners;
                this.homeData = data.data;
                this.emitEvent();
                // console.log(this.homeData.gridsV2[0].imageUrl)
                Vue.nextTick(()=>{
                    this.mySwiper = new Swiper('.swiper-container',{
                        loop:true,
                        noSwiping:true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable :true,
                            type: 'bullets',
                        },
                        autoplay: {
                            delay: 3000,
                            stopOnLastSlide: false,
                            disableOnInteraction: false
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }
                    })
                })

            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    created(){
        this.getBanner()
    },
    destoryed(){
        delete this.mySwiper
    }
}
</script>

<style>
 @import '../../../node_modules/swiper/dist/css/swiper.css';
</style>

<style lang="less" scoped>
    *{margin: 0;padding: 0}
    .swiper-button-white{
        width: 20px;
        height: 30px;
        box-sizing: border-box;
        background-color: rgba(5, 5, 5, .3);
        background-size: 15px 20px;
        margin-top: -20px;
    }

    .homeContent{
        width: 1200px;
        margin: 45px auto 0;
        overflow: hidden;
        position: relative;
        .homeNav{
            list-style: none;
            float: left;
            margin-right: 10px;
            li{
                width: 220px;
                height: 41px;
                line-height: 41px;
                text-align: center;
                background-color: #fbf9e2;
                font-size: 14px;
                color: #43200c;
                cursor: pointer;
                &:hover{
                    background-color: white;
                }
                span{
                    display: inline-block;
                    width: 80px;
                }
            }
        }

        .homeNavList{
            height: 369px;
            width: 230px;
            z-index: 1000;
            background-color: white;
            position: absolute;
            left: 220px;
            top: 0;
            // display: none;
            display: block;
            font-size: 14px;
            color: #43200c;
            padding: 10px 15px;
        }
        
        .banner{
            width: 660px;
            height: 234px;
            // background-color: green;
            float: left;
            img{
                width: 660px;
                height: 234px;
                cursor: pointer;
            }
        }

        .homeBlockRight{
            float: left;
            margin-left: 10px;
            height: 234px;
            width: 300px;
            background-color: #fff4e4;
            position: relative;
            cursor: pointer;
            h3{
                font-size: 24px;
                color: #ff5817;
                margin: 25px 20px 10px;
            }
            span{
                display: block;
                background: url('../../../static/images/homeBlockRight.png');
                height: 35px;
                width: 159px;
            }
            img{
                height: 134px;
                position: absolute;
                bottom: 0;
                right: 10px;
            }
        }

        .homeBlockBottom{
            float: left;
            margin-top: 7px;
            color: #ffffff;
            div{
                float: left;
                width: 325px;
                height: 128px;
                background-color: red;
                border-radius: 18px;
                position: relative;
                box-sizing: border-box;
                padding: 26px 34px 16px;
                cursor: pointer;
                h3{
                    font-size: 22px;
                }
                p{
                    font-size: 18px;
                }
                span{
                    display: block;
                    font-size: 14px;
                    width: 47px;
                    height: 20px;
                    border-radius: 10px;
                    background-color: #ffffff;
                    color: #fec17e;
                    text-align: center;
                    margin-top: 10px;
                }
                span:first-child{
                    color: #fca6c0;
                }
                img{
                    height: 125px;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                }
            }
            div:nth-child(1){
                background: linear-gradient(270deg,#ffd1dd,#fca6c0);
            }
            div:nth-child(2){
                background: linear-gradient(270deg,#fffffe,#fec07e);
                margin: 0 10px;
            }
            div:nth-child(3){
                width: 300px;
                background: linear-gradient(270deg,#e7f5ff,#afdcff);
                padding: 40px 34px;
                img{
                    height: 100px;
                    bottom: 14px;
                    right: 15px;
                }
            }
        }
    }
</style>
