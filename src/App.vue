<script setup>
import EditPage from './components/EditPage.vue'
import ViewPage from './components/ViewPage.vue'
import NotFound from './components/NotFound.vue'
import { ref, computed } from 'vue'
const routes = {
  '/': EditPage,
  '/view': ViewPage
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/">Scoring 6907</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#/">EditPage</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/view">ViewPage</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <component :is="currentView" />
  </div>
</template>