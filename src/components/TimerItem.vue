<template>
  <div class="timer-item">
    <p class="big-label">Time Elapsed</p>
    <div class="timer-box">
      <p class="timer-text">TIME</p>
    </div>
    <div class="timer-buttons">
      <button id="button-start">Start</button>
      <button id="button-stop">Stop</button>
    </div>
    <p id="message">Fizz</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.timer-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

button {
  width: 200px;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

#button-start {
  margin-right: 30px;
  background-color: #5CCC87;
}

#button-stop {
  background-color: #ee6666;
}

.timer-buttons {
  margin-top: 50px;
}

.timer-box {
  font-size: 30px;
  font-weight: bold;
  border: 2px solid #707070;
  border-radius: 5px;
  width: 640px;
  background-color: #f5f5f5;
  padding: 28px;
  margin-top: 50px;
}

#message {
  margin-top: 65px;
  font-size: 80px;
  font-weight: bold;
}

</style>
