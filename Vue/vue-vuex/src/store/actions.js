import axios from "axios";

export default {
  getDate(ctx, payload) {
    const { order, id } = payload;
    axios
      .get(`https://mock.yonyoucloud.com/mock/16130/vuex/order/list`, {
        params: {
          order,
          id
        }
      })
      .then(response => {
        // const { status, ...data } = response;
        console.log(response.data.result);
        ctx.commit("setDate", response.data.result.item_list);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
