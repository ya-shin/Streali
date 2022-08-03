import Link from 'next/link';

export interface AvatarProps {
  link?: string;
  size?: number;
  src?: string;
  tag?: string;
}

export function Avatar(props: AvatarProps) {
  const { link, size = 40, src, tag } = props;

  const image = () => {
    if (src) {
      return (
        <img
          style={{ width: size + 'px', height: size + 'px' }}
          src={src}
          alt="avatar"
          className="rounded-full"
        />
      );
    } else if (tag) {
      return (
        <span
          style={{ width: size + 'px', height: size + 'px' }}
          className="rounded-full bg-dark-300 flex items-center justify-center text-xs leading-none"
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
      <Link href={link}>
        <a>{image()}</a>
      </Link>
    );
  } else {
    return image();
  }
}

export default Avatar;
