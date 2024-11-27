import ChIcon from "./src/icon.vue";
// 为组件提供 install 安装方法，供按需引入
ChIcon.install = function (Vue) {
  Vue.component(ChIcon.name, ChIcon);
};
export default ChIcon;
