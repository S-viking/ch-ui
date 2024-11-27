<template>
  <i :class="iconClass" :style="iconStyle"></i>
</template>

<script>
export default {
  name: "ChIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: "16px",
    },
    color: {
      type: String,
      default: "#333",
    },
  },
  computed: {
    iconClass() {
      return `iconfont ${this.name}`;
    },
    iconStyle() {
      return {
        fontSize: `${this.size}`,
        color: this.color,
      };
    },
  },
};
</script>

<style scoped>
/* 引入 iconfont 的 CSS 文件 */
@import url("../iconfont/iconfont.css"); /* 替换为你的 iconfont 文件路径 */
</style>
