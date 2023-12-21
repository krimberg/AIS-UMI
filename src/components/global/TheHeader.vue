<template>
  <div>
    <div class="navbar-top">
      <div class="city">Краснодар</div>
      <img src="@/assets/pzb-logo.jpg" alt="pzb-logo" class="pzb-logo" />
    </div>
  </div>
</template>

<script setup>
import { NInput } from 'naive-ui'
</script>

<style>
.navbar-top {
  /* padding-left: 10px; */
  height: 80px;
  width: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  background: rgb(37, 30, 22);
}
.navbar-categories {
  margin: 1px;
  padding: 0px;
  height: 60px;
  width: 100%;
  box-shadow: 2px 2px 2px gray;
  display: flex;
}

.pzb-logo {
  margin: auto;
  height: 100%;

  width: auto;
}
.city {
  text-align: center;
  margin-left: 40px;
  margin: auto;
  color: white;
}
.logo {
  height: 40px;
  margin-left: 40px;
  margin-right: 20px;
  margin-top: 20px;
}
</style>
