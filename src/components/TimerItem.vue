<template>
  <div class="timer-item">
    <p class="big-label">Time Elapsed</p>
    <div class="timer-box">
      <p class="timer-text">
        {{ formattedTime }}
      </p>
    </div>
    <div class="timer-buttons">
      <button id="button-start" v-on:click="startTime()">Start</button>
      <button id="button-stop" v-on:click="stopTime()">Stop / Reset</button>
    </div>
    <p id="message">{{ messageFizzBuzz }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { dataStore } from "../store";

export default defineComponent({
  setup() {
    // Use store for persistance
    const fizz = dataStore.getState().fizz;
    const buzz = dataStore.getState().buzz;

    const counter = ref(0);
    // Load once from store
    counter.value = dataStore.getState().counter;

    // Vueuse counter for convenience
    const { start, stop } = useIntervalFn(() => {
      // Use store to persist, local counter ref for display
      counter.value++;
      dataStore.setCounter(counter.value);
    }, 1000);
    stop();

    const counterOngoing = ref(false);

    const startTime = () => {
      if (!counterOngoing.value) {
        start();
        counterOngoing.value = true;
      }
    };

    const stopTime = () => {
      if (counterOngoing.value) {
        stop();
        counterOngoing.value = false;
      } else if (counter.value > 0) {
        // Pressed stop with an existing counter
        counter.value = 0;
        dataStore.setCounter(0);
      }
    };

    // Computed values

    const formattedTime = computed(() => {
      // Returns a string ref in the format of in hh:mm:ss
      // https://stackoverflow.com/a/54167877
      const HOUR = 60 * 60;
      const MINUTE = 60;

      var minutesInSeconds = counter.value % HOUR;
      var hours = Math.floor(counter.value / HOUR);
      var minutes = Math.floor(minutesInSeconds / MINUTE);
      var seconds = minutesInSeconds % MINUTE;

      return (
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0")
      );
    });

    const messageFizzBuzz = computed(() => {
      let message = "";
      // If either are >10 or <2, won't print neither fizz nor buzz
      if (fizz > 1 && buzz > 1 && counter.value !== 0) {
        if (counter.value % fizz === 0) message += "Fizz";
        if (counter.value % buzz === 0) message += "Buzz";
      }
      return message;
    });

    return {
      counter,
      startTime,
      stopTime,
      formattedTime,
      messageFizzBuzz,
    };
  },
});
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
  background-color: #5ccc87;
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
