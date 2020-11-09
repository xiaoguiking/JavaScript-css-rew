<template>
  <div>
    <h1>vue</h1>
  </div>
</template>

<script>
export default {
  name: "MyPart2",
  mounted() {
    this.$store.dispatch("getDate", {
      id: 12,
      order: 15
    });
  }
};
</script>

<style scoped></style>
