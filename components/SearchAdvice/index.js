import React from "react";
import './style.less';
const SearchAdvice = (props) => {
  return (
    <div className="search-advice">
      <ul className="names">
        <li className="title">搜索其他片名：</li>
        <li className="name">
          <span className="">我的老师是传奇</span>
        </li>
        <li className="name">
          <span className="">STB超级教师 第二季</span>
        </li>
        <li className="name">
          <span className="">超级教师2</span>
        </li>
      </ul>
    </div>
  );
};
export default SearchAdvice;
