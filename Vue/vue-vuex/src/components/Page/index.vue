<template>
  <div>
    {{ content[curInx] }}
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {
    curInx: Number
  },
  data() {
    return {
      content: ["页面1", "页面2", "页面3", "页面4"]
    };
  }
};
</script>

<style scoped></style>
