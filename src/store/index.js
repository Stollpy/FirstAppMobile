import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "1",
                    image: "https://ifly-selections-axaxzmkc.netdna-ssl.com/10301486-klm-selections/content/image/_f_large/Quebec_01_Header-1564671899.jpg",
                    title: "Voyage au Quebec",
                    description: "Super voyage ! J'ai hâte d'y habité !"
                },
                {
                    id: "2",
                    image: "https://www.holland.com/upload_mm/d/0/7/69550_fullimage_fietsen-amsterdam_1360x.jpg",
                    title: "Voyage en Hollande",
                    description: "Voyage inoubliable ! Les gastronomie local son top !"
                },
                {
                    id: "3",
                    image: "https://www.voyaneo.com/blog/wp-content/uploads/2018/02/quand-partir-aux-etats-unis.jpg",
                    title: "Voyage au Etat-Unies",
                    description: "Voyage génial, j'ai bien aimé la côte ouest !"
                }
            ]
        }
    },
    mutations: {
        addMemory(state, memoryData){
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.image,
                description: memoryData.description
            };

            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData){
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            };
        }
    }
});

export default store;