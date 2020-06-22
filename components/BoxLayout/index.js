import React from "react";
import "./style.less";
const BoxLayout = (props) => {
  const { title,style } = props;
  return (
    <div className="box-layout" style={style}>
      <div className="title">
        <div class="label">
          <span class="label-text">{title}</span>
          <div class="label-bg label-bg-front"></div>
          <div class="label-bg label-bg-back"></div>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default BoxLayout;
