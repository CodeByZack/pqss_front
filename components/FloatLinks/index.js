import React from "react";
import './style.less';

const FloatLinks = (props) => {
  return (
    <ul className="navs">
      <li className="">
          <div className="nav">
            <span className="iconfont icon-wechatsubscriptionnum"></span>
            <span className="nav-title">茶杯狐订阅号</span>
            <span className="iconfont icon-hot"></span>
          </div>
      </li>
      <li className="">
        <div className="nav">
          <span className="iconfont icon-food"></span>
          <span className="nav-title">投喂茶杯狐</span>
        </div>
      </li>
      <li className="">
        <div className="nav">
          <span className="iconfont icon-plugin-copy"></span>
          <span className="nav-title">豆瓣插件</span>
        </div>
      </li>
    </ul>
  );
};
export default FloatLinks;
