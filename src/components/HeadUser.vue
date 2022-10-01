<style>
.user_box {
  border: 1px solid red;
  flex-grow: 7;
  display: flex;
  flex-direction: row;
  margin-top: 4%;
}
#user_log {
  width: 100px;
  height: 100px;
  border: 1px solid blue;
  background: url(../assets/logo.png) no-repeat center;
}
#user_name {
  width: 200px;
  height: 50px;
  border: 1px solid pink;
  margin-left: 1%;
  text-align: center;
}
</style>
<template>
  <div class="user_box">
    <div id="user_log"></div>
    <div id="user_name">23</div>
  </div>
</template>