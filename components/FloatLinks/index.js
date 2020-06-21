import React from "react";
import './style.less';

const FloatLinks = (props) => {
  return (
    <ul class="navs">
      <li class="">
          <div class="nav">
            <span class="iconfont icon-wechatsubscriptionnum"></span>
            <span class="nav-title">茶杯狐订阅号</span>
            <span class="iconfont icon-hot"></span>
          </div>
      </li>
      <li class="">
        <div class="nav">
          <span class="iconfont icon-food"></span>
          <span class="nav-title">投喂茶杯狐</span>
        </div>
      </li>
      <li class="">
        <div class="nav">
          <span class="iconfont icon-plugin-copy"></span>
          <span class="nav-title">豆瓣插件</span>
        </div>
      </li>
    </ul>
  );
};
export default FloatLinks;
