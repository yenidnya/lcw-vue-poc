<template>
  <div class="strip">
    <div class="footer-container flex flex-col ml:flex-row ml:mx-4">
      <div class="w-full ml:w-1/2 px-7 flex justify-start">
        <div class="text-gray-500 dl-app">
          Uygulamayi indirin
        </div>
        <img class="badge" src="@/assets/appstore-badge.png" alt="App Store" />
        <img
          class="badge"
          src="@/assets/googleplay-badge.png"
          alt="Google Play"
        />
        <img
          class="badge"
          src="@/assets/huawei-app-gallery.png"
          alt="App Gallery"
        />
      </div>
      <div class="w-full ml:w-1/2 flex justify-start px-7 ml:justify-end ml:px-0">
        <div class="text-gray-500 dl-app">
          Bizi Takip Edin
        </div>
        <FacebookIco class="social-media" />
        <LinkedInIco class="social-media" />
        <InstagramIco class="social-media" />
        <YoutubeIco class="social-media" />
      </div>
    </div>
  </div>
</template>

<script>
import FacebookIco from "../Icons/FacebookIco";
import LinkedInIco from "../Icons/LinkedInIco";
import YoutubeIco from "../Icons/YoutubeIco";
import InstagramIco from "../Icons/InstagramIco";
export default {
  name: "FollowUs",
  components: {
    FacebookIco,
    LinkedInIco,
    YoutubeIco,
    InstagramIco,
  },
};
</script>

<style lang="scss">
.strip {
  background-color: #f2f2f2;
}
.footer-container {
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-x: hidden;
  line-height: 54px;
}

.dl-app {
  font-size: 12px;
  margin-right: 35px;
  font-weight: 600;
  white-space: nowrap;
}

.badge {
  height: 30px;
  margin: auto 5px;
}

.social-media {
  color: #302e2b;
  margin: auto 10px;
}
</style>
