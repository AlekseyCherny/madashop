<template>

 
<div>
  <b-card-group deck>
          <goods-card  v-for="item in gitems.slice(0, 4)" v-bind:goods="item" v-bind:key="item._id"  ></goods-card>
  </b-card-group>
  <br> 
<!-- <b-card-group deck>
          <goods-card  v-for="item in gitems.slice(2)" v-bind:goods="item" v-bind:key="item._id"  ></goods-card>
  </b-card-group>  -->
 </div>
</template>


<script>

import GoodsCard from  '../components/GoodsCard.vue';
const axios = require('axios');

const apiurl="http://localhost:3001/api/goods";
export default {
  components: {
    GoodsCard,
    //Cart
  },
    data:function () {
     
    return { gitems: {} } //loadedgitems:false
  }, 
    async asyncData ({ $axios }) {

    const res = await $axios.get(apiurl)
   return { gitems: res.data }
      
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
    addItem:function(good){
     
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
     
    }
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
</style>

