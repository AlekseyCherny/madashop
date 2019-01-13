<template>
 <b-modal id="modalcart" size="lg" v-model="showcart"  title="Цены на товары в корзине действительны до конца дня !" header-bg-variant="warning" header-text-variant="danger" >
  <b-container fluid> 
  
      <!-- HEADER ... -->
      <b-row >
        <b-col cols="7" ><h5>Товар</h5></b-col>
        <b-col cols="1" ><h5>Цена</h5></b-col>
        <b-col cols="1" ><h5>Кво</h5></b-col>
        <b-col cols="1" ><h5>Сумма</h5></b-col>
        <b-col cols="2" ></b-col>          
      </b-row>  
      <!-- Content ... -->

      <b-row v-for="(val,key) in this.$store.state.glcarts" v-bind:key="key">
        <b-col cols="7"> {{val[0]}}</b-col>
        <b-col cols="1">{{val[1]}}</b-col>
        <b-col cols="1">{{val[2]}}</b-col>
        <b-col cols="1">{{Number(val[2])*Number(val[1])}} </b-col>
        <b-col cols="2">        
          <b-button  variant="outline-success" size="sm" v-on:click="add_one(key)">+</b-button>
          <b-button  variant="outline-danger"  size="sm"  v-on:click="remove_one(key)">-</b-button>    
          <b-button  variant="outline-secondary"  size="sm"  v-on:click="delete_item(key)">x</b-button> 
        </b-col> 
        
      </b-row> 
       <!-- FOOTER ... -->
      <b-row>
        <b-col cols="7" class="text-danger"><h5>ИТОГО:</h5></b-col>
        <b-col cols="1"></b-col>
        <b-col cols="1"></b-col>
        <b-col cols="1" class="text-danger"><h5>{{this.$store.state.total}}р</h5></b-col>
        <b-col cols="2"></b-col>  
        
      </b-row>  
    
</b-container>

<div slot="modal-footer" class="w-100">
         <b-btn size="sm" class="float-left" variant="success" @click="open_order()">Оформить заказ</b-btn>
         <b-btn size="sm" class="float-right" variant="warning" @click="closemodal()" >
           Продолжить покупки
         </b-btn>
       </div>
</b-modal>
</template>

<script>
const api_goods_list = require('../assets/const.js').api_goods_list
export default {
data: function () { 
    return {
       showcart: false, //видимость корзины  
    }
  },
mounted: async function (){
   var now = new Date();
   var cartObj = JSON.parse(localStorage.getItem('cart')) || {}
   var items_ids = Object.keys(cartObj)
   if (localStorage.cart_upd) {
     var ObjUpdated = JSON.parse(localStorage.cart_upd)
     if( items_ids.length>0 && ObjUpdated.d != now.getDate() || ObjUpdated.m != now.getMonth() || ObjUpdated.y != now.getFullYear()){
         let data = (await this.$axios.post( api_goods_list, {items_ids: items_ids} )).data
         data.forEach( function(item) { 
            cartObj[item._id][1]=item.price
          } );
       localStorage.cart_upd=JSON.stringify({d:now.getDate(),m:now.getMonth(),y:now.getFullYear()})      
     }
      
   }else{
     localStorage.cart_upd=JSON.stringify({d:now.getDate(),m:now.getMonth(),y:now.getFullYear()})
     localStorage.cart=JSON.stringify( {} )     
   }
    //update story
    this.$store.commit('update', cartObj )
},
methods: {
   open_order: function(){
     
      this.showcart=false;
      this.$router.push('order');
      
    },
    closemodal: function(){
      this.showcart=false;
    },
    delete_item: function(key){
       var tmp =this.$store.state.glcarts;
       delete tmp[key]
      return this.updtateStoreStorage(tmp);
    },
    add_one: function(key){
      var tmp =this.$store.state.glcarts;
      tmp[key][2] += 1;
      return this.updtateStoreStorage(tmp);
    },
    remove_one: function(key){
      var tmp =this.$store.state.glcarts;
      if(tmp[key][2]==1){
        return this.delete_item(key);
      }
      tmp[key][2] -= 1;
      return this.updtateStoreStorage(tmp);
    },
     addItem:function(good){
      var cartData = JSON.parse(localStorage.getItem("cart")) || {};

      if (cartData.hasOwnProperty(good._id)) { 
        // если такой товар уже в корзине, то добавляем +1 к его количеству
        return this.add_one(good._id);
      } else {
        // если товара в корзине еще нет, то добавляем в объект
        cartData[good._id] = [good.name, good.price, 1,good.code, good.pricegroup];
      }
      return this.updtateStoreStorage(cartData);
    //   localStorage.setItem('cart', JSON.stringify(cartData));
       
    //  // this.cartitems = cartData; //JSON.parse(localStorage.getItem("cart")) || {} ;
    //   this.$store.commit('update',cartData);
     
    },
    updtateStoreStorage:function(newObj){
      //localStorage.setItem('cart', JSON.stringify(newObj));
      this.$store.commit('update',newObj); 
      return false;
    },
    updateCartPrices:function(){
       // var items_ids = Object.keys(this.$store.state.glcarts);
        this.$axios
        .post(api_goods_list, {
          items_ids: Object.keys(JSON.parse(localStorage.getItem("cart")))
         
        })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
 }
 </script>
 
 <style >
   
 </style>