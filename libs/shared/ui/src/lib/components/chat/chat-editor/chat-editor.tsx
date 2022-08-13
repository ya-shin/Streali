import { useRef } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import Grid from './grid';
import interact from 'interactjs';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

export interface ChatEditorProps {
  height: number;
  width: number;
  align: 'left' | 'right';
  elements: {
    element: React.ReactElement;
    posX: number;
    posY: number;
    fullWidth: boolean;
  }[];
  onElementDrag?: (
    index: number,
    posX: number,
    posY: number,
    elementWidth: number,
    elementHeight: number
  ) => void;
}

export function ChatEditor(props: ChatEditorProps) {
  const {
    height = 200,
    width = 500,
    align = 'right',
    elements,
    onElementDrag,
  } = props;

  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const initInteract = () => {
    const container = interact('.draggable');

    container.draggable({
      listeners: {
        move: moveElement,
        end: endElement,
      },
    });
  };

  const initWidth = () => {
    elementsRef.current.forEach((element, index) => {
      if (element) {
        const fullWidth = elements[index].fullWidth;
        const posX = elements[index].posX;
        const posY = elements[index].posY;
        element.style.transform = `translateX(${posX}px) translateY(${posY}px)`;

        if (fullWidth) {
          elementWidth(element, fullWidth, align);
        }
      }
    });
  };

  const endElement = (event: any) => {
    const target = event.target;
    if (target) {
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      restrictElement(target, x, y);
    }
  };

  const moveElement = (event: any) => {
    const target = event.target;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    const index = target.getAttribute('data-index');
    onElementDrag &&
      onElementDrag(index, x, y, target.offsetWidth, target.offsetHeight);

    target.style.transform = `translateX(${x}px) translateY(${y}px)`;

    restrictElement(target, x, y);

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    const isFullWidth = target.getAttribute('data-fullwidth') === 'true';
    const align = target.getAttribute('data-align');
    if (isFullWidth) {
      elementWidth(target, true, align);
    }
  };

  const restrictElement = (element: HTMLElement, x: number, y: number) => {
    const currentWidth = element.offsetWidth;
    const currentHeight = element.offsetHeight;

    if (x >= width - currentWidth) {
      element.style.transform = `translateX(${
        width - currentWidth
      }px) translateY(${y}px)`;
    }

    if (x < 0) {
      element.style.transform = `translateX(0px) translateY(${y}px)`;
    }

    if (y >= height - currentHeight) {
      element.style.transform = `translateX(${x}px) translateY(${
        height - currentHeight
      }px)`;
    }

    if (y < 0) {
      element.style.transform = `translateX(${x}px) translateY(0px)`;
    }
  };

  const elementWidth = (
    element: HTMLElement,
    fullWidth: boolean,
    align: 'left' | 'right'
  ) => {
    const currentWidth = element.offsetWidth;
    const x = parseFloat(element.getAttribute('data-x') || '0') || 0;

    if (fullWidth) {
      element.style.width = `${width - x}px`;
      moveOnFullWidth(element, align);
    } else {
      return currentWidth;
    }

    return;
  };

  const moveOnFullWidth = (element: HTMLElement, align: 'left' | 'right') => {
    if (align === 'right') {
      const matrix = new DOMMatrixReadOnly(element.style.transform);
      const translateY = matrix.m42;
      element.style.transform = `translateX(0px) translateY(${translateY}px)`;
    }
  };

  useEffect(() => {
    initInteract();
  }, []);

  useLayoutEffect(() => {
    initWidth();
  }, [elements]);

  //initWidth(index, element.fullWidth, element.posX, element.posY)

  return (
    <div className="rounded-md" style={{ height, width }}>
      <div
        style={{ height, width }}
        className="relative bg-dark-500 border-2 border-dark-300 rounded-md overflow-hidden"
      >
        {elements.map((element, index) => (
          <div
            key={index}
            className="draggable absolute z-10 origin-top-right max-w-full"
            ref={(el) => {
              elementsRef.current[index] = el;
            }}
            data-fullwidth={element.fullWidth ? 'true' : 'false'}
            data-align={align}
            data-index={index}
            data-x={element.posX}
            data-y={element.posY}
          >
            {element.element}
          </div>
        ))}
        <Grid />
      </div>
    </div>
  );
}

export default ChatEditor;
