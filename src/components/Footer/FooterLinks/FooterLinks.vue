<template>
  <div class="flex justify-between px-7 mx-4 mt-4">
    <LinkList />
  </div>
</template>

<script>
import LinkList from "./LinkList";
export default {
  name: "FooterLinks",
  components: {
    LinkList,
  },
};
</script>
