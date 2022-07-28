import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalProps,
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface CustomModalProps extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
}

const CustomModal = ({
  isOpen,
  onClose,
  children,
  ...rest
}: CustomModalProps) => {
  return (
    <>
      <Modal {...rest} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
