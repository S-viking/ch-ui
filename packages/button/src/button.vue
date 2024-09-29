<template>
  <button
    class="ch-button"
    :disabled="disabled"
    @click="handleClick"
    :class="[
      type ? `ch-button--${type}` : '',
      buttonSize ? `ch-button--${buttonSize}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
  >
    <i :class="icon" v-if="icon"></i>
    <!-- 如果没有传入插槽的时候才显示 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: "ChButton",
  props: {
    size: String,
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss"></style>
