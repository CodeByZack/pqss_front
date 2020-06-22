import React from 'react';
import './style.less';

const MovieDetailBox = (props) => {
  return (
    <div className="movie-detail-box">
      <div className="title-wrapper">
        <div className="title-block">
          <div className="movie-title">
            <div className="movie-title-text">我的老师是传奇</div>
          </div>
          <div className="movie-info">
            <span className="">
              <a
                href="https://movie.douban.com/subject/26303365/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="rating-l">豆瓣</div>
                <div className="rating-r">6.5</div>
              </a>
              2015 ‧ 剧情
            </span>
          </div>
        </div>
        <div className="poster">
          <a
            href="https://movie.douban.com/subject/26303365/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img
              src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2238250858.jpg"
              alt=""
              className=""
            />
          </a>
        </div>
      </div>
      <div className="detail-block">
        <div className="summary">
          <div>
            《STB超级教师》第二季，新学期开始，廖学兵和高二二班的同学们都满怀热情的投入到新学期的学习生活中，然而开学典礼上却传来原校长被换，新校长接管郁金香的消息。紧接着廖学兵被辞退，校董事会之一的贝家提议卖掉郁金香高中换取利润。在多方打探下，众人得知这一切都是贝勇骁的阴谋，在贝晓丹的恳求下，廖学兵
          </div>
        </div>
        <div className="detail-text">
          导演：
          <a target="_blank" rel="noopener noreferrer" className="">
            刘曦
          </a>
        </div>
        <div className="detail-text">
          主演：
          <a
            href="https://movie.douban.com/celebrity/1315665/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            雷牧 /{' '}
          </a>
          <a target="_blank" rel="noopener noreferrer" className="">
            张沐莀 /{' '}
          </a>
          <a target="_blank" rel="noopener noreferrer" className="">
            史元庭 /{' '}
          </a>
          <a
            href="https://movie.douban.com/celebrity/1329445/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            裘恩典
          </a>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailBox;
