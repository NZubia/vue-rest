<template>
  <b-container class="bv-example-row">
    <h1 class="mt-5">Order View</h1>
    <b-row class="mt-5">
      <b-col cols="6">
        <h3>Order</h3>
        <b-table striped hover :items="orderDishes" :fields="orderFields" :key="tableAuxIndex">
          <template #cell(dishName)="data">
            <p v-on:click="addComment(data.item._id)">{{ data.item.dishName }} </p>
          </template>
        </b-table>
      </b-col>
      <b-col cols="6">
        <h3>Dishes</h3>
        <b-tabs content-class="mt-5">
          <b-tab :title="cat"
                 v-for="cat in categoryList"
                 :key="cat"
                 v-on:click="changeCategory(cat)"
          >
            <b-card-group class="mt-5" columns>
              <dishCard
                  v-for="dish in getDishListForOrder"
                  :cardTitle="dish.dishName"
                  :cardImg="dish.dishImgSrc"
                  v-bind:cardDesc="dish.dishDescription"
                  :cardPrice="dish.price"
                  :key="dish._id"
                  @cardClick="addDish(dish)"
              >
              </dishCard>
            </b-card-group>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

import {mapGetters} from "vuex";
import dishCard from "@/components/dishCard";

export default {
  name: 'Rest',
  data(){
    return {
      currentDishCategory: "DRINKS",
      categoryList: [
          "DRINKS",
          "PASTA",
          "SOUPS",
          "SALADS",
      ],
      orderDishes: [],
      orderFields: [
        "dishName",
        "qty"
      ],
      tableAuxIndex:1

    }
  },
  computed:{
    ...mapGetters('dishes', [
      'getDishListForOrder'
    ])
  },
  methods: {
    changeCategory(category){
      this.currentDishCategory=category;
      this.$store.dispatch(
          'dishes/getDishesByCategory',
          {category: this.currentDishCategory}
      );
    },
    addDish(dish) {
      let dishFound = false;
      // Iterate to find dish
      for (let i = 0; i < this.orderDishes.length; i++){
        if (this.orderDishes[i]._id == dish._id){
          this.orderDishes[i].qty+=1;
          dishFound = true;
          this.tableAuxIndex+=1;
        }
      }
      if (!dishFound) {
        dish.qty = 1;
        this.orderDishes.push(dish);
      }

    },
    addComment(dishId){
      console.log("Hola");
      alert(dishId);
    }
  },
  components:{
    dishCard
  },
  mounted() {
    this.$store.commit('appFlow/SET_CURRENT_SECTION', "Tables");
    this.$store.dispatch(
        'dishes/getDishesByCategory',
        {category: this.currentDishCategory}
        );
  }
}
</script>
