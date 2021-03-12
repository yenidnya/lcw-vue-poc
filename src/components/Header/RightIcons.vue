<template>
  <div class="flex">
    <div class="mx-3">
      <router-link to="/login">
        <i class="user-icon"></i>
        <p class="icon-text">Giris yap</p>
      </router-link>
    </div>
    <div class="mx-3">
      <router-link to="/favorites">
        <i class="bndl bndl-like">
          <span class="ico-count">0</span>
        </i>
        <p class="icon-text">Favoriler</p>
      </router-link>
    </div>
    <div class="mx-3">
      <router-link to="/basket">
        <i class="bndl bndl-bag">
          <span class="ico-count">0</span>
        </i>
        <p class="icon-text">Sepetim</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightIcons",
};
</script>

<style lang="scss">
.user-icon {
  width: 18px;
  height: 22px;
  background-image: url("https://www.lcwaikiki.com/Resource/Images/user-icon.svg");
  display: block;
  margin: 0 auto;
  margin-top: 0px;
  background-repeat: no-repeat;
}

.icon-text {
  font-size: 9px;
  white-space: nowrap;
}

.bndl {
  background-image: url("~@/assets/sprite.svg");

  &-like {
    display: block;
    margin: 0 auto;
    margin-top: 0px;
    width: 23px !important;
    height: 21px !important;
    background-position: 0 -468px !important;
    background-repeat: no-repeat !important;
  }

  &-bag {
    background-position: 0 -644px !important;
    background-repeat: no-repeat !important;
    display: block;
    margin: 0px auto;
    width: 17px !important;
    height: 22px !important;
  }

  &-kamyon {
    background-position: 0 -449px !important;
    background-repeat: no-repeat !important;
    margin-right: 7px;
    width: 32px !important;
    height: 19px !important;
  }
}

.ico-count {
  position: relative;
  display: block;
  left: 13px;
  width: 16px;
  height: 16px;
  line-height: 10px;
  border-radius: 150px;
  background-color: #ff9280;
  border: 2px solid #ff9280;
  text-align: center;
  top: 3px;
  color: #fff;
  font-size: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
  font-style: normal;
}
</style>
