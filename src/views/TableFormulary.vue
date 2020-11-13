<template>
  <div class="mt-5">
    <b-form>
      <b-form-group id="tableNameGroup" label="Table name:" label-for="tableName">
        <b-form-input
            id="tableName"
            v-model="form.tableName"
            required
            placeholder="Enter the table name"
        ></b-form-input>
      </b-form-group>
      <b-button  variant="primary" v-on:click="newTable()">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import EventBus from "@/plugins/EventBus";

export default {
  name: "DishFormulary",
  data(){
    return {
      form: {
        tableName: ""
      }
    }
  },
  methods: {
    newTable(){
      this.$store.dispatch("tables/createNewTable", this.form);
    }
  },
  created() {
    EventBus.$on("TableSuccess", function(){
      this.$router.push("/tables");
    });
  }
}
</script>

<style scoped>

</style>
