<template>
  <div id="wrapper">
    <header id="header">
      <HeaderComponent></HeaderComponent>
    </header>
    <section id="content">
      <RouterView></RouterView>
    </section>
    <footer id="footer">
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>

<script>
import FooterComponent from "@/views/app/layouts/FooterComponent.vue";
import HeaderComponent from "@/views/app/layouts/HeaderComponent.vue";

export default {
  name: "App",
  components: {HeaderComponent, FooterComponent}
}
</script>

<style>

</style>
