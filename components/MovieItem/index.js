import React from 'react';
import './style.less';

const MovieItem = (props) => {
  return (
    <div className="movie-item">
      <img
        src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2604552976.jpg"
        alt=""
        className="movie-post"
      />
      <div className="movie-info">
        <div className="movie-title">誓血五人组</div>
        <div className="allstar allstar30"></div>
        <div className="movie-rating">6.1</div>
        <div className="movie-text">
          2020 / 剧情 / 战争 / 斯派克·李 / 德尔罗伊·林多 / 乔纳森·梅杰斯 /
          克拉克·彼得斯
        </div>
      </div>
    </div>
  );
};
export default MovieItem;
