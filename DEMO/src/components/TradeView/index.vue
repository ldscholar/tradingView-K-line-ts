<template>
  <div id="tv_chart_container">
  </div>
</template>

<script>
import Tv from './script'
export default {
  mounted() {
    Tv.init({ symbol: 'AA', interval: '1D' })
  }
}
</script>

<style scoped>
#tv_chart_container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

