import { useRef, useState } from "react";
import DraggableModule from "react-draggable";

type TProps = {
  nodeId: number;
  children?: React.ReactNode;
};

function Draggables({ nodeId, children }: TProps) {
  const [isDragging, setIsDragging] = useState(false); // scaling animation
  // keeping track of nodes
  // required in strict mode
  const nodeRef = useRef<HTMLDivElement | null>(null);
  return (
    <DraggableModule
      handle={`.handle-${nodeId}`}
      bounds="parent"
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="absolute flex flex-col rounded border border-black shadow-lg"
        style={{
          width: nodeId * 200,
          height: nodeId * 150,
          scale: isDragging ? ".99" : "1",
          backgroundColor: `rgb(${(100 * nodeId) % 255}, ${(150 * nodeId) % 255}, ${(200 * nodeId) % 255})`,
        }}
      >
        <header
          className={`w-full select-none bg-yellow-500 px-4 py-2 text-black hover:cursor-grab active:cursor-grabbing handle-${nodeId}`}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
        >
          <span className="block text-center">Drag Me (Node {nodeId})</span>
        </header>
        <div className="relative h-full">{children}</div>
      </div>
    </DraggableModule>
  );
}

export default Draggables;
