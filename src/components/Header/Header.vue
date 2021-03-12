<template>
  <nav>
    <!-- Desktop Header -->
    <header class="hidden ml:block header-shadow text-gray-600 body-font">
      <div
        class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"
      >
        <Logo />
        <SearchBar />
        <RightIcons />
      </div>
      <div
        class="md:mx-auto flex flex-wrap px-5 items-center text-base justify-between"
      >
        <Categories />
        <a class="order-track">
          <div class="bndl-kamyon"></div>
          <span>Siparis Takibi</span>
        </a>
      </div>
    </header>
    <!-- Mobile menu Header-->
    <div class="ml:hidden mx-auto px-2 md:px-6 lg:px-8">
      <div class="relative flex items-center h-14">
        <HamburgerButton
          v-on:toggleMobileMenu="showMobileMenu = !showMobileMenu"
        />
        <div class="flex w-screen flex-row justify-between">
          <Logo />
          <RightIcons />
        </div>
      </div>
      <SearchBar />
    </div>
    <!-- Mobile menu content -->
    <div class="ml:hidden" id="mobile-menu" v-show="showMobileMenu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <Categories />
      </div>
    </div>
  </nav>
</template>

<script>
import RightIcons from "./RightIcons";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import Categories from "./Categories";
export default {
  name: "Header",
  components: {
    RightIcons,
    SearchBar,
    Logo,
    HamburgerButton,
    Categories,
  },
  data() {
    return {
      showMobileMenu: ["sm", "md", "ml"].indexOf(this.$mq) > -1,
    };
  },
};
</script>

<style scoped lang="scss">
.header-shadow {
  -webkit-box-shadow: 0px 11px 29px -17px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 11px 29px -17px rgba(0, 0, 0, 0.61);
  box-shadow: 0px 11px 29px -17px rgba(0, 0, 0, 0.61);
}

.bndl-kamyon {
  background-image: url("~@/assets/sprite.svg");
  background-position: 0 -449px !important;
  background-repeat: no-repeat !important;
  margin-right: 7px;
  width: 32px !important;
  height: 19px !important;
}

.order-track {
  font-size: 12px !important;
  color: #193db0 !important;
  display: flex;
  align-items: center;
  padding: 0 !important;

  &:hover {
    text-decoration: underline;
  }
}
</style>
