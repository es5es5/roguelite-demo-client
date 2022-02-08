<template>
  <div>
    Hi
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  created () {
    console.log(this.$store.state.a)
  }
}
</script>

<style>

</style>
