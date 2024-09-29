<template>
  <div class="app">
    <div class="row">
      <ch-button>按钮</ch-button>
      <ch-button type="primary">按钮</ch-button>
      <ch-button type="success">按钮</ch-button>
      <ch-button type="info">按钮</ch-button>
      <ch-button type="warning">按钮</ch-button>
    </div>
    <div class="row">
      <ch-button plain>按钮</ch-button>
      <ch-button plain type="primary">按钮</ch-button>
      <ch-button plain type="success">按钮</ch-button>
      <ch-button plain type="info">按钮</ch-button>
      <ch-button plain type="warning">按钮</ch-button>
    </div>
    <div class="row">
      <ch-button round plain>按钮</ch-button>
      <ch-button round plain type="primary">按钮</ch-button>
      <ch-button round plain type="success">按钮</ch-button>
      <ch-button round plain type="info">按钮</ch-button>
      <ch-button round plain type="warning">按钮</ch-button>
    </div>
    <div class="row">
      <ch-button circle>OK</ch-button>
      <ch-button circle type="primary">OK</ch-button>
      <ch-button circle type="success">OK</ch-button>
      <ch-button circle type="info">OK</ch-button>
      <ch-button circle type="warning">OK</ch-button>
    </div>
    <div class="row">
      <ch-button plain>字体</ch-button>
      <ch-button icon="vs-icon-check" circle plain type="primary"></ch-button>
      <ch-button icon="vs-icon-message" circle plain type="success"></ch-button>
      <ch-button icon="vs-icon-search" circle plain type="info"></ch-button>
      <ch-button icon="vs-icon-star-off" plain type="warning"
        >字体图标</ch-button
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump(e) {
      console.log(e);
      alert(123);
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.row {
  padding: 10px 0;
}
.ch-button {
  margin-left: 10px;
}
</style>
