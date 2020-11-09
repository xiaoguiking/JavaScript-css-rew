<template>
  <div id="app">
    <!-- <tab />
    <page /> -->
    <!-- <my-part /> -->
    <my-part2 />
  </div>
</template>

<script>
// import Tab from "@/components/Tab";
// import Page from "@/components/Page";
// import MyPart from "@/components/Part1";
import MyPart2 from "@/components/Part2";
export default {
  name: "App",
  components: {
    // Tab,
    // Page,
    // MyPart,
    MyPart2
  },
  data() {
    return {
      curInx: 0
    };
  },
  methods: {
    changeTab(index) {
      this.curInx = index;
    }
  }
};
</script>

<style scoped></style>
