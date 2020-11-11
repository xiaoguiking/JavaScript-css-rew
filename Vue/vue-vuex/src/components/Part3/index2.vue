<template>
  <div>
    <h1>count2: {{ count }}</h1>
    <button @click="setCount(10)">增加10</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "MyPart4",
  computed: {
    ...mapState("counter2", {
      count: (state) => state.count,
    }),
  },
  methods: {
    ...mapMutations("counter2", ["setCount"]),
  },
};
</script>

<style scoped></style>
