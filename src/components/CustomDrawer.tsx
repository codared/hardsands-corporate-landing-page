import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ReactElement } from "react";

const CustomDrawer = ({
  onClose,
  isOpen,
  children,
  title = "Update Action",
  contentHeight = "unset",
  placement = "bottom",
  size = "sm",
}: {
  onClose: any;
  isOpen: boolean;
  title?: string;
  size?: string;
  placement?: "bottom" | "right";
  children: ReactElement;
  contentHeight?: string | number;
}) => {
  return (
    <Drawer size={size} placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay bg="blackAlpha.300" backdropFilter="blur(3px)" />
      <DrawerContent h={contentHeight}>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
