<template>
  <div class="d-inline">
    <span>当前联盟：</span><span v-bind:class="currentColor">{{leagueName}}</span>
    <button type="button" @click="isBlue =! isBlue" class="btn btn-outline-secondary btn-sm m-3">Switch</button>
  </div>
  <form name="leads" class="row align-items-center">
    <div class="col-auto">
      <label for="leads" class="form-label">分差</label>
    </div>
    <div class="col">
      <input v-model="leadsValue" type="range" class="form-range" min="-50" max="50" step="5" id="leads">
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>


  <p class="mt-3">放置进度</p>

  <table>
    <tr class="d-flex">
      <td id="11" class="bg-primary opacity-75">aaaaaaaaa</td>
      <td id="12" class="bg-primary opacity-75">aaaaaaaaaa</td>
      <td id="13" class="bg-primary opacity-75">aaaaaaaaaa</td>
      <td id="14" class="bg-primary opacity-75">aaaaaaaaa</td>
      <td id="15" class="bg-primary opacity-75">aaaaaaaaa</td>
    </tr>
  </table>
</template>

<script setup>
import { ref, computed } from 'vue'
const leadsValue = ref(20)
const isBlue = ref(1)
const currentColor = computed(()=>{
  if (isBlue.value==1){
    return "text-primary"
  }else{
    return "text-danger"
  }
})
const leagueName = computed(()=>{
  if (isBlue.value==1){
    return "蓝色"
  }else{
    return "红色"
  }
})
</script>