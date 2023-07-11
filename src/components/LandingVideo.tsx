import video from '../assets/landing_video.mp4'

type Props = {
    videoOpened: boolean
}

const LandingVideo = ({ videoOpened }: Props) => {

    return <video
        className={`${videoOpened && "absolute z-20 "}w-full h-full object-cover`}
        src={video}
        autoPlay
        loop
        muted
    />
}

export default LandingVideo
