<template>
  <div class="kindbox">
    <img src="https://ps.sfimg.cn/mapp/resource/b4/b4b52c8173d80e1a9801c0cc54ae4987.jpg">
    <p>- 肉类水产 -</p>
    <ul>
      <li v-for="(item, index) of 18" :key="index">
        <a href="">
          <img src="https://ps.sfimg.cn/mapp/resource/db/dba0e76910c5f3888fd8c5d3626e5d9f.png">
        <p>牛肉</p>
        </a>
      </li>
    </ul>
  </div>
</template>
