<template>
  <div id="app">
    <FizzBuzzOptions />
  </div>
</template>

<script lang="ts">
import FizzBuzzOptions from './components/FizzBuzzOptions.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    FizzBuzzOptions
  }
});
</script>
