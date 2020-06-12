<template>
  <div class="timer">
    <router-link :to="{ name: 'home' }">
      <button class="top-left back-button" id="back-button">
        &lt; Set Times
      </button>
    </router-link>
    <TimerItem />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useIntervalFn } from "@vueuse/core";
import router from "..";
import TimerItem from "../../components/TimerItem.vue";

interface Props {
  fizz?: String;
  buzz?: String;
}

export default defineComponent({
  components: {
    TimerItem,
  },
  props: {
    fizz: String,
    buzz: String,
  },
  setup(props: Props) {
    // Redirect without fizz or buzz
    const { fizz, buzz } = props;

    return {
      fizz,
      buzz,
    };
  },
});
</script>

<style scoped>
.timer {
  display: flex;
  flex-direction: column;
}

.back-button {
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

.top-left {
  align-self: flex-start;
  left: 20px;
  top: 0;
  position: absolute;
}
</style>
