import tpl from "./index.tpl";
// import "./index.sass";

export default () => {
  return {
    name: "nav",
    tpl(data) {
      const oNav = document.createElement('div');
      oNav.className = 'nav';
      let list = "";
      data.forEach((item, index) => {
        list += tpl.replace(/{{.*?}}/g, (node, key) => {
          return {
            navClass: !index ? "item current" : "item",
            city_name: item.city_name,
          }[key];
        });
      });
      oNav.innerHTML = list;
      return oNav;
    },
  };
};
