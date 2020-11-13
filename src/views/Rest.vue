<template>
  <div class="home mt-5">
    <h1 class="mt-5">Restaurant View</h1>
    <h3 class="mt-5">Please choose the desired table to continue...</h3>

    <b-card-group columns class="mt-5">
      <b-card
          v-for="table in getTableList"
          :key="table.tableName"
          :header="table.tableName"
          :bg-variant="getCardColor(table.status)"
          text-variant="white"
          style="max-width: 20rem;"
          v-on:click="goToTableOrder(table._id)"
      >
        <blockquote class="blockquote mb-0">
          <p>{{table.status}}</p>
        </blockquote>
      </b-card>

    </b-card-group>

  </div>
</template>

<script>
// @ is an alias to /src

import {mapGetters} from "vuex";

export default {
  name: 'Rest',
  computed:{
    ...mapGetters('tables', [
      'getTableList'
    ])
  },
  methods: {
    getCardColor (status){
      switch (status) {
        case 'EMPTY':
          return 'success'
        case "RESERVED":
          return 'warning'
        case "BUSY":
        case "ORDER":
        case "SERVED":
          return 'danger'
      }
    },
    goToTableOrder (tableId){
      this.$router.push(`rest/order/${tableId}`);
    }
  },
  mounted() {
    this.$store.commit('appFlow/SET_CURRENT_SECTION', "Tables");
    this.$store.dispatch('tables/getTablesList');
  }
}
</script>
