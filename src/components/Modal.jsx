import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
  align-items: center;
`;

const ModalEl = styled.div`
  z-index: 100;
  background-color: rgba(151, 151, 151, 0.3);
  backdrop-filter: blur(2px);
  position: relative;
  margin: auto;
  border-radius: 5px;
  max-width: 500px;
  width: 80%;
  padding: 3rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  border: none;
  background: transparent;
`;

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <Overlay onClick={hide}>
            <Wrapper>
              <ModalEl>
                <Header>
                  <h1>Modal Header</h1>
                  <Button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </Button>
                </Header>
                <div className="modal-body">Hello Modal Here</div>
              </ModalEl>
            </Wrapper>
          </Overlay>
        </>,
        document.body
      )
    : null;

export default Modal;
