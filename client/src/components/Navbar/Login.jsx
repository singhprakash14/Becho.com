import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import DummyLogin from "../../pages/SigninPages/DummyLogin";

export const LoginPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>LOGIN</Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody>
            <Outlet />

            {/* <DummyLogin/> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
