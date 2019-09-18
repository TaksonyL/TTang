<template>
    <div class="toTop">
        <img @click="toTop" v-if="toTopShow" class="toTopBtn" src="../../../static/images/toTop.png" alt="">
    </div>
</template>

<script>
export default {
    name:'toTop',
    data(){
        return{
            toTopShow:false
        }
    },
    methods:{
        toTop(){
            var timer = setInterval(()=>{
                document.documentElement.scrollTop = document.documentElement.scrollTop - 100
                if(document.documentElement.scrollTop<=0){
                    clearInterval(timer)
                }
            },10)
        }
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            var scrollTop = document.documentElement.scrollTop;
            if(scrollTop >= 350){
                this.toTopShow = true;
            }else{
                this.toTopShow = false;
            }
        })
    }
}
</script>

<style lang="less" scoped>
    .toTop{
        width: 60px;
        height: 60px;
        // background-color: red;
        position: fixed;
        right: 50px;
        top: 35%;
        z-index: 10000;
    }
    .toTopBtn{
        width: 60px;
        height: 60px;
        cursor: pointer;
    }
</style>

