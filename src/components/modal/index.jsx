import React, { useRef, useEffect, useCallback } from "react";
import { Background, CloseModalButton, ModalContent, ModalImg, ModalWrapper, EletricSpan } from "./style"
import Button from "../Button"

export const Modal = ({ showModal, setShowModal, src }) => {
    const modalRef = useRef();
  
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    return (
      <>
        {showModal ? (
            <Background onClick={closeModal} ref={modalRef}>
                <ModalWrapper showModal={showModal}>
                        <ModalImg src={src} alt = "car"/>
                        <EletricSpan>Eletric</EletricSpan>
                    <ModalContent>
                        <h3>Proprietário</h3>
                        <p>Nome: Pedro Y</p>
                        <p>Endereço: Marquês de Abrantes, 23 - Flamengo - Rio de Janeiro, RJ</p>

                        <h3>Carro</h3>
                        <p>Modelo: Voyage</p>
                        <p>Combustível: Eletrico</p>
                        <p>Ar-condiciondo: Sim</p>
                        <p>Quatro portas: Sim</p>
                        <p>Valor diaria: R$120,00</p>

                        <Button> Alugar </Button>
                    </ModalContent>
                    <CloseModalButton
                        aria-label='Close modal'
                        onClick={() => setShowModal(!showModal)}
                    />
                </ModalWrapper>
          </Background>
        ) : null}
      </>
    );
  };