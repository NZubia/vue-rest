<template>
  <div>
    <h1>Tables</h1>
    <b-button variant="primary" v-on:click="createTable()">Create Table</b-button>
    <b-table class="mt-5" striped hover :items="getTableList"></b-table>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Tables",
  computed:{
    ...mapGetters('tables', [
      'getTableList'
    ])
  },
  methods: {
    createTable(){
      this.$router.push("tables/create");
    },
  },
  mounted() {
    this.$store.commit('appFlow/SET_CURRENT_SECTION', "Tables");
    this.$store.dispatch('tables/getTablesList');
  }
}
</script>

<style scoped>

</style>
