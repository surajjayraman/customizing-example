import ReactPlayer from "react-player/youtube";
const MyVideo = () => {
    const vidUrl = "https://www.youtube.com/watch?v=ysz5S6PUM-U";
    return (
        <div>
            <ReactPlayer 
                playing={false}
                url={vidUrl}
                volume={0} />
        </div>
      
    );
  };

export default MyVideo;  