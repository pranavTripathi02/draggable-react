import { useState } from "react";
import Nodes from "./components/nodes";
import { TNode } from "./types/node";

function App() {
  const [nodes, setNodes] = useState<TNode>({ id: 1 });
  const handleAddParent = () => {
    setNodes((prev) => {
      return { id: prev.id + 1, childNodes: prev };
    });
  };
  const handleReset = () => {
    setNodes({ id: 1 });
  };
  return (
    <div className="relative h-dvh w-dvw">
      <div className="flex w-full gap-8 px-4 py-4">
        <button
          onClick={handleAddParent}
          className="rounded bg-teal-200 px-4 py-2 text-black"
        >
          Add Parent
        </button>
        <button
          onClick={handleReset}
          className="rounded bg-teal-200 px-4 py-2 text-black"
        >
          Reset
        </button>
      </div>
      <div className="h-full w-full">
        <Nodes nodesList={nodes} />
      </div>
    </div>
  );
}

export default App;
