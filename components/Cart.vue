<template>
 <b-modal id="modalcart" size="lg" v-model="showcart"  title="Ваша корзина" header-bg-variant="warning" header-text-variant="danger" >
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
export default {
props: ["showcart"],
mounted: function (){
  this.$store.commit('update', JSON.parse(localStorage.getItem('cart')) || {} )
},
methods: {
   open_order: function(){
     
      this.showcart=false;
      this.$router.push('order');
      
    },
    closemodal: function(){
      //this.$parent.closecart()
      this.showcart=false;
    },
    delete_item: function(key){
       var tmp =this.$store.state.glcarts;
       delete tmp[key]
      // this.$delete(this.$store.state.glcarts,key)
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

      if (cartData.hasOwnProperty(good.id)) { // НЕ ВЫЗЫВАЕТСЯ СЕЙЧАС
        // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[good._id][2] += 1;
      } else {
        // если товара в корзине еще нет, то добавляем в объект
        cartData[good._id] = [good.name, good.price, 1];
      }
      localStorage.setItem('cart', JSON.stringify(cartData));
       
     // this.cartitems = cartData; //JSON.parse(localStorage.getItem("cart")) || {} ;
      this.$store.commit('update',cartData);
     
    },
    updtateStoreStorage:function(newObj){
      localStorage.setItem('cart', JSON.stringify(newObj));
      this.$store.commit('update',newObj); 
      return false;
    }
  }
 }
 </script>
 
 <style >
   
 </style>