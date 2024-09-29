---
title: '快速上手'
---

# 快速上手

```js
// 全局注册
import ChUI from 'ch-ui';
Vue.use(ChUI, { router });
import 'ch-ui/lib/ch-ui.css';
// 按需注册
import { Button, KeepAlive } from 'ch-ui';
Vue.use(Button).use(KeepAlive, { router });
```

```vue
// 全局注册
<template>
  <div id="app">
    <ch-button type="primary">点击报名</-button>
  </div>
</template>

<script>
export default {};
</script>
```

<ClientOnly>
  <!-- <sakura-img/> -->
</ClientOnly>
