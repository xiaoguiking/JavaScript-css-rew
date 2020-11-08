<template>
  <div>
    {{ content[curInx] }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Page",
  computed: {
    ...mapState(["curInx"])
  },
  data() {
    return {
      content: ["页面1", "页面2", "页面3", "页面4"]
    };
  }
};
</script>

<style scoped></style>
