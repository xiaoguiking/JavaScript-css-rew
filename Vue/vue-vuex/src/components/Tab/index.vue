<template>
  <div>
    <a
      href="javascript:;"
      :class="[{ current: curInx === 0 }]"
      @click="setCurInx(0)"
      >选项1</a
    >

    <a
      href="javascript:;"
      :class="[{ current: curInx === 1 }]"
      @click="setCurInx(1)"
      >选项2</a
    >

    <a
      href="javascript:;"
      :class="[{ current: curInx === 2 }]"
      @click="setCurInx(2)"
      >选项3</a
    >

    <a
      href="javascript:;"
      :class="[{ current: curInx === 3 }]"
      @click="setCurInx(3)"
      >选项4</a
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Tab",
  computed: {
    ...mapState(["curInx"])
  },
  methods: {
    ...mapMutations(["setCurInx"])
  }
};
</script>

<style scoped>
a {
  margin-right: 10px;
}
.current {
  text-decoration: none;
  color: #000;
}
</style>
