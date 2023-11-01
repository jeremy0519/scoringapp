<template>
  <div class="d-inline mb-2">
    <span>当前联盟：</span><span v-bind:class="Settings.color">{{ Settings.league }}</span>
    <button type="button" class="btn btn-outline-secondary btn-sm ms-3" data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      Switch
    </button>
    <button type="button" class="btn btn-outline-secondary btn-sm ms-3" data-bs-toggle="modal"
      data-bs-target="#exampleModal2">
      Empty
    </button>
  </div>


  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">确定切换吗？</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">否</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="handleChangeLeague">是</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal2 -->
  <div class="modal fade" id="exampleModal2" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">确定清空吗？</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">否</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
            @click="myreload">是</button>
        </div>
      </div>
    </div>
  </div>

  <div class="col-auto">
    <label for="leads" class="form-label">分差：{{ Data.leadsValue }}</label>
  </div>
  <form name="leads" class="row align-items-center">
    <div class="col-auto">
      <button @click.prevent="Data.leadsValue = Number(Data.leadsValue) - 5" class="btn btn-outline-danger">-5</button>
    </div>
    <div class="col">
      <input v-model="Data.leadsValue" type="range" class="form-range" min="-50" max="50" step="1" id="leads">
      <!-- 改成了允许精确拖动 仅仅不建议-->
    </div>
    <div class="col-auto">
      <button @click.prevent="Data.leadsValue = Number(Data.leadsValue) + 5" class="btn btn-outline-success">+5</button>
    </div>
  </form>


  <p class="mt-3">放置进度</p>
  <div class="row gap-1 mb-1 mx-auto" v-bind:style="cubelongstyle">
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc11.color"
      @click="Data.placed.loc11.isPlaced = !Data.placed.loc11.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc12.color"
      @click="Data.placed.loc12.isPlaced = !Data.placed.loc12.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc13.color"
      @click="Data.placed.loc13.isPlaced = !Data.placed.loc13.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc14.color"
      @click="Data.placed.loc14.isPlaced = !Data.placed.loc14.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc15.color"
      @click="Data.placed.loc15.isPlaced = !Data.placed.loc15.isPlaced"></div>
  </div>
  <div class="row gap-1 mb-1 mx-auto" v-bind:style="cubelongstyle">
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc21.color"
      @click="Data.placed.loc21.isPlaced = !Data.placed.loc21.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc22.color"
      @click="Data.placed.loc22.isPlaced = !Data.placed.loc22.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc23.color"
      @click="Data.placed.loc23.isPlaced = !Data.placed.loc23.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc24.color"
      @click="Data.placed.loc24.isPlaced = !Data.placed.loc24.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc25.color"
      @click="Data.placed.loc25.isPlaced = !Data.placed.loc25.isPlaced"></div>
  </div>
  <div class="row gap-1 mb-1 mx-auto" v-bind:style="cubelongstyle">
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc31.color"
      @click="Data.placed.loc31.isPlaced = !Data.placed.loc31.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc32.color"
      @click="Data.placed.loc32.isPlaced = !Data.placed.loc32.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc33.color"
      @click="Data.placed.loc33.isPlaced = !Data.placed.loc33.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc34.color"
      @click="Data.placed.loc34.isPlaced = !Data.placed.loc34.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc35.color"
      @click="Data.placed.loc35.isPlaced = !Data.placed.loc35.isPlaced"></div>
  </div>
  <div class="row gap-1 mb-1 mx-auto" v-bind:style="cubelongstyle">
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc41.color"
      @click="Data.placed.loc41.isPlaced = !Data.placed.loc41.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc42.color"
      @click="Data.placed.loc42.isPlaced = !Data.placed.loc42.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc43.color"
      @click="Data.placed.loc43.isPlaced = !Data.placed.loc43.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc44.color"
      @click="Data.placed.loc44.isPlaced = !Data.placed.loc44.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc45.color"
      @click="Data.placed.loc45.isPlaced = !Data.placed.loc45.isPlaced"></div>
  </div>
  <div class="row gap-1 mb-1 mx-auto" v-bind:style="cubelongstyle">
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc51.color"
      @click="Data.placed.loc51.isPlaced = !Data.placed.loc51.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc52.color"
      @click="Data.placed.loc52.isPlaced = !Data.placed.loc52.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc53.color"
      @click="Data.placed.loc53.isPlaced = !Data.placed.loc53.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc54.color"
      @click="Data.placed.loc54.isPlaced = !Data.placed.loc54.isPlaced"></div>
    <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc55.color"
      @click="Data.placed.loc55.isPlaced = !Data.placed.loc55.isPlaced"></div>
  </div>

  <div class="row mt-2">

    <form class="row align-items-center col">
      <div class="col-auto">
        <button @click.prevent="Data.A -= 1" class="btn btn-outline-danger">-1</button>
      </div>
      <div class="col text-center">
        A ..... {{ Data.A }}
      </div>
      <div class="col-auto">
        <button @click.prevent="Data.A += 1" class="btn btn-outline-success">+1</button>
      </div>
    </form>


    <form class="row align-items-center col">
      <div class="col-auto">
        <button @click.prevent="Data.B -= 1" class="btn btn-outline-danger">-1</button>
      </div>
      <div class="col text-center">
        B ..... {{ Data.B }}
      </div>
      <div class="col-auto">
        <button @click.prevent="Data.B += 1" class="btn btn-outline-success">+1</button>
      </div>
    </form>


    <form class="row align-items-center col">
      <div class="col-auto">
        <button @click.prevent="Data.C -= 1" class="btn btn-outline-danger">-1</button>
      </div>
      <div class="col text-center">
        C ..... {{ Data.C }}
      </div>
      <div class="col-auto">
        <button @click.prevent="Data.C += 1" class="btn btn-outline-success">+1</button>
      </div>
    </form>
  </div>

  <div class="row my-2">

    <form class="row align-items-center col">
      <div class="col-auto">
        <button @click.prevent="Data.D -= 1" class="btn btn-outline-danger">-1</button>
      </div>
      <div class="col text-center">
        D ..... {{ Data.D }}
      </div>
      <div class="col-auto">
        <button @click.prevent="Data.D += 1" class="btn btn-outline-success">+1</button>
      </div>
    </form>


    <form class="row align-items-center col">
      <div class="col-auto">
        <button @click.prevent="Data.E -= 1" class="btn btn-outline-danger">-1</button>
      </div>
      <div class="col text-center">
        E ..... {{ Data.E }}
      </div>
      <div class="col-auto">
        <button @click.prevent="Data.E += 1" class="btn btn-outline-success">+1</button>
      </div>
    </form>


    <form class="row align-items-center col">
      <div class="col-auto">
        <button @click.prevent="Data.F -= 1" class="btn btn-outline-danger">-1</button>
      </div>
      <div class="col text-center">
        F ..... {{ Data.F }}
      </div>
      <div class="col-auto">
        <button @click.prevent="Data.F += 1" class="btn btn-outline-success">+1</button>
      </div>
    </form>
  </div>

</template>


<script setup>
//import { ref, computed } from 'vue'
import { Data, Settings } from './Storage.js'
const viewportWidth = document.body.clientWidth;
const cubebianchang = Math.min(viewportWidth / 6, 100);
const cubestyle = "width:" + cubebianchang + "px; height:" + cubebianchang + "px"
const cubelongstyle = "width:" + cubebianchang * 5 + "px"
/*
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
*/

function handleChangeLeague() {
  Settings.value.isBlue = !Settings.value.isBlue;
  Data.value.leadsValue = -Data.value.leadsValue;
}  
function myreload(){
  window.location.reload()
}    
</script>
