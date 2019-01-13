<template>

 
<div>
  <b-pagination :total-rows="totalitems" v-model="currentPage" :per-page="10" :limit=10  v-on:change="onChange"/>

  <b-card-group deck >
          <goods-card  v-for="item in gitems.slice(startslice, startslice+5)" v-bind:goods="item" v-bind:key="item._id"  ></goods-card>
  </b-card-group>
  
  <br> 
  
   <b-card-group deck >
          <goods-card  v-for="item in gitems.slice(startslice+5, startslice+10)" v-bind:goods="item" v-bind:key="item._id"  ></goods-card>
  </b-card-group> 
  <br> 
  <b-pagination :total-rows="totalitems" v-model="currentPage" :per-page="10" :limit=10  v-on:change="onChange"/>
  
<!-- <b-card-group deck>
          <goods-card  v-for="item in gitems.slice(2)" v-bind:goods="item" v-bind:key="item._id"  ></goods-card>
  </b-card-group>  -->
 </div>


</template>


<script>

import GoodsCard from  '../components/GoodsCard.vue';
const axios = require('axios');

const apiurl= require("../assets/const.js").api_goods_mada;
export default {
  components: {
    GoodsCard,
    //Cart
  },
    data:function () {
     
    return { gitems: {} ,totalitems:0,startslice:0,currentPage:1} //loadedgitems:false
  }, 
    async asyncData ({ $axios }) {
    const testurl = apiurl+"343" 
    const res = await $axios.get(testurl)
   return { gitems: res.data , totalitems: res.data.length}
      
  },   

/*    mounted:   function ()   { { headers: { 'Access-Control-Allow-Origin': '*' } }
     this.loadedgitems=false;
     var ts = new Date();
     console.log("MOUNTED"+ts.toISOString());
    
   axios
  .get(apiurl)
  .then(response => (console.log("RESP"+response.data),this.gitems = response.data , this.loadedgitems= true  ));

  }, */

  methods:{
     linkGen (pageNum) {
      return apiurl + pageNum 
    },
    onChange (e){
     console.log("Я нажал "+e)
     // console.log("Page="+this.currentPage)
     //return false;
     this.startslice=(e-1)*10
      
    }
    /* addItem:function(good){
     
       var cartData = JSON.parse(localStorage.getItem("cart")) || {};

      if (cartData.hasOwnProperty(good._id)) { // НЕ ВЫЗЫВАЕТСЯ СЕЙЧАС
        // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[good._id][2] += 1;
      } else {
        // если товара в корзине еще нет, то добавляем в объект
        cartData[good._id] = [good.name, good.price, 1];
      }
      localStorage.setItem('cart', JSON.stringify(cartData));
       
     // this.cartitems = cartData; //JSON.parse(localStorage.getItem("cart")) || {} ;
      this.$store.commit('update',cartData); 
     
    } */
  }
  }
 
</script>

<style>
 .container {
  min-height: 70vh;
  width: 80%;
} 
.links {
  padding-top: 15px;
}
.page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: rgb(75, 136, 78);
    background-color: #fff;
    border: 1px solid #dee2e6;
}
.page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: rgb(75, 136, 78);
    border-color: rgb(75, 136, 78);
}
</style>

