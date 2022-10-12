import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { ReactElement } from "react";

const CustomDrawer = ({
  onClose,
  isOpen,
  children,
  title = "Update Action",
}: {
  onClose: any;
  isOpen: boolean;
  title?: string;
  children: ReactElement;
}) => {
  return (
    <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay bg="blackAlpha.300" backdropFilter="blur(3px)" />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
