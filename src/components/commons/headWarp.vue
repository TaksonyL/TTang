<template>
    <div class="header">
        <div class="headerWarp">
            <div class="headerLeft">
                <img src="../../../static/images/logo.png" alt="">
                <div class="headerLeftText">
                    <h3>熊猫优选</h3>
                    <span>XIONG MAO YOU XUAN</span>
                </div>
            </div>
            <ul class="headerRight">
                <li><img src="../../../static/images/header-icon1.png" alt=""><span>全程包邮</span></li>
                <li><img src="../../../static/images/header-icon2.png" alt=""><span>7天退换</span></li>
                <li><img src="../../../static/images/header-icon3.png" alt=""><span>品质保证</span></li>
            </ul>
            <div class="headerCenter">
                <i class="fa fa-search fa-lg" aria-hidden="true"></i>
                <input type="text" placeholder="搜索商品，发现更多优惠">
                <button>搜索</button>
            </div>
        </div>
        <div class="navWarp">
            <ul class="navList">
                <router-link tag="li" to="/#" class="navListHome" style="background-color: #fee44f;color: black">首页</router-link>
                <li>9块9包邮</li>
                <li>超值大额券</li>
                <li>当季流行播报</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'headWarp'
}
</script>
<style lang="less" scoped>
    *{margin: 0;padding: 0}

    .header{
        background-color: white;
        height: 160px;
        .headerWarp{
            width: 1200px;
            height: 160px;
            margin: 0 auto;
        }
    }
    .headerLeft{
        float: left;
        color: #43200c;
        width: 240px;
        height: 75px;
        margin-top: 50px;
        margin-left: 30px;
        img{
            height: 75px;
            width: 75px;
        }
        .headerLeftText{
            float: right;
            height: 67px;
            width: 150px;
            text-align: center;
            padding-top: 8px;
            h3{
                font-size: 28px;
                margin: 0;
            }
            span{
                display: inline-block;
                font-size: 12px;
                transform: scale(.8);
            }
        }
    }
    .headerRight{
        list-style: none;
        width: 260px;
        height: 60px;
        float: right;
        margin-top: 40px;
        li{
            float: left;
            font-size: 12px;
            color: #877a73;
            width: 48px;
            text-align: center;
            margin-right: 25px;
            img{
                width: 40px;
            }
            span{
                display: block;
            }
        }
        li:nth-child(2){
            span{
                margin-top: 2.5px
            }
        }
    }
    .headerCenter{
        display: inline-block;
        width: 530px;
        height: 43px;
        margin: 50px 0 0 65px;
        border: 2px solid #43240c;
        border-radius: 40px;
        padding-top: 2px;
        .fa-search{
            height: 20px;
            width: 20px;
            margin-left: 10px;
        }
        input{
            height: 26px;
            width: 355px;
            margin: 0 4px;
            border: none;
            padding: 7px 0;
            outline: none;
            font-size: 16px;
        }
        button{

            width: 125px;
            height: 40px;
            background-color: #fee44e;
            border-radius: 35px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            color: #43200c;
        }
    }

    //nav---------------------------
     .navWarp{
        width: 100%;
        height: 45px;
        background-color: #43250d;
        .navList{
            list-style: none;
            width: 1200px;
            height: 45px;
            margin: 0 auto;
            .navListHome{
                width: 220px;
            }
            li{
                float: left;
                width: 160px;
                height: 45px;
                line-height: 45px;
                text-align: center;
                cursor: pointer;
                color: white;
                &:hover{
                    background-color: #fee44f;
                    color: black;
                }
            }
        }
    }
</style>

