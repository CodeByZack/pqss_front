import React from 'react';
import './style.less';
const SearchResultList = (props) => {
  const {
    data = [
      1,
      2,
      3,
      4,
      5,
      1,
      2,
      3,
      4,
      5,
      1,
      2,
      3,
      4,
      5,
      1,
      2,
      3,
      4,
      5,
      1,
      2,
      3,
      4,
      5,
      1,
      2,
      3,
      4,
      5,
    ],
  } = props;
  return (
    <div className="search-result-list">
      <ul>
        {data.map((item) => {
          return (
            <li className="search-result-item">
              <div className="title">
                <em>我的老师是传奇</em> 在线播放 - 太初电影
              </div>
              <div className="info-wrapper">
                <div className="tag tag-source">太初电影</div>
                <div className="tag tag-type">在线播放</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SearchResultList;
