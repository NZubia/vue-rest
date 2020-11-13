import axios from "axios";
import EventBus from "@/plugins/EventBus";

const state = {
    dishList : [],
    dishesForOrder: []
};

const getters = {
    getDishList: (state) => state.dishList,
    getDishListForOrder: (state) => state.dishesForOrder,
};

const actions = {
    // eslint-disable-next-line no-empty-pattern
    createNewDish({}, data){
        axios.post('http://localhost:3000/dishes/new', {
            name: data.dishName,
            desc: data.dishDesc,
            img: data.dishImg,
            price: data.dishPrice,
            cat: data.dishCategory
        })
            .then(async function (response) {
                if (response.status === 200) {
                    EventBus.$emit("DishSuccess");
                    // dispatch('getTaskListAction');
                } else {
                    EventBus.$emit("DishError", response.data.message);
                }
            })
            .catch(function (error) {
                EventBus.$emit("TaskError", error.message);
            });

    },
    async getDishesList({commit}){
        try {
            const response = await axios.get('http:///localhost:3000/dishes/list');

            // Modify tasks
            if (response.data && response.data.data && response.data.data.length > 0){
                commit('SET_DISH_LIST', response.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    },
    async getDishesByCategory({commit}, data){
        try {
            const response = await axios.get(`http:///localhost:3000/dishes/list?category=${data.category}`);

            // Modify tasks
            if (response.data && response.data.data && response.data.data.length > 0){
                commit('SET_DISH_LIST_FOR_ORDER', response.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    }
};

const mutations = {
    SET_DISH_LIST(state, newDishList){
        state.dishList = newDishList;
    },
    SET_DISH_LIST_FOR_ORDER(state, newDishList){
        state.dishesForOrder = newDishList;
    }

};

export default {
    namespaced: true,
    state: {
        ...state
    },
    getters: {
        ...getters
    },
    actions: {
        ...actions
    },
    mutations: {
        ...mutations
    }
};
