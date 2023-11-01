<template>
    <div class="mb-2 table table-bordered text-center">
      <span v-bind:class="Settings.color">{{ Settings.league }}</span>
    </div>
  
    <div class="col-auto table table-bordered text-center">
      <label for="leads" class="form-label">分差：{{ Data.leadsValue }}</label>
    </div>
  
    <p class="mt-3 table table-bordered text-center">放置进度</p>
    <div class="row gap-1 mb-1 mx-auto" v-bind:style="cubelongstyle">
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc11.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc12.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc13.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc14.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc15.color"></div>
    </div>
    <div class="row gap-1 mb-1 mx-auto" v-bind:style="cubelongstyle">
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc21.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc22.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc23.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc24.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc25.color"></div>
    </div>
    <div class="row gap-1 mb-1 mx-auto" v-bind:style="cubelongstyle">
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc31.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc32.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc33.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc34.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc35.color"></div>
    </div>
    <div class="row gap-1 mb-1 mx-auto" v-bind:style="cubelongstyle">
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc41.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc42.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc43.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc44.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc45.color"></div>
    </div>
    <div class="row gap-1 mb-1 mx-auto" v-bind:style="cubelongstyle">
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc51.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc52.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc53.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc54.color"></div>
      <div v-bind:style="cubestyle" v-bind:class="Data.placed.loc55.color"></div>
    </div>
  
    <div class="row mt-2">
  
      <form class="row align-items-center col">
        <div class="col text-center">
          A: {{ Data.A }}
        </div>
      </form>
  
  
      <form class="row align-items-center col">
        <div class="col text-center">
          B: {{ Data.B }}
        </div>
      </form>
  
  
      <form class="row align-items-center col">
        <div class="col text-center">
          C:{{ Data.C }}
        </div>
      </form>
    </div>
  
    <div class="row my-2">
  
      <form class="row align-items-center col">
        <div class="col text-center">
          D: {{ Data.D }}
        </div>
      </form>
  
  
      <form class="row align-items-center col">
        <div class="col text-center">
          E: {{ Data.E }}
        </div>
      </form>
  
  
      <form class="row align-items-center col">
        <div class="col text-center">
          F:{{ Data.F }}
        </div>
      </form>
    </div>
  </template>
  
  
  <script setup>
  //import { ref, computed } from 'vue'
  import { Data, Settings } from './Storage.js'
  const viewportWidth = document.body.clientWidth;
  const cubebianchang = Math.min(viewportWidth / 10, 50);
  const cubestyle = "width:" + cubebianchang + "px; height:" + cubebianchang + "px"
  const cubelongstyle = "width:" + cubebianchang * 5 + "px"
  </script>