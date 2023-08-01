type Props = {
    src: string,
    fallbackVideo: string,
    fallbackImage: string,
    className?: string
}

const Video = ({ src, fallbackVideo, fallbackImage, className }: Props) => {

    return (
        <video poster={fallbackImage} autoPlay playsInline loop muted className={className}>
            <source src={src} type="video/webm" />
            <source src={fallbackVideo} type="video/mp4" />
        </video>
    )
}

export default Video
