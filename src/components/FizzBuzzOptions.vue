<template>
  <div class="fizzBuzzOptions">
    <p class="instructions">
      Please enter a fizz and buzz time in seconds.
      <strong>Values should be 2 to 10, inclusive.</strong>
    </p>
    <div class="fizzBuzzOptionsForms">
      <label for="fizz">Fizz:</label>
      <input id="fizz" name="fizz" type="text" />
      <label for="buzz">Buzz</label>
      <input id="buzz" name="buzz" type="text" />
    </div>
    <router-link :to="{path: '/timer'}">
      <button>Go to timer ></button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.fizzBuzzOptions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fizzBuzzOptionsForms {
  margin-top: 40px;
}

label {
  font-size: 18px;
  margin-right: 5px;
}

.instructions {
  font-size: 30px;
}

input {
  width: 100px;
  padding: 8px 16px;
  border: 1px solid #707070;
  background-color: #f5f5f5;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 40px;
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
