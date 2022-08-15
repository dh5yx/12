import { defineStore, createPinia } from "pinia";

export const useCounterStore = defineStore({
	id: "GlobalStore",
	state: () => ({}),
	getters: {},
	actions: {},
});

const pinia = createPinia();

export default pinia;
