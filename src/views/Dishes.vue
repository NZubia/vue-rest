<template>
  <div class="mt-5">
    <div>
      <h1>Dishes</h1>
      <b-button variant="primary" v-on:click="createDish()">Create Dish</b-button>
      <b-card-group class="mt-5" columns>
        <dishCard
            v-for="dish in getDishList"
            :cardTitle="dish.dishName"
            :cardImg="dish.dishImgSrc"
            v-bind:cardDesc="dish.dishDescription"
            :cardPrice="dish.price"
            :key="dish._id"
        >
          <b-button class="mr-3" v-on:click="goToEditDish(dish._id)">Edit</b-button>
          <b-button variant="danger" v-on:click="showDeleteModal(dish._id)">Delete</b-button>
        </dishCard>
      </b-card-group>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import dishCard from "@/components/dishCard";

export default {
  name: "Dishes",
  computed:{
    ...mapGetters('dishes', [
      'getDishList'
    ])
  },
  components: {
    dishCard
  },
  methods: {
    createDish(){
      this.$router.push("dishes/create");
    },
    goToEditDish(){

    },
    showDeleteModal(){

    }
  },
  mounted() {
    this.$store.commit('appFlow/SET_CURRENT_SECTION', "Dishes");
    this.$store.dispatch('dishes/getDishesList');
  }
}
</script>

<style scoped>

</style>
