<template>
  <div class="loading">
    <div class="loading-icon"></div>
  </div>
</template>

<script>
export default {
    name:"MLoading",
    props: ["IsLoading"]
}
</script>

<style>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000042;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-icon {
  padding: 30px;
  border: 10px solid #00000042;
  box-shadow: 0 0 5px 1px #00000042;
  border-right-color: #00aeff;
  border-radius: 50%;
  animation: rotate 1.5s infinite linear;
  position:absolute;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>