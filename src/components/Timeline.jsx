import timelineData from '../data'
import TimelineItem from './TimelineItem'
import React from 'react'


const Timeline = () => timelineData.length > 0 && (
<div className="timeline-container">
    {timelineData.map((data, index) => <TimelineItem data={data} key={index}/>)}
</div>
)
export default Timeline