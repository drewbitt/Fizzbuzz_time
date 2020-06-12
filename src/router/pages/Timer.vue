<template>
  <div class="timer">
    <!-- <router-link :to="{ name: 'home', params: { hasTime: hasTime }}"> -->
    <router-link :to="{ name: 'home' }">
      <button class="top-left back-button" id="back-button">
        &lt; Set Times
      </button>
    </router-link>
    <TimerItem :fizz="fizz" :buzz="buzz" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import TimerItem from "../../components/TimerItem.vue";
import router from "..";
import { useIntervalFn } from "@vueuse/core";

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
  setup(props: Props, context) {
    // Redirect without fizz or buzz
    const { fizz, buzz } = props;

    if (!(fizz && buzz)) {
      router.push({ path: "/" });
    }

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
  left: 20;
  top: 0;
  position: absolute;
}
</style>
