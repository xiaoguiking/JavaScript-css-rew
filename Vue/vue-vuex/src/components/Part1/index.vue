<template>
  <div>
    <h1>我的信息: {{ myInfo }}</h1>
  </div>
</template>

<script>
export default {
  name: "MyPart",
  data() {
    return {
      myInfo: "无"
    };
  },
  mounted() {
    this.myInfo = this.$store.getters.getMyInfo;
    console.log(this.myInfo);
  }
};
</script>

<style scoped></style>
