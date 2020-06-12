<template>
  <div class="timer">
    <router-link :to="{ path: '/' }">
      <button class="top-left back-button" id="back-button">
        &lt; Set Times
      </button>
    </router-link>
    <TimerItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerItem from "../../components/TimerItem.vue";

export default defineComponent({
  components: {
    TimerItem,
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
