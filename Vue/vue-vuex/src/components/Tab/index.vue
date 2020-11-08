<template>
  <div>
    <a
      href="javascript:;"
      :class="[{ current: curInx === 0 }]"
      @click="changeTab(0, '选项0')"
      >选项1</a
    >

    <a
      href="javascript:;"
      :class="[{ current: curInx === 1 }]"
      @click="changeTab(1, '选项1')"
      >选项2</a
    >

    <a
      href="javascript:;"
      :class="[{ current: curInx === 2 }]"
      @click="changeTab(2, '选项2')"
      >选项3</a
    >

    <a
      href="javascript:;"
      :class="[{ current: curInx === 3 }]"
      @click="changeTab(3, '选项3')"
      >选项4</a
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Tab",
  computed: {
    ...mapState(["curInx"])
  },
  methods: {
    // ...mapMutations(["setCurInx"])
    changeTab(index, text) {
      this.$store.commit("setCurInx", {
        index,
        text
      });
    }
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
