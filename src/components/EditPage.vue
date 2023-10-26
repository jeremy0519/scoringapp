<template>
  <div class="d-inline">
    <span>当前联盟：</span><span v-bind:class="Settings.color">{{ Settings.league }}</span>
    <button type="button" @click="Settings.isBlue = !Settings.isBlue"
      class="btn btn-outline-secondary btn-sm m-3">Switch</button>
  </div>
  <div class="col-auto">
    <label for="leads" class="form-label">分差：{{ Data.leadsValue }}</label>
  </div>
  <form name="leads" class="row align-items-center">
    <div class="col-auto">
      <button @click.prevent="Data.leadsValue -= 5" class="btn btn-outline-danger">-5</button>
    </div>
    <div class="col">
      <input v-model="Data.leadsValue" type="range" class="form-range" min="-50" max="50" step="5" id="leads">
    </div>
    <div class="col-auto">
      <button @click.prevent="Data.leadsValue += 5" class="btn btn-outline-success">+5</button>
    </div>
  </form>


  <p class="mt-3">放置进度</p>

  <div class="row gap-1 mb-1" style="height: 100px;">
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
  </div>
  <div class="row gap-1 mb-1" style="height: 100px;">
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
  </div>
  <div class="row gap-1 mb-1" style="height: 100px;">
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
  </div>
  <div class="row gap-1 mb-1" style="height: 100px;">
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
  </div>
  <div class="row gap-1 mb-1" style="height: 100px;">
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
    <div class="d-inline-block bg-primary col"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const Settings = ref({
  isBlue: 1,
  color: computed(() => {
    return Settings.value.isBlue ? "text-primary" : "text-danger"
  }),
  league: computed(() => {
    return Settings.value.isBlue ? "蓝色" : "红色"
  })
})
const Data = ref({
  leadsValue: 20,
  placed: ["15"]
})
</script>