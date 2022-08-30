import Link from 'next/link';

export interface AvatarProps {
  link?: string;
  size?: number;
  src?: string;
  tag?: string;
  className?: string;
}

export function Avatar(props: AvatarProps) {
  const { link, size = 40, src, tag, className } = props;

  const image = () => {
    if (src) {
      return (
        <img
          style={{ width: size + 'px', height: size + 'px' }}
          src={src}
          alt="avatar"
          className={`rounded-full ${className}`}
        />
      );
    } else if (tag) {
      return (
        <span
          style={{ width: size + 'px', height: size + 'px' }}
          className={`rounded-full bg-dark-300 flex items-center justify-center text-xs leading-none ${className}`}
        >
          {tag}
        </span>
      );
    } else {
      return null;
    }
  };

  if (link) {
    return (
      <Link href={link} className={className}>
        <a>{image()}</a>
      </Link>
    );
  } else {
    return image();
  }
}

export default Avatar;
