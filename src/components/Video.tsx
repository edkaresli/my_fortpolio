import React from 'react'
import { useParams } from 'react-router-dom';

import './Video.css'; 

export interface VideoProps {
  videoId: string;
  videoName: string;
  description: string;
  videoUrl: string;
}

const Video: React.FC<VideoProps> = ({videoId: string}: VideoProps) => {
  const param = useParams();
  const videoName = param.videoName;
  const description = param.description;
  const videoUrl = param.videoUrl;
  return (
    <div className='video-badge-light video-badge'>
      <div>{videoName}</div>
      <div>{description}</div>
      <iframe 
        width="280" height="158"            
        src={videoUrl}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      >            
      </iframe>
    </div>
  )
}

export default Video;