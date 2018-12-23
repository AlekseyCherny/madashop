<template>
  <b-card v-bind:img-src="goods_src" align="center" img-alt="Img" img-top>
    <h4 slot="header" class="text-danger">{{goods.price}} р</h4>
    <p class="card-text">{{goods.name}}</p>

    <div slot="footer">
      <b-button
        v-bind:class="classbasket"
        v-bind:dataid="goods._id"
        v-on:click="addtocart(goods)"
        class="float-left"
      >{{storeitems.hasOwnProperty(this.goods._id) ? 'В корзине' : 'В корзину'}}</b-button>
      <b-button disabled variant="light" class="float-right">{{goods.art}}</b-button>
    </div>
  </b-card>
</template>

<script>
//import { mapState } from 'vuex';

export default {
  props: ['goods'],
  computed: {
    stritems: function() {
      return this.$store.state.stritems
    },
    storeitems: function() {
      return JSON.parse(this.stritems)
    },

    goods_src: function() {
      return '/images/' + this.goods.art + '.jpg'
    },
    classbasket: function() {
      return this.storeitems.hasOwnProperty(this.goods._id)
        ? 'alreadybasket'
        : 'basket'
      //return this.cartitems.hasOwnProperty(this.goods.id) ? 'alreadybasket' : 'basket';
      //return this.inbasket ? 'alreadybasket' : 'basket';
    }
  },

  methods: {
    addtocart: function(good) {
      this.$parent.addItem(good)
    }
  }
}
</script>

<style>
.column .card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card-footer {
  margin-top: auto;
}
.card-content {
  text-align: center;
}
.card-content .content h3 {
  color: rgb(185, 37, 0);
}
.basket {
  background-color: brown;
  color: bisque;
}
.basket:hover {
  background-color: rgb(190, 11, 11);
  color: bisque;
}
.alreadybasket {
  background-color: chocolate;
  color: bisque;
}
.alreadybasket:hover {
  background-color: rgb(177, 81, 13);
  color: bisque;
}
.card-footer a:hover {
  color: white;
}
</style>
