import React, { Fragment } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const tabbarArr = [
  {
    img: "icon-yemian-copy-copy-copy",
    text: "首页	",
    link: "/home",
  },
  {
    img: "icon-che",
    text: "购物车",
    link: "car",
  },
  {
    img: "icon-toggle",
    text: "菜单",
    link: "category",
  },
  {
    img: "icon-yonghu",
    text: "用户",
    link: "/my",
  },
];

const Tabbar = (WrappedComponent) =>
  function Tabbar() {
    // const [index, setIndex] = useState(0);
    // const handleOnchange = (index) =>  {
    // 	setIndex(index);
    // }
    const url = window.location.href;
    return (
      <Fragment>
        <div className="tabbar">
          <div className="tabbar-children">
            <WrappedComponent />
          </div>
          <div className="tabbar-content">
            {tabbarArr.map((item, i) => {
              return (
                <Link
                  to={item.link}
                  className={
                    "tabbar-item" +
                    (url.indexOf(item.link) > -1 ? " active" : "")
                  }
                  key={i}
                >
                  <div className={"iconfont" + item.img} />
                  <div>{item.text}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  };

export default Tabbar;
