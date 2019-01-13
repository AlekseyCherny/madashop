<template>
  <div >
    
  <no-ssr>
  <nav-bar ref="navBar"></nav-bar>  
  </no-ssr>
   
  <cart  ref="shoppingCart"></cart> 


    <!-- <div class="row">
      <div class="col-12 header">
            <a href="">link1</a>
            <a href="">link2</a>
            <a href="">link3</a>
      </div>
    </div>-->
    <div class="row">
      <div class="col-md-2 navigation-menu" role="tablist">
        <b-list-group>
          
          <b-list-group-item  v-b-toggle.collapse1 role="tab" class="groupmenu"><fa icon="shopping-cart"/>  &nbsp;&nbsp;Бюджет <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse1" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item @click="menu_click"  class="smallitem" data-key="1" :class="{activeitem:selected == 1}">Button item</b-list-group-item>
          <b-list-group-item @click="menu_click" class="smallitem" data-key="2" :class="{activeitem:selected == 2}">I am a button</b-list-group-item>
          <b-list-group-item to="mada3" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>
 
          <b-list-group-item  v-b-toggle.collapse2 role="tab" class="groupmenu">ЗАРПЛАТА <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse2" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

          <b-list-group-item  v-b-toggle.collapse3 role="tab" class="groupmenu">SOME GROUP <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse3" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

          <b-list-group-item variant="primary" v-b-toggle.collapse4 role="tab" class="groupmenu" >SOME 4 <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse4" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

           <b-list-group-item variant="dark" v-b-toggle.collapse5 role="tab" class="groupmenu">SOME 5 <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse5" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

          <b-list-group-item  v-b-toggle.collapse6 role="tab" class="groupmenu"><fa icon="shopping-cart"/>  &nbsp;&nbsp;Гигиена детская <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse6" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="mada"  class="smallitem">Button item</b-list-group-item>
          <b-list-group-item to="mada2" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="mada3" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

         <b-list-group-item  v-b-toggle.collapse7 role="tab" class="groupmenu">Детская одежда <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse7" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>
       

          <b-list-group-item  v-b-toggle.collapse8 role="tab" class="groupmenu">Детское питание <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse8" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

          <b-list-group-item  v-b-toggle.collapse9 role="tab" class="groupmenu">Детская гигиена <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse9" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

          <b-list-group-item  v-b-toggle.collapse10 role="tab" class="groupmenu">Коляски и мебель <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse10" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

          <b-list-group-item  v-b-toggle.collapse11 role="tab" class="groupmenu"><fa icon="shopping-cart"/>  &nbsp;&nbsp;Игровые приставки <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse11" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item @click="menu_click"  class="smallitem" data-key="1" :class="{activeitem:selected == 1}">Button item</b-list-group-item>
          <b-list-group-item @click="menu_click" class="smallitem" data-key="2" :class="{activeitem:selected == 2}">I am a button</b-list-group-item>
          <b-list-group-item to="mada3" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>
 
          <b-list-group-item  v-b-toggle.collapse12 role="tab" class="groupmenu">Sony Playstation <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse12" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

          <b-list-group-item  v-b-toggle.collapse13 role="tab" class="groupmenu">Конструкторы <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse13" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

          <b-list-group-item  v-b-toggle.collapse14 role="tab" class="groupmenu">РАЗВИВАЮЩИЕ <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse14" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

            <b-list-group-item  v-b-toggle.collapse15 role="tab" class="groupmenu">Конструкторы <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse15" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

          <b-list-group-item  v-b-toggle.collapse16 role="tab" class="groupmenu">Брендовые игры <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse16" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

                    <b-list-group-item  v-b-toggle.collapse17 role="tab" class="groupmenu">САМОЕ НУЖНОЕ <fa icon="chevron-down" class="chevron-down"/></b-list-group-item>
          <b-collapse id="collapse17" accordion="my-accordion" role="tabpanel" >
          <b-list-group-item to="#" class="smallitem">I am a button</b-list-group-item>
          <b-list-group-item to="#" class="smallitem">This is a button too</b-list-group-item>
          </b-collapse>

        </b-list-group>
      </div>

      <div class="col-9 main-content">
        <br>
        <nuxt/>
      </div>
    </div> 

     <div class="row">
      <div class="col-12 footer">FOOTER HERE</div>
    </div> 

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
      // showcart: false, //видимость корзины
      selected:undefined,
     delme:true 
    }
  },
  mounted (){
    this.$root.$on('add-item-to-cart',(good) => {
      return this.$refs.shoppingCart.addItem(good);
   })
  } ,
  methods: {
    menu_click : function(e){
      if (this.selected==e.target.dataset.key){
        return false
      }
      
      this.selected=e.target.dataset.key
      // alert(e.target.dataset.key)
    }
  }
}
</script>

<style>
body {
  max-width: 99vw;
  color: #73879C;
}
.navigation-menu {
  /* background-color: transparent; */
  /* position: absolute; */

  /* max-height: 95vh; */
  /* overflow: auto; */

  /*   overflow-y : scroll;
  overflow-x : hidden; */
}
.header {
  background-color: beige;
  color: black;
}
.footer {
  /* position:absolute; */
  /* z-index:100; */
  bottom: 0px;
}
.smallitem {
  padding-left: 25px;
   padding-top: 5pt; 
   padding-bottom: 5pt; 
  font-size: 14px;
  font-weight: 400;
  font-family: "Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif;
    background-color: rgb(185, 39, 14);
     /* rgb(48, 79, 112); */
  color:rgb(245, 245, 245);
  cursor: pointer;
}
.smallitem2:hover{
      background-color: rgb(75, 136, 78); 
      /* rgb(70, 101, 134); */
  color:rgb(255, 255, 255);
}

.smallitem:hover{
      background-color: rgb(248, 183, 4); 
      /* rgb(70, 101, 134); */
  color:rgb(97, 3, 3);
}
.smallitem::before {
    background: rgb(180, 180, 180);
    bottom: auto;
    content: "";
    height: 8px;
    left: 5px;
    margin-top: 5px; 
    
    position: absolute;
    right: auto;
    width: 8px;
    z-index: 1;
    border-radius: 50%; 
    box-sizing: border-box;
    list-style: none;
    cursor: pointer;
}
.groupmenu{
  background-color: rgb(151, 27, 5);
  color:rgb(250, 250, 250);
  cursor: pointer;
  /* font-family: "Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif; */
}
.main-content {
  width: 100%;
  /*  position:absolute;
    width:100%;
    top:0;
    bottom:0;
    z-index:-1;
    overflow:hidden;
    background:rgb(248, 143, 143);
    color:black; */
}
.chevron-down {
  margin-right:4px;
  float: right;
  color: #C4CFDA;
  font-size: 12px;

}
.list-group-item:first-child {

    border-top-left-radius: 0;
    border-top-right-radius: 0;

}
.list-group-item:last-child {

    margin-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

}


.activeitem{
      background-color: rgb(75, 136, 78); 
      /* rgb(70, 101, 134); */
  color:rgb(255, 255, 255);
}
.activeitem:hover{
      background-color: rgb(75, 136, 78); 
      /* rgb(70, 101, 134); */
  color:rgb(255, 255, 255);
}
</style>