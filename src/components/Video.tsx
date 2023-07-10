import video from '../assets/landing_video.mp4'

const Video = () => {

    return <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
    />
}

export default Video
