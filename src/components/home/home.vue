<template>
    <div class="home">
        <home-content @toGoodsList ='sendGoodsList' ></home-content>
        <home-goods :goodsList='goodsListF'></home-goods>
    </div>
</template>

<script>
import homeContent from './homeContent'
import homeGoods from './homeGoods'

export default {
    name:'home',
    components:{
        homeContent,homeGoods
    },
    data(){
        return{
            goodsListF:[],
        }
    },
    methods:{
        // sendGoodsList(data){
        //     var arr0 = data.list;
        //     var arr1 = [];
        //     for(var i=0 ; i<=arr0.length ; i++){
        //         if( arr0[i].type == 1){
        //             arr1.push(arr0[i])
        //             console.log(type)
        //             console.log(arr0[i].type)
        //             console.log(arr1)
        //         }
        //     }
            
        //     // this.goodsListF =  arr1
        //     // console.log(this.goodsListF)
        // }
        sendGoodsList(data){
            this.goodsListF = data
            return  this.goodsListF
        }
    },

}
</script>