import { reactive } from 'vue'
import { computed } from 'vue'


export const Settings = reactive({
    isBlue: 1,
    color: computed(() => {
        return Settings.value.isBlue ? "text-primary" : "text-danger"
    }),
    league: computed(() => {
        return Settings.value.isBlue ? "蓝色" : "红色"
    })
})

export const Data = reactive({
    leadsValue: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    placed: {
        loc11: { isPlaced: false, color: computed(() => Data.value.placed.loc11.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc12: { isPlaced: false, color: computed(() => Data.value.placed.loc12.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc13: { isPlaced: false, color: computed(() => Data.value.placed.loc13.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc14: { isPlaced: false, color: computed(() => Data.value.placed.loc14.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc15: { isPlaced: false, color: computed(() => Data.value.placed.loc15.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc21: { isPlaced: false, color: computed(() => Data.value.placed.loc21.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc22: { isPlaced: false, color: computed(() => Data.value.placed.loc22.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc23: { isPlaced: false, color: computed(() => Data.value.placed.loc23.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc24: { isPlaced: false, color: computed(() => Data.value.placed.loc24.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc25: { isPlaced: false, color: computed(() => Data.value.placed.loc25.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc31: { isPlaced: false, color: computed(() => Data.value.placed.loc31.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc32: { isPlaced: false, color: computed(() => Data.value.placed.loc32.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc33: { isPlaced: false, color: computed(() => Data.value.placed.loc33.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc34: { isPlaced: false, color: computed(() => Data.value.placed.loc34.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc35: { isPlaced: false, color: computed(() => Data.value.placed.loc35.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc41: { isPlaced: false, color: computed(() => Data.value.placed.loc41.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc42: { isPlaced: false, color: computed(() => Data.value.placed.loc42.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc43: { isPlaced: false, color: computed(() => Data.value.placed.loc43.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc44: { isPlaced: false, color: computed(() => Data.value.placed.loc44.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc45: { isPlaced: false, color: computed(() => Data.value.placed.loc45.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc51: { isPlaced: false, color: computed(() => Data.value.placed.loc51.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc52: { isPlaced: false, color: computed(() => Data.value.placed.loc52.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc53: { isPlaced: false, color: computed(() => Data.value.placed.loc53.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc54: { isPlaced: false, color: computed(() => Data.value.placed.loc54.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
        loc55: { isPlaced: false, color: computed(() => Data.value.placed.loc55.isPlaced ? "d-inline-block col bg-warning bg-opacity-75" : "d-inline-block col bg-success bg-opacity-75") },
    }
})
