<template>
  <div id="app">
    <!-- <tab />
    <page /> -->
    <my-part />
  </div>
</template>

<script>
// import Tab from "@/components/Tab";
// import Page from "@/components/Page";
import MyPart from "@/components/Part1";
export default {
  name: "App",
  components: {
    // Tab,
    // Page,
    MyPart,
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
