import styled from "styled-components"
import { MdClose } from "react-icons/md"

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
`;

export const ModalWrapper = styled.div`
  width: 300px;
  height: 90%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #202e38;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 35%;
  border-radius: 10px 10px 0 0;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.8;
  color: #cbcbcb;
  padding: 8px;

  p {
    margin-bottom: 0rem;
  }

  button {
    margin-top: 15px;
  }
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    color: #fff;
`;

export const EletricSpan= styled.span` 
  position: fixed;
  right: 230px;
  top: 50px;
  width: 70px;
  display: block;
  height: 25px;
  background: #59a5e9;
  color: #fff;
  text-align: center;
  border-radius: 15px;
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
`
