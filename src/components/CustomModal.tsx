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
  title?: string;
  footer?: ReactElement;
  width?: string | number;
  hideBtn?: boolean;
}

const CustomModal = ({
  isOpen,
  onClose,
  children,
  title,
  footer,
  width,
  hideBtn,
  ...rest
}: CustomModalProps) => {
  return (
    <>
      <Modal {...rest} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent sx={{ maxWidth: "fit-content" }}>
          {title && <ModalHeader>{title}</ModalHeader>}
          {!hideBtn && <ModalCloseButton />}
          <ModalBody p={0}>
            {children}
          </ModalBody>
          {!!footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
