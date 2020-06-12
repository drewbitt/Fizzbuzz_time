<template>
  <div class="fizz-buzz-options-form">
    <label for="fizz">Fizz:</label>
    <input id="fizz" name="fizz" type="text" v-bind:disabled=hasTime />
    <label for="buzz">Buzz</label>
    <input id="buzz" name="buzz" type="text" v-bind:disabled=hasTime />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Props {
  hasTime?: Boolean;
}

export default defineComponent({
  props: {
    hasTime: {
      type: Boolean,
      value: false
    }
  },
  setup(props: Props) {
    const hasTime = props.hasTime;
    return {
      hasTime
    }
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
