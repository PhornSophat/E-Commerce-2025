<template>
  <HeaderNav class="fixed top-0 z-20 px-[8vw]" />
  <RouterView />
</template>

<script>

import { RouterView } from 'vue-router';
import HeaderNav from './components/HeaderNav.vue';

export default {
  name: 'app',
  components: {
    HeaderNav,
  },
}
</script>

<style>

</style>