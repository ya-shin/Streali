import { useRef } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import Grid from './grid';

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

  const handleChange = (
    e: DraggableData,
    index: number,
    fullWidth: boolean
  ) => {
    onElementDrag &&
      onElementDrag(index, e.x, e.y, e.node.clientWidth, e.node.clientHeight);

    const element = elementsRef.current[index];
    if (element) {
      element.style.width = elementWidth(index, fullWidth, e.x) + 'px';
    }
  };

  const elementWidth = (index: number, fullWidth: boolean, x: number) => {
    const currentWidth = elementsRef.current[index]?.offsetWidth || 0;

    if (fullWidth) {
      if (align === 'right') {
        return x + currentWidth;
      } else {
        return width - x;
      }
    } else {
      return currentWidth;
    }
  };

  const handleStop = (index: number, e: DraggableData) => {
    const element = elementsRef.current[index];
    if (element) {
      const matrix = new DOMMatrixReadOnly(element.style.transform);
      const translateX = matrix.m41;
      const translateY = matrix.m42;

      if (e.x > width) {
        element.style.transform = `translate(${
          width - e.node.clientWidth
        }px, ${translateY}px)`;
      }

      if (e.x < 0) {
        element.style.transform = `translate(0px, ${translateY}px)`;
      }
    }
  };

  const getRightBound = (index: number) => {
    const element = elementsRef.current[index];
    if (element) {
      return element.offsetWidth;
    } else {
      return width;
    }
  };

  return (
    <div className="rounded-md" style={{ height, width }}>
      <div style={{ height, width }} className="relative bg-blue-500">
        {elements.map((element, index) => (
          <Draggable
            key={index}
            bounds={
              align === 'left'
                ? { left: 0, top: 0, bottom: height - 20, right: width - 20 }
                : {
                    top: 0,
                    bottom: height - 20,
                    left: 0,
                    right: getRightBound(index),
                  }
            }
            defaultPosition={{ x: element.posX, y: element.posY }}
            onDrag={(e: DraggableEvent, data: DraggableData) =>
              handleChange(data, index, element.fullWidth)
            }
            // onStop={(e: DraggableEvent, data: DraggableData) =>
            //   handleStop(index, data)
            // }
          >
            <div
              className="absolute z-10 origin-top-right max-w-full"
              style={{
                width: element.fullWidth
                  ? elementWidth(index, element.fullWidth, element.posX) + 'px'
                  : 'auto',
              }}
              ref={(el) => {
                elementsRef.current[index] = el;
              }}
            >
              {element.element}
            </div>
          </Draggable>
        ))}
        <Grid />
      </div>
    </div>
  );
}

export default ChatEditor;
