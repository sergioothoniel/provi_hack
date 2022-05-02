import Logos from "../Logo";
import { ConteHeader, ConteHeaderInfo } from "./styles.js";
import Banner from "../../img/newrota_-_banner.jpg";
import Button from "../../components/Button";
import { AiOutlineRight, AiFillCaretDown } from "react-icons/ai";

export const Headers = ({ openMenu, classe, auth }) => {
  return (
    <ConteHeader>
      <img src={Banner} />
      <ConteHeaderInfo>
        {!classe && (
          <>
            {auth && (
              <Button click={openMenu}>
                <AiOutlineRight />
              </Button>
            )}
            <Logos funct="true" />
          </>
        )}
      </ConteHeaderInfo>
    </ConteHeader>
  );
};
