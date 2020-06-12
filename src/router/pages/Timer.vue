<template>
  <div class="timer">
    <router-link :to="{ name: 'home', params: { hasTime: hasTime }}">
      <button class="top-left back-button" id="back-button">
        &lt; Set Times
      </button>
    </router-link>
    <TimerItem v-bind:seconds=counter />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import TimerItem from "../../components/TimerItem.vue";
import router from "..";
import { useIntervalFn } from "@vueuse/core";

interface Props {
  fizz: String;
  buzz: String;
}

export default defineComponent({
  components: {
    TimerItem,
  },
  props: {
    fizz: {
      type: String,
      required: true,
    },
    buzz: {
      type: String,
      required: true,
    },
  },
  setup(props: Props, context) {
    // Redirect without fizz or buzz
    if (!(props.fizz && props.buzz)) {
      router.push({ path: "/" });
    }

    const counter = ref(0);

    const { start, stop } = useIntervalFn(() => {
      counter.value++;
    }, 1000);
    stop();

    const hasTimee = computed(() => counter.value > 0);

    return {
      counter
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
