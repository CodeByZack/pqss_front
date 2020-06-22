import React, { useState, useEffect } from "react";
import Store from "@/store";
import "./style.less";

const defaultNavs = [
  {
    title: "茶杯狐订阅号",
    icon: "icon-wechatsubscriptionnum",
  },
  {
    title: "投喂茶杯狐",
    icon: "icon-food",
  },
  {
    title: "豆瓣插件",
    icon: "icon-plugin-copy",
  },
];

const FloatLinks = (props) => {
  const [navs, setNavs] = useState(defaultNavs);
  const { windowWidth } = Store.useContainer();

  useEffect(()=>{
    
    if(windowWidth<=1175 && windowWidth >=1050){
      setNavs(defaultNavs.slice(0,2));
    }else if(windowWidth<=1050 && windowWidth >=910){
      setNavs(defaultNavs.slice(0,1));
    }else if(windowWidth<=910 && windowWidth >=0){
      setNavs([]);
    }else{
      setNavs(defaultNavs);
    }
  },[windowWidth]);
  return (
    <ul className="navs">
      {navs.map((nav) => (
        <li className="">
          <div className="nav">
            <span className={`iconfont ${nav.icon}`}></span>
            <span className="nav-title">{nav.title}</span>
            {/* <span className="iconfont icon-hot"></span> */}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default FloatLinks;
