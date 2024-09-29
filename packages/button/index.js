import ChButton from "./src/button.vue";
// 为组件提供 install 安装方法，供按需引入
ChButton.install = function (Vue) {
  Vue.component(ChButton.name, ChButton);
};
export default ChButton;
