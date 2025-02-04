<template>
  <div>
    <router-link
    to="/"
    class="to-home">
      <i class="material-icons">home</i>
  </router-link>

    <router-view>

    </router-view>
  </div>
</template>

<script>

export default {
  created () {
    console.log(this.$router)
    console.log(this.$route)
  }
}
</script>

<style lang="scss">
  .to-home.router-lik-exact-active{
    display:none;
  }
</style>
