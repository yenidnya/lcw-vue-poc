<template>
  <div class="banner">
    <img class="w-full" :src="bannerURL" :alt="bannerAlt"/>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    bannerURL: String,
    bannerAlt: String
  },
};
</script>

<style>
.banner {
  margin-bottom: 15px;
}
</style>
