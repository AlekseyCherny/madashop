<template>
<div class="container">
  <nav-bar></nav-bar>  
  <cart v-bind:showcart="showcart"></cart>
  <div> <br></div>
  <nuxt />
</div>
</template>

<script>
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
       showcart: false, //видимость корзины
    }
  },
  methods: {
     opencart: function(){ 
      //this.cartclass ="modal is-active";
      this.$refs.myModalRef.show()
      return false;
    },
    closecart: function(){
       //this.cartclass ="modal";
       this.$refs.myModalRef.hide()
       return false;
    },
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
