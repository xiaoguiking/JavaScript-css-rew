<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="setCount(4)">点击我增加4</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "MyPart3",

  computed: {
    ...mapState("counter1", {
      count: state => state.count
    })
  },
  methods: {
    ...mapMutations("counter1", [
      "setCount" //also supports payload `this.nameOfMutation(amount)`
    ])
  }
};
</script>

<style scoped></style>
