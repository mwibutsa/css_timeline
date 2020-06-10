import React from "react";

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.time}</time>
      <p>{data.date}</p>
      {data.link && (
        <a href={data.link.url} target="blank" rel="noopener noreferrer">
          {data.text}
        </a>
      )}
      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItem;
