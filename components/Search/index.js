import React, { useRef } from 'react';
import Router from 'next/router';
import './style.less';
const Search = (props) => {
  const inputRef = useRef();

  const search = (text) => {
    console.log(inputRef.current.value);
    Router.push(`/search?key=${inputRef.current.value}`);
  };

  return (
    <div className="search-box">
      <input
        ref={inputRef}
        type="text"
        placeholder="电影、剧集、动漫、节目……"
        className="search-field"
      />
      <button onClick={search} className="search-button">
        <span className="iconfont icon-search"></span>
      </button>
    </div>
  );
};
export default Search;
