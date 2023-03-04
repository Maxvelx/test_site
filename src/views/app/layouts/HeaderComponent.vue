<template>
  <div class="container">
    <div class="container_display">
      <div class="nav">
        <div class="nav_left">
          <div class="logo">
            <img src="/images/header/logo.png" alt="img">
          </div>
          <div class="phone_block">
            <div class="help">Need Help?</div>
            <div class="phone">(514) 543-9936</div>
          </div>
        </div>
        <nav class="navbar">
          <div class="collapse_button" @click.prevent="collapse">
            <img src="/images/header/menu-40.png" alt="img">
          </div>
          <div class="responsive" id="nav">
            <li class="nav_link"><a href="/">Home</a></li>
            <li class="nav_link"><a href="#">Services</a></li>
            <li class="nav_link"><a href="#">About</a></li>
            <li class="nav_link"><a href="#">Book now</a></li>
            <li class="nav_link"><a href="#">Shop</a></li>
            <li class="nav_link"><a href="#">Blog</a></li>
            <li class="nav_link"><a href="#">Contact</a></li>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      key: null
    }
  },
  methods: {
    collapse() {
      let nav = document.getElementById("nav");
      if (nav.className === "responsive") {
        nav.className = "menu_responsive";
      } else {
        nav.className = "responsive";

      }
    }
  },
}
</script>

<style scoped>

</style>