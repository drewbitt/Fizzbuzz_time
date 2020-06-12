<template>
  <div class="fizz-buzz-options">
    <p class="big-label">
      Please enter a fizz and buzz time in seconds.
      <strong>Values should be 2 to 10, inclusive.</strong>
    </p>
    <FizzBuzzOptions v-bind:hasTime=hasTime />
    <router-link :to="{ name: 'timer', params: { fizz: 2, buzz: 3 } }">
      <button>Go to timer ></button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FizzBuzzOptions from "../../components/FizzBuzzOptions.vue";

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
  components: { FizzBuzzOptions },
  setup(props: Props) {
    const hasTime = props.hasTime;
    return {
      hasTime
    }
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
