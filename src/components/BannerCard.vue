<template>
  <div>
    <div class="mb-10 px-4">
      <div class="rounded-lg h-64 overflow-hidden">
        <img
          :alt="header"
          class="object-cover object-center h-full w-full"
          :src="imgSrc"
        />
      </div>
      <h2 class="banner-header mt-6 mb-3">
        {{ header }}
      </h2>
      <h3 class="banner-text">
        {{ desc }}
      </h3>
      <router-link tag="button" :to="linkURL" class="banner-button">
        {{ linkText }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerCard",
  props: {
    imgSrc: String,
    header: String,
    desc: String,
    linkText: String,
    linkURL: String,
  },
};
</script>

<style lang="scss">
.banner-button {
  border: 2px solid #302e2b !important;
  color: #302e2b !important;
  background-color: #fff !important;
  margin: 10px !important;
  min-width: 128px !important;
  padding: 7px 25px 7px 25px !important;
  font-weight: 700;

  &:hover {
    color: #fff !important;
    background-color: #000 !important;
    border-color: #000 !important;
  }
}

.banner-header {
  font-size: 1.625em !important;
  font-weight: 700 !important;
  font-family: "Open Sans", sans-serif !important;
}

.banner-text {
  font-size: 1.125em;
}
</style>
