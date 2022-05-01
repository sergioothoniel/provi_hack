import { ConteClose } from "./style";

export const Close = ({ click }) => {
  return (
    <ConteClose onClick={click}>
      <span>x</span>
    </ConteClose>
  );
};
