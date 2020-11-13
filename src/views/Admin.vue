<template>
  <div class="home mt-5">
    <h1 class="mt-5">Administration View</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Admin',
  mounted() {
    this.$store.commit('appFlow/SET_CURRENT_SECTION', "Admin");
  }
}
</script>
