<template>
  <div class="mt-5">
    <b-form>
      <b-form-group id="dishNameGroup" label="Dish name:" label-for="dishName">
        <b-form-input
            id="dishName"
            v-model="form.dishName"
            required
            placeholder="Enter the dish name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="dishDescGroup" label="Dish description:" label-for="dishDesc">
        <b-form-input
            id="dishDesc"
            v-model="form.dishDesc"
            required
            placeholder="Enter dish description"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="dishImgGroup" label="Dish image:" label-for="dishImg">
        <b-form-input
            id="dishImg"
            v-model="form.dishImg"
            required
            placeholder="Enter image url"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="dishPriceGroup" label="Dish Price:" label-for="dishPrice">
        <b-form-input
            id="dishPrice"
            v-model="form.dishPrice"
            required
            placeholder="Enter dish price"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="dishCatGroup" label="Dish Category:" label-for="dishCat">
        <b-form-select
            id="dishCat"
            v-model="form.dishCategory"
            :options="dishCategories"
            required
        ></b-form-select>
      </b-form-group>
      <b-button  variant="primary" v-on:click="newDish()">Submit</b-button>
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
        dishName: "",
        dishDesc: "",
        dishImg: "",
        dishPrice: "",
        dishCategory: ""
      },
      dishCategories: [
          "DRINKS",
          "PASTA",
          "SOUPS",
          "SALADS"
      ]
    }
  },
  methods: {
    newDish(){
      this.$store.dispatch("dishes/createNewDish", this.form);
    }
  },
  created() {
    EventBus.$on("DishSuccess", function(){
      this.$router.push("/dishes");
    });
  }
}
</script>

<style scoped>

</style>
