<template>
  <div class="kindbox">
    <img src="https://ps.sfimg.cn/mapp/resource/b4/b4b52c8173d80e1a9801c0cc54ae4987.jpg">
    <p>- TOP热销 -</p>
    <ul>
      <li v-for="(item, index) of 18" :key="index">
        <a href="">
          <img src="https://ps.sfimg.cn/mapp/resource/08/08763fe302a495e62c77b225fc765d1d.png">
          <p>橙子</p>
        </a>
      </li>
    </ul>
  </div>
</template>
