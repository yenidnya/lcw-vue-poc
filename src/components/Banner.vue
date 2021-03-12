<template>
  <div class="banner" :style="styleObj" v-lazy-container="{ selector: 'img' }">
    <img class="w-full" :style="styleObj" :data-src="bannerURL" :alt="bannerAlt" />
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    bannerURL: String,
    bannerAlt: String,
    bHeight: {
      type: String,
      required: false,
      default: "auto",
    },
  },
  data() {
    return {
      styleObj: {
        height: this.bHeight ? `${this.bHeight}px` : "auto",
      },
    };
  },
};
</script>

<style>
.banner {
  margin-bottom: 15px;
}
</style>
