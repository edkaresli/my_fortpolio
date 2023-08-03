import { Routes, Route, Outlet } from 'react-router-dom';

import Video, { VideoProps } from "../components/Video";


interface VideosProps {
  videos: VideoProps[];
}

const Videos = ({videos}: VideosProps) => {
  return (
    <div 
      className="flex flex-row flex-wrap"
      id="videos-container"
    >
      {(videos && videos.length > 0) ? videos.map((video) => (
       
        <Video {...video} key={video.videoId}/>
       
      )) : <div>No videos</div>}
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Videos;