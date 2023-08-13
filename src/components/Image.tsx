type Props = {
    src: string
    fallback: string
    type?: string
    alt: string
    className?: string
}

const Image = ({
    src,
    fallback,
    type = "image/webp",
    alt,
    className,
}: Props) => {
    return (
        <picture>
            <source srcSet={src} type={type} className={className} />
            <img src={fallback} alt={alt} className={className} />
        </picture>
    )
}

export default Image
