<template>
    <div class="footWarp">
        <div class="footer">
            <div class="footerLeft">
                <img src="http://img1.lukou.com/static/img/activity/icon.png" alt="">
                <h3>熊猫优选</h3>
                <p>年轻人网购首选购物领券更省钱</p>
            </div>
            <div class="footerCenter">
                <span>关于我们</span>
                <span>|</span>
                <span>下载APP</span>
            </div>
            <div class="footerBottom">
                <img src="http://img1.lukou.com/static/img/activity/policeIcon.png" alt="">
                <p>浙公安网备案 33010602004343号 | 增值电信业务经营许可证：浙B2-20160363 | ICP备案号: 浙ICP备14026333号-2</p>
            </div>
        </div>
        <div class="address">
            <img src="../../../static/images/safeLogo.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'footWarp'
}
</script>

<style lang="less" scoped>
    .footWarp{
        height: 280px;
        width: 100%;
        background-color: #484848;
        color: white;
        .footer{
            height: 240px;
            width: 1200px;
            margin: 0 auto;
            opacity: .806;
            .footerLeft{
                float: left;
                width: 280px;
                height: 112px;
                margin-left: 40px;
                margin-top: 40px;
                img{
                    height: 112px;
                    opacity: .7;
                    float: left;
                }
                h3{
                    font-size: 36px;
                    float: right;
                    margin: 5px 0 0;
                }
                p{
                    font-size: 18px;
                    float: right;
                    width: 140px;
                    padding: 0 2px;
                    margin: 0;
                    text-align: center;
                }
            }

            .footerCenter{
                width: 300px;
                height: 25px;
                font-size: 20px;
                text-align: center;
                margin: 0 auto;
                padding-top: 90px;
                span:nth-child(2){
                    margin: 0 7px;
                }
            }

            .footerBottom{
                width: 1200px;
                font-size: 18px;
                height: 25px;
                overflow: hidden;
                text-align: center;
                margin-top: 90px;
                p{
                    margin: 0;
                    display: inline-block;
                    line-height: 25px;
                }
                img{
                    height: 22px;
                    vertical-align: -5px;
                }
            }
        }
        .address{
            height: 40px;
            background-color: white;
            text-align: center;
        }
    }
</style>
