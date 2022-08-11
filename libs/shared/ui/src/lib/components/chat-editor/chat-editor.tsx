import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import Grid from './grid';

export interface ChatEditorProps {
  height: number;
  width: number;
  elements: { element: React.ReactNode; posX: number; posY: number }[];
  onElementDrag?: (
    index: number,
    posX: number,
    posY: number,
    elementWidth: number,
    elementHeight: number
  ) => void;
}

export function ChatEditor(props: ChatEditorProps) {
  const { height = 200, width = 500, elements, onElementDrag } = props;

  const handleChange = (e: DraggableData, index: number) => {
    onElementDrag &&
      onElementDrag(index, e.x, e.y, e.node.clientWidth, e.node.clientHeight);
  };

  return (
    <div
      style={{ height, width }}
      className="bg-dark-500 border-2 border-dark-300 rounded-md relative overflow-hidden"
    >
      {elements.map((element, index) => (
        <Draggable
          key={index}
          bounds="parent"
          defaultPosition={{ x: element.posX, y: element.posY }}
          onDrag={(e: DraggableEvent, data: DraggableData) =>
            handleChange(data, index)
          }
        >
          <div className="absolute z-10">{element.element}</div>
        </Draggable>
      ))}
      <Grid />
    </div>
  );
}

export default ChatEditor;
