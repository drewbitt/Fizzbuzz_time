<template>
  <div class="fizz-buzz-options-form">
    <label for="fizz">Fizz:</label>
    <input id="fizz" v-model="fizz" name="fizz" type="text" :disabled="disabledInputCheck" />
    <label for="buzz">Buzz</label>
    <input id="buzz" v-model="buzz" type="text" :disabled="disabledInputCheck" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { dataStore } from "../store";


export default defineComponent({
  setup(_, { emit }) {
    // Use fizz and buzz computed values for
    // emitting an event and accessing and updating store
    const fizz = computed({
      get: () =>
        dataStore.getState().fizz > 1 ? dataStore.getState().fizz : "",
      set: (value: any) => {
        emit("set:fizz", value);
        dataStore.setFizz(value);
      },
    });

    const buzz = computed({
      get: () => dataStore.getState().buzz > 1 ? dataStore.getState().buzz: "",
      set: (value: any) => {
        emit("set:buzz", value);
        dataStore.setBuzz(value);
      },
    });

    const disabledInputCheck = computed(() => dataStore.getState().counter > 0);

    return {
      fizz,
      buzz,
      disabledInputCheck
    };
  },
});
</script>

<style scoped>
.fizz-buzz-options-form {
  margin-top: 40px;
}

label {
  font-size: 18px;
  margin-right: 5px;
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
</style>
