 <template>
 <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <nuxt-link to="mada" class="navbar-item" >
      <img src="images/Logo_madagascar.png" width="160" height="70">
    </nuxt-link>
<nuxt-link to="prasad" class="navbar-item" >
      <img src="images/prasad-logo.png" width="160" height="70">
    </nuxt-link>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <nuxt-link to="/" class="navbar-item" >
        Главная
      </nuxt-link>

      <nuxt-link to="/" class="navbar-item">
        Доставка
      </nuxt-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <nuxt-link to="/" class="navbar-link">
          Еще
        </nuxt-link>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <button id = "cartbtn" class="button is-warning"  data-target="modal"  v-on:click="opencart()" > 
            <span class="icon is-small">
      <i class="fas fa-shopping-cart"></i>
    </span>
            <strong>{{this.$store.state.total}}р</strong>
          </button>
          <nuxt-link to="register" class="button is-info" >
            <strong>Регистрация</strong>
          </nuxt-link>
          <nuxt-link to="login" class="button is-link" >
            Войти
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  methods: {
     opencart: function(){
      this.$parent.opencart();
      return false;
    },

  }
}
</script>