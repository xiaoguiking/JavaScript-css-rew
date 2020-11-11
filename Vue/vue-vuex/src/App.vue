<template>
  <div id="app">
    <!-- <tab />
    <page /> -->
    <!-- <my-part /> -->
    <!-- <my-part2 /> -->
    <my-part3 />
    <my-part4 />
  </div>
</template>

<script>
// import Tab from "@/components/Tab";
// import Page from "@/components/Page";
// import MyPart from "@/components/Part1";
// import MyPart2 from "@/components/Part2";

import MyPart3 from "@/components/Part3";
import MyPart4 from "@/components/Part3/index2.vue";

export default {
  name: "App",
  components: {
    // Tab,
    // Page,
    // MyPart,
    // MyPart2,
    MyPart3,
    MyPart4
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
