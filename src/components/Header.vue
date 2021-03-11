<template>
  <nav>
    <!-- Desktop Header -->
    <header class="hidden ml:block header-shadow text-gray-600 body-font">
      <div
        class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"
      >
        <router-link
          to="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src="https://www.lcwaikiki.com/Resource/Images/lcwaikiki-logo@2x.png"
            alt="LCW Logo"
            class="lcw-logo"
          />
        </router-link>
        <section
          role="search"
          class="md:mx-auto flex flex-wrap items-center text-base justify-center"
        >
          <div class="pt-2 relative mx-auto text-gray-600">
            <input
              class="search-input border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Ara"
            />
            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
              <svg
                class="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background:new 0 0 56.966 56.966;"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
        </section>
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
      <div
        class="md:mx-auto flex flex-wrap px-5 items-center text-base justify-between"
      >
        <ul>
          <template v-for="(categoryName, id) in categories">
            <li class="category" :key="id">
              <a>
                {{ categoryName }}
              </a>
            </li>
          </template>
          <li class="category category-outlet">
            <a>
              OUTLET
            </a>
          </li>
        </ul>
        <a class="order-track">
          <div class="bndl bndl-kamyon"></div>
          <span>Siparis Takibi</span>
        </a>
      </div>
    </header>
    <!-- Mobile menu Header-->
    <div class="ml:hidden mx-auto px-2 md:px-6 lg:px-8">
      <div class="relative flex items-center h-14">
        <button
          type="button"
          @click="showMobileMenu = !showMobileMenu"
          class="mobile-hamburger flex items-center justify-center px-2 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 22 22"
            stroke="#193db0"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <small>Menu</small>
        </button>
        <div class="flex w-screen flex-row justify-between">
          <router-link v-show="$mq != 'nano'" to="/" class="flex items-center">
            <img
              src="https://www.lcwaikiki.com/Resource/Images/lcwaikiki-logo@2x.png"
              alt="LCW Logo"
              class="mobil-logo"
            />
          </router-link>
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
        </div>
      </div>
      <section
        v-show="!showMobileMenu"
        role="search"
        class="md:mx-auto flex flex-wrap items-center text-base justify-center"
      >
        <div class="pt-2 relative mx-auto text-gray-600">
          <input
            class="search-input-mobile border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Ara"
          />
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            <svg
              class="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background:new 0 0 56.966 56.966;"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
    <!-- Mobile menu content -->
    <div class="ml:hidden" id="mobile-menu" v-show="showMobileMenu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <ul>
          <template v-for="(categoryName, id) in categories">
            <li class="mobile-menu-item" :key="id">
              <a href="#">
                {{ categoryName }}
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showMobileMenu: ["sm", "md", "ml"].indexOf(this.$mq) > -1,
      categories: [
        "KADIN",
        "ERKEK",
        "ÇOCUK",
        "BEBEK",
        "LCW",
        "HOME",
        "MARKALAR",
      ],
    };
  },
};
</script>

<style lang="scss">
.mobile-menu-item {
  border-bottom: 1px solid #f8f8f9;
  word-wrap: break-word;
  margin-top: -1px;
  font-size: 16px;
  position: relative;
  padding: 20px 10px 10px 10px;
  color: #555;
  text-align: left;

  &::after {
    content: ">";
    position: absolute;
    right: 10px;
  }
}

.header-shadow {
  -webkit-box-shadow: 0px 11px 29px -17px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 11px 29px -17px rgba(0, 0, 0, 0.61);
  box-shadow: 0px 11px 29px -17px rgba(0, 0, 0, 0.61);
}
.category {
  float: left;
  font-size: 14px;
  font-weight: 500;
  padding: 2px 0;

  a {
    padding: 10px 14px;
    font-size: 18px !important;
    color: #555;
    cursor: pointer;
    font-weight: 500;
  }

  &-outlet {
    a {
      color: #f76262 !important;
    }
  }
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

.mobile-hamburger {
  margin-right: 0.2vw;
  small {
    position: absolute;
    bottom: 5px;
    font-size: 9px;
  }
}

.search-input {
  width: 30vw;
  height: 30px;

  &-mobile {
    width: 95vw;
  }
}

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
</style>
