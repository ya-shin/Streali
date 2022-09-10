import { Pixels } from '@streali/shared/types';

export interface AlertImageProps {
  src: string;
  width: Pixels;
  height: Pixels;
  posX: Pixels;
  posY: Pixels;
}

export function AlertImage(props: AlertImageProps) {
  const { src, width, height, posX, posY } = props;

  return (
    <img
      className="draggable hover:outline hover:outline-1 hover:outline-white/30 transition-colors absolute"
      src={src}
      alt="img"
      style={{
        width: width,
        height: height,
        transform: `translate(${posX}px, ${posY}px)`,
      }}
      data-x={posX}
      data-y={posY}
    />
  );
}

export default AlertImage;
