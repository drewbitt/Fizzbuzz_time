<template>
  <div class="fizz-buzz-options">
    <p class="big-label">
      Please enter a fizz and buzz time in seconds.
      <strong>Values should be 2 to 10, inclusive.</strong>
    </p>
    <FizzBuzzOptions
      @set:fizz="fizz = $event"
      @set:buzz="buzz = $event"
    />
    <router-link
      :to="{ name: 'timer', params: { fizz: `${fizz}`, buzz: `${buzz}` } }"
    >
      <button>Go to timer ></button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FizzBuzzOptions from "../../components/FizzBuzzOptions.vue";


export default defineComponent({
  components: { FizzBuzzOptions },
  setup() {
    // Create fizz and buzz. Values will be overridden when listening to event
    let fizz = 0;
    let buzz = 0;

    return {
      fizz,
      buzz,
    };
  },
});
</script>

<style scoped>
.fizz-buzz-options {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin-top: 50px;
  border: 2px solid #707070;
  color: #707070;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
}
</style>
