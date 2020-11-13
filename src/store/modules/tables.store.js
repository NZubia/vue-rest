import axios from "axios";
import EventBus from "@/plugins/EventBus";

const state = {
    tableList : []
};

const getters = {
    getTableList: (state) => state.tableList,
};

const actions = {
    // eslint-disable-next-line no-empty-pattern
    createNewTable({}, data){
        axios.post('http://localhost:3000/tables/new', {
            name: data.tableName,
        })
            .then(async function (response) {
                if (response.status === 200) {
                    EventBus.$emit("TableSuccess");
                    // dispatch('getTaskListAction');
                } else {
                    EventBus.$emit("TableError", response.data.message);
                }
            })
            .catch(function (error) {
                EventBus.$emit("TableError", error.message);
            });

    },
    async getTablesList({commit}){
        try {
            const response = await axios.get('http:///localhost:3000/tables/list');

            // Modify tasks
            if (response.data && response.data.data && response.data.data.length > 0){
                console.log(response.data);
                commit('SET_TABLE_LIST', response.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    }
};

const mutations = {
    SET_TABLE_LIST(state, newTableList){
        state.tableList = newTableList;
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
