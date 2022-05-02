import { ConteClose, ConteLogCad } from "./style";

export const Close = ({ click, classe }) => {
  return (
    <>
      {classe ? (
        <ConteLogCad onClick={click}>
          <span>x</span>
        </ConteLogCad>
      ) : (
        <ConteClose onClick={click}>
          <span>x</span>
        </ConteClose>
      )}
    </>
  );
};
