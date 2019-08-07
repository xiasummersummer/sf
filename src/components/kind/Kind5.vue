<template>
  <div class="kindbox">
    <img src="https://ps.sfimg.cn/mapp/resource/b4/b4b52c8173d80e1a9801c0cc54ae4987.jpg">
    <p>- 新鲜蔬果 -</p>
    <ul>
      <li v-for="(item, index) of 18" :key="index">
        <a href="">
          <img src="https://ps.sfimg.cn/mapp/resource/fa/fa0afd32afd2f296f64d88336fea6603.png">
        <p>牛肉</p>
        </a>
      </li>
    </ul>
  </div>
</template>
