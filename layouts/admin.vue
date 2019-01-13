<template>
<div class="container">
  <no-ssr>
  <nav-bar ref="navBar"></nav-bar>  
  </no-ssr>
  <cart  ref="shoppingCart"></cart> 
  <div> <br></div>
  <nuxt />
</div>
</template>

<script>
//v-bind:showcart="showcart"
//import {bus} from '../plugins/bus.js'
import cart from "@/components/Cart";
import navbar from "@/components/Navbar";
export default {

  components: {
    'nav-bar':navbar,
    'cart': cart,
  },
   data: function () { 
     this.$axios.setHeader('Access-Control-Allow-Origin','*' );
    return {
      // showcart: false, //видимость корзины
     delme:true 
    }
  },
  mounted (){
    this.$root.$on('add-item-to-cart',(good) => {
      return this.$refs.shoppingCart.addItem(good);
   })
  } 
}

</script>

<style>
.columns .column h3 {
  color: rgb(34, 0, 185);
}
.columns .column h4 {
  color: rgb(201, 28, 28);
}
.modal-card {
  width: 800px;
}
</style>
