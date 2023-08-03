import { VideoProps } from "../components/Video";

const videos: VideoProps[] = [
  {
    videoId: '1',
    videoName: 'Learn TypeScript in 2023',
    description: `This is a crash course for beginners to teach you programming in TypeScript.
    It assumes you either have some knowledge of JavaScript or some knowledge of other programming languages like C++, C#, or Java.
    The course is a university lecture style.`,
    videoUrl: 'https://www.youtube.com/embed/2qS-UP3Z6rg',
  },
  {
    videoId: '2',
    videoName: 'How-to upload files using Node/Express',
    description: `This is a tutorial on how to upload files from your client application to a Node server.
    I'm going to use an Express server with a middleware called express-fileupload.`,
    videoUrl: 'https://www.youtube.com/embed/ybANgXf9mMs'
  },
  {
    videoId: '3',
    videoName: 'Parsing CSV Files Using NodeJS and Storing Data in PostgreSQL',
    description: `Parsing CSV files and processing data is an important skill, often required from the developer.
    I'm attempting to show you a simple way to this and to store the data into a relational database such as PostgreSQL.`,
    videoUrl: 'https://www.youtube.com/embed/MXab-qdd1os',
  }
]

export default videos;