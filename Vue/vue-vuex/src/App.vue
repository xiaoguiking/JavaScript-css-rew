<template>
  <div id="app">
    <tab :curInx="curInx" @changeTab="changeTab" />
    <page :curInx="curInx" />
  </div>
</template>

<script>
import Tab from "@/components/Tab";
import Page from "@/components/Page";
export default {
  name: "App",
  components: {
    Tab,
    Page
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
