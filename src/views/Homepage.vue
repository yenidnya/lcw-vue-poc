<template>
  <div>
    <Header />
    {{$mq}}
    <!-- <HomepageContent /> -->
  </div>
</template>

<script>
import Header from "../components/Header";
// import HomepageContent from "../components/HomepageContent";
export default {
  name: "Homepage",
  components: {
    Header,
    // HomepageContent,
  },
};
</script>

<style></style>
