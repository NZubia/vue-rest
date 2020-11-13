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

        switch (newSection){
            case 'Admin':
            case 'Dishes':
            case 'Tables':
                state.currentLinks = [
                    { name: "Dishes", path: "admin/dishes" },
                    { name: "Tables", path: "admin/tables" }
                ];
                break;
            default:
                state.currentLinks = [];
                break;
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
