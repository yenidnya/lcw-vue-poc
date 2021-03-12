<template>
  <div>
    <Header />
    <HomepageContent />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomepageContent from "../components/HomepageContent";
export default {
  name: "Homepage",
  components: {
    Header,
    Footer,
    HomepageContent,
  },
};
</script>

<style></style>
