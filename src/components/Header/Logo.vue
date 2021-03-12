<template>
  <router-link v-show="$mq != 'nano'" to="/" class="flex items-center">
    <img
      src="https://www.lcwaikiki.com/Resource/Images/lcwaikiki-logo@2x.png"
      alt="LCW Logo"
      :class="logoStyle"
    />
  </router-link>
</template>

<script>
export default {
  name: "Logo",
  computed: {
    logoStyle() {
      if (["sm", "md", "ml"].indexOf(this.$mq) > -1) return "mobil-logo";
      return "lcw-logo";
    },
  },
};
</script>

<style>
.lcw-logo {
  display: block;
  width: 222px;
  height: 32px;
}

.mobil-logo {
  margin-top: 10px;
  width: 107px;
  height: 14px;
}
</style>
