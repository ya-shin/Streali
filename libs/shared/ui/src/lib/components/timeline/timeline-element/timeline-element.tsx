import { Milliseconds, Pixels } from '@streali/shared/types';
import { pixelToTime, timeToPixel } from '@streali/shared/utils';
import interact from 'interactjs';
import { useEffect, useRef } from 'react';
import Icon from '../../icon/icon';

export interface TimelineElementProps {
  onElementMove?: (startTime: Milliseconds) => void;
  onElementResize?: (duration: Milliseconds) => void;
  type: 'image' | 'video' | 'text' | 'sound' | 'lottie';
  title: string;
  duration?: Milliseconds;
  startTime?: Milliseconds;
  totalTime: Milliseconds;
  onClick?: () => void;
}

export function TimelineElement(props: TimelineElementProps) {
  const {
    onElementMove,
    onElementResize,
    type,
    title,
    duration,
    startTime,
    totalTime,
    onClick,
  } = props;
  const containerDrag = useRef<HTMLDivElement>(null);

  const elementColor = {
    image: 'bg-blue-500',
    video: 'bg-red-500',
    text: 'bg-green-500',
    sound: 'bg-yellow-500',
    lottie: 'bg-purple-500',
  };

  const elementIcon = {
    image: 'image-line',
    video: 'film-line',
    text: 'text',
    sound: 'music-fill',
    lottie: 'pencil-ruler-2-line',
  };

  const initInteract = () => {
    const container = interact('.draggable');

    container
      .draggable({
        listeners: {
          move: moveElement,
        },
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
          }),
        ],
      })
      .resizable({
        edges: {
          left: false,
          right: true,
          bottom: false,
          top: false,
        },
        listeners: {
          move: resizeElement,
        },
      });
  };

  const resizeElement = (event: any) => {
    Object.assign(event.target.style, {
      width: `${event.rect.width}px`,
    });
    onElementResize && onElementResize(pixelToTime(event.rect.width as Pixels));
  };

  const moveElement = (event: any) => {
    const target = event.target;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    target.style.left = `${x}px`;
    target.setAttribute('data-x', x);
    onElementMove && onElementMove(pixelToTime(x as Pixels));
  };

  useEffect(() => {
    initInteract();
  }, []);

  return (
    <div
      className="w-full h-16 bg-black py-3"
      style={{
        width: `${timeToPixel(totalTime)}px`,
      }}
      ref={containerDrag}
    >
      <div
        className={`h-full w-20 rounded draggable relative flex items-center px-1.5 overflow-hidden gap-2 ${elementColor[type]}`}
        style={{
          transform: `translateX(${timeToPixel(startTime as Milliseconds)}px)`,
          width: `${timeToPixel(duration as Milliseconds)}px`,
        }}
        onClick={onClick}
      >
        <div className="w-7 h-7 rounded-sm flex items-center justify-center bg-white shrink-0">
          <Icon name={elementIcon[type]} className="text-black" />
        </div>
        <p className="whitespace-nowrap font-bold text-sm">{title}</p>
      </div>
    </div>
  );
}

export default TimelineElement;
