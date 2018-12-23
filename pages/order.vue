<template>
 
<order-form></order-form>

</template>

<script>

import OrderForm from  '@/components/OrderForm';
const axios = require('axios');

const apiurl="http://localhost:3000/api/goods";
export default {
  components: {
    OrderForm,
    //Cart
  },
    data:function () {
     
    return { gitems: {} } //loadedgitems:false
  }, 
  

  methods:{
    
  }
  }
 
</script>