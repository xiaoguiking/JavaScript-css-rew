<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" placeholder="请搜索" @input="searchAction($event)" />
    <ul v-if="searchRes.length > 0">
      <li v-for="(video, index) of searchRes" :key="index">
        <div>
          <h3>{{ video.title }}</h3>
          <img :src="video.img_url" alt="" />
          <p>{{ video.content }}</p>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(video, index) of videos" :key="index">
        <div>
          <h3>{{ video.title }}</h3>
          <img :src="video.img_url" alt="" />
          <p>{{ video.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { throttle } from "@/libs/utils";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      videos: [],
      searchRes: [],
    };
  },
  created() {
    var self = this;
    axios
      .get("https://mock.yonyoucloud.com/mock/15866/wisemess/film/h5")
      .then(function(response) {
        console.log(response.data);
        self.videos = response.data.videos;
        console.log(self.videos);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    searchAction: throttle(function(e) {
      console.log(e.target.value);
      const inputValue = e.target.value;
      this.searchRes = this.videos.filter((item) => {
        if (item.title.includes(inputValue)) {
          return item;
        }
      });
      console.log(this.searchRes);
    }, 5000),
  },
};
</script>

<style scoped>
input {
  width: 280px;
}
ul li {
  list-style: none;
}
img {
  width: 200px;
  height: 200px;
}
</style>
