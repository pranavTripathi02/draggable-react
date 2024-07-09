import { TNode } from "../types/node";
import Draggable from "./draggable";

type TProps = {
  nodesList: TNode;
};

// Recursive component
function Nodes({ nodesList }: TProps) {
  return (
    <Draggable nodeId={nodesList.id}>
      {!!nodesList.childNodes && <Nodes nodesList={nodesList.childNodes} />}
    </Draggable>
  );
}

export default Nodes;
