import React from 'react';
import './style.less';
const Search = (props)=>{
    return (
        <div className="search-box">
            <input type="text" placeholder="电影、剧集、动漫、节目……" className="search-field"/>
            <button className="search-button"><span class="iconfont icon-search"></span></button>
        </div>
    );
}
export default Search;