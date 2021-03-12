<template>
  <ul>
    <template v-for="(categoryName, id) in categories">
      <li :class="categoryStyle" :key="id">
        <a>
          {{ categoryName }}
        </a>
      </li>
    </template>
    <li v-show="showOutlet" class="category category-outlet">
      <a>
        OUTLET
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
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
  computed: {
    showOutlet() {
      if (["sm", "md", "ml"].indexOf(this.$mq) > -1) return false;
      return true;
    },
    categoryStyle() {
      if (["sm", "md", "ml"].indexOf(this.$mq) > -1) return "mobile-menu-item";
      return "category";
    },
  },
};
</script>

<style lang="scss">
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
</style>
