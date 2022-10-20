import { defineStore } from "pinia";

interface CounterStore {
    count: number;
    name: string;
}

export const useCounterStore = defineStore({
    id: "counter",
    state: (): CounterStore => ({ count: 0, name: "Eduardo" }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
    },
});
