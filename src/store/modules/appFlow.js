// import axios from "axios";
// import EventBus from "@/plugins/EventBus";

const state = {
    currentSection: "",
    currentLinks : []
};

const getters = {
    getCurrentLinks: (state) => state.currentLinks,
};

const actions = {
};

const mutations = {
    SET_CURRENT_SECTION(state, newSection){
        state.currentSection = newSection;

        if (newSection === 'Admin') {
            state.currentLinks = [
                { name: "Dishes", path: "admin/dish" }
            ];
        } else {
            state.currentLinks = [];
        }
    },

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
