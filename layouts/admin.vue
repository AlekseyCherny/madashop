<template>
  <div >
    <div class="row">
      <div class="col-12 header">
            <a href="">link1</a>
            <a href="">link2</a>
            <a href="">link3</a>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2 navigation-menu">
         

<b-list-group>
    <b-list-group-item  variant="secondary" >БЮДЖЕТ</b-list-group-item>
  <b-list-group-item  to="mada" variant="info">Button item</b-list-group-item>
  <b-list-group-item to="mada2"   variant="info">I am a button</b-list-group-item>
  <b-list-group-item  to="#" variant="info">This is a button too</b-list-group-item>
</b-list-group>
<b-list-group>
  <b-list-group-item  variant="secondary">ЗАРПЛАТА</b-list-group-item>
  <b-list-group-item  to="#" variant="info">I am a button</b-list-group-item>
  <b-list-group-item  to="#" variant="info">This is a button too</b-list-group-item>
</b-list-group>
      </div>

      <div class="col-10 main-content">
            <nuxt />
      </div>
    </div>

    <div class="row">
      <div class="col-12 footer">
            FOOTER HERE
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
body {
 max-width: 99vw;

}
.navigation-menu {
  background-color:transparent;
  /* position: absolute; */
 
   max-height: 95vh;
    overflow: auto;
    
/*   overflow-y : scroll;
  overflow-x : hidden; */
}
.header {
  background-color: beige;
  color:black;
}
.footer {
 /* position:absolute; */
    /* z-index:100; */
    bottom:0px;
}
.main-content{
   
    width:100%;
   /*  position:absolute;
    width:100%;
    top:0;
    bottom:0;
    z-index:-1;
    overflow:hidden;
    background:rgb(248, 143, 143);
    color:black; */
}
</style>