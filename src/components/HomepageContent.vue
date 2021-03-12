<template>
  <div class="main-container ml:mx-4">
    <Banner :bannerURL="topBannerURL" bannerAlt="top banner" />
    <Banner :bannerURL="'https://dummyimage.com/1833x802'" bannerAlt="Slider" :bHeight="557"/>
    <div class="block ml:flex justify-around">
      <BannerCard
        imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-busweat.jpg"
        header="KAPÜŞONLU SWEATSHIRT"
        desc="Vazgeçilmez Pratik Rahatlık"
        linkText="Erkeklere Özel"
        linkURL="some-page"
      />
      <BannerCard
        imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-casual.jpg"
        header="24,99 TL'DEN İTİBAREN"
        desc="Bahar Gardıroplarında Trend Alarmı"
        linkText="Kadınlara Özel"
        linkURL="some-page"
      />
      <BannerCard
        imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-vision.jpg"
        header="LCW VISION YENİ SEZON"
        desc="Konforlu ve Şık Kombinler"
        linkText="Kadın & Erkek"
        linkURL="some-page"
      />
    </div>
    <Banner
      bannerURL="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-elbise-d.jpg"
      bannerAlt="center banner"
    />
    <div class="flex justify-around">
      <BannerCard
        imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-z1z4indirim.jpg"
        header="HEPSİ İNDİRİMLİ"
        desc="Tükenmeden Yakala"
        linkText="Tükenmeden Yakala"
        linkURL="some-page"
      />
      <BannerCard
        imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-z1zedenimsweat.jpg"
        header="DENİM SNEAKER"
        desc="Günün Favorileri"
        linkText="Çocuk & Bebek"
        linkURL="some-page"
      />
      <BannerCard
        imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-z1z4ijama.jpg"
        header="PİJAMA ÇEŞİTLERİ"
        desc="Bahar Havasına Uygun"
        linkText="Çocuk & Bebek"
        linkURL="some-page"
      />
      <BannerCard
        imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-z1z4oulerkombin.jpg"
        header="POPÜLER KOMBİNLER"
        desc="Güneşli Günlere Yakışanlar"
        linkText="Çocuk & Bebek"
        linkURL="some-page"
      />
    </div>
    <Banner
      bannerURL="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/01032021-markalar-d.jpg"
      bannerAlt="kampanya banner"
    />
    <div class="homepage-divider pt-4">
      <span>
        <p>
          EN TAZE KAMPANYALAR
        </p>
      </span>
    </div>
    <div class="flex justify-around pt-5">
      <Banner
        class="mx-3"
        bannerURL="https://img-lcwaikiki1.mncdn.com/Resource/Images/Banner/11032021-taze-1-ke-aktif.jpg"
        bannerAlt="kampanya1"
      />
      <Banner
        class="mx-3"
        bannerURL="https://img-lcwaikiki1.mncdn.com/Resource/Images/Banner/11032021-taze-1-ke-aktif.jpg"
        bannerAlt="kampanya1"
      />
      <Banner
        class="mx-3"
        bannerURL="https://img-lcwaikiki1.mncdn.com/Resource/Images/Banner/11032021-taze-1-ke-aktif.jpg"
        bannerAlt="kampanya1"
      />
    </div>
  </div>
</template>

<script>
import BannerCard from "./BannerCard.vue";
import Banner from "./Banner";
export default {
  name: "HomepageContent",
  components: {
    BannerCard,
    Banner,
  },
  computed: {
    topBannerURL() {
      if (["sm", "md", "ml"].indexOf(this.$mq) > -1) {
        return "https://img-lcwaikiki.mncdn.com/Resource/Images/Other/ustbanner_mobil.gif";
      }
      return "https://img-lcwaikiki.mncdn.com/Resource/Images/Other/_web_banner_ust_bant.gif";
    },
  },
};
</script>

<style scoped lang="scss">
.main-container {
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-x: hidden;
}
.homepage-divider {
  position: relative;
  border-top: solid 1px #e2e2e2;
  width: 100%;
  height: 1px;
  top: 50%;
  margin-top: 25px;
  z-index: 1;

  span {
    position: absolute;
    background: #fff;
    z-index: 5;
    top: -18px;
    padding: 0 10px;
    left: 0;
    right: 0;
    margin: auto;
    color: #302e2b;
    max-width: 348px;
    text-align: center;
    font-size: 24px;

    p {
      font-weight: 600;
    }
  }
}
</style>
