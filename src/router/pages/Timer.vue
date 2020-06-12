<template>
  <div class="timer-item">
    <router-link :to="{ path: '/' }">
      <button class="back-button">&lt; Set Times</button>
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
.timer-item {
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
</style>
