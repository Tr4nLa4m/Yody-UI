<template>
  <div class="app">
    <div class="container">
      <TheMenu />
      <div class="content">
        <TheHeader />
        <TheContent />
      </div>
    </div>
  </div>
</template>

<script>
import TheMenu from "./components/layout/TheMenu.vue";
import TheContent from "./components/layout/TheContent.vue";
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheContent,
    TheMenu,
    TheHeader,
  },
};
</script>

<style>
@import url(./css/main.css);
</style>
