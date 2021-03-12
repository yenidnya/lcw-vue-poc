<template>
  <div >
    <ul>
      <li>Yardım</li>
      <li>Sıkça Sorulan Sorular</li>
      <li>İade ve Değişim</li>
      <li>Site Haritası</li>
      <li>Kullanım Koşulları</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'LinkList',
    props: {
      title: String,
      links: Array,
    }
};
</script>

<style lang="scss" scoped>

</style>