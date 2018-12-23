<template>
  <div>
    <b-card-group deck>
      <b-card class="bgimage1" align="center" img-top text-variant="white" title="VegCafe">
        <nuxt-link to="prasad">
          <b-card-img src="/images/prasadcafe3.png" alt="Image" top></b-card-img>
        </nuxt-link>
        <br>
        <h5 class="card-text">Описание 1</h5>
        <h5 class="card-text">Описание 2</h5>
        <h5 class="card-text">Описание 3</h5>
        <div slot="footer"></div>
      </b-card>

      <b-card class="bgimage3" align="center" img-top text-variant="dark" title="Мир игрушек">
        <nuxt-link to="mada">
          <b-card-img src="/images/mada2.png" alt="Image" top></b-card-img>
        </nuxt-link>
        <h5 class="card-text">Описание 1</h5>
        <h5 class="card-text">Описание 2</h5>
        <h5 class="card-text">Описание 3</h5>
        <div slot="footer"></div>
      </b-card>

      <b-card class="bgimage2" align="center" img-top title="VegShop" text-variant="white">
        <nuxt-link to="shop">
          <b-card-img src="/images/prasadshop3.png" alt="Image" top></b-card-img>
        </nuxt-link>
        <h5 class="card-text">Описание 1</h5>
        <h5 class="card-text">Описание 2</h5>
        <h5 class="card-text">Описание 3</h5>

        <div slot="footer"></div>
      </b-card>
    </b-card-group>
  </div>
</template>



<style>
/* .container {
  min-height: 70vh;
  width: 90%;
} */
.bgimage1 {
  background-image: url('/images/bgpart1.jpg');
}
.bgimage2 {
  background-image: url('/images/bgpart2.jpg');
}
.bgimage3 {
  background-image: url('/images/bgpart3.jpg');
}
.bgimagefull {
  background-image: url('/images/bgr2.jpg');
}
</style>