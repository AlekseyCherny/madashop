 <template>
  <b-navbar toggleable="md" type="light" variant="white">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
    <b-navbar-brand href="#">
      <nuxt-link to="prasad" class="navbar-item">
        <img src="images/prasad-logo.png" width="160" height="70">
      </nuxt-link>
      <nuxt-link to="mada" class="navbar-item">
        <img src="images/Logo_madagascar.png" width="160" height="70">
      </nuxt-link>
      <nuxt-link to="shop" class="navbar-item">
        <img src="images/prasadshop1.png" width="120" height="70">
      </nuxt-link>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <!--  <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
    </b-navbar-nav>
      -->
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <fa icon="dollar-sign"  style="font-size: 30px"/> -->
        <b-button
          id="cartbtn"
          variant="outline-success"
          data-target="modal"
          class="my-2 my-sm-0"
          type="submit"
          v-b-modal="'modalcart'"
        >
          <fa icon="shopping-cart"/>
          {{this.$store.state.total}}р
        </b-button>

        <!--   <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>-->
        <!--     <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>-->
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>Я</em>
          </template>
          <b-dropdown-item href="#">Профиль</b-dropdown-item>
          <b-dropdown-item href="#">Выйти</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template> 

<script>
export default {
  methods: {
    opencart: function() {
      return this.$parent.opencart()
    }
  }
}
</script>